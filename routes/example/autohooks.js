export default async function (fastify, opts) {
  fastify.addHook("onRequest", async (request, reply) => {
    console.log("onRequest");
  });
}

export const autoPrefix = "/prefixed";