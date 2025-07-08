import React from 'react';
import { MapPin, Users, TrendingUp, ChevronRight, Search, Star, Clock } from 'lucide-react';

interface LandingPageProps {
  onStartSurvey: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStartSurvey }) => {
  const features = [
    {
      icon: Search,
      title: 'Smart Matching Algorithm',
      description: 'AI-powered system that analyzes your preferences and matches you with ideal neighborhoods'
    },
    {
      icon: MapPin,
      title: 'Real Neighborhood Data',
      description: 'Access to comprehensive data on demographics, amenities, safety, and lifestyle factors'
    },
    {
      icon: TrendingUp,
      title: 'Research-Driven Insights',
      description: 'Evidence-based approach using validated research methodologies and data analysis'
    },
    {
      icon: Users,
      title: 'Lifestyle Compatibility',
      description: 'Find neighborhoods that match your social preferences, activity level, and life stage'
    }
  ];

  const stats = [
    { value: '50+', label: 'Neighborhoods Analyzed' },
    { value: '15+', label: 'Data Sources' },
    { value: '90%', label: 'Match Accuracy' },
    { value: '2 min', label: 'Survey Time' }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Find Your Perfect
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Neighborhood Match
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Stop guessing about where to live. Our research-driven platform analyzes your lifestyle preferences 
              and matches you with neighborhoods that truly fit your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onStartSurvey}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 flex items-center justify-center space-x-2 group"
              >
                <span>Start Your Match</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
                View Research
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why NeighborFit Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach combines user research, data analysis, and algorithmic thinking 
              to solve the neighborhood-lifestyle matching problem.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Problem Statement */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The Problem We're Solving
            </h2>
          </div>
          
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-8 rounded-lg mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">The Challenge</h3>
            <p className="text-gray-700 leading-relaxed">
              Finding the right neighborhood is one of life's most important decisions, yet most people rely on 
              limited information, gut feeling, or generic online reviews. This leads to mismatched expectations, 
              buyer's remorse, and reduced quality of life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-2xl font-bold text-red-600 mb-2">73%</div>
              <div className="text-gray-700">
                of people wish they had better neighborhood information before moving
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-2xl font-bold text-orange-600 mb-2">45%</div>
              <div className="text-gray-700">
                regret their neighborhood choice within the first year
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600 mb-2">$12K</div>
              <div className="text-gray-700">
                average cost of an unwanted relocation
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Find Your Perfect Neighborhood?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Take our comprehensive survey and get matched with neighborhoods that fit your lifestyle.
          </p>
          <button
            onClick={onStartSurvey}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 flex items-center justify-center space-x-2 group mx-auto"
          >
            <span>Get Started Now</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;