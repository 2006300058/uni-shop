import {isVal} from './validate';

export function toFixedTwo(n: number | string, digits = 2) {
    const num = Number(n);
    if(Number.isNaN(num)) {
        return ''
    }
    return num.toFixed(digits)
}
/**
 * 数值显示占位
 */
export function countPair(n: number | undefined, digits:2 ,placeholder= '--') {
    return isVal(n)?((n>=0? toFixedTwo(digits):placeholder)):placeholder;
}
/** 手机号码加密 */
export function numberHidden(n: string) {
    return n.replace(n.substring(3,7),'****')
}
/**
 * 商品价格显示
 */
export function priceIntegarFormat(min: number ,max: number) {
    if(max && min!=max) {
        return `${toFixedTwo(min)}-${toFixedTwo(max)}`
    }
    return toFixedTwo(min);
}
