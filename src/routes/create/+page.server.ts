import type { Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { models } from "$lib/server";

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
    const formData = await request.formData();
    // const image = formData.get("image")?.valueOf() as File;
    const content = formData.get("content") as string;
    console.log("🚀 ~ file: +page.server.ts:13 ~ default: ~ content:", content);
   
    const { title, subtitle, category} = Object.fromEntries(
      formData
    ) as Record<string, string>;
    // console.log(title, subtitle, image, category );

    // models.Post.create({ title, subtitle, image, category, content });
    models.Post.create({ title, subtitle, category, content });
    return {success: true};
  },
// }
} satisfies Actions;
