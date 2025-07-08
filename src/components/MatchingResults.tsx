import React, { useState, useEffect } from 'react';
import { MapPin, Star, TrendingUp, Users, Home, Shield, Car, Utensils, TreePine, ShoppingBag, Train, Footprints, Moon, Clock } from 'lucide-react';
import { UserPreferences, MatchResult } from '../types/preferences';
import { matchingAlgorithm } from '../utils/matchingAlgorithm';
import { neighborhoods } from '../data/neighborhoods';

interface MatchingResultsProps {
  preferences: UserPreferences;
}

const MatchingResults: React.FC<MatchingResultsProps> = ({ preferences }) => {
  const [matches, setMatches] = useState<MatchResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMatch, setSelectedMatch] = useState<MatchResult | null>(null);

  useEffect(() => {
    const calculateMatches = async () => {
      setLoading(true);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const results = matchingAlgorithm(preferences, neighborhoods);
      setMatches(results);
      setLoading(false);
    };

    calculateMatches();
  }, [preferences]);

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBg = (score: number) => {
    if (score >= 80) return 'bg-green-100';
    if (score >= 60) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  const IconMap = {
    Safety: Shield,
    Schools: Users,
    Nightlife: Moon,
    Nature: TreePine,
    Shopping: ShoppingBag,
    Restaurants: Utensils,
    'Public Transit': Train,
    Walkability: Footprints,
    Housing: Home,
    Commute: Clock
  };

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Analyzing Your Preferences</h2>
          <p className="text-gray-600">Finding the perfect neighborhoods for you...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Neighborhood Matches</h1>
        <p className="text-gray-600">
          Based on your preferences, we found {matches.length} neighborhoods that match your lifestyle.
        </p>
      </div>

      {matches.length === 0 ? (
        <div className="text-center py-12">
          <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">No matches found</h2>
          <p className="text-gray-600">Try adjusting your preferences to find more neighborhoods.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {matches.map((match, index) => (
            <div
              key={match.neighborhood.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedMatch(match)}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {match.neighborhood.name}
                    </h3>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{match.neighborhood.city}, {match.neighborhood.state}</span>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${getScoreBg(match.score)}`}>
                    <span className={getScoreColor(match.score)}>
                      {Math.round(match.score)}% Match
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-sm">
                    <span className="text-gray-600">Population:</span>
                    <span className="font-medium ml-1">
                      {match.neighborhood.demographics.population.toLocaleString()}
                    </span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-600">Median Age:</span>
                    <span className="font-medium ml-1">
                      {match.neighborhood.demographics.medianAge}
                    </span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-600">Walk Score:</span>
                    <span className="font-medium ml-1">
                      {match.neighborhood.amenities.walkScore}
                    </span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-600">Safety Score:</span>
                    <span className="font-medium ml-1">
                      {match.neighborhood.safety.safetyScore}/10
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900 text-sm">Top Matches:</h4>
                  {match.matchDetails
                    .sort((a, b) => b.score - a.score)
                    .slice(0, 3)
                    .map((detail, i) => (
                      <div key={i} className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">{detail.category}</span>
                        <span className={`font-medium ${getScoreColor(detail.score)}`}>
                          {Math.round(detail.score)}%
                        </span>
                      </div>
                    ))}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Detailed Modal */}
      {selectedMatch && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {selectedMatch.neighborhood.name}
                  </h2>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{selectedMatch.neighborhood.city}, {selectedMatch.neighborhood.state}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className={`px-4 py-2 rounded-full text-lg font-medium ${getScoreBg(selectedMatch.score)}`}>
                    <span className={getScoreColor(selectedMatch.score)}>
                      {Math.round(selectedMatch.score)}% Match
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedMatch(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Demographics</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Population:</span>
                      <span className="font-medium">
                        {selectedMatch.neighborhood.demographics.population.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Median Age:</span>
                      <span className="font-medium">
                        {selectedMatch.neighborhood.demographics.medianAge}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Family Friendly:</span>
                      <span className="font-medium">
                        {selectedMatch.neighborhood.demographics.familyFriendly}/10
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Housing</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Median Price:</span>
                      <span className="font-medium">
                        ${selectedMatch.neighborhood.housing.medianPrice.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Available Types:</span>
                      <span className="font-medium">
                        {selectedMatch.neighborhood.housing.housingTypes.join(', ')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-4">Match Breakdown</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedMatch.matchDetails.map((detail, index) => {
                    const Icon = IconMap[detail.category as keyof typeof IconMap] || Star;
                    return (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <Icon className="w-5 h-5 text-blue-600" />
                            <span className="font-medium text-gray-900">
                              {detail.category}
                            </span>
                          </div>
                          <span className={`font-bold ${getScoreColor(detail.score)}`}>
                            {Math.round(detail.score)}%
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">{detail.explanation}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setSelectedMatch(null)}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                >
                  Close
                </button>
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  Save Neighborhood
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MatchingResults;