import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
const prism = new PrismaClient();

export async function GET(request) {
   const resp = await prism.user.findMany();
   return NextResponse.json({ user: resp })
}