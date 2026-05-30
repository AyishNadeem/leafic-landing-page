import { cn } from "@/lib/utils"

// pixel-art leaf rendered from a small grid:
// "." empty · "g" leaf body · "v" vein/highlight · "s" stem
const GRID = [
  ".....g.....",
  "....ggg....",
  "...ggvgg...",
  "..gggvggg..",
  ".ggggvgggg.",
  "gggggvggggg",
  "gggggvggggg",
  ".ggggvgggg.",
  "..gggvggg..",
  "...ggvgg...",
  "....gvg....",
  ".....v.....",
  ".....s.....",
  ".....s.....",
]

const COLORS: Record<string, string> = {
  g: "#2D4F1E", // forest green
  v: "#7BA05B", // lighter vein
  s: "#E07A5F", // terracotta stem
}

export function PixelLeaf({
  className,
  unit = 4,
}: {
  className?: string
  unit?: number
}) {
  const cols = Math.max(...GRID.map((r) => r.length))
  const rows = GRID.length
  const rects: { x: number; y: number; fill: string }[] = []

  GRID.forEach((row, y) => {
    row.split("").forEach((ch, x) => {
      if (COLORS[ch]) rects.push({ x, y, fill: COLORS[ch] })
    })
  })

  return (
    <svg
      width={cols * unit}
      height={rows * unit}
      viewBox={`0 0 ${cols} ${rows}`}
      className={cn("pixelated shrink-0", className)}
      role="img"
      aria-label="Pixel art leaf"
    >
      {rects.map((r, i) => (
        <rect key={i} x={r.x} y={r.y} width={1.02} height={1.02} fill={r.fill} />
      ))}
    </svg>
  )
}
