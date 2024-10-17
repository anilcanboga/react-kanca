const esbuild = require('esbuild')

// CommonJS formatında çıktı
esbuild
  .build({
    entryPoints: ['src/index.js'],
    bundle: true,
    minify: true,
    sourcemap: false,
    outfile: 'dist/index.cjs.js',
    target: 'es2015',
    platform: 'node',
    external: ['react', 'react-dom'],
    format: 'cjs' // CommonJS formatı
  })
  .catch(() => process.exit(1))

// ES Module formatında çıktı
esbuild
  .build({
    entryPoints: ['src/index.js'],
    bundle: true,
    minify: true,
    sourcemap: false,
    outfile: 'dist/index.esm.js',
    target: 'es2015',
    platform: 'node',
    external: ['react', 'react-dom'],
    format: 'esm' // ES Module formatı
  })
  .catch(() => process.exit(1))
