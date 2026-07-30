interface Props {
  children: React.ReactNode
}

export default function Button({ children }: Props) {
  return (
    <button className="rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:scale-105 active:scale-95">
      {children}
    </button>
  )
}
