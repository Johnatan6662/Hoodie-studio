"use client"

interface Props {
  text: string
  setText: (text: string) => void

  color: string
  setColor: (color: string) => void
}

export default function TextEditor({ text, setText, color, setColor }: Props) {
  return (
    <div className="space-y-5">
      <h3 className="text-xl font-bold">Custom Text</h3>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write something..."
        className="w-full rounded-xl bg-white/10 p-4"
      />

      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  )
}
