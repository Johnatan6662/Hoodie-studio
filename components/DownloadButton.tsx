"use client"

import { toPng } from "html-to-image"

interface Props {
  target: React.RefObject<HTMLDivElement | null>
}

export default function DownloadButton({ target }: Props) {
  async function download() {
    if (!target.current) return

    const data = await toPng(target.current)

    const link = document.createElement("a")

    link.download = "hoodie-design.png"
    link.href = data
    link.click()
  }

  return (
    <button
      onClick={download}
      className="mt-6 rounded-xl bg-orange-500 px-6 py-3 font-bold"
    >
      Download Design
    </button>
  )
}
