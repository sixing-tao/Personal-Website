'use client'

import { clsx } from 'clsx'
import type React from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'
import Image from '@/components/Image'
import { ProfileCardInfo } from '@/components/profile-card/ProfileCardInfo'
import siteMetadata from '@/data/siteMetadata'

export function ProfileCard() {
  const ref = useRef<HTMLDivElement>(null)
  const [style, setStyle] = useState<React.CSSProperties>({})

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (!ref.current || window.innerWidth < 1280) return

    const { clientX, clientY } = e
    const { width, height, x, y } = ref.current.getBoundingClientRect()
    const mouseX = Math.abs(clientX - x)
    const mouseY = Math.abs(clientY - y)
    const rotateMin = -15
    const rotateMax = 15
    const rotateRange = rotateMax - rotateMin

    const rotate = {
      x: rotateMax - (mouseY / height) * rotateRange,
      y: rotateMin + (mouseX / width) * rotateRange,
    }

    setStyle({
      transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
    })
  }, [])

  const onMouseLeave = useCallback(() => {
    setStyle({ transform: 'rotateX(0deg) rotateY(0deg)' })
  }, [])

  useEffect(() => {
    const { current } = ref
    if (!current) return
    current.addEventListener('mousemove', onMouseMove)
    current.addEventListener('mouseleave', onMouseLeave)
    return () => {
      if (!current) return
      current.removeEventListener('mousemove', onMouseMove)
      current.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [onMouseLeave, onMouseMove])

  return (
    <div
      className="z-10 mb-8 w-80 scale-100 transition-all duration-200 ease-out hover:z-50 md:mb-0 md:hover:scale-[1.15]"
      style={{ perspective: '600px' }}
      ref={ref}
    >
      <div
        style={style}
        className={clsx(
          'flex flex-col overflow-hidden rounded-lg transition-all duration-200 ease-out',
          'bg-white shadow-lg dark:bg-gray-800 dark:shadow-gray-900',
          'outline-1 outline-gray-100 outline-solid dark:outline-gray-600'
        )}
      >
        <div className="relative w-full" style={{ aspectRatio: '1/1' }}>
          <Image
            src="/static/images/avatar.png"
            alt="Profile"
            fill
            style={{
              objectPosition: 'center center',
              objectFit: 'cover',
            }}
            loading="eager"
          />
        </div>
        <ProfileCardInfo />
        {/* Mobile Call-to-Action */}
        <div className="block px-4 py-1 text-center md:hidden">
          <a
            href={`mailto:${siteMetadata.emailLink}`}
            className="text-primary-500 decoration-primary-500 hover:text-primary-400 hover:decoration-primary-400 text-xs font-medium whitespace-nowrap underline decoration-2 underline-offset-2 transition-colors"
          >
            [Seeking Summer 2026 PM/SWE internship]
          </a>
          <br />
          <a
            href="/resume.pdf"
            className="text-primary-500 decoration-primary-500 hover:text-primary-400 hover:decoration-primary-400 text-xs font-medium whitespace-nowrap underline decoration-2 underline-offset-2 transition-colors"
          >
            [View Resume]
          </a>
        </div>
        <span className="h-1.5 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600" />
      </div>
    </div>
  )
}
