import 'css/tailwind.css'
import 'pliny/search/algolia.css'
import 'remark-github-blockquote-alert/alert.css'

import { Space_Grotesk } from 'next/font/google'
import { Analytics, AnalyticsConfig } from 'pliny/analytics'
import { SearchProvider, SearchConfig } from 'pliny/search'
import Header from '@/components/Header'
import SectionContainer from '@/components/SectionContainer'
import Footer from '@/components/Footer'
import siteMetadata from '@/data/siteMetadata'
import { ThemeProviders } from './theme-providers'
import { Metadata } from 'next'

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
    },
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const basePath = process.env.BASE_PATH || ''

  return (
    <html
      lang={siteMetadata.language}
      className={`${space_grotesk.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${basePath}/apple-touch-icon.png?v=${Date.now()}`}
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href={`${basePath}/apple-touch-icon.png?v=${Date.now()}`}
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href={`${basePath}/apple-touch-icon.png?v=${Date.now()}`}
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href={`${basePath}/apple-touch-icon.png?v=${Date.now()}`}
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href={`${basePath}/apple-touch-icon.png?v=${Date.now()}`}
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href={`${basePath}/apple-touch-icon.png?v=${Date.now()}`}
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href={`${basePath}/apple-touch-icon.png?v=${Date.now()}`}
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href={`${basePath}/apple-touch-icon.png?v=${Date.now()}`}
      />
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href={`${basePath}/apple-touch-icon.png?v=${Date.now()}`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${basePath}/static/favicons/favicon-32x32.png?v=${Date.now()}`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${basePath}/static/favicons/favicon-16x16.png?v=${Date.now()}`}
      />
      <link rel="icon" href={`${basePath}/favicon.ico?v=${Date.now()}`} />
      <link rel="icon" href={`${basePath}/favicon-new.ico?v=${Date.now()}`} />
      <link
        rel="icon"
        type="image/png"
        href={`${basePath}/static/favicons/safari-favicon.png?v=${Date.now()}`}
      />
      <link rel="manifest" href={`${basePath}/static/favicons/site.webmanifest`} />
      <link
        rel="mask-icon"
        href={`${basePath}/static/favicons/safari-pinned-tab.svg`}
        color="#199B40"
      />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta
        name="msapplication-TileImage"
        content={`${basePath}/static/favicons/mstile-150x150.png?v=${Date.now()}`}
      />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Sixing Tao" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
      <link rel="alternate" type="application/rss+xml" href={`${basePath}/feed.xml`} />
      <body className="bg-white pl-[calc(100vw-100%)] text-black antialiased dark:bg-gray-950 dark:text-white">
        <ThemeProviders>
          <Analytics analyticsConfig={siteMetadata.analytics as AnalyticsConfig} />
          <SectionContainer>
            <SearchProvider searchConfig={siteMetadata.search as SearchConfig}>
              <Header />
              <main className="mb-auto">{children}</main>
            </SearchProvider>
            <Footer />
          </SectionContainer>
        </ThemeProviders>
      </body>
    </html>
  )
}
