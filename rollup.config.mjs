import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import dts from 'rollup-plugin-dts'
import { readFileSync } from 'fs'
const packageJson = JSON.parse(readFileSync('./package.json'))

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
        name: 'ultimate-react-multilevel-menu',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    ],
    plugins: [
      external(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss({
        extract: true,
        minimize: true,
        modules: false,
        sourceMap: true,
        use: {
          less: { javascriptEnabled: true }
        }
      }),
      terser()
    ]
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    external: [/\.less$/],
    plugins: [dts()]
  }
]
