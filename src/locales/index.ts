import { createI18n } from 'vue-i18n';
import messages from './locales';

const i18n = createI18n({
	globalInjection: true, //全局生效$t
	locale: 'zh-CN', // 获取缓存语言，没有默认zh-CN
	fallbackLocale: 'zh-CN', // 切换失败回滚语言
	messages, // 自定义语言
	legacy: false // 如果要支持compositionAPI，此项必须设置为false;
});

export default i18n;
