import React, { useState } from 'react';
import { Home, Users, MapPin, TrendingUp, FileText, ChevronRight } from 'lucide-react';
import LandingPage from './components/LandingPage';
import PreferenceSurvey from './components/PreferenceSurvey';
import MatchingResults from './components/MatchingResults';
import Research from './components/Research';
import { UserPreferences } from './types/preferences';

function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'survey' | 'results' | 'research'>('landing');
  const [userPreferences, setUserPreferences] = useState<UserPreferences | null>(null);

  const handlePreferencesSubmit = (preferences: UserPreferences) => {
    setUserPreferences(preferences);
    setCurrentPage('results');
  };

  const navigation = [
    { id: 'landing', label: 'Home', icon: Home },
    { id: 'survey', label: 'Survey', icon: Users },
    { id: 'results', label: 'Results', icon: MapPin },
    { id: 'research', label: 'Research', icon: FileText }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-2">
                <Home className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                NeighborFit
              </h1>
            </div>
            <div className="flex space-x-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentPage(item.id as any)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                      currentPage === item.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative">
        {currentPage === 'landing' && (
          <LandingPage onStartSurvey={() => setCurrentPage('survey')} />
        )}
        {currentPage === 'survey' && (
          <PreferenceSurvey onSubmit={handlePreferencesSubmit} />
        )}
        {currentPage === 'results' && userPreferences && (
          <MatchingResults preferences={userPreferences} />
        )}
        {currentPage === 'research' && (
          <Research />
        )}
      </main>
    </div>
  );
}

export default App;