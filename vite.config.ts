import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import type { UserConfig, ConfigEnv } from 'vite';
import { resolve } from 'path';
import { loadEnv } from 'vite';
import pkg from './package.json'
import dayjs from 'dayjs';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Components from 'unplugin-vue-components/vite';
import { createHtmlPlugin } from 'vite-plugin-html';

//
const root: string = process.cwd();

const assetsDir = 'assets';

const { dependencies, devDependencies, name, version } = pkg;
const appVersion = dayjs().format('YYYYMMDDHHmm');
const lastBuildTime = dayjs().format('YYYY_MM_DD HH:mm:ss');
const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version  },
  version: appVersion,
  lastBuildTime
};

// https://vitejs.dev/config/
export default ({command, mode}: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, root)
  return {
    base: './',
    plugins: [
        vue(),
        vueJsx(),
        Components({
            extensions: ['vue', 'tsx'],
            dts: 'src/components.d.ts'
        }),
        createHtmlPlugin({
            inject: {
                data: {
                  title: env.VITE_APP_TITLE
                }
            },
            minify: false,
        })
    ],
    server: {
        host: true,  //监听所有地址
        port: Number(env.VITE_PORT), //指定开发服务器端口
        proxy: {  //配置自定义代理规则
          '/dev-api': {
            target: 'http://api.it120.cc/xiaochengxu',
            changeOrigin: true,  //是否跨域
            secure: false,
            rewrite: (path) => path.replace(/^\/dev-api/, ''),
          },
        }
    },
    build: {
        assetsDir: assetsDir, //静态资源存放路径
        sourcemap: false,  //构建后是否生成source map文件
        chunkSizeWarningLimit: 1500, //chunk大小警告
        rollupOptions: {
          output: { //指定输出选项
            //设置打包生成的入口文件名，可以使用 [name] 占位符表示文件名。
            entryFileNames: `${assetsDir}/[name].${appVersion}.js`,
             //设置打包生成的代码文件名，可以使用 [name] 占位符表示文件名。
            chunkFileNames: `${assetsDir}/[name].${appVersion}.js`,
             //设置打包生成的静态资源文件名，可以使用 [name] 占位符表示文件名。
            assetFileNames: `${assetsDir}/static/[name].${appVersion}.[ext]`,
          }
        }
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    define: {
        __APP_INFO__: JSON.stringify(__APP_INFO__),
    },
    css: {
      modules: { //启用 CSS 模块化，设置 localsConvention 为 camelCaseOnly，表示样式类名会以驼峰命名法转换为变量名。
        localsConvention: 'camelCaseOnly',
      },
      preprocessorOptions: {
        less: {
          modifyVars: { // 允许你设置 Less 变量，
            hack: `true; @import'/src/styles/variable.less';`
          },
          javascriptEnabled: true //在 Less 中可以使用 JavaScript 代码。
        }
      }
    },
  };
}
