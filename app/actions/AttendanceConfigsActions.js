import ApiService from 'saeko-native/app/services/ApiService';
import normalizeById from 'saeko-native/app/utils/NormalizeById';
import Selectors from 'saeko-native/app/Selectors';

import { 
	fetchApiListSuccess,
} from 'saeko-native/app/actions/ApiListActions';

export function fetchMissingConfigsByIds(ids) {
	return async (dispatch, getState) => {
		const configIds = Selectors.selectAttendanceConfigs(getState()).map(config => config.id);
		const missingIds = ids.filter(id => !configIds.includes(id));
		if (missingIds.length === 0) return;
		const result = await ApiService.getConfigsByIds({ ids: missingIds });
		let normalized = normalizeById(result.attendance_configs);
		dispatch(fetchApiListSuccess('ATTENDANCE_CONFIGS', normalized));
		return normalized;
	}
};
