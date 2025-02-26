'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import { PERSONAL_INFO } from './data/personal'

export function Header() {
  return (
    <header className="mb-8 flex items-center gap-4">
      <img src={PERSONAL_INFO.image} alt="" className='w-15 h-15 rounded-full'/>
      <div>
        <Link href="/" className="text-black dark:text-white">
          {PERSONAL_INFO.name}
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Machine Learning Engineer
        </TextEffect>
      </div>
    </header>
  )
}
