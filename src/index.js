import forge from 'mappersmith';
import player from './resources/player';
import team from './resources/team';
import formatResponse from './middlewares/format-response';
import errorIgnorer from './middlewares/error-ignorer';

const defaultOptions = {
  ignoreErrors: false,
};

export default (host, options) => {
  const { ignoreErrors } = { ...defaultOptions, ...options };
  const middlewares = ignoreErrors ? [errorIgnorer] : [];
  middlewares.push(formatResponse);

  return forge({
    host,
    middlewares,
    resources: {
      player,
      team,
    },
  });
};

