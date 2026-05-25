import Image from '@/components/Image'
import SocialIcon from '@/components/social-icons'
import { allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import siteMetadata from '@/data/siteMetadata'

export default function Home({ posts: _posts }) {
  const author = allAuthors.find((p) => p.slug === 'default')

  if (!author) {
    return <div>Author not found</div>
  }

  return (
    <div className="pt-6 pb-16">
      {/* ── Mobile header: fully centered ── */}
      <div className="mb-6 flex flex-col items-center text-center md:hidden">
        {/* Photo */}
        <div className="relative h-28 w-28 overflow-hidden rounded-full">
          <Image
            src={author.avatar ?? '/static/images/avatar.png'}
            alt={author.name}
            fill
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
          />
        </div>

        {/* Name */}
        <h1 className="mt-4 text-3xl font-bold text-gray-900 dark:text-gray-100">{author.name}</h1>

        {/* Affiliations */}
        <div className="mt-2 flex flex-col gap-0.5">
          {author.occupation && (
            <p className="text-sm leading-tight text-[#374151] dark:text-[#D1D5DB]">
              <a
                href="https://www.cs.washington.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              >
                {author.occupation}
              </a>
            </p>
          )}
          {author.company && (
            <p className="text-sm leading-tight text-[#46505F] dark:text-[#A9B0BA]">
              <a
                href="https://www.washington.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              >
                {author.company}
              </a>
            </p>
          )}
          <p className="text-sm leading-tight text-[#5E6675] dark:text-[#848B97]">
            <a
              href="https://depts.washington.edu/acelab/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            >
              ACE Lab
            </a>
            {' · '}
            <a
              href="https://palettelab-nus.github.io/PaletteLab/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            >
              Palette Lab
            </a>
          </p>
        </div>

        {/* Separator + icons */}
        <hr className="mt-4 mb-3 w-full border-gray-200 dark:border-gray-700" />
        <div className="flex gap-5">
          <SocialIcon kind="mail" href={`mailto:sixint@uw.edu`} size={4} />
          <SocialIcon kind="github" href={siteMetadata.github} size={4} />
          <SocialIcon kind="googlescholar" href={siteMetadata.googlescholar} size={4} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={4} />
          <SocialIcon kind="x" href={siteMetadata.x} size={4} />
        </div>
      </div>

      {/* ── Desktop: two-column layout ── */}
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-10">
        {/* Left: bio content */}
        <div className="min-w-0 flex-1">
          {/* Welcome heading */}
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">Welcome! 👋🏻</h2>
          <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 [&>*:first-child]:mt-0">
            <MDXLayoutRenderer code={author.body.code} />
          </div>
        </div>

        {/* Right sidebar */}
        <div className="hidden w-52 flex-shrink-0 flex-col items-start gap-3 md:flex">
          {/* Square photo */}
          <div className="relative aspect-square w-full overflow-hidden rounded-xl">
            <Image
              src={author.avatar ?? '/static/images/avatar.png'}
              alt={author.name}
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              className="rounded-xl"
            />
          </div>

          {/* Name + affiliation: grouped tight */}
          <div className="flex flex-col gap-0.5">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{author.name}</h1>
            <div className="flex flex-col gap-0.5">
              {author.occupation && (
                <p className="text-sm leading-tight text-[#374151] dark:text-[#D1D5DB]">
                  <a
                    href="https://www.cs.washington.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  >
                    {author.occupation}
                  </a>
                </p>
              )}
              {author.company && (
                <p className="text-sm leading-tight text-[#46505F] dark:text-[#A9B0BA]">
                  <a
                    href="https://www.washington.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  >
                    {author.company}
                  </a>
                </p>
              )}
              <p className="text-sm leading-tight text-[#5E6675] dark:text-[#848B97]">
                <a
                  href="https://depts.washington.edu/acelab/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  ACE Lab
                </a>
                {' · '}
                <a
                  href="https://palettelab-nus.github.io/PaletteLab/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  Palette Lab
                </a>
              </p>
            </div>
          </div>

          {/* Separator */}
          <hr className="w-full border-gray-200 dark:border-gray-700" />

          {/* Social links */}
          <div className="-mt-1 flex flex-col gap-1.5">
            {/* Row 1: email icon + explicit address */}
            <span className="flex items-center gap-1.5">
              <SocialIcon kind="mail" href="mailto:sixint@uw.edu" size={4} />
              <a
                href="mailto:sixint@uw.edu"
                className="hover:text-primary-500 dark:hover:text-primary-400 text-sm text-gray-700 transition-colors dark:text-gray-200"
              >
                sixint[at]uw[dot]edu
              </a>
            </span>
            {/* Row 2: icon-only */}
            <div className="flex items-center gap-3">
              <SocialIcon kind="github" href={siteMetadata.github} size={4} />
              <SocialIcon kind="googlescholar" href={siteMetadata.googlescholar} size={4} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={4} />
              <SocialIcon kind="x" href={siteMetadata.x} size={4} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
