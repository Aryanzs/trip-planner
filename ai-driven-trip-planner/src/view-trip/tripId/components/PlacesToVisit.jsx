// import React from "react";
// import PlaceCard from "./PlaceCard";

// // function PlacesToVisit({ trip }) {
// //   const bestTime = trip?.tripData?.bestTimeToVisit || "Unknown";

// //   return (
// //     <div>
// //       <h2 className="font-bold text-lg">Places to Visit</h2>
// //       <div className="font-medium text-lg mb-2">
// //         {Object.entries(trip?.tripData?.itinerary || {}).map(
// //           ([day, places], index) => (
// //             <div key={index} className="mb-6">
// //               <h2 className="font-bold text-lg mb-2 p-3">
// //                 {`Day ${day.replace("day", "")}`}
// //               </h2>

// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                 {places.map((place, idx) => (
// //                   <div
// //                     key={`${day}-${idx}`}
// //                     className="p-4 rounded-lg bg-white"
// //                   >
// //                     {/* ✅ Display best time to visit here */}
// //                     <h2 className="font-medium text-sm text-orange-600">
// //                       🕣 Best Time to Visit: {place.bestTimetoVisit || bestTime}
// //                     </h2>

// //                     <div className="my-3">
// //                       <PlaceCard place={place} />
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           )
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // function PlacesToVisit({ trip }) {
// //   const bestTime = trip?.tripData?.bestTimeToVisit || "Unknown";

// //   return (
// //     <div>
// //       <h2 className="font-bold text-lg">Places to Visit</h2>
// //       <div className="font-medium text-lg mb-2">
// //         {Object.entries(trip?.tripData?.itinerary || {}).map(
// //           ([day, dayData], index) => (
// //             <div key={index} className="mb-6">
// //               <h2 className="font-bold text-lg mb-2 p-3">
// //                 {`Day ${day.replace("day", "")}`}
// //               </h2>

// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                 {(dayData.plan || []).map((place, idx) => (
// //                   <div
// //                     key={`${day}-${idx}`}
// //                     className="p-4 rounded-lg bg-white"
// //                   >
// //                     {/* ✅ Display best time to visit here */}
// //                     <h2 className="font-medium text-sm text-orange-600">
// //                       🕣 Best Time to Visit: {place.bestTimetoVisit || bestTime}
// //                     </h2>

// //                     <div className="my-3">
// //                       <PlaceCard place={place} />
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           )
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // function PlacesToVisit({ trip }) {
// //   const bestTime = trip?.tripData?.bestTimeToVisit || "Unknown";

// //   return (
// //     <div>
// //       <h2 className="font-bold text-lg">Places to Visit</h2>
// //       <div className="font-medium text-lg mb-2">
// //         {Object.entries(trip?.tripData?.itinerary || {}).map(([day, dayData], index) => {
// //           // Handle both possible formats
// //           const places = Array.isArray(dayData)
// //             ? dayData
// //             : Array.isArray(dayData?.plan)
// //             ? dayData.plan
// //             : [];

// //           return (
// //             <div key={index} className="mb-6">
// //               <h2 className="font-bold text-lg mb-2 p-3">
// //                 {`Day ${day.replace("day", "")}`}
// //               </h2>

// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                 {places.map((place, idx) => (
// //                   <div key={`${day}-${idx}`} className="p-4 rounded-lg bg-white">
// //                     <h2 className="font-medium text-sm text-orange-600">
// //                       🕣 Best Time to Visit: {place.bestTimetoVisit || bestTime}
// //                     </h2>
// //                     <div className="my-3">
// //                       <PlaceCard place={place} />
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           );
// //         })}
// //       </div>
// //     </div>
// //   );
// // }
// function PlacesToVisit({ trip }) {
//   // Get the correct data structure from your API response
//   const itinerary = trip?.tripData?.itinerary || {};

//   return (
//     <div>
//       <h2 className="font-bold text-lg">Places to Visit</h2>
//       <div className="font-medium text-lg mb-2">
//         {Object.entries(itinerary).map(([day, dayData], index) => {
//           // The correct structure based on your screenshot: dayData.activities
//           const activities = dayData?.activities || [];
//           const dayTheme =
//             dayData?.theme || `Day ${day.replace("day", "")} Activities`;

//           return (
//             <div key={index} className="mb-6">
//               <h2 className="font-bold text-lg mb-2 p-3">
//                 Day {day.replace("day", "")} - {dayTheme}
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {activities.map((activity, idx) => (
//                   <div
//                     key={`${day}-${idx}`}
//                     className="p-4 rounded-lg bg-white shadow-md"
//                   >
//                     {/* Display activity time */}
//                     <h3 className="font-medium text-sm text-orange-600 mb-2">
//                       🕐 {activity.time} - Best Time:{" "}
//                       {activity.bestTimeToVisit || "Anytime"}
//                     </h3>

//                     {/* Display place name
//                     <h4 className="font-bold text-lg text-gray-800 mb-2">
//                       {activity.placeName}
//                     </h4> */}

//                     {/* Display place details */}
//                     {/* <p className="text-gray-600 mb-3 text-sm">
//                       {activity.placeDetails}
//                     </p> */}

//                     {/* Display additional info */}
//                     <div className="flex justify-between items-center text-xs text-gray-500">
//                       <span>⭐ {activity.rating}</span>
//                       <span>💰 {activity.ticketPricing}</span>
//                       <span>⏱️ {activity.timeToSpend}</span>
//                     </div>

//                     {/* Display place image if available
//                     {activity.placeImageUrl && (
//                       <img
//                         src={activity.placeImageUrl}
//                         alt={activity.placeName}
//                         className="w-full h-32 object-cover rounded-md mt-3"
//                         onError={(e) => {
//                           // Hide image if it fails to load
//                           e.target.style.display = "none";
//                         }}
//                       />
//                     )} */}

//                     <div className="my-3">
//                       {/* Pass the activity data to PlaceCard component */}
//                       <PlaceCard place={activity} />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default PlacesToVisit;
import React from "react";
import PlaceCard from "./PlaceCard";

function PlacesToVisit({ trip }) {
  const itinerary = trip?.tripData?.itinerary || {};
  const days = Object.entries(itinerary);

  const hasItinerary = days.length > 0;

  return (
    <div className="px-4 sm:px-6 py-4 sm:py-6">
      <h2 className="font-bold text-xl sm:text-2xl mb-4 sm:mb-6 text-gray-800">
        Places to Visit
      </h2>

      {/* Empty State */}
      {!hasItinerary && (
        <div className="text-center py-12 bg-gray-50 rounded-xl">
          <div className="text-gray-400 text-6xl mb-4">🗺️</div>
          <h3 className="text-lg font-medium text-gray-600 mb-2">
            No Itinerary Available
          </h3>
          <p className="text-gray-500 text-sm">
            Your trip itinerary will appear here once generated.
          </p>
        </div>
      )}

      {hasItinerary && (
        <div className="space-y-6 sm:space-y-8">
          {days.map(([dayKey, dayData], index) => {
            const activities = dayData?.activities || [];
            const dayNumber = dayKey.replace("day", "") || index + 1;
            const dayTheme =
              dayData?.theme || `Day ${dayNumber} Activities`;

            return (
              <section
                key={dayKey}
                className="bg-gray-50 rounded-2xl p-4 sm:p-6 shadow-sm"
              >
                {/* Day Header */}
                <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border-l-4 border-blue-500 mb-3 sm:mb-4">
                  <h2 className="font-bold text-base sm:text-xl text-gray-800">
                    Day {dayNumber} – {dayTheme}
                  </h2>
                </div>

                {activities.length === 0 && (
                  <div className="text-center py-6 text-gray-500 text-sm">
                    No activities planned for this day
                  </div>
                )}

                {activities.length > 0 && (
                  <>
                    {/* Mobile: horizontal scroll of activities */}
                    <div className="sm:hidden -mx-2 mt-2">
                      <div className="flex gap-4 overflow-x-auto pb-3 px-2 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-300">
                        {activities.map((activity, idx) => (
                          <div
                            key={`${dayKey}-${idx}`}
                            className="min-w-[260px] max-w-[280px] snap-start flex-shrink-0"
                          >
                            <div className="bg-white rounded-xl p-3 shadow-md border hover:shadow-lg transition-all duration-300">
                              {/* Activity Header */}
                              <div className="mb-2">
                                <h3 className="font-medium text-xs text-orange-600 mb-1 flex items-center">
                                  🕐 {activity.time}
                                  <span className="ml-1 text-[11px] text-gray-500">
                                    •{" "}
                                    {activity.bestTimeToVisit ||
                                      "Best Time: Anytime"}
                                  </span>
                                </h3>
                              </div>

                              {/* Activity Stats */}
                              <div className="flex justify-between items-center mb-3 p-2 bg-gray-50 rounded-lg">
                                <span className="flex items-center text-[11px] text-gray-600">
                                  ⭐{" "}
                                  <span className="ml-1 font-medium">
                                    {activity.rating}
                                  </span>
                                </span>
                                <span className="flex items-center text-[11px] text-gray-600">
                                  💰{" "}
                                  <span className="ml-1 font-medium">
                                    {activity.ticketPricing}
                                  </span>
                                </span>
                                <span className="flex items-center text-[11px] text-gray-600">
                                  ⏱️{" "}
                                  <span className="ml-1 font-medium">
                                    {activity.timeToSpend}
                                  </span>
                                </span>
                              </div>

                              {/* Place Card */}
                              <div className="border-t border-gray-100 pt-3">
                                <PlaceCard place={activity} />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tablet + Desktop: grid layout */}
                    <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 gap-5 mt-3">
                      {activities.map((activity, idx) => (
                        <div
                          key={`${dayKey}-${idx}`}
                          className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border hover:border-blue-200"
                        >
                          {/* Activity Header */}
                          <div className="mb-4">
                            <h3 className="font-medium text-sm text-orange-600 mb-2 flex items-center">
                              🕐 {activity.time}
                              <span className="ml-2 text-gray-500 text-xs">
                                • Best Time:{" "}
                                {activity.bestTimeToVisit || "Anytime"}
                              </span>
                            </h3>
                          </div>

                          {/* Activity Stats */}
                          <div className="flex justify-between items-center mb-4 p-3 bg-gray-50 rounded-lg">
                            <span className="flex items-center text-xs text-gray-600">
                              ⭐{" "}
                              <span className="ml-1 font-medium">
                                {activity.rating}
                              </span>
                            </span>
                            <span className="flex items-center text-xs text-gray-600">
                              💰{" "}
                              <span className="ml-1 font-medium">
                                {activity.ticketPricing}
                              </span>
                            </span>
                            <span className="flex items-center text-xs text-gray-600">
                              ⏱️{" "}
                              <span className="ml-1 font-medium">
                                {activity.timeToSpend}
                              </span>
                            </span>
                          </div>

                          {/* Place Card */}
                          <div className="border-t border-gray-100 pt-4">
                            <PlaceCard place={activity} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default PlacesToVisit;
