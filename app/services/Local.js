import { AsyncStorage } from 'react-native';
import i18n from 'i18n-js';
import { Localization } from 'expo-localization';

import en from 'saeko-native/app/locales/en/translations'
import es from 'saeko-native/app/locales/es/translations'


export default {
	locale: 'en-US',
	setLocal (locale = 'en-US') {
		this.locale = locale;
	},
	get (key) {
		i18n.fallbacks = true;
		i18n.translations = { es, en };
		i18n.locale = this.locale;
		return i18n.t(key);
	}
}