import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from 'react-query-hooks';
import { fetchUser } from "saeko-native/app/actions/UserActions";
import Selectors from 'saeko-native/app/Selectors';

export default function ( { forceFirstFetch = false, skipFirstFetch = false } = {} ) {

	const dispatch = useDispatch();
	const userStoreData = useSelector(Selectors.selectUser);
	const userLoaded = !!userStoreData.id;
	const skip = (skipFirstFetch || userLoaded) && !forceFirstFetch
	const userLoader = useQuery(() => dispatch(fetchUser()), { skip });
	return [ userStoreData, userLoader ];
}
