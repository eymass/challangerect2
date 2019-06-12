/**
 *
 * Asynchronously loads the component for AuthProvider
 *
 */
import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
