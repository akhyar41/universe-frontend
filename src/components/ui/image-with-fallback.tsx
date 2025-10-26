import { cn } from "@/lib/utils"
import React, { useEffect, useState } from "react"

export const ImageWithFallback = ({ src, alt, "alt-fallback": altFallback, className, ...props }: {
  src?: string,
  alt?: string,
  "alt-fallback"?: string,
  className?: string
} & React.HTMLAttributes<HTMLDivElement>) => {

  const [imgSrc, setImgSrc] = useState(src || undefined)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    setImgSrc(src)
    setIsError(!src)
  }, [src])


  return (
    <div
      className={cn(
        "relative overflow-hidden flex items-center justify-center rounded-md bg-muted",
        className
      )}
      {...props}
    >
      {!isError ? (
        <img src={imgSrc}
             alt={alt}
             className="absolute h-full w-full min-w-fit object-contain"
             onError={() => {
               setImgSrc(undefined)
               setIsError(true)
             }}
        />
      ) : (
        <span className="text-xs">{altFallback || alt}</span>
      )}
    </div>
  )
}
