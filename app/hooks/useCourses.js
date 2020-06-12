import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Selectors from 'saeko-native/app/Selectors';

import { useQuery } from 'react-query-hooks';
import { selectCourses } from "saeko-native/app/actions/CoursesActions";

export default function ( { forceFirstFetch = false, skipFirstFetch = false } = {} ) {
	const dispatch = useDispatch();
	const courseStoreData = useSelector(Selectors.selectNormalizedCourses);
	const courseLoaded = courseStoreData.allIds.map(id => courseStoreData.byId[id]).length;
	const skip = (skipFirstFetch || courseLoaded) && !forceFirstFetch;
	const courseLoader = useQuery(() => dispatch(selectCourses()), { skip });
	return [ courseStoreData, courseLoader ];
}
