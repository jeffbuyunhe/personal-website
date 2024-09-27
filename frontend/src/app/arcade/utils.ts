'use server';

import { redirect } from 'next/navigation'

export async function navigateArcade(link: string) {
    redirect(link);
}