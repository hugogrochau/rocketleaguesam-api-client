export default () => ({
  response(next) {
    return next().then((response) => {
      try {
        const data = JSON.parse(response.responseData);
        return { ...response, ...data };
      } catch (e) {
        return response;
      }
    });
  },
});
