import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export default async function EternalDesk() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  return (
    <main className="min-h-screen bg-[#F5F0E8] text-[#1A1A18] flex flex-col items-center justify-center p-8">
      <div className="max-w-[680px] text-center">
        <div className="w-16 h-16 bg-[#3D5A3E] mx-auto mb-8 rounded-sm" />
        
        <h1 className="font-serif text-6xl tracking-tighter mb-6">
          The Eternal Desk
        </h1>
        
        <p className="text-xl text-[#C8BFA8] mb-12 max-w-md mx-auto">
          A serious literary sanctuary where the writing comes first.
        </p>

        <div className="flex flex-col gap-4 max-w-xs mx-auto">
          <a 
            href="/studio" 
            className="px-8 py-4 bg-[#3D5A3E] text-[#F5F0E8] rounded hover:bg-[#2A3F2B] transition-all text-lg"
          >
            Enter the Studio
          </a>
          
          <a 
            href="/garden" 
            className="px-8 py-4 border border-[#D4CCBA] text-[#1A1A18] rounded hover:bg-[#EDE8DC] transition-all"
          >
            Visit the Garden
          </a>
        </div>

        <p className="mt-16 text-sm text-[#C8BFA8]">
          Built by LUMINA ULTIMATE · The internet just leveled up
        </p>
      </div>
    </main>
  )
}