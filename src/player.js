import request from 'superagent';

export default class {

  constructor(base) {
    this.base = `${base}'/player`;
  }

  getPlayers() {
    return request.get(this.base);
  }
}
