import React from "react";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { EnhancedCard, EnhancedCardContent, EnhancedCardHeader, EnhancedCardTitle } from "@/components/ui/enhanced-card";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import tribalMascot from "@/assets/tribal-mascot.jpg";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [isLogin, setIsLogin] = React.useState(true);
  const navigate = useNavigate();

  const handleContinueAsGuest = () => {
    navigate("/");
  };

  const handleLogin = () => {
    // Mock login - in real app, add authentication logic
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-hero tribal-pattern flex flex-col">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-tribal/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-forest/20 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative flex-1 flex flex-col items-center justify-center p-6">
        {/* Mascot */}
        <div className="mb-8 text-center">
          <div className="relative inline-block">
            <img 
              src={tribalMascot} 
              alt="Jharkhand Tourism Mascot" 
              className="w-32 h-32 rounded-full shadow-tribal float"
            />
            <div className="absolute -top-2 -right-2 bg-tribal text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
              👋
            </div>
          </div>
          <h1 className="font-playfair text-4xl font-bold text-white mt-4 mb-2">
            Welcome to Jharkhand!
          </h1>
          <p className="text-white/80 text-lg">
            Discover the beauty of tribal culture
          </p>
        </div>

        {/* Login/Signup Card */}
        <EnhancedCard variant="glow" className="w-full max-w-sm">
          <EnhancedCardHeader>
            <EnhancedCardTitle className="text-center">
              {isLogin ? "Sign In" : "Create Account"}
            </EnhancedCardTitle>
          </EnhancedCardHeader>
          <EnhancedCardContent className="space-y-4">
            {/* Email/Phone Input */}
            <div className="space-y-2">
              <Label htmlFor="email">Email or Phone</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email or phone"
                  className="pl-10 rounded-xl h-12"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="pl-10 pr-10 rounded-xl h-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Main Action Button */}
            <EnhancedButton 
              variant="glow" 
              size="lg" 
              className="w-full"
              onClick={handleLogin}
            >
              {isLogin ? "Sign In" : "Sign Up"}
              <ArrowRight className="w-5 h-5 ml-2" />
            </EnhancedButton>

            {/* Toggle Login/Signup */}
            <div className="text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
              </button>
            </div>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-3 gap-3">
              <EnhancedButton variant="outline" size="lg" className="p-0">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                  G
                </div>
              </EnhancedButton>
              <EnhancedButton variant="outline" size="lg" className="p-0">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  f
                </div>
              </EnhancedButton>
              <EnhancedButton variant="outline" size="lg" className="p-0">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold">
                  🍎
                </div>
              </EnhancedButton>
            </div>
          </EnhancedCardContent>
        </EnhancedCard>

        {/* Continue as Guest */}
        <EnhancedButton 
          variant="ghost" 
          className="mt-6 text-white hover:bg-white/10"
          onClick={handleContinueAsGuest}
        >
          Continue as Guest
        </EnhancedButton>
      </div>

      {/* Footer */}
      <div className="text-center pb-8">
        <p className="text-white/60 text-sm">
          By continuing, you agree to our Terms & Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Login;