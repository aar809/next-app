import { NextRequest, NextResponse } from "next/server";
import schema from './schema';
import { prisma } from "@/prisma/client";

// interface Props {
//     params: {id:number}
// }

export async function GET(
    request: NextRequest) {
    const users = await prisma.user.findMany();

    // if (params.id > 10)
    //     return NextResponse.json({ error: 'User not found' }, { status: 404 })

    return NextResponse.json(users)
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json({ error: validation.error.errors }, { status: 400 });
    }
    //Validate
    //if invalid, return 400
    //else, return
    // if (!body.name) {
    //     return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    // }
    return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}

