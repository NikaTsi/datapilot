import React from 'react'

export default function Testimonials() {
  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10">What Our Users Say</h2>

      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        <div className="flex flex-col justify-center items-center bg-white shadow-md p-6 rounded-lg max-w-sm">
          <p className="italic">"DataPilot transformed how we understand our metrics. Highly recommend!"</p>
          <p className="mt-2 font-semibold">— Alex J.</p>
        </div>
        
        <div className="flex flex-col justify-center items-center bg-white shadow-md p-6 rounded-lg max-w-sm">
          <p className="italic">"The integration was seamless, and the dashboard is very intuitive."</p>
          <p className="mt-2 font-semibold">— Maria K.</p>
        </div>
      </div>

    </section>
  )
}
