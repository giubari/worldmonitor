import { NextResponse } from 'next/server';

export function middleware(request) {
  // Fa passare direttamente la richiesta senza fare controlli o importare moduli complessi
  return NextResponse.next();
}

// Opzionale: evita di intercettare i file statici se configurato
export const config = {
  matcher: [],
};
