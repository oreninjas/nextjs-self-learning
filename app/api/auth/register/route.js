import userModel from "@/models/user.model";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    await userModel.create({
      email,
      password,
    });

    return NextResponse.json(
      { message: "User has been created" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "something went wrong !!" },
      { status: 500 }
    );
  }
}
