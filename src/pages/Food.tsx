import React from "react";
import { Star, Clock, MapPin, Utensils } from "lucide-react";
import { EnhancedCard, EnhancedCardContent, EnhancedCardHeader, EnhancedCardTitle } from "@/components/ui/enhanced-card";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import BottomNavigation from "@/components/BottomNavigation";

const Food = () => {
  const dishes = [
    {
      name: "Dhuska",
      type: "Snack",
      description: "Deep-fried rice and lentil pancake, crispy and golden",
      rating: 4.8,
      cookTime: "20 mins",
      difficulty: "Easy",
      icon: "🥞",
      ingredients: ["Rice", "Lentils", "Spices"]
    },
    {
      name: "Malpua", 
      type: "Dessert",
      description: "Sweet pancakes soaked in sugar syrup with cardamom",
      rating: 4.6,
      cookTime: "30 mins", 
      difficulty: "Medium",
      icon: "🥮",
      ingredients: ["Flour", "Milk", "Sugar", "Cardamom"]
    },
    {
      name: "Handia",
      type: "Beverage",
      description: "Traditional fermented rice drink with herbs",
      rating: 4.4,
      cookTime: "3 days",
      difficulty: "Hard", 
      icon: "🍺",
      ingredients: ["Rice", "Herbs", "Yeast"]
    },
    {
      name: "Fish Curry",
      type: "Main Course", 
      description: "Spicy fish curry with mustard oil and local spices",
      rating: 4.9,
      cookTime: "45 mins",
      difficulty: "Medium",
      icon: "🐟",
      ingredients: ["Fish", "Mustard Oil", "Spices", "Tomatoes"]
    }
  ];

  const foodCategories = [
    { name: "Street Food", icon: "🍡", color: "bg-tribal" },
    { name: "Tribal Cuisine", icon: "🏺", color: "bg-forest" },
    { name: "Sweets", icon: "🍯", color: "bg-earth" },
    { name: "Beverages", icon: "🥤", color: "bg-warm-sand" }
  ];

  const restaurants = [
    { name: "Tribal Kitchen", location: "Ranchi Main Road", rating: 4.5, distance: "2.1 km" },
    { name: "Heritage Dhaba", location: "Circular Road", rating: 4.3, distance: "1.8 km" },
    { name: "Forest View Restaurant", location: "Kanke Road", rating: 4.7, distance: "3.2 km" }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-warm px-6 pt-12 pb-6">
        <h1 className="font-playfair text-3xl font-bold text-accent-foreground mb-2">
          Traditional Food Guide
        </h1>
        <p className="text-accent-foreground/80">
          Discover authentic Jharkhand flavors
        </p>
      </div>

      {/* Food Categories */}
      <div className="px-6 -mt-3 mb-6">
        <div className="grid grid-cols-2 gap-4">
          {foodCategories.map((category, index) => (
            <EnhancedButton 
              key={index}
              variant="card"
              className={`${category.color} text-white h-20 flex-col justify-center hover:scale-105`}
            >
              <div className="text-2xl mb-1">{category.icon}</div>
              <span className="text-sm font-medium">{category.name}</span>
            </EnhancedButton>
          ))}
        </div>
      </div>

      {/* Featured Dishes */}
      <div className="px-6 mb-8">
        <h2 className="heading-secondary mb-4">Traditional Dishes</h2>
        <div className="space-y-4">
          {dishes.map((dish, index) => (
            <EnhancedCard key={index} variant="3d" hoverable>
              <EnhancedCardContent className="p-6">
                <div className="flex items-start gap-4">
                  {/* Dish Icon */}
                  <div className="bg-gradient-card rounded-2xl p-4 text-4xl">
                    {dish.icon}
                  </div>

                  {/* Dish Details */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-playfair text-xl font-semibold mb-1">
                          {dish.name}
                        </h3>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="bg-tribal/10 text-tribal text-xs px-2 py-1 rounded-full">
                            {dish.type}
                          </span>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                            {dish.rating}
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-3">
                      {dish.description}
                    </p>

                    <div className="flex items-center gap-4 mb-4 text-xs">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-muted-foreground" />
                        <span>{dish.cookTime}</span>
                      </div>
                      <div className={`px-2 py-1 rounded-full ${
                        dish.difficulty === 'Easy' ? 'bg-forest/10 text-forest' :
                        dish.difficulty === 'Medium' ? 'bg-tribal/10 text-tribal' :
                        'bg-earth/10 text-earth'
                      }`}>
                        {dish.difficulty}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-medium text-muted-foreground">Ingredients:</span>
                      <div className="flex flex-wrap gap-1">
                        {dish.ingredients.slice(0, 3).map((ingredient, i) => (
                          <span key={i} className="text-xs bg-secondary px-2 py-1 rounded-full">
                            {ingredient}
                          </span>
                        ))}
                        {dish.ingredients.length > 3 && (
                          <span className="text-xs text-muted-foreground">+{dish.ingredients.length - 3} more</span>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <EnhancedButton variant="glow" size="sm" className="flex-1">
                        <Utensils className="w-4 h-4 mr-2" />
                        Recipe
                      </EnhancedButton>
                      <EnhancedButton variant="outline" size="sm">
                        <MapPin className="w-4 h-4 mr-2" />
                        Find Near Me
                      </EnhancedButton>
                    </div>
                  </div>
                </div>
              </EnhancedCardContent>
            </EnhancedCard>
          ))}
        </div>
      </div>

      {/* Nearby Restaurants */}
      <div className="px-6 mb-8">
        <h2 className="heading-secondary mb-4">Recommended Restaurants</h2>
        <EnhancedCard variant="glow">
          <EnhancedCardHeader>
            <EnhancedCardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-tribal" />
              Near Your Location
            </EnhancedCardTitle>
          </EnhancedCardHeader>
          <EnhancedCardContent className="space-y-3">
            {restaurants.map((restaurant, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-secondary/30 rounded-xl border-tribal/20 border">
                <div>
                  <h4 className="font-semibold text-sm">{restaurant.name}</h4>
                  <p className="text-xs text-muted-foreground mb-1">{restaurant.location}</p>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                      <span className="text-xs">{restaurant.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">• {restaurant.distance}</span>
                  </div>
                </div>
                <EnhancedButton variant="outline" size="sm">
                  Directions
                </EnhancedButton>
              </div>
            ))}
          </EnhancedCardContent>
        </EnhancedCard>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Food;