import ApiService from 'saeko-native/app/services/ApiService';
import normalizeById from 'saeko-native/app/utils/NormalizeById';
import Selectors from 'saeko-native/app/Selectors';

import { 
	fetchApiListSuccess,
} from 'saeko-native/app/actions/ApiListActions';

export function fetchMissingCoursesByIds(ids) {
	return async (dispatch, getState) => {
		const courseIds = Selectors.selectCourses(getState()).map(course => course.id);
		const missingIds = ids.filter(id => !courseIds.includes(id));
		if (missingIds.length === 0) return;
		const result = await ApiService.selectCoursesByIds({ ids: missingIds })
		let normalized = normalizeById(result.courses);
		dispatch(fetchApiListSuccess('COURSES', normalized));
		return normalized;
	}
};

export function selectCourses() {
	return async (dispatch) => {
		const result = await ApiService.selectCourses()
		let normalized = normalizeById(result.courses);
		dispatch(fetchApiListSuccess('COURSES', normalized));
		return normalized;
	}
};