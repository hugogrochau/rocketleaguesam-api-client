export default () => ({
  response(next) {
    return next().then((response) => ({ ...response, ...response.data() }));
  },
});
