"use client"

interface Props {
  onUpload: (url: string) => void
}

export default function UploadLogo({ onUpload }: Props) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]

    if (!file) return

    const url = URL.createObjectURL(file)

    onUpload(url)
  }

  return (
    <div>
      <h3 className="mb-4 text-xl font-bold">Upload Logo</h3>

      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="block w-full rounded-xl border border-white/10 bg-white/10 p-3"
      />
    </div>
  )
}
