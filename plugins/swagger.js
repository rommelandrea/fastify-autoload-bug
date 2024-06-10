import fp from 'fastify-plugin'
import swagger from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui";

// the use of fastify-plugin is required to be able
// to export the decorators to the outer scope

export default fp(async function (fastify, opts) {
    await fastify.register(swagger);

    await fastify.register(swaggerUi, {
      routePrefix: "/docs",
      uiConfig: {
        docExpansion: "full",
        deepLinking: false,
      },
      uiHooks: {
        onRequest: function (request, reply, next) {
          next();
        },
        preHandler: function (request, reply, next) {
          next();
        },
      },
      staticCSP: true,
      transformStaticCSP: (header) => header,
      transformSpecification: (swaggerObject, request, reply) => {
        return swaggerObject;
      },
      transformSpecificationClone: true,
    });
})


