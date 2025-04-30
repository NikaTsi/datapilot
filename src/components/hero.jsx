import React from 'react'

export default function Hero() {
  return (
    <header className="flex flex-col w-full items-center gap-5 bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to DataPilot</h1>
        <p className="text-lg md:text-xl mb-6">Your smart data assistant for powerful analytics.</p>
        <button className="w-[200px] bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 active:bg-gray-300 transition duration-300 ">Get Started</button>
      </header>
  )
}
