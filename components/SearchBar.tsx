"use client"

import { Search } from "lucide-react"
import { useState } from "react"
import SearchDropdown from "./SearchDropdown"

export default function SearchBar() {
  const [keyword, setKeyword] = useState("")

  return (
    <div className="relative w-96">
      <div className="flex items-center rounded-2xl bg-zinc-800 px-4 py-3">
        <Search size={18} />

        <input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search hoodie..."
          className="ml-3 w-full bg-transparent outline-none"
        />
      </div>

      <SearchDropdown keyword={keyword} />
    </div>
  )
}
