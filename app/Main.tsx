import Link from '@/components/Link'
import Tag from '@/components/Tag'
import Typewriter from '@/components/Typewriter'
import { ProfileCard } from '@/components/profile-card/ProfileCard'
import { allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  const author = allAuthors.find((p) => p.slug === 'default')

  if (!author) {
    return <div>Author not found</div>
  }

  const { name, avatar, occupation, company, email, github, twitter, linkedin } = author

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {/* Hero Section */}
        <div className="space-y-2 pt-2 pb-8 md:space-y-5">
          <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:space-y-0 xl:gap-x-8">
            {/* Profile Card - Shows first on mobile, right on desktop */}
            <div className="flex flex-col items-center justify-start space-x-2 pt-0 xl:order-2 xl:col-span-1 xl:justify-center xl:pt-1">
              <ProfileCard />
            </div>

            {/* Left Column: Greeting and Content */}
            <div className="xl:col-span-2">
              {/* Greeting */}
              <div>
                <h1 className="text-5xl leading-tight font-extrabold tracking-tight sm:text-6xl md:text-7xl md:leading-tight">
                  <span className="text-green-500 dark:text-green-400">howdy,</span>{' '}
                  <span className="text-yellow-500 dark:text-yellow-400">fellow!</span>{' '}
                  <span className="text-yellow-500 dark:text-yellow-400">👋🏻</span>
                </h1>
                <p className="mt-4 text-2xl leading-9 font-medium text-gray-900 dark:text-gray-100">
                  i'm {name} - a{' '}
                  <Typewriter
                    texts={['student researcher', 'software engineer', 'product strategist']}
                    speed={100}
                    deleteSpeed={50}
                    pauseTime={2000}
                    className="text-primary-500"
                  />
                </p>
              </div>

              {/* Author MDX Content */}
              <div className="prose dark:prose-invert max-w-none pt-8 pb-8">
                <MDXLayoutRenderer code={author.body.code} />
              </div>
            </div>
          </div>
        </div>
        {/* Latest Posts Section - commented out during build */}
        {/* <div className="pt-8">
          <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 dark:text-gray-100">
            Latest Posts
          </h2>
          Content placeholder - you can add other sections here
        </div> */}
      </div>
    </>
  )
}
