export {};
/**
 * Nullable<T>：将类型 T 转换为可为 null 的类型。
NonNullable<T>：将类型 T 转换为非 null 和非 undefined 的类型。
Recordable<T>：一个泛型类型，用于描述一个 string 类型的 key 和任何类型为 T 的值之间的映射，类似于 JavaScript 中的对象。
ReadonlyRecordable<T>：与 Recordable 类似，但将属性标记为只读。
Indexable<T>：一个泛型类型，表示任意 string 类型的 key 和任何类型为 T 的值之间的映射，类似于 JavaScript 中的对象。
DeepPartial<T>：一个泛型类型，将类型 T 的所有属性设置为可选，并且将 T 的所有属性和嵌套属性的类型都转换为可选类型。
TimeoutHandle 和 IntervalHandle：表示 setTimeout 和 setInterval 返回的类型。
ChangeEvent：扩展自 Event 接口，用于描述 input 元素的 change 事件。
WheelEvent：用于描述鼠标滚轮事件。
 */
declare global {
    declare type Nullable<T> = T | null;
    declare type NonNullable<T> = T extends null | undefined ? never : T;
    declare type Recordable<T = any> = Record<string, T>;
    declare interface ReadonlyRecordable<T =any> {
        readonly [key: string]: T;
    }
    declare interface Indexable<T = any> {
        [key: string]: T;
    }
    declare type DeepPartial<T> = {
        [P in keyof T]?: DeepPartial<T[P]>;
    }
    declare type TimeoutHandle = ReturnType<typeof setTimeout>
    declare type IntervalHandle = ReturnType<typeof setInterval>

    declare interface ChangeEvent extends Event {
        target: HTMLInputElement;
    }

    declare interface WheelEvent {
        path?: EventTarget[];
    }

}