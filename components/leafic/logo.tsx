import Image from "next/image"
import { cn } from "@/lib/utils"

// The asset is the white "LEAFiC" pixel wordmark on a forest-green square with
// generous padding. We render it in a wide tile and use object-cover so the
// empty vertical padding is cropped and the full wordmark stays visible.
export function Logo({
  className,
  height = 32,
  ratio = 3.2,
}: {
  className?: string
  height?: number
  ratio?: number
}) {
  const width = Math.round(height * ratio)
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center overflow-hidden rounded-md bg-[#2D4F1E]",
        className,
      )}
      style={{ height, width }}
    >
      <Image
        src="/leafic-logo.webp"
        alt="Leafic"
        width={width}
        height={height}
        className="pixelated h-full w-full object-cover object-center"
        priority
      />
    </span>
  )
}

// Horizontal lockup is just the wordmark tile (the asset already reads "LEAFiC").
export function LogoLockup({
  className,
  height = 32,
}: {
  className?: string
  height?: number
}) {
  return <Logo height={height} className={className} />
}
