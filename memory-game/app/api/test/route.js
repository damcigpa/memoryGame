import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
const prism = new PrismaClient();

export async function GET(request) {
   const resp = await prism.user.findUnique({ where: { id: 1 } });
   return NextResponse.json({user: resp.name})
}