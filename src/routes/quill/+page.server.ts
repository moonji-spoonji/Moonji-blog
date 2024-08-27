import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
    save: async ({ request }) => {
        const formData = await request.formData();
        const content = formData.get("content") as string;

        console.log("🚀 ~ file: +page.server.ts:13 ~ default: ~ content:", content);
        return {success: true}
    }
};