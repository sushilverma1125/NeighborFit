export interface UserPreferences {
  demographics: {
    ageRange: string;
    householdSize: number;
    hasChildren: boolean;
    pets: boolean;
  };
  lifestyle: {
    workLocation: string;
    commuteTolerance: number; // minutes
    activityLevel: string;
    socialPreference: string;
    noiseLevel: string;
  };
  housing: {
    type: string;
    budget: number;
    size: string;
    parking: boolean;
  };
  priorities: {
    safety: number;
    schools: number;
    nightlife: number;
    nature: number;
    shopping: number;
    restaurants: number;
    publicTransit: number;
    walkability: number;
  };
  location: {
    city: string;
    state: string;
  };
}

export interface NeighborhoodData {
  id: string;
  name: string;
  city: string;
  state: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  demographics: {
    population: number;
    medianAge: number;
    familyFriendly: number;
    diversity: number;
  };
  housing: {
    medianPrice: number;
    rentalAvailability: number;
    housingTypes: string[];
  };
  amenities: {
    walkScore: number;
    transitScore: number;
    bikeScore: number;
    restaurants: number;
    shopping: number;
    parks: number;
    nightlife: number;
    schools: number;
  };
  safety: {
    crimeRate: number;
    safetyScore: number;
  };
  lifestyle: {
    noiseLevel: number;
    activityLevel: number;
    socialScene: number;
  };
}

export interface MatchResult {
  neighborhood: NeighborhoodData;
  score: number;
  matchDetails: {
    category: string;
    score: number;
    weight: number;
    explanation: string;
  }[];
}