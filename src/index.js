import forge from 'mappersmith';
import player from './resources/player';
import team from './resources/team';
import formatResponse from './middlewares/format-response';

const defaultOptions = {
  host: 'http://127.0.0.1:80',
  ignoreErrors: false,
};

export default (options) => {
  const { host, ignoreErrors } = { ...defaultOptions, ...options };

  return forge({
    host,
    middlewares: [formatResponse(ignoreErrors)],
    resources: {
      player,
      team,
    },
  });
};

