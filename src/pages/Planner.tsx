import React from "react";
import { Plus, Calendar, MapPin, Utensils, Camera, Clock } from "lucide-react";
import { EnhancedCard, EnhancedCardContent, EnhancedCardHeader, EnhancedCardTitle } from "@/components/ui/enhanced-card";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import BottomNavigation from "@/components/BottomNavigation";

const Planner = () => {
  const itinerary = [
    {
      time: "9:00 AM",
      activity: "Dassam Falls",
      type: "destination",
      duration: "2 hours",
      icon: "🏞️",
      status: "planned"
    },
    {
      time: "12:00 PM", 
      activity: "Local Tribal Lunch",
      type: "food",
      duration: "1 hour",
      icon: "🍽️", 
      status: "planned"
    },
    {
      time: "2:00 PM",
      activity: "Tribal Museum Visit", 
      type: "culture",
      duration: "2 hours",
      icon: "🏛️",
      status: "suggested"
    },
    {
      time: "5:00 PM",
      activity: "Sunset Photography",
      type: "activity", 
      duration: "1 hour",
      icon: "📸",
      status: "optional"
    }
  ];

  const quickAdd = [
    { name: "Destinations", icon: MapPin, color: "bg-forest" },
    { name: "Food Places", icon: Utensils, color: "bg-tribal" },
    { name: "Activities", icon: Camera, color: "bg-earth" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-primary px-6 pt-12 pb-6">
        <h1 className="font-playfair text-3xl font-bold text-primary-foreground mb-2">
          My Trip Planner
        </h1>
        <p className="text-primary-foreground/80">
          Create your perfect Jharkhand adventure
        </p>
      </div>

      {/* Trip Overview */}
      <div className="px-6 -mt-3 mb-6">
        <EnhancedCard variant="glow">
          <EnhancedCardHeader>
            <EnhancedCardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-tribal" />
                Today's Itinerary
              </div>
              <EnhancedButton variant="outline" size="sm">
                <Plus className="w-4 h-4" />
              </EnhancedButton>
            </EnhancedCardTitle>
          </EnhancedCardHeader>
          <EnhancedCardContent>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-forest">4</div>
                <div className="text-xs text-muted-foreground">Destinations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-tribal">6h</div>
                <div className="text-xs text-muted-foreground">Duration</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-earth">2</div>
                <div className="text-xs text-muted-foreground">Food Stops</div>
              </div>
            </div>
          </EnhancedCardContent>
        </EnhancedCard>
      </div>

      {/* Quick Add */}
      <div className="px-6 mb-6">
        <h2 className="text-lg font-semibold mb-3">Quick Add to Trip</h2>
        <div className="flex gap-3">
          {quickAdd.map((item, index) => {
            const Icon = item.icon;
            return (
              <EnhancedButton
                key={index}
                variant="card"
                className={`${item.color} text-white flex-col h-20 flex-1`}
              >
                <Icon className="w-5 h-5 mb-1" />
                <span className="text-xs">{item.name}</span>
              </EnhancedButton>
            );
          })}
        </div>
      </div>

      {/* Timeline */}
      <div className="px-6 mb-8">
        <h2 className="heading-secondary mb-4">Timeline</h2>
        <div className="space-y-4">
          {itinerary.map((item, index) => (
            <EnhancedCard 
              key={index} 
              variant="3d" 
              hoverable
              className={`${
                item.status === 'planned' ? 'border-l-4 border-l-forest' :
                item.status === 'suggested' ? 'border-l-4 border-l-tribal' :
                'border-l-4 border-l-muted-foreground'
              }`}
            >
              <EnhancedCardContent className="p-4">
                <div className="flex items-center gap-4">
                  {/* Time & Icon */}
                  <div className="text-center">
                    <div className="text-lg font-bold text-foreground">{item.time}</div>
                    <div className="text-2xl mt-1">{item.icon}</div>
                  </div>

                  {/* Activity Details */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-playfair text-lg font-semibold">
                          {item.activity}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            item.type === 'destination' ? 'bg-forest/10 text-forest' :
                            item.type === 'food' ? 'bg-tribal/10 text-tribal' :
                            item.type === 'culture' ? 'bg-earth/10 text-earth' :
                            'bg-secondary text-foreground'
                          }`}>
                            {item.type}
                          </span>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="w-3 h-3" />
                            {item.duration}
                          </div>
                        </div>
                      </div>
                      
                      <div className={`px-2 py-1 rounded-full text-xs ${
                        item.status === 'planned' ? 'bg-forest text-white' :
                        item.status === 'suggested' ? 'bg-tribal text-white' :
                        'bg-muted text-muted-foreground'
                      }`}>
                        {item.status}
                      </div>
                    </div>

                    <div className="flex gap-2 mt-3">
                      <EnhancedButton variant="outline" size="sm" className="flex-1">
                        Edit
                      </EnhancedButton>
                      <EnhancedButton variant="glow" size="sm" className="flex-1">
                        Navigate
                      </EnhancedButton>
                    </div>
                  </div>
                </div>
              </EnhancedCardContent>
            </EnhancedCard>
          ))}
        </div>
      </div>

      {/* Auto-Generated Suggestions */}
      <div className="px-6 mb-8">
        <EnhancedCard variant="tribal">
          <EnhancedCardHeader>
            <EnhancedCardTitle className="text-center">
              ✨ AI-Generated Suggestions
            </EnhancedCardTitle>
          </EnhancedCardHeader>
          <EnhancedCardContent className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Based on your preferences, we recommend adding these experiences to your trip
            </p>
            <div className="space-y-3">
              <div className="bg-secondary/30 p-3 rounded-xl text-left">
                <div className="font-medium">Evening Tribal Dance Performance</div>
                <div className="text-sm text-muted-foreground">6:30 PM • Cultural Center • 1.5 hours</div>
              </div>
              <div className="bg-secondary/30 p-3 rounded-xl text-left">
                <div className="font-medium">Local Handicraft Shopping</div>
                <div className="text-sm text-muted-foreground">3:00 PM • Tribal Market • 1 hour</div>
              </div>
            </div>
            <EnhancedButton variant="glow" className="w-full mt-4">
              Add All Suggestions
            </EnhancedButton>
          </EnhancedCardContent>
        </EnhancedCard>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Planner;