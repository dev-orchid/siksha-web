import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { auth } from '@/lib/auth'

export default auth((req) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth

  // Public routes that don't require authentication
  const publicRoutes = ['/sms/login', '/sms/forgot-password', '/sms/reset-password']
  const isPublicRoute = publicRoutes.some((route) => nextUrl.pathname.startsWith(route))

  // SMS routes require authentication
  const isSMSRoute = nextUrl.pathname.startsWith('/sms')

  // API routes that don't require authentication
  const isAuthAPI = nextUrl.pathname.startsWith('/api/auth')

  // If it's an auth API route, allow it
  if (isAuthAPI) {
    return NextResponse.next()
  }

  // If it's a public route and user is logged in, redirect to dashboard
  if (isPublicRoute && isLoggedIn) {
    return NextResponse.redirect(new URL('/sms/dashboard', nextUrl))
  }

  // If it's an SMS route and user is not logged in, redirect to login
  if (isSMSRoute && !isPublicRoute && !isLoggedIn) {
    const loginUrl = new URL('/sms/login', nextUrl)
    loginUrl.searchParams.set('callbackUrl', nextUrl.pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
})

export const config = {
  matcher: [
    // Match SMS routes
    '/sms/:path*',
    // Match API routes except auth
    '/api/:path*',
  ],
}
