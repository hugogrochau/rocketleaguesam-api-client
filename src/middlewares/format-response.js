export default (ignoreErrors) => () => ({
  response: (next) =>
    new Promise((resolve, reject) =>
      next()
        // format valid responses
        .then((response) => resolve(formatResponse(response)))
        // format error responses
        .catch((err) => ignoreErrors ?
                          resolve(formatResponse(err)) :
                          reject(formatResponse(err)))
    ),
});

const formatResponse = (response) => {
  try {
    // if the response data is a json object
    const data = JSON.parse(response.responseData);
    return { ...response, ...data };
  } catch (e) {
    // if the response is just text
    return response;
  }
};
