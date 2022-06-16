import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import replace from '@rollup/plugin-replace';
import dotenv from 'dotenv';

dotenv.config();

export default {
    input: 'src/main.js',
    output: {
        file: 'bundle.js',
    },
    plugins: [
        resolve({ browser: true }),
        replace({
            values: {
                'process.env.SERVER_URL': JSON.stringify(process.env.SERVER_URL),
            },
            preventAssignment: true,
        }),
        terser(),
    ],
};