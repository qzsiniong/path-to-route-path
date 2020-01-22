import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import pkg from './package.json';

export default {
    input: '_dist/index.js',
    plugins: [
        babel({
            runtimeHelpers: true,
        }),
        resolve({
            only: [/^\.{0,2}\//],
        }),
    ],
    output: [
        { file: pkg.main, format: 'cjs' },
        { file: pkg.module, format: 'es' },
    ],
};
