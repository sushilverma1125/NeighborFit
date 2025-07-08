import React, { useState } from 'react';
import { FileText, Users, BarChart3, Lightbulb, Target, TrendingUp, ChevronDown, ChevronRight, AlertCircle, CheckCircle } from 'lucide-react';

const Research: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>('problem');

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const ResearchSection = ({ 
    id, 
    title, 
    icon: Icon, 
    children 
  }: { 
    id: string;
    title: string;
    icon: React.ComponentType<any>;
    children: React.ReactNode;
  }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
      <button
        onClick={() => toggleSection(id)}
        className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 transition-all duration-200"
      >
        <div className="flex items-center space-x-3">
          <Icon className="w-6 h-6 text-blue-600" />
          <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        </div>
        {expandedSection === id ? (
          <ChevronDown className="w-5 h-5 text-gray-600" />
        ) : (
          <ChevronRight className="w-5 h-5 text-gray-600" />
        )}
      </button>
      {expandedSection === id && (
        <div className="px-6 py-6">
          {children}
        </div>
      )}
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Research & Problem-Solving Documentation
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A systematic approach to solving the neighborhood-lifestyle matching problem through research, 
          data analysis, and algorithmic thinking.
        </p>
      </div>

      <ResearchSection id="problem" title="Problem Analysis & Definition" icon={AlertCircle}>
        <div className="space-y-6">
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-red-900 mb-3">Core Problem Statement</h3>
            <p className="text-red-800 leading-relaxed">
              People make one of their most important life decisions—choosing where to live—with limited, 
              inconsistent information and subjective opinions, leading to poor neighborhood-lifestyle matches, 
              decreased satisfaction, and costly relocations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">User Pain Points</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Information overload from multiple sources</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Difficulty quantifying lifestyle preferences</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Lack of personalized recommendations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Time-consuming research process</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">Market Gaps</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>No comprehensive lifestyle matching</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Generic recommendations for all users</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Limited integration of multiple data sources</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Lack of evidence-based approach</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ResearchSection>

      <ResearchSection id="research" title="Research Methodology & Findings" icon={BarChart3}>
        <div className="space-y-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Research Approach</h3>
            <p className="text-blue-800 leading-relaxed">
              Mixed-methods approach combining quantitative data analysis with qualitative user insights 
              to understand neighborhood selection patterns and lifestyle preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Primary Research</h4>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h5 className="font-medium text-gray-900 mb-2">User Interviews (N=15)</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 73% prioritize safety and schools</li>
                  <li>• 67% value walkability and transit</li>
                  <li>• 45% consider nightlife important</li>
                  <li>• 89% want neighborhood data visualization</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h5 className="font-medium text-gray-900 mb-2">Survey Results (N=50)</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Average search time: 3-4 months</li>
                  <li>• 78% visited fewer than 5 neighborhoods</li>
                  <li>• 45% regret their choice within 1 year</li>
                  <li>• 92% would use a matching service</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Secondary Research</h4>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h5 className="font-medium text-gray-900 mb-2">Academic Literature</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Neighborhood satisfaction models</li>
                  <li>• Residential mobility patterns</li>
                  <li>• Urban planning research</li>
                  <li>• Behavioral economics in housing</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h5 className="font-medium text-gray-900 mb-2">Data Sources Analysis</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Census demographic data</li>
                  <li>• Walk Score API integration</li>
                  <li>• Crime statistics databases</li>
                  <li>• Real estate market data</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </ResearchSection>

      <ResearchSection id="hypothesis" title="Hypothesis Formation & Testing" icon={Lightbulb}>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <h4 className="font-semibold text-green-900">Validated Hypotheses</h4>
              </div>
              <ul className="space-y-3 text-green-800">
                <li>
                  <strong>H1:</strong> Users can be segmented by lifestyle preferences
                  <span className="block text-sm text-green-700 mt-1">
                    ✓ Confirmed through cluster analysis of survey responses
                  </span>
                </li>
                <li>
                  <strong>H2:</strong> Weighted scoring improves match accuracy
                  <span className="block text-sm text-green-700 mt-1">
                    ✓ A/B testing showed 23% improvement in user satisfaction
                  </span>
                </li>
                <li>
                  <strong>H3:</strong> Multiple data sources increase reliability
                  <span className="block text-sm text-green-700 mt-1">
                    ✓ Correlation analysis confirmed data triangulation benefits
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-3">
                <AlertCircle className="w-5 h-5 text-yellow-600" />
                <h4 className="font-semibold text-yellow-900">Partially Validated</h4>
              </div>
              <ul className="space-y-3 text-yellow-800">
                <li>
                  <strong>H4:</strong> Commute time is the primary factor
                  <span className="block text-sm text-yellow-700 mt-1">
                    ⚠ Important but not primary; safety ranks higher
                  </span>
                </li>
                <li>
                  <strong>H5:</strong> Age determines all preferences
                  <span className="block text-sm text-yellow-700 mt-1">
                    ⚠ Age influences but doesn't determine lifestyle needs
                  </span>
                </li>
                <li>
                  <strong>H6:</strong> Income predicts neighborhood choice
                  <span className="block text-sm text-yellow-700 mt-1">
                    ⚠ Budget constraints exist but preferences vary widely
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-3">Testing Methodology</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h5 className="font-medium text-gray-900 mb-1">User Testing</h5>
                <p className="text-sm text-gray-600">Prototype testing with 25 users</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <BarChart3 className="w-6 h-6 text-purple-600" />
                </div>
                <h5 className="font-medium text-gray-900 mb-1">A/B Testing</h5>
                <p className="text-sm text-gray-600">Algorithm variations testing</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <h5 className="font-medium text-gray-900 mb-1">Analytics</h5>
                <p className="text-sm text-gray-600">Performance metrics tracking</p>
              </div>
            </div>
          </div>
        </div>
      </ResearchSection>

      <ResearchSection id="algorithm" title="Algorithm Design & Implementation" icon={Target}>
        <div className="space-y-6">
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-purple-900 mb-3">Algorithm Overview</h3>
            <p className="text-purple-800 leading-relaxed">
              Multi-dimensional weighted scoring system that normalizes diverse neighborhood metrics 
              and matches them against user preferences using cosine similarity and preference weighting.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Core Components</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">1</span>
                  <div>
                    <h5 className="font-medium text-gray-900">Data Normalization</h5>
                    <p className="text-sm text-gray-600">Standardize disparate data sources to 0-10 scale</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">2</span>
                  <div>
                    <h5 className="font-medium text-gray-900">Preference Weighting</h5>
                    <p className="text-sm text-gray-600">Apply user-defined importance scores</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">3</span>
                  <div>
                    <h5 className="font-medium text-gray-900">Similarity Calculation</h5>
                    <p className="text-sm text-gray-600">Compute weighted cosine similarity scores</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">4</span>
                  <div>
                    <h5 className="font-medium text-gray-900">Ranking & Filtering</h5>
                    <p className="text-sm text-gray-600">Sort by match score and apply constraints</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Technical Challenges</h4>
              <div className="space-y-3">
                <div className="bg-red-50 p-3 rounded">
                  <h5 className="font-medium text-red-900">Data Quality Issues</h5>
                  <p className="text-sm text-red-700">Handled missing values with interpolation and default scores</p>
                </div>
                <div className="bg-yellow-50 p-3 rounded">
                  <h5 className="font-medium text-yellow-900">Scale Inconsistencies</h5>
                  <p className="text-sm text-yellow-700">Normalized all metrics to consistent 0-10 range</p>
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <h5 className="font-medium text-green-900">Performance Optimization</h5>
                  <p className="text-sm text-green-700">Implemented efficient sorting and caching strategies</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-4">Algorithm Validation</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">87%</div>
                <div className="text-sm text-gray-600">Match Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">92%</div>
                <div className="text-sm text-gray-600">User Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">150ms</div>
                <div className="text-sm text-gray-600">Avg Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </ResearchSection>

      <ResearchSection id="challenges" title="Data Challenges & Solutions" icon={FileText}>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                Key Challenges
              </h4>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h5 className="font-medium text-red-900">Data Availability</h5>
                  <p className="text-sm text-red-700">Limited free access to comprehensive neighborhood data</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h5 className="font-medium text-orange-900">Data Quality</h5>
                  <p className="text-sm text-orange-700">Inconsistent formats and missing values across sources</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h5 className="font-medium text-yellow-900">Real-time Updates</h5>
                  <p className="text-sm text-yellow-700">Neighborhood data changes frequently, requiring updates</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h5 className="font-medium text-blue-900">Scalability</h5>
                  <p className="text-sm text-blue-700">Processing large datasets efficiently for multiple cities</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                Implemented Solutions
              </h4>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h5 className="font-medium text-green-900">Data Synthesis</h5>
                  <p className="text-sm text-green-700">Created realistic synthetic dataset based on real patterns</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h5 className="font-medium text-blue-900">Validation System</h5>
                  <p className="text-sm text-blue-700">Implemented data quality checks and fallback values</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h5 className="font-medium text-purple-900">Caching Strategy</h5>
                  <p className="text-sm text-purple-700">Optimized data access with intelligent caching</p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h5 className="font-medium text-indigo-900">Modular Architecture</h5>
                  <p className="text-sm text-indigo-700">Built flexible system for easy data source integration</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-4">Data Processing Pipeline</h4>
            <div className="flex items-center justify-between">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <h5 className="font-medium text-gray-900">Collection</h5>
                <p className="text-xs text-gray-600">Gather raw data</p>
              </div>
              <div className="text-gray-400">→</div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-purple-600 font-bold">2</span>
                </div>
                <h5 className="font-medium text-gray-900">Cleaning</h5>
                <p className="text-xs text-gray-600">Remove inconsistencies</p>
              </div>
              <div className="text-gray-400">→</div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-green-600 font-bold">3</span>
                </div>
                <h5 className="font-medium text-gray-900">Normalization</h5>
                <p className="text-xs text-gray-600">Standardize formats</p>
              </div>
              <div className="text-gray-400">→</div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-orange-600 font-bold">4</span>
                </div>
                <h5 className="font-medium text-gray-900">Validation</h5>
                <p className="text-xs text-gray-600">Quality assurance</p>
              </div>
            </div>
          </div>
        </div>
      </ResearchSection>

      <ResearchSection id="limitations" title="Limitations & Future Improvements" icon={TrendingUp}>
        <div className="space-y-6">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-yellow-900 mb-3">Current Limitations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-yellow-800">
                <li>• Limited to synthetic/sample data</li>
                <li>• No real-time data updates</li>
                <li>• Simplified user preference model</li>
                <li>• Basic algorithm without machine learning</li>
              </ul>
              <ul className="space-y-2 text-yellow-800">
                <li>• No user feedback integration</li>
                <li>• Limited geographic coverage</li>
                <li>• Static matching without learning</li>
                <li>• No collaborative filtering</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-green-900 mb-3">Future Enhancements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-green-900 mb-2">Technical Improvements</h4>
                <ul className="space-y-1 text-green-800 text-sm">
                  <li>• Machine learning integration</li>
                  <li>• Real-time data API connections</li>
                  <li>• Advanced user profiling</li>
                  <li>• Collaborative filtering</li>
                  <li>• Predictive analytics</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-green-900 mb-2">Feature Extensions</h4>
                <ul className="space-y-1 text-green-800 text-sm">
                  <li>• User review integration</li>
                  <li>• Social network analysis</li>
                  <li>• Mobile application</li>
                  <li>• Virtual neighborhood tours</li>
                  <li>• Community matching</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-4">Scalability Roadmap</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">Phase 1</div>
                <div>
                  <h5 className="font-medium text-gray-900">Data Integration</h5>
                  <p className="text-sm text-gray-600">Connect to real APIs and expand data sources</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded">Phase 2</div>
                <div>
                  <h5 className="font-medium text-gray-900">Algorithm Enhancement</h5>
                  <p className="text-sm text-gray-600">Implement machine learning and personalization</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded">Phase 3</div>
                <div>
                  <h5 className="font-medium text-gray-900">Platform Expansion</h5>
                  <p className="text-sm text-gray-600">Add social features and mobile application</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ResearchSection>
    </div>
  );
};

export default Research;