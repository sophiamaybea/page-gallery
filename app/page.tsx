'use client'

export default function EternalDesk() {
  return (
    <div className="min-h-screen bg-[#F5F0E8] flex items-center justify-center p-8">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 bg-[#3D5A3E] mx-auto mb-8 rounded" />
        
        <h1 className="font-serif text-6xl tracking-tighter text-[#1A1A18] mb-6">
          The Eternal Desk
        </h1>
        
        <p className="text-xl text-[#C8BFA8] mb-12">
          A serious literary sanctuary where the writing comes first.
        </p>

        <button 
          onClick={() => alert('Studio coming in next push — the living editor with speed-weight typing and orbiting ink particles is being added right now.')}
          className="px-12 py-4 bg-[#3D5A3E] text-[#F5F0E8] text-lg rounded hover:bg-[#2A3F2B] transition-all"
        >
          Enter the Studio
        </button>

        <p className="mt-16 text-sm text-[#C8BFA8]">
          LUMINA ULTIMATE · Deploying live
        </p>
      </div>
    </div>
  )
}