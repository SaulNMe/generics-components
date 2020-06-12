import { Analytics, Event, PageHit } from 'expo-analytics';
import Constants from 'expo-constants';
import Store from 'saeko-native/app/Store.js';
import Selectors from 'saeko-native/app/Selectors';

const analytics = new Analytics('UA-145145567-2');


let getUserData = () => Selectors.selectUser(Store.getState());
analytics.addCustomDimension('2', Constants.nativeAppVersion);

export default {
	event(category, action, value = null) {
		analytics.addCustomDimension('1', getUserData().server);
		analytics.event(new Event(category, action, getUserData().type, value)).then(
			() => {
				//console.log('success')
			}).catch((e) => {
				//console.log(e.message)
			}
		);
	},
	changeScreen (currentScreen) {
		analytics.addCustomDimension('1', getUserData().server);
		analytics.hit(new PageHit(currentScreen));
	},
	loginEvent(action, value = null){
		this.event('Login', action, value);
	},
	profileEvent (action, value = null) {
		this.event('Profile', action, value);
	},
	homeEvent (action, value = null) {
		this.event('Home', action, value);
	},
	portfoliosEvent (action, value = null) {
		this.event('Portfolios', action, value);
	},
	reportsEvent (action, value = null) {
		this.event('Reports', action, value);
	},
	timetableEvent (action, value = null) {
		this.event('Timetable', action, value);
	},
};

