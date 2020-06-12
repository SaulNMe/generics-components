import { useSelector, useDispatch } from 'react-redux';
import Selectors from 'saeko-native/app/Selectors';
import { useQuery } from 'react-query-hooks';
import { fetchStudents } from 'saeko-native/app/actions/StudentsActions';

export default function ( { forceFirstFetch = false, skipFirstFetch = false } = {} ) {
	const dispatch = useDispatch(); 
	const userData = useSelector(Selectors.selectUser);
	const IsLoadingStudents = useSelector(Selectors.selectIsLoadingStudents);
	const studentsStoreData = useSelector(Selectors.selectStudents);
	const studentsLoaded = studentsStoreData.length > 0;
	const skip = (skipFirstFetch || studentsLoaded) && !forceFirstFetch
	const studentsLoader = useQuery(() => dispatch(fetchStudents()), { skip: skip || IsLoadingStudents || userData.type !== 'relative' });
	return [ studentsStoreData, studentsLoader ];
}
