import React from 'react';
import { MapPin, ChevronDown } from 'lucide-react';

interface Location {
    id: number;
    name: string;
    date: string;
    revealed: boolean;
    image: string;
}

interface LocationCardProps {
    location: Location;
    onClick: () => void;
}

export const LocationCard: React.FC<LocationCardProps> = ({ location, onClick }) => {
    return (
        <div
            className={`
        relative rounded-lg transition-all duration-300
        ${location.revealed
                    ? 'bg-white shadow-lg hover:shadow-xl cursor-pointer'
                    : 'bg-stone-200 cursor-not-allowed'
                }
      `}
            onClick={onClick}
        >
            <div className="p-4 sm:p-6 md:p-8"> {/* Adjust padding for different screen sizes */}
                <div className="flex flex-col items-center gap-4">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-white shadow-lg overflow-hidden"> {/* Responsive image size */}
                        {location.revealed ? (
                            <img
                                src={location.image}
                                alt={location.name}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="relative w-full h-full">
                                <img
                                    src={location.image}
                                    alt="Hidden location"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 backdrop-blur-xl bg-black/30 flex items-center justify-center">
                                    <span className="text-white text-2xl sm:text-3xl md:text-4xl">?</span> {/* Adjust text size for different screens */}
                                </div>
                            </div>
                        )}
                    </div>



                    <div className="text-center">
                        {location.revealed ? (
                            <>
                                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-stone-800">{location.name}</h3> {/* Responsive text size */}
                                <p className="text-stone-600 text-sm sm:text-base md:text-lg">{location.date}</p> {/* Responsive text size */}
                            </>
                        ) : (
                            <div className="h-12 flex items-center justify-center">
                                <span className="text-stone-400 text-sm sm:text-base">?????</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
