'use client'

import dynamic from 'next/dynamic'

const Resume = dynamic(() => import('@/components/Resume'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center p-8">
      <p>Loading PDF viewer...</p>
    </div>
  ),
})

export default function ResumeWrapper({ filename }: { filename: string }) {
  return <Resume filename={filename} />
}
