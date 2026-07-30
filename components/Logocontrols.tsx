"use client"

interface Props {
  size: number
  setSize: (value: number) => void

  rotation: number
  setRotation: (value: number) => void
}

export default function LogoControls({
  size,
  setSize,
  rotation,
  setRotation,
}: Props) {
  return (
    <div className="space-y-6">
      <div>
        <p className="mb-2 font-semibold">Logo Size</p>

        <input
          type="range"
          min={40}
          max={220}
          value={size}
          onChange={(e) => setSize(Number(e.target.value))}
          className="w-full"
        />
      </div>

      <div>
        <p className="mb-2 font-semibold">Rotation</p>

        <input
          type="range"
          min={0}
          max={360}
          value={rotation}
          onChange={(e) => setRotation(Number(e.target.value))}
          className="w-full"
        />
      </div>
    </div>
  )
}
