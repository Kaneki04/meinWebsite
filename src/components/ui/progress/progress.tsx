import * as React from "react"

interface ProgressProps {
  value: number
  className?: string
}

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ value, className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
        className={`h-2 w-full bg-gray-700 rounded-full overflow-hidden ${className}`}
        {...props}
      >
        <div
          className="h-full bg-[#4CD6D6] rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${value}%` }}
        />
      </div>
    )
  }
)
Progress.displayName = "Progress"
