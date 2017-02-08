export default {
  all: { path: '/player' },
  me: { path: '/player/me' },
  removeMe: { path: '/player/remove/me', method: 'delete' },
  get: { path: '/player/{platform}/{id}' },
  add: { path: '/player/add/{platform}/{id}', method: 'post' },
  update: { path: '/player/update/{platform}/{id}', method: 'post' },
  remove: { path: '/player/remove/{platform}/{id}', method: 'delete' },
};
