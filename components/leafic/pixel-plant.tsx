import React from 'react'

const PLANTS: Record<string, { grid: string[]; palette: Record<string, string> }> = {
  monstera: {
    grid: [
      '..ggggg..',
      '.g.....g.',
      'g.......g',
      'g..ggg..g',
      'g.g...g.g',
      'g.g.g.g.g',
      '..g.g.g..',
      '...ggg...',
      '...g.g...',
      '...ppp...',
      '..ppppp..',
      '.........',
    ],
    palette: { g: '#3C6F3E', p: '#7A4E2C' },
  },
  geranium: {
    grid: [
      '...ppp...',
      '..ppppp..',
      '...ppp...',
      '...ggg...',
      '.ggggggg.',
      'ggggggggg',
      '...ggg...',
      '...ggg...',
      '...ggg...',
      '..ppppp..',
      '.ppppp...',
      '.........',
    ],
    palette: { p: '#E6A5B4', g: '#3C6F3E' },
  },
  cactus: {
    grid: [
      '....p....',
      '..ppppp..',
      '...p.p...',
      '..ggggg..',
      '.ggggggg.',
      '.ggggggg.',
      '.ggggggg.',
      '.ggggggg.',
      '...ggg...',
      '...ggg...',
      '..ppppp..',
      '.ppppp...',
      '.........',
    ],
    palette: { p: '#E6A5B4', g: '#5E9A4A' },
  },
  basil: {
    grid: [
      '....g....',
      '...ggg...',
      '..ggggg..',
      '..ggggg..',
      '..ggggg..',
      '...ggg...',
      '...ggg...',
      '...ppp...',
      '..ppppp..',
      '.........',
    ],
    palette: { g: '#4A7C59', p: '#5D4037' },
  },
}

export function PixelPlant({
  shape = 'monstera',
  unit = 10,
  className = '',
}: {
  shape?: string
  unit?: number
  className?: string
}) {
  const plant = PLANTS[shape] || PLANTS.monstera
  const width = Math.max(...plant.grid.map((row) => row.length))
  const height = plant.grid.length

  const rects: { x: number; y: number; fill: string }[] = []
  plant.grid.forEach((row, y) => {
    row.split('').forEach((ch, x) => {
      const fill = plant.palette[ch]
      if (fill) rects.push({ x, y, fill })
    })
  })

  return (
    <div className={`relative ${className}`} style={{ width: unit * width, height: unit * height }}>
      <svg
        role="img"
        width={unit * width}
        height={unit * height}
        viewBox={`0 0 ${width} ${height}`}
        className="pixelated w-full h-full"
      >
        {rects.map((rect, index) => (
          <rect key={`${rect.x}-${rect.y}-${index}`} x={rect.x} y={rect.y} width={1} height={1} fill={rect.fill} />
        ))}
      </svg>
    </div>
  )
}