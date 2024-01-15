/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
const config = {
  directories: {
    output: 'dist/electron',
  },
  publish: null,
  npmRebuild: false,
  files: [
    'dist/main/**/*',
    'dist/preload/**/*',
    'dist/render/**/*',
    'prisma/*',
  ],
  asarUnpack: ['data/**/*', 'config/*'],
  extraResources: [
    'prisma/**/*',
    'node_modules/.prisma/**/*',
    'node_modules/@prisma/client/**/*',
  ],
};

module.exports = config;
