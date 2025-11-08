import { NextRequest, NextResponse } from "next/server";

export async function GET(_req: NextRequest) {
    console.log(`runtime logs ${new Date()}`);
    
    return new NextResponse(null, {status: 200})
}

// if someone sends GET to the /hello path ^this code runs