const fastifyPlugin = require('fastify-plugin');
const SubmissionService = require('../services/submissionService');

async function servicePlugin(fastify,options){
    fastify.decorate('submissionService', new SubmissionService(fastify.submissionRepository));
    console.log('Service Plugin Loaded');
    console.log(fastify.submissionService);
}

module.exports = fastifyPlugin(servicePlugin);