import { SizeProps } from "@/interfaces/common"
import { cn } from "@/lib/utils"

interface Props {
  size: SizeProps
  setSize: (s: SizeProps) => void
}

export default function SideSelector({ size, setSize }: Props) {
  return (
    <div className="flex gap-4">
      {[...Object.values(SizeProps)].map((cur) => (
        <label
          key={cur}
          className={cn(
            "flex items-center gap-2 rounded-sm px-3 py-1",
            size == cur ? "bg-amber-500" : "bg-gray-500"
          )}
        >
          <input
            type="radio"
            value={cur}
            name="size"
            className={`rounded-xl px-5 py-3 ${
              size === SizeProps.SMALL ? "bg-orange-500" : "bg-white/10"
            }`}
            onChange={() => setSize(cur)}
          />
          <span>{cur}</span>
        </label>
      ))}
      {/* <button
        onClick={() => setSize(SizeProps.MEDIUM)}
        className={`rounded-xl px-5 py-3 ${
          size === SizeProps.MEDIUM ? "bg-orange-500" : "bg-white/10"
        }`}
      >
        MEDIUM
      </button> */}
    </div>
  )
}
