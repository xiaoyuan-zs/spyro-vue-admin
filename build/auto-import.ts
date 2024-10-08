import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';
export default function createAutoImport(env: Record<string, string>) {
	return [
		// 自动导入
		AutoImport({
			imports: ['vue', 'vue-router', 'pinia'],
			dts: 'src/auto-import.d.ts',
			resolvers: [
				// 导入 scss
				ElementPlusResolver({
					importStyle: 'sass'
				})
			]
		}),
		// 自动导入组件
		Components({
			dts: 'src/auto-components.d.ts',
			resolvers: [
				// 导入 scss
				ElementPlusResolver({
					importStyle: 'sass'
				}),
				/**
				 * 自动引入图标组件解析器(解决手动引入)
				 * prefix - 前缀，默认为 i，若我们配置成了 icon，即组件名以 icon 开头
				 * collection - 图标集名
				 * icon - 图标名
				 * {prefix}-{collection}-{icon}
				 */
				IconsResolver({
					prefix: env.VITE_ICONIFY_PREFIX,
					customCollections: ['spyro']
				})
			]
		}),
		// Iconify图标按需导入(需自己手动引入import 对应图标)
		Icons({
			compiler: 'vue3', // 指定编译器
			autoInstall: true, // 自动安装图标
			// defaultClass: '', // 默认类名
			// defaultStyle: '', // 默认样式
			jsx: 'react', // 支持JSX
			// 自定义导入本地svg图标集
			customCollections: {
				spyro: FileSystemIconLoader('src/assets/icons', (svg) => svg.replace(/^<svg /, '<svg fill="currentColor" '))
			}
		})
	];
}
