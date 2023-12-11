import jwt from "jsonwebtoken";
import { NextResponse, NextRequest } from "next/server";

export const middleware = async (request: NextRequest) => {
  // init cookie
  const token = request.cookies.get("access-token");

  // validate token
  if (!token) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }
};

// matcher
export const config = {
  matcher: [
    "/admin/dashboard",
    "/admin/products",
    "/admin/user",
    "/admin/categories",
  ],
};
