import forge from 'mappersmith';
import player from './resources/player';
import formatResponse from './middlewares/format-response';

export default (host) =>
  forge({
    middlewares: [formatResponse],
    host,
    resources: {
      player,
    },
  });

