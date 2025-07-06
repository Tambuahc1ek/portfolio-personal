import Backendless from "@/lib/backendless"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email, github, instagram, linkedin, whatsapp } = body

    const result = await Backendless.Data.of("contactInfo").save({
      email,
      github,
      instagram,
      linkedin,
      whatsapp,
    })

    return NextResponse.json({
      message: "Contact info saved successfully",
      result,
    })
  } catch (error) {
    console.error("❌ Error saving contact info:", error)
    return NextResponse.json({ message: "Failed to save contact info" }, { status: 500 })
  }
}
