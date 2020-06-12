import Pendings from 'saeko-native/app/reducers/PendingsReducer.js'
import Auth from 'saeko-native/app/reducers/AuthReducer.js'
import Env from 'saeko-native/app/reducers/EnvReducer.js'
import User from 'saeko-native/app/reducers/UserReducer.js'
import TokenRefresh from 'saeko-native/app/reducers/TokenRefreshReducer.js'
import ProfessorStudents from 'saeko-native/app/reducers/ProfessorStudentsReducer.js'
import DocumentsFilters from 'saeko-native/app/reducers/DocumentsFiltersReducer.js'
import CreateApiListReducer from 'saeko-native/app/reducers/CreateApiListReducer.js'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    Auth,
    TokenRefresh,
    Env,
    User,
    ProfessorStudents,
    Students: CreateApiListReducer('STUDENTS'),
    AttendanceConfigs: CreateApiListReducer('ATTENDANCE_CONFIGS'),
    Courses: CreateApiListReducer('COURSES'),
    Enrollments: CreateApiListReducer('ENROLLMENTS'),
    CurrentReports: CreateApiListReducer(' CURRENT_REPORTS'),
    Pendings,
    DocumentsFilters
});

export default rootReducer;
