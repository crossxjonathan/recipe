import { NextResponse } from 'next/server' 

export function middleware(request) {
  return NextResponse.redirect(new URL('/auth/login', request.url))
}
 

export const config = {
  matcher: '/dashboard/profile/my-recipe',
}