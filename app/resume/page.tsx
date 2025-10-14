import ResumeWrapper from './ResumeWrapper'
import siteMetadata from '@/data/siteMetadata'
import fs from 'fs'
import path from 'path'

import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: 'Resume | Trillium Smith',
    description: siteMetadata.title,
    url: './resume',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: './resume',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
}

async function getServerSideProps() {
  const publicDirectory = path.join(process.cwd(), 'public')
  try {
    const files = fs.readdirSync(publicDirectory)
    const pdfFiles = files.filter((file) => path.extname(file).toLowerCase() === '.pdf')
    return pdfFiles
  } catch (err) {
    return []
  }
}

export default async function Page() {
  const files = await getServerSideProps()
  const filename = files[0]

  return (
    <div className="relative">
      <div className="mb-1 flex w-full flex-row justify-end">
        <button className="focus:ring-ring text-primary border-primary-500 hover:bg-primary-500 ml-0 inline-flex max-w-full items-center rounded-l-2xl border bg-transparent px-2.5 py-0.5 text-xs font-semibold backdrop-blur-md transition-colors duration-150 hover:text-white focus:ring-2 focus:ring-offset-2 focus:outline-none sm:ml-0 sm:text-sm md:ml-0 md:text-base">
          <a href={`/${filename}`} download>
            Download File
          </a>
        </button>
        <button className="focus:ring-ring text-primary border-primary-500 hover:bg-primary-500 ml-0 inline-flex max-w-full items-center rounded-r-2xl border bg-transparent px-2.5 py-0.5 text-xs font-semibold backdrop-blur-md transition-colors duration-150 hover:text-white focus:ring-2 focus:ring-offset-2 focus:outline-none sm:ml-0 sm:text-sm md:ml-0 md:text-base">
          <a href={`/${filename}`} target="_blank" rel="noopener noreferrer">
            View in Native
          </a>
        </button>
      </div>
      <ResumeWrapper filename={filename} />
      <div className="mt-0 flex w-full flex-row justify-end">
        <span className="text-primary text-sm font-medium">Version: OCT 25</span>
      </div>
    </div>
  )
}
