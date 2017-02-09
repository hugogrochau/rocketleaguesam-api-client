export default () => ({
  response: (next) =>
    next()
      .then((response) => response)
      .catch((response) => response),
});

