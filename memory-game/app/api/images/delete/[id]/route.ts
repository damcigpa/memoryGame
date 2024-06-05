import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;

    try {
        const deletedItem = await prisma.image.delete({
            where: { id: Number(id) },
        });
        return NextResponse.json(deletedItem, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Item not found or already deleted." }, { status: 500 });
    }
}