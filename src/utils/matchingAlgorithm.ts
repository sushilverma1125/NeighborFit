import { UserPreferences, NeighborhoodData, MatchResult } from '../types/preferences';

// Normalize value to 0-10 scale
const normalize = (value: number, min: number, max: number): number => {
  return Math.max(0, Math.min(10, ((value - min) / (max - min)) * 10));
};

// Calculate weighted score for a specific category
const calculateCategoryScore = (
  neighborhood: NeighborhoodData,
  preferences: UserPreferences,
  category: string
): { score: number; explanation: string } => {
  switch (category) {
    case 'Safety':
      const safetyScore = neighborhood.safety.safetyScore;
      return {
        score: normalize(safetyScore, 0, 10) * 10,
        explanation: `Safety score of ${safetyScore}/10 with crime rate ${neighborhood.safety.crimeRate} per 1000 residents`
      };

    case 'Schools':
      const schoolsScore = neighborhood.amenities.schools;
      return {
        score: normalize(schoolsScore, 0, 10) * 10,
        explanation: `School quality rating of ${schoolsScore}/10 based on academic performance and resources`
      };

    case 'Nightlife':
      const nightlifeScore = neighborhood.amenities.nightlife;
      return {
        score: normalize(nightlifeScore, 0, 10) * 10,
        explanation: `Nightlife score of ${nightlifeScore}/10 with variety of bars, clubs, and entertainment`
      };

    case 'Nature':
      const natureScore = neighborhood.amenities.parks;
      return {
        score: normalize(natureScore, 0, 10) * 10,
        explanation: `Parks and nature access score of ${natureScore}/10 with green spaces and recreation`
      };

    case 'Shopping':
      const shoppingScore = neighborhood.amenities.shopping;
      return {
        score: normalize(shoppingScore, 0, 10) * 10,
        explanation: `Shopping convenience score of ${shoppingScore}/10 with retail and commercial options`
      };

    case 'Restaurants':
      const restaurantsScore = neighborhood.amenities.restaurants;
      return {
        score: normalize(restaurantsScore, 0, 10) * 10,
        explanation: `Dining options score of ${restaurantsScore}/10 with variety and quality of restaurants`
      };

    case 'Public Transit':
      const transitScore = neighborhood.amenities.transitScore;
      return {
        score: normalize(transitScore, 0, 100) * 10,
        explanation: `Public transit score of ${transitScore}/100 with accessibility to buses, trains, and metro`
      };

    case 'Walkability':
      const walkScore = neighborhood.amenities.walkScore;
      return {
        score: normalize(walkScore, 0, 100) * 10,
        explanation: `Walk Score of ${walkScore}/100 indicating walkability to daily errands and amenities`
      };

    case 'Housing':
      const budgetMatch = preferences.housing.budget >= neighborhood.housing.medianPrice ? 10 : 
                          preferences.housing.budget >= neighborhood.housing.medianPrice * 0.8 ? 7 : 
                          preferences.housing.budget >= neighborhood.housing.medianPrice * 0.6 ? 4 : 1;
      const typeMatch = neighborhood.housing.housingTypes.includes(preferences.housing.type) ? 10 : 5;
      const housingScore = (budgetMatch + typeMatch) / 2;
      return {
        score: housingScore,
        explanation: `Housing compatibility based on budget ($${preferences.housing.budget.toLocaleString()} vs median $${neighborhood.housing.medianPrice.toLocaleString()}) and type preferences`
      };

    case 'Commute':
      // Simplified commute calculation - in real app would use actual distance/time APIs
      const commuteScore = preferences.lifestyle.commuteTolerance >= 30 ? 8 : 
                          preferences.lifestyle.commuteTolerance >= 20 ? 6 : 4;
      return {
        score: commuteScore,
        explanation: `Estimated commute compatibility based on your ${preferences.lifestyle.commuteTolerance} minute tolerance`
      };

    default:
      return { score: 5, explanation: 'No specific criteria defined' };
  }
};

// Calculate demographic compatibility
const calculateDemographicMatch = (
  neighborhood: NeighborhoodData,
  preferences: UserPreferences
): number => {
  let score = 0;
  let factors = 0;

  // Age compatibility
  const ageRanges = {
    '18-25': 22,
    '26-35': 30,
    '36-45': 40,
    '46-55': 50,
    '56-65': 60,
    '65+': 70
  };

  const userAge = ageRanges[preferences.demographics.ageRange as keyof typeof ageRanges] || 35;
  const ageDifference = Math.abs(userAge - neighborhood.demographics.medianAge);
  const ageScore = Math.max(0, 10 - (ageDifference / 5));
  score += ageScore;
  factors++;

  // Family friendliness
  if (preferences.demographics.hasChildren) {
    score += neighborhood.demographics.familyFriendly;
    factors++;
  }

  // Diversity preference (implicit based on user demographics)
  score += neighborhood.demographics.diversity * 0.5;
  factors++;

  return factors > 0 ? score / factors : 5;
};

// Calculate lifestyle compatibility
const calculateLifestyleMatch = (
  neighborhood: NeighborhoodData,
  preferences: UserPreferences
): number => {
  let score = 0;
  let factors = 0;

  // Activity level match
  const activityLevels = { 'low': 3, 'moderate': 6, 'high': 9 };
  const userActivity = activityLevels[preferences.lifestyle.activityLevel as keyof typeof activityLevels] || 6;
  const activityDiff = Math.abs(userActivity - neighborhood.lifestyle.activityLevel);
  const activityScore = Math.max(0, 10 - activityDiff);
  score += activityScore;
  factors++;

  // Social preference match
  const socialLevels = { 'quiet': 3, 'moderate': 6, 'social': 9 };
  const userSocial = socialLevels[preferences.lifestyle.socialPreference as keyof typeof socialLevels] || 6;
  const socialDiff = Math.abs(userSocial - neighborhood.lifestyle.socialScene);
  const socialScore = Math.max(0, 10 - socialDiff);
  score += socialScore;
  factors++;

  // Noise tolerance match
  const noiseLevels = { 'low': 3, 'moderate': 6, 'high': 9 };
  const userNoise = noiseLevels[preferences.lifestyle.noiseLevel as keyof typeof noiseLevels] || 6;
  const noiseDiff = Math.abs(userNoise - neighborhood.lifestyle.noiseLevel);
  const noiseScore = Math.max(0, 10 - noiseDiff);
  score += noiseScore;
  factors++;

  return factors > 0 ? score / factors : 5;
};

// Main matching algorithm
export const matchingAlgorithm = (
  preferences: UserPreferences,
  neighborhoods: NeighborhoodData[]
): MatchResult[] => {
  const results: MatchResult[] = [];

  // Filter by location if specified
  const filteredNeighborhoods = neighborhoods.filter(n => {
    if (preferences.location.city && preferences.location.state) {
      return n.city.toLowerCase().includes(preferences.location.city.toLowerCase()) ||
             n.state.toLowerCase().includes(preferences.location.state.toLowerCase());
    }
    return true;
  });

  for (const neighborhood of filteredNeighborhoods) {
    const matchDetails = [];
    let totalScore = 0;
    let totalWeight = 0;

    // Calculate scores for each priority category
    const categories = [
      { key: 'safety', name: 'Safety', weight: preferences.priorities.safety },
      { key: 'schools', name: 'Schools', weight: preferences.priorities.schools },
      { key: 'nightlife', name: 'Nightlife', weight: preferences.priorities.nightlife },
      { key: 'nature', name: 'Nature', weight: preferences.priorities.nature },
      { key: 'shopping', name: 'Shopping', weight: preferences.priorities.shopping },
      { key: 'restaurants', name: 'Restaurants', weight: preferences.priorities.restaurants },
      { key: 'publicTransit', name: 'Public Transit', weight: preferences.priorities.publicTransit },
      { key: 'walkability', name: 'Walkability', weight: preferences.priorities.walkability }
    ];

    // Calculate weighted scores for each category
    categories.forEach(category => {
      const { score, explanation } = calculateCategoryScore(neighborhood, preferences, category.name);
      const weightedScore = score * category.weight;
      
      matchDetails.push({
        category: category.name,
        score: score,
        weight: category.weight,
        explanation: explanation
      });

      totalScore += weightedScore;
      totalWeight += category.weight;
    });

    // Add housing compatibility
    const housingMatch = calculateCategoryScore(neighborhood, preferences, 'Housing');
    matchDetails.push({
      category: 'Housing',
      score: housingMatch.score,
      weight: 4, // Fixed weight for housing
      explanation: housingMatch.explanation
    });
    totalScore += housingMatch.score * 4;
    totalWeight += 4;

    // Add commute compatibility
    const commuteMatch = calculateCategoryScore(neighborhood, preferences, 'Commute');
    matchDetails.push({
      category: 'Commute',
      score: commuteMatch.score,
      weight: 3, // Fixed weight for commute
      explanation: commuteMatch.explanation
    });
    totalScore += commuteMatch.score * 3;
    totalWeight += 3;

    // Add demographic and lifestyle bonuses
    const demographicScore = calculateDemographicMatch(neighborhood, preferences);
    const lifestyleScore = calculateLifestyleMatch(neighborhood, preferences);
    
    // Apply bonuses (up to 10% boost each)
    const demographicBonus = (demographicScore / 10) * 0.1;
    const lifestyleBonus = (lifestyleScore / 10) * 0.1;

    // Calculate final score
    const baseScore = totalWeight > 0 ? (totalScore / totalWeight) : 0;
    const finalScore = Math.min(100, baseScore * (1 + demographicBonus + lifestyleBonus));

    results.push({
      neighborhood,
      score: finalScore,
      matchDetails: matchDetails.sort((a, b) => b.score - a.score)
    });
  }

  // Sort by match score (descending) and return top matches
  return results
    .sort((a, b) => b.score - a.score)
    .slice(0, 10); // Return top 10 matches
};