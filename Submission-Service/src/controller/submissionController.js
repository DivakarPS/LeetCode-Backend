const fastify = require("fastify");

async function createSubmission(req, res) {
    console.log("into createSubmission with body: ",req.body);
    const response = await this.submissionService.addSubmission(req.body);
    return res.status(201).send({
        error: {},
        data: response,
        success: true,
        message: 'Created submission successfully'
    })

}

module.exports = {
    createSubmission
};