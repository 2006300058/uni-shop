module.exports = {
    plugins: {
        autoprefixer: {}, //自动添加CSS前缀，以适应不同的浏览器
        'postcss-px-to-viewport' : { //将CSS中的px单位转换为vw单位，以适应不同的设备屏幕
            viewportWidth: 375, //设计稿宽度
            unitPrecision: 2, //转换后的vw单位保留几位小数
            viewportUnit: 'vw',
            selectorBlackList: ['.ignore', /^body$/, '.hairlines',/^\.dp/, /^\.scroller/], //需要忽略的CSS选择器列表，
            minPixelValue: 1,  //需要转换的最小像素值
            mediaQuery: false  //是否在媒体查询中转换像素值。
        }
    }
}