module.exports = {
    root: true,  //这是 ESLint 配置文件的根目录
    extends: ['alloy', 'alloy/vue', 'alloy/typescript'], //继承了一些其他的 ESLint 配置文件
    parser: 'vue-eslint-parser', //指定使用的代码解析器，这里使用了 vue-eslint-parser，它支持解析 Vue.js 的单文件组件。
    parserOptions: {
      parser: {   //指定使用的代码解析器，
        js: '@babel/eslint-parser',
        jsx: '@babel/eslint-parser',
  
        ts: '@typescript-eslint/parser',
        tsx: '@typescript-eslint/parser',
  
        
      },
    },
    env: {  //指定代码运行的环境，这里指定了浏览器和 Node.js。
      browser: true,
      node: true,
    },
    globals: {  //指定一些全局变量，这里指定了 uni 和 wx。
      uni: true,
      wx: true,
    },
    rules: {
      // 自定义你的规则
      'no-console': 'off',
      // js 和 ts 的规则重合
      'no-undef': 'off',
      // @typescript-eslint
      '@typescript-eslint/prefer-optional-chain': 'off',
    },
  };
  