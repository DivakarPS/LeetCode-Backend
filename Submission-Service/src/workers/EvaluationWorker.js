const {Worker} = require('bullmq');

const redisConnection = require('../config/redisConfig');
const { default: axios } = require('axios');

function evaluationWorker(queue){
    new Worker('EvaluationQueue', async (job) => {
        if( job.name == "EvaluationJob"){
            console.log("Received a new job for evaluation", job.data);
            
            const response = await axios.post("http://localhost:3001/sendPayload",{
                userId: job.data.userId,
                payload: job.data
            });

            console.log("Response from socket service", response.data);
            return job.data;
        }
     },
     {
         connection: redisConnection
     });
     
}


module.exports = evaluationWorker;