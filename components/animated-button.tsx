"use client"

import type React from "react"

import { type ButtonHTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  fullWidth?: boolean
  children: React.ReactNode
}

const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, variant = "primary", size = "md", fullWidth = false, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-md font-medium transition-all duration-300 hover:shadow-md active:scale-[0.98]",
          variant === "primary" && "bg-gradient-to-r from-black to-neutral-800 text-white",
          variant === "secondary" && "bg-gradient-to-r from-neutral-200 to-neutral-100 text-black",
          variant === "outline" &&
            "border border-neutral-200 bg-transparent hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-50",
          size === "sm" && "px-3 py-1.5 text-sm",
          size === "md" && "px-4 py-2",
          size === "lg" && "px-6 py-3 text-lg",
          fullWidth && "w-full",
          className,
        )}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        <span className="absolute inset-0 bg-white/20 translate-y-full hover:translate-y-0 transition-transform duration-300" />
      </button>
    )
  },
)

AnimatedButton.displayName = "AnimatedButton"

export { AnimatedButton }

