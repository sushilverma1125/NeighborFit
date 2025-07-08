import { NeighborhoodData } from '../types/preferences';

export const neighborhoods: NeighborhoodData[] = [
  {
    id: 'koramangala-bangalore',
    name: 'Koramangala',
    city: 'Bangalore',
    state: 'Karnataka',
    coordinates: { lat: 12.9279, lng: 77.6271 },
    demographics: {
      population: 150000,
      medianAge: 28,
      familyFriendly: 7,
      diversity: 9
    },
    housing: {
      medianPrice: 12000000,
      rentalAvailability: 9,
      housingTypes: ['apartment', 'villa', 'pg']
    },
    amenities: {
      walkScore: 85,
      transitScore: 80,
      bikeScore: 70,
      restaurants: 9,
      shopping: 9,
      parks: 6,
      nightlife: 8,
      schools: 8
    },
    safety: {
      crimeRate: 2.8,
      safetyScore: 8
    },
    lifestyle: {
      noiseLevel: 7,
      activityLevel: 8,
      socialScene: 9
    }
  },
  {
    id: 'bandra-mumbai',
    name: 'Bandra West',
    city: 'Mumbai',
    state: 'Maharashtra',
    coordinates: { lat: 19.0596, lng: 72.8295 },
    demographics: {
      population: 200000,
      medianAge: 32,
      familyFriendly: 6,
      diversity: 8
    },
    housing: {
      medianPrice: 25000000,
      rentalAvailability: 7,
      housingTypes: ['apartment', 'studio', 'penthouse']
    },
    amenities: {
      walkScore: 88,
      transitScore: 85,
      bikeScore: 65,
      restaurants: 9,
      shopping: 9,
      parks: 7,
      nightlife: 9,
      schools: 8
    },
    safety: {
      crimeRate: 3.2,
      safetyScore: 7
    },
    lifestyle: {
      noiseLevel: 8,
      activityLevel: 9,
      socialScene: 9
    }
  },
  {
    id: 'cp-delhi',
    name: 'Connaught Place',
    city: 'New Delhi',
    state: 'Delhi',
    coordinates: { lat: 28.6315, lng: 77.2167 },
    demographics: {
      population: 80000,
      medianAge: 30,
      familyFriendly: 5,
      diversity: 8
    },
    housing: {
      medianPrice: 20000000,
      rentalAvailability: 6,
      housingTypes: ['apartment', 'studio', 'service-apartment']
    },
    amenities: {
      walkScore: 90,
      transitScore: 95,
      bikeScore: 60,
      restaurants: 9,
      shopping: 10,
      parks: 6,
      nightlife: 8,
      schools: 7
    },
    safety: {
      crimeRate: 4.1,
      safetyScore: 6
    },
    lifestyle: {
      noiseLevel: 9,
      activityLevel: 9,
      socialScene: 8
    }
  },
  {
    id: 'hitech-city-hyderabad',
    name: 'HITEC City',
    city: 'Hyderabad',
    state: 'Telangana',
    coordinates: { lat: 17.4435, lng: 78.3772 },
    demographics: {
      population: 120000,
      medianAge: 29,
      familyFriendly: 7,
      diversity: 8
    },
    housing: {
      medianPrice: 8500000,
      rentalAvailability: 9,
      housingTypes: ['apartment', 'villa', 'gated-community']
    },
    amenities: {
      walkScore: 75,
      transitScore: 70,
      bikeScore: 68,
      restaurants: 8,
      shopping: 8,
      parks: 7,
      nightlife: 7,
      schools: 8
    },
    safety: {
      crimeRate: 2.5,
      safetyScore: 8
    },
    lifestyle: {
      noiseLevel: 6,
      activityLevel: 8,
      socialScene: 7
    }
  },
  {
    id: 'anna-nagar-chennai',
    name: 'Anna Nagar',
    city: 'Chennai',
    state: 'Tamil Nadu',
    coordinates: { lat: 13.0850, lng: 80.2101 },
    demographics: {
      population: 180000,
      medianAge: 35,
      familyFriendly: 9,
      diversity: 6
    },
    housing: {
      medianPrice: 11000000,
      rentalAvailability: 8,
      housingTypes: ['apartment', 'independent-house', 'villa']
    },
    amenities: {
      walkScore: 80,
      transitScore: 75,
      bikeScore: 70,
      restaurants: 8,
      shopping: 8,
      parks: 8,
      nightlife: 6,
      schools: 9
    },
    safety: {
      crimeRate: 2.2,
      safetyScore: 9
    },
    lifestyle: {
      noiseLevel: 6,
      activityLevel: 7,
      socialScene: 6
    }
  },
  {
    id: 'salt-lake-kolkata',
    name: 'Salt Lake City',
    city: 'Kolkata',
    state: 'West Bengal',
    coordinates: { lat: 22.5958, lng: 88.4497 },
    demographics: {
      population: 220000,
      medianAge: 38,
      familyFriendly: 8,
      diversity: 7
    },
    housing: {
      medianPrice: 7500000,
      rentalAvailability: 7,
      housingTypes: ['apartment', 'flat', 'duplex']
    },
    amenities: {
      walkScore: 78,
      transitScore: 82,
      bikeScore: 65,
      restaurants: 7,
      shopping: 7,
      parks: 8,
      nightlife: 5,
      schools: 8
    },
    safety: {
      crimeRate: 2.8,
      safetyScore: 8
    },
    lifestyle: {
      noiseLevel: 6,
      activityLevel: 6,
      socialScene: 6
    }
  },
  {
    id: 'kharadi-pune',
    name: 'Kharadi',
    city: 'Pune',
    state: 'Maharashtra',
    coordinates: { lat: 18.5547, lng: 73.9345 },
    demographics: {
      population: 90000,
      medianAge: 29,
      familyFriendly: 7,
      diversity: 7
    },
    housing: {
      medianPrice: 7500000,
      rentalAvailability: 9,
      housingTypes: ['apartment', 'villa', 'townhouse']
    },
    amenities: {
      walkScore: 72,
      transitScore: 70,
      bikeScore: 75,
      restaurants: 7,
      shopping: 7,
      parks: 6,
      nightlife: 6,
      schools: 7
    },
    safety: {
      crimeRate: 3.0,
      safetyScore: 7
    },
    lifestyle: {
      noiseLevel: 6,
      activityLevel: 7,
      socialScene: 7
    }
  },
  {
    id: 'navrangpura-ahmedabad',
    name: 'Navrangpura',
    city: 'Ahmedabad',
    state: 'Gujarat',
    coordinates: { lat: 23.0395, lng: 72.5562 },
    demographics: {
      population: 110000,
      medianAge: 33,
      familyFriendly: 8,
      diversity: 6
    },
    housing: {
      medianPrice: 6000000,
      rentalAvailability: 8,
      housingTypes: ['apartment', 'bungalow', 'row-house']
    },
    amenities: {
      walkScore: 82,
      transitScore: 75,
      bikeScore: 80,
      restaurants: 8,
      shopping: 8,
      parks: 7,
      nightlife: 6,
      schools: 8
    },
    safety: {
      crimeRate: 2.1,
      safetyScore: 9
    },
    lifestyle: {
      noiseLevel: 6,
      activityLevel: 7,
      socialScene: 7
    }
  },
  {
    id: 'vashi-navi-mumbai',
    name: 'Vashi',
    city: 'Navi Mumbai',
    state: 'Maharashtra',
    coordinates: { lat: 19.0768, lng: 73.0004 },
    demographics: {
      population: 140000,
      medianAge: 31,
      familyFriendly: 8,
      diversity: 7
    },
    housing: {
      medianPrice: 9500000,
      rentalAvailability: 8,
      housingTypes: ['apartment', 'flat', 'duplex']
    },
    amenities: {
      walkScore: 76,
      transitScore: 85,
      bikeScore: 70,
      restaurants: 7,
      shopping: 8,
      parks: 7,
      nightlife: 6,
      schools: 8
    },
    safety: {
      crimeRate: 2.6,
      safetyScore: 8
    },
    lifestyle: {
      noiseLevel: 6,
      activityLevel: 7,
      socialScene: 6
    }
  },
  {
    id: 'panampilly-kochi',
    name: 'Panampilly Nagar',
    city: 'Kochi',
    state: 'Kerala',
    coordinates: { lat: 9.9647, lng: 76.2839 },
    demographics: {
      population: 60000,
      medianAge: 34,
      familyFriendly: 8,
      diversity: 7
    },
    housing: {
      medianPrice: 8000000,
      rentalAvailability: 7,
      housingTypes: ['apartment', 'villa', 'flat']
    },
    amenities: {
      walkScore: 78,
      transitScore: 65,
      bikeScore: 72,
      restaurants: 7,
      shopping: 7,
      parks: 8,
      nightlife: 5,
      schools: 8
    },
    safety: {
      crimeRate: 1.8,
      safetyScore: 9
    },
    lifestyle: {
      noiseLevel: 5,
      activityLevel: 6,
      socialScene: 6
    }
  },
  {
    id: 'gomti-nagar-lucknow',
    name: 'Gomti Nagar',
    city: 'Lucknow',
    state: 'Uttar Pradesh',
    coordinates: { lat: 26.8467, lng: 81.0082 },
    demographics: {
      population: 200000,
      medianAge: 32,
      familyFriendly: 8,
      diversity: 6
    },
    housing: {
      medianPrice: 5500000,
      rentalAvailability: 8,
      housingTypes: ['apartment', 'villa', 'independent-house']
    },
    amenities: {
      walkScore: 74,
      transitScore: 68,
      bikeScore: 70,
      restaurants: 7,
      shopping: 7,
      parks: 8,
      nightlife: 5,
      schools: 8
    },
    safety: {
      crimeRate: 2.9,
      safetyScore: 7
    },
    lifestyle: {
      noiseLevel: 6,
      activityLevel: 6,
      socialScene: 6
    }
  },
  {
    id: 'rajouri-garden-delhi',
    name: 'Rajouri Garden',
    city: 'New Delhi',
    state: 'Delhi',
    coordinates: { lat: 28.6474, lng: 77.0993 },
    demographics: {
      population: 90000,
      medianAge: 35,
      familyFriendly: 7,
      diversity: 6
    },
    housing: {
      medianPrice: 18000000,
      rentalAvailability: 7,
      housingTypes: ['apartment', 'duplex', 'studio']
    },
    amenities: {
      walkScore: 80,
      transitScore: 78,
      bikeScore: 60,
      restaurants: 8,
      shopping: 8,
      parks: 7,
      nightlife: 6,
      schools: 8
    },
    safety: {
      crimeRate: 2.7,
      safetyScore: 8
    },
    lifestyle: {
      noiseLevel: 6,
      activityLevel: 7,
      socialScene: 7
    }
  },
  {
    id: 'whitefield-bangalore',
    name: 'Whitefield',
    city: 'Bangalore',
    state: 'Karnataka',
    coordinates: { lat: 12.9690, lng: 77.7495 },
    demographics: {
      population: 200000,
      medianAge: 32,
      familyFriendly: 7,
      diversity: 8
    },
    housing: {
      medianPrice: 9000000,
      rentalAvailability: 9,
      housingTypes: ['apartment', 'villa', 'gated-community']
    },
    amenities: {
      walkScore: 70,
      transitScore: 72,
      bikeScore: 65,
      restaurants: 7,
      shopping: 8,
      parks: 6,
      nightlife: 6,
      schools: 8
    },
    safety: {
      crimeRate: 3.2,
      safetyScore: 7
    },
    lifestyle: {
      noiseLevel: 6,
      activityLevel: 8,
      socialScene: 7
    }
  },
  {
    id: 'khar-mumbai',
    name: 'Khar',
    city: 'Mumbai',
    state: 'Maharashtra',
    coordinates: { lat: 19.0510, lng: 72.8400 },
    demographics: {
      population: 80000,
      medianAge: 31,
      familyFriendly: 6,
      diversity: 8
    },
    housing: {
      medianPrice: 22000000,
      rentalAvailability: 8,
      housingTypes: ['apartment', 'sea-view-flat']
    },
    amenities: {
      walkScore: 82,
      transitScore: 80,
      bikeScore: 60,
      restaurants: 9,
      shopping: 8,
      parks: 7,
      nightlife: 8,
      schools: 7
    },
    safety: {
      crimeRate: 3.4,
      safetyScore: 7
    },
    lifestyle: {
      noiseLevel: 7,
      activityLevel: 8,
      socialScene: 8
    }
  },
  {
    id: 'banjara-hills-hyderabad',
    name: 'Banjara Hills',
    city: 'Hyderabad',
    state: 'Telangana',
    coordinates: { lat: 17.4120, lng: 78.4732 },
    demographics: {
      population: 90000,
      medianAge: 33,
      familyFriendly: 8,
      diversity: 7
    },
    housing: {
      medianPrice: 14000000,
      rentalAvailability: 7,
      housingTypes: ['villa', 'apartment', 'bungalow']
    },
    amenities: {
      walkScore: 78,
      transitScore: 70,
      bikeScore: 66,
      restaurants: 8,
      shopping: 9,
      parks: 7,
      nightlife: 7,
      schools: 8
    },
    safety: {
      crimeRate: 2.9,
      safetyScore: 8
    },
    lifestyle: {
      noiseLevel: 6,
      activityLevel: 7,
      socialScene: 7
    }
  },
  {
    id: 'velachery-chennai',
    name: 'Velachery',
    city: 'Chennai',
    state: 'Tamil Nadu',
    coordinates: { lat: 12.9916, lng: 80.2182 },
    demographics: {
      population: 120000,
      medianAge: 34,
      familyFriendly: 7,
      diversity: 6
    },
    housing: {
      medianPrice: 11000000,
      rentalAvailability: 8,
      housingTypes: ['apartment', 'independent-house']
    },
    amenities: {
      walkScore: 77,
      transitScore: 74,
      bikeScore: 63,
      restaurants: 7,
      shopping: 7,
      parks: 6,
      nightlife: 6,
      schools: 8
    },
    safety: {
      crimeRate: 2.6,
      safetyScore: 8
    },
    lifestyle: {
      noiseLevel: 6,
      activityLevel: 7,
      socialScene: 6
    }
  },
  {
    id: 'bidhannagar-kolkata',
    name: 'Bidhannagar',
    city: 'Kolkata',
    state: 'West Bengal',
    coordinates: { lat: 22.5710, lng: 88.4354 },
    demographics: {
      population: 150000,
      medianAge: 36,
      familyFriendly: 9,
      diversity: 7
    },
    housing: {
      medianPrice: 10000000,
      rentalAvailability: 6,
      housingTypes: ['apartment', 'bungalow', 'studio']
    },
    amenities: {
      walkScore: 80,
      transitScore: 83,
      bikeScore: 62,
      restaurants: 8,
      shopping: 8,
      parks: 8,
      nightlife: 6,
      schools: 9
    },
    safety: {
      crimeRate: 2.3,
      safetyScore: 8
    },
    lifestyle: {
      noiseLevel: 5,
      activityLevel: 7,
      socialScene: 6
    }
  },
  {
    id: 'manikonda-hyderabad',
    name: 'Manikonda',
    city: 'Hyderabad',
    state: 'Telangana',
    coordinates: { lat: 17.4149, lng: 78.3854 },
    demographics: {
      population: 80000,
      medianAge: 32,
      familyFriendly: 7,
      diversity: 7
    },
    housing: {
      medianPrice: 9000000,
      rentalAvailability: 8,
      housingTypes: ['apartment', 'villa', 'independent-house']
    },
    amenities: {
      walkScore: 75,
      transitScore: 67,
      bikeScore: 65,
      restaurants: 7,
      shopping: 7,
      parks: 7,
      nightlife: 6,
      schools: 8
    },
    safety: {
      crimeRate: 3.1,
      safetyScore: 7
    },
    lifestyle: {
      noiseLevel: 6,
      activityLevel: 7,
      socialScene: 6
    }
  },
  {
    id: 'adajan-surat',
    name: 'Adajan',
    city: 'Surat',
    state: 'Gujarat',
    coordinates: { lat: 21.1605, lng: 72.7936 },
    demographics: {
      population: 100000,
      medianAge: 34,
      familyFriendly: 8,
      diversity: 6
    },
    housing: {
      medianPrice: 6500000,
      rentalAvailability: 8,
      housingTypes: ['apartment', 'bungalow', 'row-house']
    },
    amenities: {
      walkScore: 76,
      transitScore: 68,
      bikeScore: 78,
      restaurants: 7,
      shopping: 7,
      parks: 7,
      nightlife: 5,
      schools: 8
    },
    safety: {
      crimeRate: 2.7,
      safetyScore: 8
    },
    lifestyle: {
      noiseLevel: 5,
      activityLevel: 6,
      socialScene: 6
    }
  },
  {
    id: 'civil-lines-jaipur',
    name: 'Civil Lines',
    city: 'Jaipur',
    state: 'Rajasthan',
    coordinates: { lat: 26.9114, lng: 75.7873 },
    demographics: {
      population: 60000,
      medianAge: 35,
      familyFriendly: 7,
      diversity: 5
    },
    housing: {
      medianPrice: 7000000,
      rentalAvailability: 7,
      housingTypes: ['apartment', 'villa', 'independent-house']
    },
    amenities: {
      walkScore: 75,
      transitScore: 65,
      bikeScore: 70,
      restaurants: 7,
      shopping: 7,
      parks: 7,
      nightlife: 5,
      schools: 8
    },
    safety: {
      crimeRate: 2.8,
      safetyScore: 8
    },
    lifestyle: {
      noiseLevel: 5,
      activityLevel: 6,
      socialScene: 6
    }
  },
  {
    id: 'abids-hyderabad',
    name: 'Abids',
    city: 'Hyderabad',
    state: 'Telangana',
    coordinates: { lat: 17.3980, lng: 78.4925 },
    demographics: {
      population: 70000,
      medianAge: 36,
      familyFriendly: 7,
      diversity: 8
    },
    housing: {
      medianPrice: 8000000,
      rentalAvailability: 7,
      housingTypes: ['apartment', 'studio', 'row-house']
    },
    amenities: {
      walkScore: 79,
      transitScore: 75,
      bikeScore: 64,
      restaurants: 8,
      shopping: 8,
      parks: 6,
      nightlife: 6,
      schools: 8
    },
    safety: {
      crimeRate: 2.9,
      safetyScore: 8
    },
    lifestyle: {
      noiseLevel: 6,
      activityLevel: 7,
      socialScene: 7
    }
  },
  {
    id: 'indira-nagar-bangalore',
    name: 'Indiranagar',
    city: 'Bangalore',
    state: 'Karnataka',
    coordinates: { lat: 12.9719, lng: 77.6412 },
    demographics: {
      population: 130000,
      medianAge: 30,
      familyFriendly: 6,
      diversity: 8
    },
    housing: {
      medianPrice: 15000000,
      rentalAvailability: 8,
      housingTypes: ['apartment', 'villa', 'studio']
    },
    amenities: {
      walkScore: 87,
      transitScore: 82,
      bikeScore: 75,
      restaurants: 9,
      shopping: 8,
      parks: 7,
      nightlife: 9,
      schools: 7
    },
    safety: {
      crimeRate: 3.0,
      safetyScore: 7
    },
    lifestyle: {
      noiseLevel: 7,
      activityLevel: 8,
      socialScene: 9
    }
  },
  {
    id: 'powai-mumbai',
    name: 'Powai',
    city: 'Mumbai',
    state: 'Maharashtra',
    coordinates: { lat: 19.1176, lng: 72.9060 },
    demographics: {
      population: 160000,
      medianAge: 31,
      familyFriendly: 8,
      diversity: 8
    },
    housing: {
      medianPrice: 16000000,
      rentalAvailability: 8,
      housingTypes: ['apartment', 'villa', 'duplex']
    },
    amenities: {
      walkScore: 78,
      transitScore: 75,
      bikeScore: 68,
      restaurants: 8,
      shopping: 8,
      parks: 8,
      nightlife: 7,
      schools: 9
    },
    safety: {
      crimeRate: 2.4,
      safetyScore: 8
    },
    lifestyle: {
      noiseLevel: 6,
      activityLevel: 7,
      socialScene: 7
    }
  },
  {
    id: 'vasant-kunj-delhi',
    name: 'Vasant Kunj',
    city: 'New Delhi',
    state: 'Delhi',
    coordinates: { lat: 28.5244, lng: 77.1590 },
    demographics: {
      population: 120000,
      medianAge: 33,
      familyFriendly: 9,
      diversity: 7
    },
    housing: {
      medianPrice: 22000000,
      rentalAvailability: 7,
      housingTypes: ['apartment', 'villa', 'duplex']
    },
    amenities: {
      walkScore: 72,
      transitScore: 70,
      bikeScore: 65,
      restaurants: 8,
      shopping: 9,
      parks: 9,
      nightlife: 6,
      schools: 9
    },
    safety: {
      crimeRate: 2.1,
      safetyScore: 9
    },
    lifestyle: {
      noiseLevel: 5,
      activityLevel: 7,
      socialScene: 6
    }
  },
  {
    id: 'adyar-chennai',
    name: 'Adyar',
    city: 'Chennai',
    state: 'Tamil Nadu',
    coordinates: { lat: 13.0067, lng: 80.2206 },
    demographics: {
      population: 140000,
      medianAge: 36,
      familyFriendly: 8,
      diversity: 6
    },
    housing: {
      medianPrice: 13000000,
      rentalAvailability: 7,
      housingTypes: ['apartment', 'villa', 'independent-house']
    },
    amenities: {
      walkScore: 81,
      transitScore: 76,
      bikeScore: 68,
      restaurants: 8,
      shopping: 8,
      parks: 8,
      nightlife: 6,
      schools: 9
    },
    safety: {
      crimeRate: 2.0,
      safetyScore: 9
    },
    lifestyle: {
      noiseLevel: 6,
      activityLevel: 7,
      socialScene: 6
    }
  }
];