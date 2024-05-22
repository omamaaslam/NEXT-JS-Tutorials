import { NextRequest, NextResponse } from 'next/server'

export default function middleware(request:any) {
  console.log(request);
}
