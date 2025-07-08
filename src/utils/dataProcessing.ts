import { NeighborhoodData } from '../types/preferences';

// Data validation utilities
export const validateNeighborhoodData = (data: NeighborhoodData): boolean => {
  const requiredFields = [
    'id', 'name', 'city', 'state', 'coordinates',
    'demographics', 'housing', 'amenities', 'safety', 'lifestyle'
  ];

  return requiredFields.every(field => field in data);
};

// Data normalization utilities
export const normalizeDataRange = (value: number, min: number, max: number): number => {
  return Math.max(0, Math.min(10, ((value - min) / (max - min)) * 10));
};

// Fill missing values with defaults
export const fillMissingValues = (data: NeighborhoodData): NeighborhoodData => {
  const defaults = {
    demographics: {
      population: 30000,
      medianAge: 35,
      familyFriendly: 5,
      diversity: 5
    },
    housing: {
      medianPrice: 500000,
      rentalAvailability: 6,
      housingTypes: ['apartment', 'condo']
    },
    amenities: {
      walkScore: 60,
      transitScore: 50,
      bikeScore: 50,
      restaurants: 5,
      shopping: 5,
      parks: 5,
      nightlife: 5,
      schools: 5
    },
    safety: {
      crimeRate: 4.0,
      safetyScore: 6
    },
    lifestyle: {
      noiseLevel: 5,
      activityLevel: 5,
      socialScene: 5
    }
  };

  return {
    ...data,
    demographics: { ...defaults.demographics, ...data.demographics },
    housing: { ...defaults.housing, ...data.housing },
    amenities: { ...defaults.amenities, ...data.amenities },
    safety: { ...defaults.safety, ...data.safety },
    lifestyle: { ...defaults.lifestyle, ...data.lifestyle }
  };
};

// Data quality scoring
export const calculateDataQuality = (data: NeighborhoodData): number => {
  let score = 0;
  let maxScore = 0;

  // Check completeness
  const fields = [
    data.demographics.population,
    data.demographics.medianAge,
    data.housing.medianPrice,
    data.amenities.walkScore,
    data.safety.safetyScore
  ];

  fields.forEach(field => {
    maxScore += 1;
    if (field !== undefined && field !== null && field > 0) {
      score += 1;
    }
  });

  // Check data ranges
  const rangeChecks = [
    { value: data.demographics.medianAge, min: 18, max: 80 },
    { value: data.amenities.walkScore, min: 0, max: 100 },
    { value: data.safety.safetyScore, min: 0, max: 10 }
  ];

  rangeChecks.forEach(check => {
    maxScore += 1;
    if (check.value >= check.min && check.value <= check.max) {
      score += 1;
    }
  });

  return maxScore > 0 ? (score / maxScore) * 100 : 0;
};

// Data processing pipeline
export const processNeighborhoodData = (rawData: NeighborhoodData[]): NeighborhoodData[] => {
  return rawData
    .filter(validateNeighborhoodData)
    .map(fillMissingValues)
    .filter(data => calculateDataQuality(data) >= 70); // Minimum quality threshold
};

// Statistical analysis helpers
export const calculateStatistics = (data: NeighborhoodData[]) => {
  const stats = {
    totalNeighborhoods: data.length,
    avgWalkScore: 0,
    avgSafetyScore: 0,
    avgMedianPrice: 0,
    priceRange: { min: 0, max: 0 },
    mostCommonHousingTypes: [] as string[],
    cityDistribution: {} as Record<string, number>
  };

  if (data.length === 0) return stats;

  // Calculate averages
  stats.avgWalkScore = data.reduce((sum, n) => sum + n.amenities.walkScore, 0) / data.length;
  stats.avgSafetyScore = data.reduce((sum, n) => sum + n.safety.safetyScore, 0) / data.length;
  stats.avgMedianPrice = data.reduce((sum, n) => sum + n.housing.medianPrice, 0) / data.length;

  // Calculate price range
  const prices = data.map(n => n.housing.medianPrice);
  stats.priceRange = {
    min: Math.min(...prices),
    max: Math.max(...prices)
  };

  // Count housing types
  const housingTypes: Record<string, number> = {};
  data.forEach(n => {
    n.housing.housingTypes.forEach(type => {
      housingTypes[type] = (housingTypes[type] || 0) + 1;
    });
  });
  stats.mostCommonHousingTypes = Object.entries(housingTypes)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5)
    .map(([type]) => type);

  // City distribution
  data.forEach(n => {
    const city = n.city;
    stats.cityDistribution[city] = (stats.cityDistribution[city] || 0) + 1;
  });

  return stats;
};

// Data export utilities
export const exportNeighborhoodData = (data: NeighborhoodData[], format: 'json' | 'csv'): string => {
  if (format === 'json') {
    return JSON.stringify(data, null, 2);
  }

  if (format === 'csv') {
    const headers = [
      'id', 'name', 'city', 'state', 'population', 'medianAge', 'medianPrice',
      'walkScore', 'safetyScore', 'restaurants', 'nightlife', 'schools'
    ];

    const rows = data.map(n => [
      n.id,
      n.name,
      n.city,
      n.state,
      n.demographics.population,
      n.demographics.medianAge,
      n.housing.medianPrice,
      n.amenities.walkScore,
      n.safety.safetyScore,
      n.amenities.restaurants,
      n.amenities.nightlife,
      n.amenities.schools
    ]);

    return [headers, ...rows].map(row => row.join(',')).join('\n');
  }

  return '';
};