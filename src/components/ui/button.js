import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-white font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400",
  {
    variants: {
      variant: {
        default: "bg-gray-900 hover:bg-gray-800 active:bg-gray-700",
        destructive: "bg-red-600 hover:bg-red-700 active:bg-red-800",
        outline: "border-2 border-gray-900 bg-transparent text-gray-900 hover:bg-gray-900 hover:text-white",
        secondary: "bg-gray-600 hover:bg-gray-700 active:bg-gray-800",
        ghost: "bg-transparent text-gray-900 hover:bg-gray-100 active:bg-gray-200",
        link: "text-gray-900 underline-offset-4 hover:underline bg-transparent",
      },
      size: {
        default: "h-12 px-6 py-3 text-base",
        sm: "h-10 px-4 py-2 text-sm",
        lg: "h-14 px-8 py-4 text-lg",
        icon: "h-12 w-12 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = "Button";

export { Button, buttonVariants };