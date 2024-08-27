import type { Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { models } from "$lib/server";
// import { RequestEvent } from '../../../.svelte-kit/types/src/routes/$types';
// import { RequestEvent } from '@sveltejs/kit';
// import RequestEvent

export const load = (async () => {
  return {
    records: models.Post.findAll()
  };
}) satisfies PageServerLoad;

export const actions: Actions = {
  // load: (async () => {
  //   return {
  //     records: models.Post.findAll()
  //   };
  // }) satisfies PageServerLoad,

  create: async ({ request }) => {
    const { title, subtitle, category, content } = Object.fromEntries(
      await request.formData()
    ) as Record<string, string>;
    console.log(title, subtitle, category, content );
    models.Post.create({ title, subtitle, category, content });
    return {success: true};
  },
} satisfies Actions;
