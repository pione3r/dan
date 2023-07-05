// middleware.ts
import { type NextRequest, NextResponse } from "next/server";

import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const jwt = await getToken({ req });

  const { pathname } = req.nextUrl;

  if (jwt) {
    if (pathname === "/accounts/signin" || pathname === "/accounts/signup") {
      return NextResponse.redirect(new URL("/", "http://localhost:3000"));
    }
    if (pathname === "/") {
      return NextResponse.rewrite(
        new URL("/dashboard", "http://localhost:3000")
      );
    }
  } else {
    if (pathname === "/") {
      return NextResponse.rewrite(
        new URL("/accounts/signin", "http://localhost:3000")
      );
    }
  }
}

export const config = {
  matcher: [
    /*
     * api (API 라우트)
     * _next/static (정적 파일)
     * _next/image (이미지 최적화 파일)
     * favicon.ico (파비콘 파일)
     * 로 시작하지 않는 모든 요청 경로와 일치합니다.
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
