import Constants from 'expo-constants';
import env from "saeko-native/env.js";

var ENV = {};
releaseChannel = Constants.manifest.releaseChannel;
if (releaseChannel && releaseChannel.indexOf('prod') !== -1) {
	ENV.backendConfig = {
		sakura: {
			apiClientId: env.SAKURA_API_CLIENT_ID,
			authHost: 'https://auth.saeko.io',
			apiHost: 'https://api2.saeko.io',
			appId: 'sakura'
		},
		cecyte: {
			apiClientId: env.CECYTE_API_CLIENT_ID,
			authHost: 'https://saeko.cecyte.edu.mx',
			apiHost: 'https://saeko-api2.cecyte.edu.mx',
			appId: 'cecyte'
		},
		vip: {
			apiClientId: env.VIP_API_CLIENT_ID,
			authHost: 'https://saeko.kioru.com',
			apiHost: 'https://saeko-api2.kioru.com',
			appId: 'vip'
		},
		mx_sakura:{
			apiClientId: env.MX_SAKURA_API_CLIENT_ID,
			authHost: 'https://app.mx.saeko.io',
			apiHost: 'https://api2.mx.saeko.io',
			appId: 'mx sakura'
		}
	}
} else {
	ENV.backendConfig = {
		develop_cecyte: {
			apiClientId: env.DEVELOP_CECYTE_API_CLIENT_ID,
			apiHost: 'https://api2.saeko.dev.kioru.com',
			authHost: 'https://auth.saeko.dev.kioru.com',
			appId: 'cecyte'
	  },
		develop_sakura: {
			apiClientId: env.DEVELOP_SAKURA_API_CLIENT_ID,
			apiHost: 'https://api2.sakura.saeko.dev.kioru.com',
			authHost: 'https://auth.saeko.dev.kioru.com',
			appId: 'sakura'
	  },
		// develop_vip: {
			// apiClientId: env.DEVELOP_VIP_API_CLIENT_ID,
			// apiHost: 'https://api2.saeko.dev.kioru.com',
			// authHost: 'https://auth.saeko.dev.kioru.com',
			// appId: 'vip'
		// }
	}
}
export default ENV;
