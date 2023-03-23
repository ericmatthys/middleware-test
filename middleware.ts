import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: [
    // Exclude api routes and all static files (paths that contain '.')
    '/((?!api|.*\\.).*)',
  ],
};

export async function middleware(request: NextRequest): Promise<NextResponse> {
  console.log(request.url);

  const url = request.nextUrl.clone();

  if (url.pathname === '/') {
    url.pathname = '/rewrite';
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}