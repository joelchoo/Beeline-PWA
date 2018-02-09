import axiosApi from '../index';
import variables from '../../../config/variables';

const endPoints = {
  routes: '/routes',
};

/**
 * Get all Beeline routes
 * @param {*} parameters => route parameters
 */
const routes = async parameters => axiosApi(variables.beelineRootPath, `${endPoints.routes}?${parameters}`, {}, 'GET');

export default routes;
