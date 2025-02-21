import { NextRequest, NextResponse } from "next/server";
import schema from '../schema';
import { prisma } from "@/prisma/client";
// interface Props {
//     params: {id:number}
// }

export async function GET(
    request: NextRequest,
    { params }: { params: { id: number } }) {
    const users = await prisma.user.findMany();

    // if (params.id > 10)
    //     return NextResponse.json({ error: 'User not found' }, { status: 404 })

    return NextResponse.json(users)
}

export async function PUT(request: NextRequest,
    { params }: { params: { id: number } }) {
    //validate request body
    // if invalid, return 400
    const body = await request.json();
    schema.safeParse(body);
    const validation = schema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json({ error: validation.error.errors }, { status: 400 });
    }

    if (params.id > 10) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }
    // fetch user with given id
    //if doesn't exist, return 404 error
    // update user
    return NextResponse.json({ id: 1, name: body.name })
    // return updated user
}

export function DELETE(
    request: NextRequest,
    { params }: { params: { id: number } }) {
    if (params.id > 10)
        return NextResponse.json({ error: 'User not found' }, { status: 404 })

    //fetch user with given id
    //if doesn't exist, return 404 error
    //delete user
    //return 204 status code
    return NextResponse.json({})
}
