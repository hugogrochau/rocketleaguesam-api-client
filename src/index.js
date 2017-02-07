import forge from 'mappersmith';
import player from './resources/player';
import formatResponse from './middlewares/format-response';
import errorHandler from './middlewares/error-handler';

export default (host) =>
  forge({
    middlewares: [errorHandler, formatResponse],
    host,
    resources: {
      player,
    },
  });

