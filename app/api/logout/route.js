

import { serialize } from "cookie";
import { NextResponse } from "next/server";

// Notice the function definition:
export async function POST(request) {
const {OutsideJWT} =request.cookies

if(!OutsideJWT) NextResponse.json({message: "no token"}, {status:401})


    const serialized = serialize("OutsideJWT", null, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 0,
        path: "/",
      });
      const response = { message: "Salida de sesion exitosa" };
      return new Response(JSON.stringify(response), {
        status: 200,
        headers: { "Set-Cookie": serialized },
      });


}
// NODE_ENV: development
// JWT_SECRET:STRAPIUSER
