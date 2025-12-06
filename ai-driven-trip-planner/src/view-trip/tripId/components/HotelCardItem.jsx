import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetplaceDetails } from "../../../service/Global";
import { PHOTO_REF_URL } from "../../../service/Global";

function HotelCardItem({ item, index }) {
  const [photoUrl, setPhotoUrl] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    item && getPlacePhoto();
  }, [item]);

  const getPlacePhoto = async () => {
    setIsLoading(true);
    const data = {
      textQuery: item.hotelName,
    };

    try {
      const resp = await GetplaceDetails(data);
      const photoName = resp.data.places?.[0]?.photos?.[0]?.name;

      if (!photoName) {
        console.warn("No photo found for this place.");
        setIsLoading(false);
        return null;
      }

      const photoUrl = PHOTO_REF_URL.replace("{NAME}", photoName);
      console.log("Photo URL:", photoUrl);
      setPhotoUrl(photoUrl);
      setIsLoading(false);
      return photoUrl;
    } catch (err) {
      console.error("Error fetching place photo:", err);
      setIsLoading(false);
      return null;
    }
  };


  return (
    <Link
      to={`https://www.google.com/maps/search/?api=1&query=${item.hotelName},${item.address}`}
      target="_blank"
      rel="noopener noreferrer"
      className="no-underline block h-full"
    >
      <div className="flex flex-col h-full bg-white rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-300 border border-gray-100 transition-all duration-300 cursor-pointer overflow-hidden transform hover:-translate-y-1">
        {/* Image */}
        <div className="relative overflow-hidden">
          {isLoading ? (
            <div className="h-40 sm:h-44 w-full bg-gray-200 animate-pulse flex items-center justify-center">
              <div className="text-gray-400 text-xs sm:text-sm">
                Loading...
              </div>
            </div>
          ) : (
            <img
              src={photoUrl || "/placeholder.jpg"}
              className="h-40 sm:h-44 w-full object-cover transition-transform duration-300 hover:scale-110"
              alt={item.hotelName}
              onError={(e) => {
                e.target.src = "/placeholder.jpg";
              }}
            />
          )}

          {item.rating && (
            <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full shadow-md">
              <span className="text-[11px] sm:text-xs font-medium text-gray-800">
                ⭐️ {item.rating}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow p-3 sm:p-4">
          {/* Name */}
          <h2 className="font-bold text-base sm:text-lg text-gray-800 mb-2 line-clamp-2 hover:text-blue-600 transition-colors duration-200">
            {item.hotelName}
          </h2>

          {/* Details */}
          <div className="flex flex-col gap-2 flex-grow">
            {/* Address */}
            <div className="flex items-start gap-2">
              <span className="text-blue-500 text-sm sm:text-base mt-[2px]">
                📍
              </span>
              <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 leading-relaxed">
                {item.address}
              </p>
            </div>

            {/* Price */}
            {item.pricePerNightEstimate || item.pricePerNight ? (
              <div className="flex items-center gap-2">
                <span className="text-green-500 text-sm sm:text-base">
                  💰
                </span>
                <p className="text-xs sm:text-sm font-medium text-gray-800">
                  {item.pricePerNightEstimate || item.pricePerNight}
                  <span className="text-[10px] sm:text-xs text-gray-500 ml-1">
                    per night
                  </span>
                </p>
              </div>
            ) : null}
          </div>

          {/* Footer */}
          <div className="mt-3 pt-3 border-t border-gray-100">
            <div className="flex items-center justify-between">
              {item.rating ? (
                <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-full">
                  <span className="text-yellow-500 text-sm">⭐️</span>
                  <span className="text-[11px] sm:text-xs font-medium text-gray-700">
                    {item.rating}
                  </span>
                </div>
              ) : (
                <span className="text-[11px] sm:text-xs text-gray-400 italic">
                  No rating
                </span>
              )}

              <div className="text-[11px] sm:text-xs font-medium text-blue-500 hover:text-blue-700 transition-colors duration-200">
                View on Maps →
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default HotelCardItem;
