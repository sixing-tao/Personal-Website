import { Fragment } from 'react'
import siteMetadata from '@/data/siteMetadata'

// Social media icons
const GithubIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="h-4 w-4"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
)

const LinkedinIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="h-4 w-4"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const XIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="h-4 w-4"
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
)

const SOCIALS = [
  {
    platform: 'GitHub',
    handle: 'sixingtao',
    href: siteMetadata.github,
    Icon: GithubIcon,
  },
  {
    platform: 'LinkedIn',
    handle: 'sixingtao',
    href: siteMetadata.linkedin,
    Icon: LinkedinIcon,
  },
  {
    platform: 'X',
    handle: 'sixingtao',
    href: siteMetadata.x,
    Icon: XIcon,
  },
]

export function ProfileCardInfo() {
  return (
    <div className="hidden py-3 md:block md:px-2">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Sixing Tao</h3>
      <h5 className="py-0 text-sm text-gray-500 dark:text-gray-400">
        Exploring Human–AI Interaction
      </h5>
      <div className="mb-1.3 mt-3 space-y-3">
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
          <p className="flex items-center text-xs">Student Researcher @ UDub</p>
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
          <p>Seattle, WA</p>
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
          <a
            className="transition-colors hover:text-blue-600 hover:underline dark:hover:text-blue-400"
            href={`mailto:${siteMetadata.email}`}
          >
            {siteMetadata.email}
          </a>
        </div>
        {/* Call-to-Action */}
        <div className="mt-3 flex flex-col gap-2 text-left">
          <a
            href="mailto:jwwwt7777@gmail.com"
            className="text-primary-500 decoration-primary-500 hover:text-primary-400 hover:decoration-primary-400 text-xs font-medium whitespace-nowrap underline decoration-2 underline-offset-2 transition-colors"
          >
            [Seeking Summer 2026 PM/SWE internship]
          </a>
          <a
            href="/resume.pdf"
            className="text-primary-500 decoration-primary-500 hover:text-primary-400 hover:decoration-primary-400 text-xs font-medium whitespace-nowrap underline decoration-2 underline-offset-2 transition-colors"
          >
            [View Resume]
          </a>
        </div>
        <div className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
          {SOCIALS.map(({ platform, href, Icon }) => (
            <a
              key={platform}
              target="_blank"
              href={href}
              rel="noreferrer"
              className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
