declare module '*vue' {
    import { DefineComponent } from "vue";
    /**定义表示这是一个 Vue 组件，并且不需要 props 和响应式数据，但是有任意类型的方法和计算属性等非响应式数据。 */
    const component: DefineComponent<{}, {}, any>;
    export default component;
}

//当导入一个以 .vue 结尾的模块时，它应该被解析为一个 Vue 组件，并且这个组件的 props 和 emits 应该为空对象（{}），而其它属性类型为 any。最终，这个组件会被导出为一个默认导出。