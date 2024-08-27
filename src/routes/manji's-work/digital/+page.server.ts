import type { Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { models } from "$lib/server";

export const load = (async () => {
  return {
    records: models.Post.findAll()
  };
}) satisfies PageServerLoad;

// export const actions: Actions = {
//   load: (async () => {
//     return {
//       records: models.Post.findAll()
//     };
//   }) satisfies PageServerLoad,
  

// } satisfies Actions;
