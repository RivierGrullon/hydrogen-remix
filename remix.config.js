/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  appDirectory: 'app',
  ignoredRouteFiles: ['**/.*'],
  watchPaths: ['./public'],
  server:
    process.env.NODE_ENV === 'development' ? './server-dev.ts' : './server.ts',
  /**
   * The following settings are required to deploy Hydrogen apps to Oxygen:
   */
  publicPath: (process.env.HYDROGEN_ASSET_BASE_URL ?? '/') + 'build/',
  assetsBuildDirectory: 'dist/client/build',
  serverPlatform: 'neutral',
  serverModuleFormat: 'esm',
  serverConditions: ['worker', process.env.NODE_ENV],
  serverMainFields: ['browser', 'module', 'main'],
  assetsBuildDirectory: 'dist/client/build',
  serverBuildPath: 'dist/worker/index.js',
  serverDependenciesToBundle: 'all',
  serverBuildTarget: 'vercel',
  serverMinify: process.env.NODE_ENV === 'production',
  future: {
    unstable_postcss: true,
    unstable_tailwind: true,
  },
};


// /** @type {import('@remix-run/dev').AppConfig} */
// module.exports = {
//   appDirectory: 'app',
//   ignoredRouteFiles: ['**/.*'],
//   watchPaths: ['./public'],
//   server:
//     process.env.NODE_ENV === 'development' ? './server-dev.ts' : './server.ts',
//   serverPlatform: 'neutral',
//   serverModuleFormat: 'esm',
//   serverConditions: ['worker', process.env.NODE_ENV],
//   serverMainFields: ['browser', 'module', 'main'],
//   assetsBuildDirectory: 'dist/client/build',
//   serverBuildPath: 'dist/worker/index.js',
//   serverDependenciesToBundle: 'all',
//   serverBuildTarget: 'vercel',
// };