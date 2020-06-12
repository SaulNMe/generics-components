import { createSelector } from 'reselect'
export default {
	//Auth
	selectIsLoading: state => state.Auth.isLoading,
	selectIsLoggedIn: state => state.Auth.loggedIn,
	selectLocal: state => state.Auth.locale,
	selectAbsenceMode: state => state.Auth.absentMode,
	selectAuthData: state => ({
		access_token: state.Auth.access_token,
		token_type: state.Auth.token_type,
		expires_in: state.Auth.expires_in,
		refresh_token: state.Auth.refresh_token,
		scope: state.Auth.scope,
		created_at: state.Auth.created_at,
		isLoading: state.Auth.isLoading,
		error: state.Auth.error,
		loggedIn: state.Auth.loggedIn,
	}),
	selectAuthError: state => state.Auth.error,
	//Token Refresh
	selectIsRefreshingToken: state => state.TokenRefresh.isRefreshingToken,
	selectRefreshCall: state => state.TokenRefresh.refreshCall,
	//Env
	selectEnv: state => ({
		apiClientId: state.Env.apiClientId,
		apiHost: state.Env.apiHost,
		authHost: state.Env.authHost,
		appId: state.Env.appId
	}),
	selectEnvIsLoading: state => state.Env.isLoading,
	selectEnvError: state => state.Env.error,
	//User
	selectUserIsLoading: state => state.User.isLoading,
	selectUserError: state => state.User.error,
	selectUser: state => ({
		id: state.User.id,
		type: state.User.type,
		email: state.User.email,
		first_name: state.User.first_name,
		surname: state.User.surname,
		avatar: state.User.avatar,
		timezone: state.User.timezone,
		server: state.User.server,
		actor_id: state.User.actor_id,
	}),
	//ProfessorStudents
	selectStudentsByLecture: state => state.ProfessorStudents.studentsByLectureId[state.ProfessorStudents.currentLectureId],
	selectCurrentLectureId: state => state.ProfessorStudents.currentLectureId,
	selectLectureCheckedAt: state => state.ProfessorStudents.lectureCheckedAt,
	selectCurrentDate: state => state.ProfessorStudents.date,
	selectCurrentTime: state => state.ProfessorStudents.time,
	selectCourse: state => state.ProfessorStudents.course,
	selectCurrentAttendanceConfig: state => state.ProfessorStudents.currentAttendanceConfig,
	selectAttendanceLogs: state =>  state.ProfessorStudents.attendanceLogs,
	selectUpdatingLectures: state => state.ProfessorStudents.updatingLectures,
	//Pendings
	selectPendingsTotal: state =>  state.Pendings.total,
	selectPendingsCursor: state =>  state.Pendings.cursor,
	selectPendingsLimit: state =>  state.Pendings.limit ,
	selectIsLoadingPendings: state => state.Pendings.isLoading,
	selectIsRefreshingPendings: state => state.Pendings.isLoading && (state.Pendings.offset === 0),
	selectErrorPendings: state => state.Pendings.error,
	selectPendingsData: createSelector(
		state => state.Pendings.allIds,
		state => state.Pendings.byId,
		(allIds, byId) => allIds.map(id => byId[id]),

	),
	selectPendingsDataById: state => state.Pendings.byId,
	selectPendingsDataNormalized: createSelector(
		state => state.Pendings.allIds,
		state => state.Pendings.byId,
		(allIds, byId) => ({ allIds, byId }),
	),
	// DocumentsFilters
	selectReportsUnselected: state => state.DocumentsFilters.reportsUnselected,
	selectPortfolioUnselected: state => state.DocumentsFilters.portfolioUnselected,
};