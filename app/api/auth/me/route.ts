import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verify } from "jsonwebtoken";
import { jwtDecode } from "jwt-decode";

// route get user login
export const GET = async () => {
  try {
    // init cookies
    const cookieStore = cookies();
    // get token from cookies
    const token = cookieStore.get("access-token");

    // validate token
    if (!token) {
      return NextResponse.json(
        {
          message: "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }

    // verify token
    verify(token.value, process.env.JWT_SECRET || "");

    // decode jwt token
    const tokenDecode = jwtDecode(token.value);

    return NextResponse.json(
      {
        user: tokenDecode,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Unauthorized!",
      },
      { status: 401 }
    );
  }
};
