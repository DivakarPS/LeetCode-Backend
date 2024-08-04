const { fetchProlemDetails } = require('../apis/problemAdminApi');
const SubmissionProducer = require('../producers/submissionQueueProducer');

class SubmissionService{
    constructor(submissionRepository){
        this.submissionRepository = submissionRepository;
    }
    async addSubmission(submissionPayload){

        const problemId = submissionPayload.problemId;
        const userId = submissionPayload.userId;
        const problemAdminApiResponse = await fetchProlemDetails(problemId);

        console.log(problemAdminApiResponse);

        if(!problemAdminApiResponse){
            throw new Error('Failed to create Submission');
        }
        console.log(problemAdminApiResponse.data.codeStubs);

        const languageCodeStub = problemAdminApiResponse.data.codeStubs.find(codeStub => codeStub.language.toLowerCase() === submissionPayload.language.toLowerCase());
        console.log(languageCodeStub);

        submissionPayload.code = languageCodeStub.startSnippet + "\n\n" + submissionPayload.code + "\n\n" + languageCodeStub.endSnippet;

        const submission = await this.submissionRepository.createSubmission(submissionPayload);
        if(!submission){
            throw new Error('not able to create submission');
        }
        console.log(submission);
        const response =  await SubmissionProducer({
            [submission._id] : {
                code: submission.code,
                language: submission.language,
                inputTestCase: problemAdminApiResponse.data.testCases[0].input,
                outerTestCase: problemAdminApiResponse.data.testCases[0].output,
                userId : userId,
                submissionId: submission._id
            }
        });
        return {queueResponse: response, submission};
    }
}

module.exports = SubmissionService;