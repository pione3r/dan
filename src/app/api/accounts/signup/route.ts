import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username")!;

  const findUser = await prisma.user.findFirst({ where: { username } });

  if (!findUser) return NextResponse.json({ findUser });

  return new Response(JSON.stringify({ message: "중복 아이디 에러" }), {
    status: 409,
  });
}

export async function POST(request: Request) {
  const req = await request.json();
  const newUser = await req;

  const findUser = await prisma.user.findFirst({ where: { ...newUser } });

  if (findUser) {
    return new Response(JSON.stringify({ message: "중복 아이디 에러" }), {
      status: 409,
    });
  } else {
    await prisma.user.create({
      data: newUser,
    });

    return new Response(
      JSON.stringify({ message: "아이디가 생성되었습니다." }),
      { status: 201 }
    );
  }
}
