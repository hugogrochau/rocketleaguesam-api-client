import PlayerClient from './player';

export default (base) => {
  const apiClient = {};
  apiClient.player = new PlayerClient(base);

  return apiClient;
};
