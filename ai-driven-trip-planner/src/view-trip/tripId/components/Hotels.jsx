import React from "react";
import HotelCardItem from "./HotelCardItem";

function Hotels({ trip }) {
  const hotels = trip?.tripData?.hotelOptions || [];

  if (!hotels.length) return null;

  return (
    <div className="px-4 sm:px-5 py-4 sm:py-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-5">
        <h2 className="font-bold text-lg sm:text-xl text-gray-900">
          Hotel Recommendations
        </h2>
        <span className="text-xs sm:text-sm text-gray-500">
          {hotels.length} option{hotels.length > 1 ? "s" : ""}
        </span>
      </div>

      {/* Mobile: horizontal scroll cards */}
      <div className="sm:hidden -mx-4 px-4">
        <div className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-300">
          {hotels.map((item, index) => (
            <div
              key={index}
              className="min-w-[260px] max-w-[280px] snap-start flex-shrink-0"
            >
              <HotelCardItem item={item} index={index} />
            </div>
          ))}
        </div>
      </div>

      {/* Tablet + Desktop: normal grid */}
      <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5">
        {hotels.map((item, index) => (
          <HotelCardItem key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Hotels;
