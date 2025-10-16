import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 })
    }

    // Here you would typically integrate with your email service provider
    // For now, we'll just log the email and return success
    console.log('Newsletter subscription:', email)

    // TODO: Integrate with your preferred email service:
    // - Mailchimp
    // - ConvertKit
    // - Buttondown
    // - Klaviyo
    // - Revue
    // - EmailOctopus
    // - Beehiiv

    return NextResponse.json({ message: 'Successfully subscribed to newsletter' }, { status: 200 })
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
