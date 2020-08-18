import loadable from '@loadable/component';

const AsyncPage = loadable(({ page }) => import(`./${page}`));

export default AsyncPage;
