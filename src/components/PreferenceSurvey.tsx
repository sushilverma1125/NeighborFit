import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Users, Home, MapPin, Star } from 'lucide-react';
import { UserPreferences } from '../types/preferences';

interface PreferenceSurveyProps {
  onSubmit: (preferences: UserPreferences) => void;
}

const PreferenceSurvey: React.FC<PreferenceSurveyProps> = ({ onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [preferences, setPreferences] = useState<UserPreferences>({
    demographics: {
      ageRange: '',
      householdSize: 1,
      hasChildren: false,
      pets: false
    },
    lifestyle: {
      workLocation: '',
      commuteTolerance: 30,
      activityLevel: '',
      socialPreference: '',
      noiseLevel: ''
    },
    housing: {
      type: '',
      budget: 300000,
      size: '',
      parking: false
    },
    priorities: {
      safety: 5,
      schools: 3,
      nightlife: 3,
      nature: 4,
      shopping: 3,
      restaurants: 4,
      publicTransit: 3,
      walkability: 4
    },
    location: {
      city: '',
      state: ''
    }
  });

  const steps = [
    { title: 'Demographics', icon: Users, description: 'Tell us about yourself' },
    { title: 'Lifestyle', icon: MapPin, description: 'Your daily life preferences' },
    { title: 'Housing', icon: Home, description: 'Housing requirements' },
    { title: 'Priorities', icon: Star, description: 'What matters most to you' }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onSubmit(preferences);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updatePreferences = (section: keyof UserPreferences, field: string, value: any) => {
    setPreferences(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const PrioritySlider = ({ label, value, onChange }: { label: string; value: number; onChange: (value: number) => void }) => (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <label className="text-sm font-medium text-gray-700">{label}</label>
        <span className="text-sm text-blue-600 font-medium">{value}/5</span>
      </div>
      <input
        type="range"
        min="1"
        max="5"
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
      />
      <div className="flex justify-between text-xs text-gray-500">
        <span>Not Important</span>
        <span>Very Important</span>
      </div>
    </div>
  );

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Age Range</label>
              <select
                value={preferences.demographics.ageRange}
                onChange={(e) => updatePreferences('demographics', 'ageRange', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select age range</option>
                <option value="18-25">18-25</option>
                <option value="26-35">26-35</option>
                <option value="36-45">36-45</option>
                <option value="46-55">46-55</option>
                <option value="56-65">56-65</option>
                <option value="65+">65+</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Household Size</label>
              <input
                type="number"
                min="1"
                max="10"
                value={preferences.demographics.householdSize}
                onChange={(e) => updatePreferences('demographics', 'householdSize', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={preferences.demographics.hasChildren}
                    onChange={(e) => updatePreferences('demographics', 'hasChildren', e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">Have children</span>
                </label>
              </div>
              <div>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={preferences.demographics.pets}
                    onChange={(e) => updatePreferences('demographics', 'pets', e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">Have pets</span>
                </label>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                <input
                  type="text"
                  value={preferences.location.city}
                  onChange={(e) => updatePreferences('location', 'city', e.target.value)}
                  placeholder="e.g., San Francisco"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                <input
                  type="text"
                  value={preferences.location.state}
                  onChange={(e) => updatePreferences('location', 'state', e.target.value)}
                  placeholder="e.g., California"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Work Location</label>
              <input
                type="text"
                value={preferences.lifestyle.workLocation}
                onChange={(e) => updatePreferences('lifestyle', 'workLocation', e.target.value)}
                placeholder="e.g., Downtown, Remote, Specific address"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Commute Tolerance: {preferences.lifestyle.commuteTolerance} minutes
              </label>
              <input
                type="range"
                min="5"
                max="90"
                step="5"
                value={preferences.lifestyle.commuteTolerance}
                onChange={(e) => updatePreferences('lifestyle', 'commuteTolerance', parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Activity Level</label>
              <select
                value={preferences.lifestyle.activityLevel}
                onChange={(e) => updatePreferences('lifestyle', 'activityLevel', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select activity level</option>
                <option value="low">Low - Prefer quiet, indoor activities</option>
                <option value="moderate">Moderate - Mix of indoor and outdoor</option>
                <option value="high">High - Active, outdoor lifestyle</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Social Preference</label>
              <select
                value={preferences.lifestyle.socialPreference}
                onChange={(e) => updatePreferences('lifestyle', 'socialPreference', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select social preference</option>
                <option value="quiet">Quiet - Value privacy and solitude</option>
                <option value="moderate">Moderate - Occasional social interaction</option>
                <option value="social">Social - Enjoy community and networking</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Noise Level Tolerance</label>
              <select
                value={preferences.lifestyle.noiseLevel}
                onChange={(e) => updatePreferences('lifestyle', 'noiseLevel', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select noise tolerance</option>
                <option value="low">Low - Need quiet environment</option>
                <option value="moderate">Moderate - Some noise is okay</option>
                <option value="high">High - Don't mind busy, noisy areas</option>
              </select>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Housing Type</label>
              <select
                value={preferences.housing.type}
                onChange={(e) => updatePreferences('housing', 'type', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select housing type</option>
                <option value="apartment">Apartment</option>
                <option value="condo">Condo</option>
                <option value="townhouse">Townhouse</option>
                <option value="single-family">Single Family Home</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Budget: ${preferences.housing.budget.toLocaleString()}
              </label>
              <input
                type="range"
                min="200000"
                max="2000000"
                step="50000"
                value={preferences.housing.budget}
                onChange={(e) => updatePreferences('housing', 'budget', parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Size Preference</label>
              <select
                value={preferences.housing.size}
                onChange={(e) => updatePreferences('housing', 'size', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select size preference</option>
                <option value="studio">Studio</option>
                <option value="1br">1 Bedroom</option>
                <option value="2br">2 Bedrooms</option>
                <option value="3br">3 Bedrooms</option>
                <option value="4br+">4+ Bedrooms</option>
              </select>
            </div>

            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={preferences.housing.parking}
                  onChange={(e) => updatePreferences('housing', 'parking', e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">Parking required</span>
              </label>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <p className="text-sm text-gray-600 mb-4">
              Rate the importance of each factor on a scale of 1-5:
            </p>
            
            <PrioritySlider
              label="Safety"
              value={preferences.priorities.safety}
              onChange={(value) => updatePreferences('priorities', 'safety', value)}
            />
            
            <PrioritySlider
              label="Schools"
              value={preferences.priorities.schools}
              onChange={(value) => updatePreferences('priorities', 'schools', value)}
            />
            
            <PrioritySlider
              label="Nightlife"
              value={preferences.priorities.nightlife}
              onChange={(value) => updatePreferences('priorities', 'nightlife', value)}
            />
            
            <PrioritySlider
              label="Nature & Parks"
              value={preferences.priorities.nature}
              onChange={(value) => updatePreferences('priorities', 'nature', value)}
            />
            
            <PrioritySlider
              label="Shopping"
              value={preferences.priorities.shopping}
              onChange={(value) => updatePreferences('priorities', 'shopping', value)}
            />
            
            <PrioritySlider
              label="Restaurants"
              value={preferences.priorities.restaurants}
              onChange={(value) => updatePreferences('priorities', 'restaurants', value)}
            />
            
            <PrioritySlider
              label="Public Transit"
              value={preferences.priorities.publicTransit}
              onChange={(value) => updatePreferences('priorities', 'publicTransit', value)}
            />
            
            <PrioritySlider
              label="Walkability"
              value={preferences.priorities.walkability}
              onChange={(value) => updatePreferences('priorities', 'walkability', value)}
            />
          </div>
        );

      default:
        return null;
    }
  };

  const isStepComplete = () => {
    switch (currentStep) {
      case 0:
        return preferences.demographics.ageRange && preferences.location.city && preferences.location.state;
      case 1:
        return preferences.lifestyle.activityLevel && preferences.lifestyle.socialPreference && preferences.lifestyle.noiseLevel;
      case 2:
        return preferences.housing.type && preferences.housing.size;
      case 3:
        return true;
      default:
        return false;
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  index <= currentStep ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-12 h-1 mx-2 ${
                    index < currentStep ? 'bg-blue-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            );
          })}
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            {steps[currentStep].title}
          </h2>
          <p className="text-gray-600">{steps[currentStep].description}</p>
        </div>
      </div>

      {/* Form Content */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
        {renderStep()}
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          onClick={handleBack}
          disabled={currentStep === 0}
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
            currentStep === 0
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Back</span>
        </button>
        
        <button
          onClick={handleNext}
          disabled={!isStepComplete()}
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
            isStepComplete()
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
        >
          <span>{currentStep === steps.length - 1 ? 'Find Matches' : 'Next'}</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default PreferenceSurvey;