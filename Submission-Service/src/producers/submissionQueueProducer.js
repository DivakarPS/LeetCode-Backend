const submissionQueue = require("../queues/submissionQueue");

module.exports = async function(payload){
    console.log("into sample queue with :", payload);
    await submissionQueue.add("SubmissionJob", payload);
    console.log("successfully added a new job");
}