import React from "react";
import { MapPin, Navigation, Eye, Clock } from "lucide-react";
import { EnhancedCard, EnhancedCardContent, EnhancedCardHeader, EnhancedCardTitle } from "@/components/ui/enhanced-card";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import BottomNavigation from "@/components/BottomNavigation";
import mapPin3D from "@/assets/map-pin-3d.jpg";

const Explore = () => {
  const attractions = [
    {
      name: "Dassam Falls",
      location: "Taimara Village",
      distance: "45 km",
      time: "5 min ahead",
      type: "hidden waterfall",
      rating: 4.8,
      image: mapPin3D,
    },
    {
      name: "Jagannath Temple",
      location: "Ranchi",
      distance: "12 km", 
      time: "15 min ahead",
      type: "heritage temple",
      rating: 4.6,
      image: mapPin3D,
    },
    {
      name: "Tribal Museum",
      location: "Morabadi",
      distance: "8 km",
      time: "2 min ahead", 
      type: "cultural center",
      rating: 4.7,
      image: mapPin3D,
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-primary px-6 pt-12 pb-6">
        <h1 className="font-playfair text-3xl font-bold text-primary-foreground mb-2">
          Interactive AR Map
        </h1>
        <p className="text-primary-foreground/80">
          Discover hidden gems with augmented reality
        </p>
      </div>

      {/* AR Map Section */}
      <div className="px-6 -mt-3 mb-6">
        <EnhancedCard variant="glow" className="overflow-hidden">
          <div className="relative h-64 bg-gradient-to-br from-forest/20 to-tribal/20 flex items-center justify-center">
            <img 
              src={mapPin3D} 
              alt="3D AR Map" 
              className="w-24 h-24 float"
            />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2">
              <div className="flex items-center gap-2 text-sm">
                <Navigation className="w-4 h-4 text-tribal" />
                <span className="font-medium">AR Mode Active</span>
              </div>
            </div>
            <div className="absolute bottom-4 right-4">
              <EnhancedButton variant="glow" size="sm">
                <Eye className="w-4 h-4 mr-2" />
                Switch to 3D
              </EnhancedButton>
            </div>
          </div>
        </EnhancedCard>
      </div>

      {/* Quick Actions */}
      <div className="px-6 mb-6">
        <div className="grid grid-cols-2 gap-4">
          <EnhancedButton variant="earth" className="justify-start p-4 h-auto">
            <div className="text-left">
              <div className="font-semibold">Nearest Attractions</div>
              <div className="text-sm opacity-80">Within 5 km radius</div>
            </div>
          </EnhancedButton>
          <EnhancedButton variant="glow" className="justify-start p-4 h-auto">
            <div className="text-left">
              <div className="font-semibold">Hidden Gems</div>
              <div className="text-sm opacity-80">Local recommendations</div>
            </div>
          </EnhancedButton>
        </div>
      </div>

      {/* Attractions List */}
      <div className="px-6 mb-8">
        <h2 className="heading-secondary mb-4">Nearby Attractions</h2>
        <div className="space-y-4">
          {attractions.map((attraction, index) => (
            <EnhancedCard key={index} variant="3d" hoverable>
              <EnhancedCardContent className="p-4">
                <div className="flex items-center gap-4">
                  <img 
                    src={attraction.image} 
                    alt={attraction.name}
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-playfair text-lg font-semibold">
                          {attraction.name}
                        </h3>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {attraction.location} • {attraction.distance}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-xs bg-tribal text-white px-2 py-1 rounded-full">
                          ⭐ {attraction.rating}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <div className="bg-accent/10 text-accent text-xs px-2 py-1 rounded-full flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {attraction.time} {attraction.type}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <EnhancedButton variant="glow" size="sm" className="flex-1">
                        <Navigation className="w-4 h-4 mr-2" />
                        Navigate
                      </EnhancedButton>
                      <EnhancedButton variant="outline" size="sm">
                        <Eye className="w-4 h-4" />
                      </EnhancedButton>
                    </div>
                  </div>
                </div>
              </EnhancedCardContent>
            </EnhancedCard>
          ))}
        </div>
      </div>

      {/* AR Guide Tooltip */}
      <div className="fixed top-1/2 left-6 transform -translate-y-1/2 z-40">
        <div className="bg-tribal text-white p-3 rounded-2xl shadow-glow max-w-48 relative">
          <div className="text-sm font-medium mb-1">AR Guide Active</div>
          <div className="text-xs opacity-90">Point your camera to discover hidden attractions nearby!</div>
          <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-l-tribal border-t-4 border-b-4 border-t-transparent border-b-transparent" />
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Explore;