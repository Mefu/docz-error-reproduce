import path from 'path';

import babel from 'rollup-plugin-babel';
import del from 'rollup-plugin-delete';
import resolve from 'rollup-plugin-node-resolve';
import sourcemaps from 'rollup-plugin-sourcemaps';

export default {
    input: 'src/lib-index.js',
    output: [ 
        {
            dir: 'lib/commonjs',
            format: 'cjs',
            sourcemap: true
        },
        {
            dir: 'lib/esm',
            format: 'esm',
            sourcemap: true
        }
    ],
    plugins: [
        sourcemaps(),
        resolve({ jail: 'src' }),
        babel({
            include: 'src/**/*',
            runtimeHelpers: true,
            sourceMaps: true
        }),
        del({
            targets: 'lib'
        })
    ],
    external: id => !id.startsWith('.') && !id.startsWith(path.join(__dirname, 'src')), // everything is external
    preserveModules: true
};