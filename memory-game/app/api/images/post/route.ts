import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { revalidatePath } from "next/cache";
import fs from "node:fs/promises";
const prism = new PrismaClient();
export async function POST(req: Request) {

    try {
        const formData = await req.formData();
        const file = formData.get("file") as File;
        const arrayBuffer = await file.arrayBuffer();
        const buffer = new Uint8Array(arrayBuffer);
        await fs.writeFile(`./public/upload/${new Date(Date.now()).getTime()}${file.name}`, buffer);
        const result = await prism.image.create({
            data: {  
                url: `/upload/${new Date(Date.now()).getTime()}${file.name}`
            }
        });
        revalidatePath("/");

        return NextResponse.json({ img: result })
    } catch (e) {
        console.error(e);
        return NextResponse.json(e)
    }
}