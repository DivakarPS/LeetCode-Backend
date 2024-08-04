const { createSubmission } = require("../../controller/submissionController");

async function submissionRoutes(fastify,options){
    fastify.post('/', createSubmission);
}

module.exports = submissionRoutes;

