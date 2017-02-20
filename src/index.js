import forge from 'mappersmith';
import player from './resources/player';
import team from './resources/team';
import auth from './resources/auth';
import formatResponse from './middlewares/format-response';

const defaultOptions = {
  host: 'http://api.rocketleaguesam.com',
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
      auth,
    },
  });
};

