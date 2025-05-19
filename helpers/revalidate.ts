'use server';

import { revalidatePath } from 'next/cache';

export async function revalidatePages() {
	revalidatePath('/menu');
	revalidatePath('/');

	console.log('Revalidated paths on locale change');
}