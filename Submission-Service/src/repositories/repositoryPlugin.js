const fastifyPlugin = require('fastify-plugin');
const SubmissionRepository = require('./submissionRepository');

async function repositoryPlugin(fastify,options){
    fastify.decorate('submissionRepository', new SubmissionRepository());
    console.log(fastify.SubmissionRepository)
    console.log('Repository Plugin Loaded');
}

module.exports = fastifyPlugin(repositoryPlugin);