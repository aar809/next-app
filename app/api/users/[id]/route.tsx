import { NextRequest, NextResponse } from "next/server";
import schema from '../schema';
import { prisma } from "@/prisma/client";
// interface Props {
//     params: {id:number}
// }

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }) {
    const user = await prisma.user.findUnique({
        where: { id: parseInt(params.id) }
    });

    if (!user)
        return NextResponse.json({ error: 'User not found' }, { status: 404 })

    return NextResponse.json(user);
}

export async function PUT(
    request: NextRequest,
    { params }: { params: { id: string } }) {
    //validate request body
    // if invalid, return 400
    const body = await request.json();
    schema.safeParse(body);
    const validation = schema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json({ error: validation.error.errors }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
        where: { id: parseInt(params.id) }
    })

    if (!user)
        return NextResponse.json(
            { error: "user not found" },
            { status: 404 }
        );

    const updatedUser = await prisma.user.update({
        where: { id: user.id },
        data: {
            name: body.name,
            email: body.email
        }
    })

    // if (parseInt(params.id) > 10) {
    //     return NextResponse.json({ error: 'User not found' }, { status: 404 })
    // }
    // fetch user with given id
    //if doesn't exist, return 404 error
    // update user
    return NextResponse.json(updatedUser)
    // return updated user
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }) {

    const user = await prisma.user.findUnique({
        where: {
            id: (parseInt(params.id))
        }
    })

    if (!user) {
        return NextResponse.json(
            { error: "User not found" },
            { status: 404 })
    }

    await prisma.user.delete({
        where: { id: user.id }
    })

    // if (params.id > 10)
    //     return NextResponse.json({ error: 'User not found' }, { status: 404 })

    //fetch user with given id
    //if doesn't exist, return 404 error
    //delete user
    //return 204 status code
    return NextResponse.json({})
}
