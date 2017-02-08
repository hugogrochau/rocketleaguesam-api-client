export default () => ({
  response(next) {
    return new Promise((resolve) => {
      next()
        .then((response) => resolve(response))
        .catch((response) => {
          resolve(response);
        });
    });
  },
});

