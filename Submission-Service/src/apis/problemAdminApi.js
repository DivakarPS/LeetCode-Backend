const axiosInstance = require("../config/axiosInstance");
const { PROBLEM_SERVICE_URL } = require("../config/serverConfig");

const PROBLEM_ADMIN_API_URL = `${PROBLEM_SERVICE_URL}/api/v1`;

async function fetchProlemDetails(problemId) {
  try {
    const uri = PROBLEM_ADMIN_API_URL + `/problems/${problemId}`;
    const response = await axiosInstance.get(uri);
    console.log("Problem detail: ", response.data);
    return response.data;
  } catch (error) { 
    console.error(error);
    console.error('Error while fetching problem details');
  }
}

module.exports = {
    fetchProlemDetails
}