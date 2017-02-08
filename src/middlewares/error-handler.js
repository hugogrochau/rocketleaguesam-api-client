export default () => ({
  response(next) {
    return new Promise((resolve, reject) => {
      next()
        .then((response) => resolve(response))
        .catch((response) => {
          try {
            const body = JSON.parse(response.responseData);
            if (body.status === 'error' && body.message) {
              resolve(response);
            } else {
              reject(response);
            }
          } catch (e) {
            reject(response);
          }
        });
    });
  },
});
