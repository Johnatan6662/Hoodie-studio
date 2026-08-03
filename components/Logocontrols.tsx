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
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl">
      <h2 className="mb-6 text-xl font-bold text-white">Logo Settings</h2>

      <div className="space-y-8">
        <div>
          <div className="mb-3 flex items-center justify-between">
            <span className="font-medium text-zinc-300">Logo Size</span>

            <span className="rounded-lg bg-orange-500 px-3 py-1 text-sm font-semibold text-white">
              {size}px
            </span>
          </div>


          <input
            type="range"
            min={40}
            max={220}
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            className="h-2 w-full cursor-pointer accent-orange-500"
          />
        </div>

        <div>
          <div className="mb-3 flex items-center justify-between">
            <span className="font-medium text-zinc-300">Rotation</span>

            <span className="rounded-lg bg-orange-500 px-3 py-1 text-sm font-semibold text-white">
              {rotation}°
            </span>
          </div>

          <input
            type="range"
            min={0}
            max={360}
            value={rotation}
            onChange={(e) => setRotation(Number(e.target.value))}
            className="h-2 w-full cursor-pointer accent-orange-500"
          />
        </div>
      </div>
    </div>
  )
}
