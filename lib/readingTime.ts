/**
 * Calculate reading time for a given text
 * Based on average reading speed of 200-250 words per minute
 * @param text - The text content to calculate reading time for
 * @returns Object with reading time in minutes and word count
 */
export function calculateReadingTime(text: string): { minutes: number; wordCount: number } {
  // Remove markdown syntax and HTML tags for accurate word count
  const cleanText = text
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/`[^`]*`/g, '') // Remove inline code
    .replace(/#{1,6}\s+/g, '') // Remove markdown headers
    .replace(/\*\*([^*]+)\*\*/g, '$1') // Remove bold markdown
    .replace(/\*([^*]+)\*/g, '$1') // Remove italic markdown
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove markdown links
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, '') // Remove markdown images
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/\s+/g, ' ') // Replace multiple spaces with single space
    .trim()

  // Count words (split by whitespace and filter out empty strings)
  const wordCount = cleanText.split(/\s+/).filter((word) => word.length > 0).length

  // Average reading speed: 225 words per minute
  const wordsPerMinute = 225
  const minutes = Math.ceil(wordCount / wordsPerMinute)

  return {
    minutes: Math.max(1, minutes), // At least 1 minute
    wordCount,
  }
}

/**
 * Format reading time for display
 * @param minutes - Number of minutes
 * @returns Formatted reading time string
 */
export function formatReadingTime(minutes: number): string {
  if (minutes === 1) {
    return '1 min read'
  }
  return `${minutes} min read`
}
