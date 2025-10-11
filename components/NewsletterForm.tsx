import React from 'react'

interface NewsletterFormProps {
  title?: string
}

const NewsletterForm: React.FC<NewsletterFormProps> = ({
  title = 'Subscribe to our newsletter',
}) => {
  return (
    <div className="rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
      <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
      <p className="mb-4 text-gray-600 dark:text-gray-400">
        Newsletter functionality is currently disabled.
      </p>
    </div>
  )
}

export default NewsletterForm
export const BlogNewsletterForm = NewsletterForm
