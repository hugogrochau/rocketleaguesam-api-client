export default () => ({
  response: (next) =>
    new Promise((resolve, reject) =>
      next()
      // format valid responses
        .then((response) => resolve(formatResponse(response)))
        // format error responses
        .catch((err) => reject(formatResponse(err)))
    ),
});


const formatResponse = (response) => {
  try {
    // if the response data is a json object
    const data = JSON.parse(response.responseData);
    return { ...response, ...data };
  } catch (e) {
    return response;
  }
};
