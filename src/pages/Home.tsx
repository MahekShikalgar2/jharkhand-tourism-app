import React from "react";
import { Search, MapPin, Calendar, Camera, DollarSign } from "lucide-react";
import { EnhancedCard, EnhancedCardContent, EnhancedCardHeader, EnhancedCardTitle } from "@/components/ui/enhanced-card";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { Input } from "@/components/ui/input";
import BottomNavigation from "@/components/BottomNavigation";
import waterfallHero from "@/assets/waterfall-hero.jpg";
import tribalFestival from "@/assets/tribal-festival.jpg";

const Home = () => {
  const currencies = ["USD", "EUR", "INR", "GBP", "JPY"];
  const [selectedCurrency, setSelectedCurrency] = React.useState("INR");

  const attractions = [
    {
      title: "Dassam Falls",
      image: waterfallHero,
      description: "Majestic 144ft waterfall in pristine forest",
    },
    {
      title: "Tribal Culture",
      image: tribalFestival,
      description: "Experience rich tribal heritage and festivals",
    },
  ];

  const quickActions = [
    { icon: MapPin, label: "AR Map", color: "bg-forest" },
    { icon: Calendar, label: "Plan Trip", color: "bg-tribal" },
    { icon: Camera, label: "Gallery", color: "bg-earth" },
  ];

  return (
    <div className="min-h-screen bg-background tribal-pattern pb-20">
      {/* Header */}
      <div className="bg-gradient-hero px-6 pt-12 pb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="font-playfair text-3xl font-bold text-white mb-1">
              Explore Jharkhand
            </h1>
            <p className="text-white/80 text-sm">Discover hidden gems & culture</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
            <Search className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Currency Calculator */}
        <EnhancedCard variant="glow" className="mb-4">
          <EnhancedCardHeader className="pb-3">
            <EnhancedCardTitle className="text-lg flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-tribal" />
              Currency Calculator
            </EnhancedCardTitle>
          </EnhancedCardHeader>
          <EnhancedCardContent>
            <div className="flex gap-2 mb-3">
              {currencies.map((currency) => (
                <EnhancedButton
                  key={currency}
                  size="sm"
                  variant={selectedCurrency === currency ? "glow" : "outline"}
                  onClick={() => setSelectedCurrency(currency)}
                >
                  {currency}
                </EnhancedButton>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <Input 
                placeholder="Amount" 
                type="number" 
                className="bg-white/50 border-0 rounded-xl" 
              />
              <span className="text-2xl">→</span>
              <div className="bg-primary text-primary-foreground px-4 py-2 rounded-xl font-semibold">
                ₹ 83.50
              </div>
            </div>
          </EnhancedCardContent>
        </EnhancedCard>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input 
            placeholder="Search attractions, culture, food..." 
            className="pl-12 bg-white/90 border-0 rounded-2xl h-12 shadow-soft"
          />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-6 -mt-4 mb-6">
        <div className="flex gap-4 justify-center">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <EnhancedButton
                key={index}
                variant="card"
                className={`flex-col h-20 w-20 ${action.color} text-white hover:scale-110`}
              >
                <Icon className="w-6 h-6 mb-1" />
                <span className="text-xs">{action.label}</span>
              </EnhancedButton>
            );
          })}
        </div>
      </div>

      {/* Attractions Carousel */}
      <div className="px-6 mb-8">
        <h2 className="heading-secondary mb-4">Popular Attractions</h2>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {attractions.map((attraction, index) => (
            <EnhancedCard 
              key={index} 
              variant="3d" 
              hoverable
              className="min-w-[280px] overflow-hidden"
            >
              <div className="relative h-48">
                <img 
                  src={attraction.image} 
                  alt={attraction.title}
                  className="w-full h-full object-cover rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-playfair text-xl font-semibold mb-1">
                    {attraction.title}
                  </h3>
                  <p className="text-sm opacity-90">{attraction.description}</p>
                </div>
              </div>
            </EnhancedCard>
          ))}
        </div>
      </div>

      {/* Features Grid */}
      <div className="px-6 mb-8">
        <h2 className="heading-secondary mb-4">Discover More</h2>
        <div className="grid grid-cols-2 gap-4">
          <EnhancedCard variant="tribal" hoverable className="p-6 text-center">
            <div className="text-4xl mb-2">🏛️</div>
            <h3 className="font-semibold mb-1">Heritage Sites</h3>
            <p className="text-sm text-muted-foreground">Ancient temples & monuments</p>
          </EnhancedCard>
          
          <EnhancedCard variant="tribal" hoverable className="p-6 text-center">
            <div className="text-4xl mb-2">🎭</div>
            <h3 className="font-semibold mb-1">Folk Arts</h3>
            <p className="text-sm text-muted-foreground">Traditional crafts & dances</p>
          </EnhancedCard>
          
          <EnhancedCard variant="tribal" hoverable className="p-6 text-center">
            <div className="text-4xl mb-2">🌲</div>
            <h3 className="font-semibold mb-1">Eco Tours</h3>
            <p className="text-sm text-muted-foreground">Wildlife & nature trails</p>
          </EnhancedCard>
          
          <EnhancedCard variant="tribal" hoverable className="p-6 text-center">
            <div className="text-4xl mb-2">🏔️</div>
            <h3 className="font-semibold mb-1">Adventure</h3>
            <p className="text-sm text-muted-foreground">Trekking & camping</p>
          </EnhancedCard>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Home;