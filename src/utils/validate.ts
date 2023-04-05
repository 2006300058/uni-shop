//格式验证


/**
 * 改变toString指向
 */
const toString = Object.prototype.toString;
/**
 * 
 * @param val 
 * @param type 
 * 判断val原型
 * @returns 
 */
export function is(val: unknown, type: string) {
    return toString.call(val) === `[object ${type}]`
};
/**
 * 
 * @param val 
 * @returns 
 * val是否有值
 */
export function isVal<T = unknown>(val? : T): val is T {
    return val!== undefined && val!= null;
} ;
/**
 * 判断字符串
 * @param val 
 * @returns 
 */
export function isString (val : unknown): val is string {
    return is(val , 'String');
};
/**
 * 数字
 * @param val 
 * @returns 
 */
export function isNumber (val: unknown): val is Number {
    return is(val, 'Number');
}

export function isFunction (val: unknown): val is Function {
    return typeof val === 'function';
}

export function isObject (val: any): val is Object {
    return val !== null && is(val, 'Object')
}

export function isArray(val: any): val is Array<any> {
    return val && Array.isArray(val);
}

export function isEmpty<T = unknown>(val: T):val is T {
    if(isArray(val) || isString(val)) {
        return val.length === 0
    }
    if(val instanceof Map || val instanceof Set) {
        return val.size === 0;
    }
    if(isObject(val)) {
        return Object.keys(val).length === 0;
    }
    return false;
}

export function isSrc(val : string) {
    const reg = /^https?/gi;
     return reg.test(val);
}

export function isMobile(val: string) {
    const value = val.replace(/[^-|\d]/g , '')
    return /^((\+86)|(86))?(1)\d{10}$/.test(value) || /^0[0-9-]{10,13}$/.test(value);
}

export function isEmail(val: string) {
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return reg.test(val)
}

export function isCode(val: string) {
    const reg = /^[A-Za-z0-9]{4}$/;
    return reg.test(val)
}
/**名称1-32位，不能以-_开头 */
export function isUserName(val: string) {
    const reg = /^(?!-)(?!_)\w{1,31}[A-Za-z0-9]$/;
    return reg.test(val)
}
/**密码8-25位，不能全是数字或字母 */
export function isPassWord(val: string) {
    const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[A-Za-z0-9]{8,25}$/
    return reg.test(val)
}

export function isSame(target: any, source: any) {
    return Object.is(target, source)
}
