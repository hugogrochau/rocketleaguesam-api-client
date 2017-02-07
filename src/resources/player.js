export default {
  all: { path: '/player' },
  add: { path: '/player/{platform}/{id}/add', method: 'post' },
  get: { path: '/player/{platform}/{id}' },
  update: { path: '/player/{platform}/{id}/update', method: 'post' },
  remove: { path: '/player/{platform}/{id}/remove', method: 'delete' },
  me: { path: '/player/me' },
  removeMe: { path: '/player/remove/me', method: 'delete' },
};
