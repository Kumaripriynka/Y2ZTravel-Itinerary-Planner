import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import ActivityCard from './ActivityCard';

const DaySection = ({ day }) => {
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 animate-fade-in">
      {/* Day Header */}
      <div className="flex items-center mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-gray-100">
        <div className="bg-blue-600 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center font-bold text-base sm:text-lg mr-3 sm:mr-4 flex-shrink-0">
          {day.dayNumber}
        </div>
        <div className="min-w-0 flex-grow">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 truncate">{day.title}</h3>
          <div className="flex items-center text-gray-600 mt-1">
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
            <span className="text-xs sm:text-sm truncate">{day.date}</span>
          </div>
        </div>
      </div>

      {/* Activities */}
      <div className="space-y-3 sm:space-y-4">
        {day.activities.map((activity, index) => (
          <div key={activity.id} className="relative">
            <ActivityCard 
              activity={activity}
              isDragging={false}
            />
            
            {/* Connection line for mobile */}
            {index < day.activities.length - 1 && (
              <div className="hidden sm:block absolute left-10 sm:left-12 top-full w-px h-4 bg-gray-200 z-10"></div>
            )}
          </div>
        ))}
      </div>
      
      {/* Activity count indicator for mobile */}
      <div className="sm:hidden mt-4 pt-3 border-t border-gray-100 text-center">
        <span className="text-xs text-gray-500">
          {day.activities.length} {day.activities.length === 1 ? 'activity' : 'activities'}
        </span>
      </div>
    </div>
  );
};

export default DaySection;