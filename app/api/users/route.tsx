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
    const user = await prisma.user.findUnique({
        where: { email: body.email }
    })
    if (user) {
        return NextResponse.json({ error: "User already exists" }, { status: 400 })
    }

    const newUser = await prisma.user.create({
        data: {
            name: body.name,
            email: body.email
        }
    })
    return NextResponse.json(newUser, { status: 201 });
}
