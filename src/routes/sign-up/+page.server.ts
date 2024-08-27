import type { Actions } from "@sveltejs/kit";
import { models } from "$lib/server";
// import type { PageServerLoad } from "../$types";
// import { RequestEvent } from '../../../.svelte-kit/types/src/routes/$types';
// import { RequestEvent } from '@sveltejs/kit';
// import RequestEvent

// export const load = (async () => {
//   return {
//     records: models.Post.findAll()
//   };
// }) satisfies PageServerLoad;

export const actions: Actions = {
  create: async ({ request }) => {
    const { firstName, lastName, username, password, pfp } = Object.fromEntries(
      await request.formData()
    ) as Record<string, string>;
    console.log( firstName, lastName, username, password, pfp );
    models.User.create({  firstName, lastName, username, password, pfp});
    return {success: true};
  },
} satisfies Actions;

