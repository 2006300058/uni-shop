//record 用于定义一个由指定的类型参数 K 映射到另一个类型参数 T 的对象类型。具体来说，Record<K, T> 表示一个由类型为 K 的键和类型为 T 的值组成的对象类型。
interface ImportMetaEnv extends Readonly<Record<string, string>> {
    readonly VITE_APP_TITLE: string;  //只读
    readonly VITE_PORT: number;
    readonly VITE_APP_ENV: 'dev' | 'prd' | 'test' | 'pre'
    readonly VITE_APP_API_HOST: string;
}
/**
 * import.meta 是一个元数据对象，它在 ES6 模块中存在，其中包含当前模块的信息。具体来说，它包含了以下属性：

import.meta.url：当前模块的 URL。
import.meta.scriptElement：包含当前模块的 <script> 元素（仅在浏览器中可用）。
import.meta.env：包含环境变量的对象。 */
interface ImportMeta {
    readonly env: ImportMetaEnv
}

const __APP_INFO__: {
    pkg: {
        name: string;
        version: string;
        dependdencies: Recordable<string>;
        devDependencies: Recordable<string>;
    };
    version: string;
    lastBuildTime: string;
}