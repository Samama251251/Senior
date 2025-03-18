"use client"

import { useState } from "react"
import Image from "next/image"

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("Home")

  const tabs = ["Home", "Audience", "Behavior", "Conversions"]

  return (
    <header className="border-b border-gray-800 bg-[#0a0f1e]">
      <div className="container mx-auto flex items-center justify-between p-4">
        <nav className="flex space-x-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === tab ? "border-b-2 border-blue-500 text-white" : "text-gray-400 hover:text-gray-200"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <button className="rounded-full p-2 text-gray-400 hover:bg-gray-800 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button className="rounded-full p-2 text-gray-400 hover:bg-gray-800 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
          </button>
          <div className="h-8 w-8 overflow-hidden rounded-full">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="User avatar"
              width={32}
              height={32}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

