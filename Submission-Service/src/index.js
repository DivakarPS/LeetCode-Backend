const fastify = require('fastify')({ logger: true }); // calling the fastify constructor
const app = require('./app');
const connectToDB = require('./config/dbConfig');
const serverConfig = require('./config/serverConfig');
const evaluationWorker = require('./workers/EvaluationWorker');

fastify.register(app);


fastify.listen({ port: serverConfig.PORT }, async (err) => {
    if (err) {
      process.exit(1)
    }
    await connectToDB();
    evaluationWorker("EvaluationQueue");
    console.log(`Server up at port ${serverConfig.PORT}`);
});
