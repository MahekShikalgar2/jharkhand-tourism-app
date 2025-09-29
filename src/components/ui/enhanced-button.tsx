import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all duration-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-gradient-primary text-primary-foreground hover:shadow-glow hover:scale-105",
        glow: "bg-gradient-warm text-accent-foreground shadow-glow hover:shadow-tribal hover:scale-105",
        earth: "bg-gradient-earth text-primary-foreground hover:shadow-soft hover:scale-105",
        outline: "border-2 border-tribal/30 bg-transparent hover:bg-tribal/10 hover:border-tribal/60",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        card: "bg-gradient-card text-card-foreground shadow-card hover:shadow-tribal hover:scale-105",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-8 rounded-lg px-3",
        lg: "h-12 rounded-xl px-8 text-base",
        xl: "h-14 rounded-2xl px-10 text-lg font-semibold",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const EnhancedButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
EnhancedButton.displayName = "EnhancedButton";

export { EnhancedButton, buttonVariants };