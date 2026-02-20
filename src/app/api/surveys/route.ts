import { NextRequest, NextResponse } from 'next/server';

// In-memory store for demo - use a database (PostgreSQL, MongoDB) in production
let surveys: Record<string, object> = {};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  if (id && surveys[id]) {
    return NextResponse.json(surveys[id]);
  }
  return NextResponse.json(Object.keys(surveys).map((id) => ({ id, ...surveys[id] })));
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const id = body.id || `survey-${Date.now()}`;
    surveys[id] = { id, ...body };
    return NextResponse.json({ id, success: true });
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }
}
