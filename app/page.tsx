'use client'

import { motion } from 'framer-motion'
import { PenTool, Leaf, Compass } from 'lucide-react'

export default function EternalDesk() {
  return (
    <div className="min-h-screen bg-[#F5F0E8] text-[#1A1A18] overflow-hidden">
      {/* Hero */}
      <div className="relative h-screen flex items-center justify-center px-8">
        <div className="absolute inset-0 bg-[radial-gradient(#D4CCBA_0.8px,transparent_1px)] bg-[length:4px_4px]" />
        
        <div className="relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-3 mb-8 px-6 py-2 border border-[#D4CCBA] rounded-full">
            <div className="w-2 h-2 bg-[#3D5A3E] rounded-full animate-pulse" />
            <span className="text-sm tracking-[0.2em] text-[#C8BFA8]">EST. 2026</span>
          </div>

          <h1 className="font-serif text-[92px] leading-[0.9] tracking-tighter mb-8">
            The Eternal<br />Desk
          </h1>
          
          <p className="max-w-md mx-auto text-2xl text-[#C8BFA8] mb-16">
            A serious literary sanctuary.<br />The writing comes first.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/studio" className="group px-14 py-5 bg-[#3D5A3E] text-[#F5F0E8] text-lg rounded flex items-center justify-center gap-3 hover:bg-black transition-all">
              Enter the Studio
              <PenTool className="w-5 h-5 group-hover:rotate-12 transition" />
            </a>
            
            <a href="#gallery" className="px-14 py-5 border border-[#3D5A3E] text-lg rounded flex items-center justify-center gap-3 hover:bg-[#EDE8DC] transition-all">
              Explore the Garden
            </a>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="text-xs tracking-[0.3em] text-[#C8BFA8] mb-2">SCROLL TO BEGIN</div>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="w-px h-12 bg-[#D4CCBA]" />
        </div>
      </div>

      {/* Gallery Section */}
      <div id="gallery" className="max-w-6xl mx-auto px-8 py-24">
        <div className="text-center mb-16">
          <div className="inline text-xs tracking-[0.2em] text-[#C8BFA8]">THE GARDEN</div>
          <h2 className="font-serif text-6xl tracking-tighter mt-4">Pieces in Bloom</h2>
          <p className="mt-4 text-xl text-[#C8BFA8]">Quiet appreciation. No numbers. Just craft.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[1,2,3,4].map((i) => (
            <div key={i} className="group bg-[#EDE8DC] p-12 rounded hover:-translate-y-1 transition-all cursor-pointer">
              <div className="text-sm text-[#C8BFA8]">MARCH 2026</div>
              <div className="font-serif text-4xl tracking-tight mt-4 group-hover:text-[#3D5A3E] transition">Field Notes #{i}</div>
              <div className="mt-6 text-[#1A1A18]/80 leading-relaxed">
                The river remembers every stone it has carried. I am learning to do the same with words.
              </div>
              <div className="mt-8 flex items-center gap-2 text-sm">
                <div className="w-6 h-px bg-[#D4CCBA]" /> READ
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-[#D4CCBA] py-16 text-center text-sm text-[#C8BFA8]">
        Built with radical craft by LUMINA ULTIMATE · No metrics. No noise. Just the desk.
      </div>
    </div>
  )
}