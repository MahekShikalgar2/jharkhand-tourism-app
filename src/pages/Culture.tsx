import React from "react";
import { Music, Users, Camera, Calendar } from "lucide-react";
import { EnhancedCard, EnhancedCardContent, EnhancedCardHeader, EnhancedCardTitle } from "@/components/ui/enhanced-card";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import BottomNavigation from "@/components/BottomNavigation";
import tribalFestival from "@/assets/tribal-festival.jpg";

const Culture = () => {
  const festivals = [
    {
      name: "Sarhul Festival", 
      season: "Spring",
      description: "Worship of nature and trees by tribal communities",
      image: tribalFestival,
      date: "March - April",
      status: "upcoming"
    },
    {
      name: "Karma Festival",
      season: "Monsoon", 
      description: "Dance and music celebrating prosperity",
      image: tribalFestival,
      date: "August - September",
      status: "featured"
    },
    {
      name: "Jani Shikar",
      season: "Winter",
      description: "Traditional hunting festival of Ho tribe",
      image: tribalFestival,
      date: "December - January",
      status: "popular"
    }
  ];

  const crafts = [
    { name: "Dokra Art", icon: "🏺", skill: "Metal casting" },
    { name: "Sohrai Painting", icon: "🎨", skill: "Wall art" },
    { name: "Bamboo Craft", icon: "🎋", skill: "Weaving" },
    { name: "Stone Carving", icon: "🗿", skill: "Sculpture" }
  ];

  const dances = [
    { name: "Jhumar", performers: "Group dance" },
    { name: "Paika", performers: "Warrior dance" },
    { name: "Chhau", performers: "Mask dance" },
    { name: "Mundari", performers: "Folk dance" }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-earth px-6 pt-12 pb-6">
        <h1 className="font-playfair text-3xl font-bold text-primary-foreground mb-2">
          Culture & Festivals
        </h1>
        <p className="text-primary-foreground/80">
          Immerse in rich tribal heritage and traditions
        </p>
      </div>

      {/* Featured Festivals */}
      <div className="px-6 -mt-3 mb-8">
        <h2 className="heading-secondary mb-4">Tribal Festivals</h2>
        <div className="space-y-4">
          {festivals.map((festival, index) => (
            <EnhancedCard key={index} variant="3d" hoverable className="overflow-hidden">
              <div className="relative">
                <img 
                  src={festival.image} 
                  alt={festival.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    festival.status === 'featured' ? 'bg-tribal text-white' :
                    festival.status === 'upcoming' ? 'bg-forest text-white' :
                    'bg-earth text-white'
                  }`}>
                    {festival.status}
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-playfair text-2xl font-bold mb-2">
                    {festival.name}
                  </h3>
                  <p className="text-sm opacity-90 mb-3">{festival.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {festival.date}
                      </div>
                      <div className="bg-white/20 px-2 py-1 rounded-full">
                        {festival.season}
                      </div>
                    </div>
                    <EnhancedButton variant="glow" size="sm">
                      <Camera className="w-4 h-4 mr-2" />
                      Gallery
                    </EnhancedButton>
                  </div>
                </div>
              </div>
            </EnhancedCard>
          ))}
        </div>
      </div>

      {/* Traditional Crafts */}
      <div className="px-6 mb-8">
        <h2 className="heading-secondary mb-4">Traditional Crafts</h2>
        <div className="grid grid-cols-2 gap-4">
          {crafts.map((craft, index) => (
            <EnhancedCard key={index} variant="tribal" hoverable className="text-center p-6">
              <div className="text-4xl mb-3">{craft.icon}</div>
              <h3 className="font-playfair text-lg font-semibold mb-1">
                {craft.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">{craft.skill}</p>
              <EnhancedButton variant="outline" size="sm" className="w-full">
                Learn More
              </EnhancedButton>
            </EnhancedCard>
          ))}
        </div>
      </div>

      {/* Folk Dances */}
      <div className="px-6 mb-8">
        <h2 className="heading-secondary mb-4">Folk Dances & Music</h2>
        <EnhancedCard variant="glow">
          <EnhancedCardHeader>
            <EnhancedCardTitle className="flex items-center gap-2">
              <Music className="w-6 h-6 text-tribal" />
              Traditional Performances
            </EnhancedCardTitle>
          </EnhancedCardHeader>
          <EnhancedCardContent className="space-y-3">
            {dances.map((dance, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-secondary/50 rounded-xl">
                <div>
                  <h4 className="font-semibold">{dance.name}</h4>
                  <p className="text-sm text-muted-foreground">{dance.performers}</p>
                </div>
                <EnhancedButton variant="outline" size="sm">
                  <Users className="w-4 h-4 mr-2" />
                  Watch
                </EnhancedButton>
              </div>
            ))}
          </EnhancedCardContent>
        </EnhancedCard>
      </div>

      {/* Cultural Calendar */}
      <div className="px-6 mb-8">
        <EnhancedCard variant="3d">
          <EnhancedCardHeader>
            <EnhancedCardTitle className="flex items-center gap-2">
              <Calendar className="w-6 h-6 text-forest" />
              Cultural Calendar 2024
            </EnhancedCardTitle>
          </EnhancedCardHeader>
          <EnhancedCardContent>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between items-center py-2 border-b border-border/50">
                <span>Sarhul Festival</span>
                <span className="text-sm text-muted-foreground">Mar 15-17</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border/50">
                <span>Karma Festival</span>
                <span className="text-sm text-muted-foreground">Aug 22-24</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span>Jani Shikar</span>
                <span className="text-sm text-muted-foreground">Dec 10-12</span>
              </div>
            </div>
            <EnhancedButton variant="glow" className="w-full">
              Add to My Calendar
            </EnhancedButton>
          </EnhancedCardContent>
        </EnhancedCard>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Culture;