import { jwt, sign } from "jsonwebtoken";
import { serialize } from "cookie";
import { NextResponse } from "next/server";

// Notice the function definition:
export async function POST(request) {
  const body = await request.json();
  const { identifier, password } = body;
  if (identifier !== "admin" || password !== "test1234") {
    return NextResponse.json(
      { message: "Usuario o contraseña incorrecto" },
      { status: 401 }
    );
  }
  const secret = process.env.JWT_SECRET || "secret";
  const token = sign(
    {
      identifier,
    },
    secret,
    {
      expiresIn: 60 * 60 * 24 * 30,
    }
  );

  const serialized = serialize("OutsideJWT", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 1000 * 60 * 60 * 24 * 30,
    path: "/",
  });

  const response = { message: "Inicio de sesion exitoso" };
  return new Response(JSON.stringify(response), {
    status: 200,
    headers: { "Set-Cookie": serialized },
  });
}
// NODE_ENV: development
// JWT_SECRET:STRAPIUSER
