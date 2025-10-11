import { Fragment } from 'react'
import SocialIcon from '@/components/social-icons'
import siteMetadata from '@/data/siteMetadata'

export function ProfileCardInfo() {
  return (
    <div className="hidden py-3 md:block md:px-4">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Sixing Tao</h3>
      <h5 className="py-1 text-sm text-gray-500 dark:text-gray-400">
        Exploring Human–AI Interaction
      </h5>
      <div className="mt-3 mb-2 space-y-3">
        <div className="flex items-center text-xs text-gray-700 dark:text-gray-200">
          <div className="mr-2 flex h-4 w-4 items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
          </div>
          <p className="flex items-center px-1 text-xs">Student Researcher @ UDub</p>
        </div>
        <div className="flex items-center text-xs text-gray-700 dark:text-gray-200">
          <div className="mr-2 flex h-4 w-4 items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <p className="px-1">Seattle, WA</p>
        </div>
        <div className="flex items-center text-xs text-gray-700 dark:text-gray-200">
          <div className="mr-2 flex h-4 w-4 items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>
          <a className="px-1" href={`mailto:${siteMetadata.email}`}>
            {siteMetadata.email}
          </a>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200">
          <SocialIcon kind="github" href={siteMetadata.github} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
          <SocialIcon kind="x" href={siteMetadata.x} />
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
        </div>
      </div>
    </div>
  )
}
