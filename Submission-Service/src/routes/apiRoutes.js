async function apiPlugin(fastify, options) {
    fastify.register(require('./v1/v2Routes'), {prefix: '/v1'});
}

module.exports = apiPlugin