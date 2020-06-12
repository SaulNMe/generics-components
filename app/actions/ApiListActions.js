export const resetApiList = ( modelName ) => ({
	type: `RESET_${modelName}`,
	name: modelName
});

export const fetchApiListBegin = ( modelName ) => ({
	type: `FETCH_${modelName}_BEGIN`,
	name: modelName
});

export const fetchApiListSuccess = (modelName, apiList) => ({
	type: `FETCH_${modelName}_SUCCESS`,
	name: modelName,
	payload: { apiList }
});

export const fetchApiListFailure = (modelName, error) => ({
	type: `FETCH_${modelName}_FAILURE`,
	name: modelName,
	payload: { error },
});