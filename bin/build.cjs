// build.js

const { build } = require('esbuild');

build({
  entryPoints: ['./src/main.ts'],
  bundle: true,
  platform: 'node',
  target: 'node18',
  //format: 'esm',
  //outfile: 'build/main.js',
  outfile: 'build/main.cjs',
  sourcemap: true,
}).catch(() => process.exit(1));