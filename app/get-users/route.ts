import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";
import { connectDB } from "@/lib/mongoose";

export async function GET(req: NextRequest) {
    console.log(`entered get-users with ${JSON.stringify(req,null,2)}`)
    try {
        // 1. Ensure a DB connection (cached for serverless)
        await connectDB();
    
        const users = await User.find();
        console.log(users);
    
        // 3. Return as JSON
        return NextResponse.json(users, { status: 200 });
      } catch (error) {
        console.error("Error fetching users:", error);
        return NextResponse.json(
          { message: "Failed to fetch users" },
          { status: 500 }
        );
      }
}