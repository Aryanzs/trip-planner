import React, { useEffect, useState } from "react";
import { Button } from "../../../components/ui/button";
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GetplaceDetails } from "../../../service/Global";

const PHOTO_REF_URL = `https://places.googleapis.com/v1/{NAME}/media?key=${
  import.meta.env.VITE_GOOGLE_PLACE_API_KEY
}&maxWidthPx=800`;

function PlaceCard({ place }) {
  const [photoUrl, setPhotoUrl] = useState();

  useEffect(() => {
    place && getPlacePhoto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [place]);

  const getPlacePhoto = async () => {
    const data = {
      textQuery: place.placeName,
    };

    try {
      const resp = await GetplaceDetails(data);
      const photoName = resp.data.places?.[0]?.photos?.[0]?.name;

      if (!photoName) {
        console.warn("No photo found for this place.");
        return null;
      }

      const url = PHOTO_REF_URL.replace("{NAME}", photoName);
      console.log("Photo URL:", url);
      setPhotoUrl(url);

      return url;
    } catch (err) {
      console.error("Error fetching place photo:", err);
      return null;
    }
  };

  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${place.placeName} (${place.geoCoordinates.latitude},${place.geoCoordinates.longitude})`;

  return (
    <Link to={mapUrl} target="_blank" rel="noopener noreferrer">
      <div className="border rounded-xl mt-2 p-3 sm:p-4 flex flex-col sm:flex-row gap-3 sm:gap-5 hover:shadow-md hover:-translate-y-[2px] sm:hover:scale-[1.02] transition-all cursor-pointer bg-white">
        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src={photoUrl || "/placeholder.jpg"}
            alt={place.placeName}
            className="w-full h-32 sm:w-[130px] sm:h-[130px] object-cover rounded-xl"
            onError={(e) => {
              e.target.src = "/placeholder.jpg";
            }}
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-between flex-1">
          <div>
            <h2 className="font-bold text-base sm:text-lg text-gray-900 mb-1 line-clamp-2">
              {place.placeName}
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mb-2 line-clamp-3">
              {place.placeDetails}
            </p>
            <h3 className="text-xs sm:text-sm text-gray-700">
              ⭐ <span className="font-medium">{place.rating || "N/A"}</span>
            </h3>
          </div>

          <div className="mt-2">
            <Button
              size="sm"
              className="inline-flex items-center gap-1 text-xs sm:text-sm"
            >
              <FaMapLocationDot className="w-4 h-4" />
              <span className="hidden xs:inline">View on Maps</span>
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PlaceCard;
