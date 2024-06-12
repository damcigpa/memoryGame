import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import CryptoJS from 'crypto-js';

const prism = new PrismaClient();

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        console.log(formData);
        const name = formData.get("name") as string;
        const pass = formData.get("password") as string;
        const email = formData.get("email") as string;
        const hashedPass = CryptoJS.SHA256(pass).toString();

        const existingUser = await prism.user.findFirst({
            where: { email },
        });

        if (existingUser) {
            throw new Error('Email address already exists');
        }

        const result = await prism.user.create({
            data: {
                email: email,
                name: name,
                pass: hashedPass,
            }
        });

        revalidatePath("/");

        return NextResponse.json({ user: result })
    } catch (e) {
        console.error(e);
        return NextResponse.json(e)
    }
}