declare type Fn<T = any, R = T> = (...arg: T[]) => R;

declare type Promise<T = any, R = T> = (...arg: T[]) => Promise<R>;

declare type RefType<T> = T | null;

declare type LabelValueOptions = {
    label: string,
    value: any;
    [key: string]: string | number | boolean;
}[];

declare type EmitType = (event: string, ...args: any[]) => void;

declare type TargetContext = '_self' | '_blank';

declare interface ComponentElRef<T extends HTMLElement = HTMLDivElement> {
  $el: T;
}

declare type ComponentRef<T extends HTMLElement = HTMLDivElement> = ComponentElRef<T> | null;

declare type ElRef<T extends HTMLElement = HTMLDivElement> = Nullable<T>;

// Fn: 一个函数类型的别名，用于描述函数类型，其中T表示函数的参数类型，R表示函数的返回类型。
// PromiseFn: 一个异步函数类型的别名，用于描述异步函数类型，其中T表示函数的参数类型，R表示函数的返回类型。
// RefType: 一个引用类型别名，用于描述一个值的引用类型，其中T表示引用类型的值。
// LabelValueOptions: 一个选项类型别名，用于描述一个选项数组，其中每个选项包含一个label和value属性，以及其他可选属性。
// EmitType: 一个事件类型别名，用于描述一个事件类型，其中event表示事件名，args表示事件参数。
// TargetContext: 一个字符串字面量类型别名，用于描述目标上下文，其值只能为"_self"或"_blank"。
// ComponentElRef: 一个组件元素引用类型别名，用于描述一个组件元素的引用类型，其中T表示元素的类型，默认为HTMLDivElement。
// ComponentRef: 一个组件引用类型别名，用于描述一个组件的引用类型，其中T表示组件元素的类型，默认为HTMLDivElement。
// ElRef: 一个元素引用类型别名，用于描述一个元素的引用类型，其中T表示元素的类型，默认为HTMLDivElement。它与ComponentElRef不同之处在于，ComponentElRef只能用于描述组件元素的引用类型，而ElRef则用于描述任意元素的引用类型。