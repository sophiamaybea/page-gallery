'use client'

import { useState } from 'react'
import { Editor } from '@/components/editor/editor'

export default function Studio() {
  return (
    <div className="min-h-screen bg-[#F5F0E8]">
      <div className="max-w-[680px] mx-auto px-8 py-12">
        <div className="mb-12">
          <h1 className="font-serif text-4xl tracking-tighter">Studio</h1>
          <p className="text-[#C8BFA8] mt-2">The living writing desk. Type and watch the ink orbit.</p>
        </div>
        
        <Editor />
      </div>
    </div>
  )
}