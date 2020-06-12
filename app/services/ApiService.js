import { saekoApiAxios, saekoAuthAxios } from "saeko-native/app/utils/Axios";
//import FakeApiService from 'saeko-native/app/services/FakeApiService';//Uncomment this line to use fake api

const ApiService = {
	async login({ username, password }, env) {
		const method = 'POST';
		const url = `/oauth/token.json`;
		let data = {
			username: username,
			password: password,
			client_id: env.apiClientId,
			grant_type: 'password',
			scope: 'public feed drive attendance'
		}
		return this.makeRequest({ method, url, data });
	},
	async registerDevice(token) {
		const url = '/api/v1/activity_stream/mobile_devices';
		const method = 'POST';
		const data = {
			mobile_device: { expo_token: token }
		}
		return this.makeAuthorizedRequest({ method, url, data });
	},
	selectUser() {
		const method = 'GET';
		const url = `/api/v1/core/user?include_fields=5`;
		return this.makeAuthorizedRequest({ method, url });
	},

	getStudents() {
		const url = '/api/v1/core/students';
		const method = 'GET';
		return this.makeAuthorizedRequest({ url, method });
	},

	setAttendance({ studentCardId, check }) {
		let url = `/api/v1/scheduling/student_cards/${studentCardId}/attendance_logs`;
		let method = 'POST';

		let headers = {
			'Content-Type': `application/json`
		}

		let data = {
			mark_type: 1,
			check: check
		}

		return this.makeAuthorizedRequest({ url, method, data, headers })
	},

	getActivities(paramsData) {
		let param = paramsData.lt === 0 ? '' : `?lt=${paramsData.lt}`;
		const url = `/api/v1/activity_stream/feed_activities${param}`;
		const method = 'GET';
		return this.makeAuthorizedRequest({ url, method });
	},

	getEnrollmentsByStudentIdLastTerm({ student_id }) {
		const url = `/api/v1/core/students/${student_id}/enrollments?include_fields=last_term&filters=last_term`;
		const method = 'GET';
		return this.makeAuthorizedRequest({ url, method });
	},

	getEnrollmentsByStudentId({ student_id }) {
		const url = `/api/v1/core/students/${student_id}/enrollments`;
		const method = 'GET';
		const params = { include_fields: 'term(periods)' }
		return this.makeAuthorizedRequest({ url, method, params });
	},

	getEnrollments(){
		const url = `/api/v1/core/enrollments`;
		const method = 'GET';
		const params = { include_fields: 'term(periods),last_term', filters: 'last_term' }
		return this.makeAuthorizedRequest({ url, method, params });
	},

	getGoogleFilesByEnrollments({ enrollment_id }) {
		const url = `/api/v1/drive/enrollments/${enrollment_id}/google_files`;
		const method = 'GET';
		return this.makeAuthorizedRequest({ url, method });
	},

	getLecturesByProfessor(params) {
		const url = `/api/v1/scheduling/lectures`;
		const method = 'GET';
		return this.makeAuthorizedRequest({ url, method, params });
	},
	getLecturesByCurrentStudent({ startDate, endDate}) {
		const url = `/api/v1/scheduling/lectures`;
		const method = 'GET';
		const params = {
			start_date: startDate, 
			end_date: endDate,
		};
		return this.makeAuthorizedRequest({ url, method, params });
	},
	selectCourses() {
		const url = `/api/v1/core/courses`;
		const method = 'GET';
		return this.makeAuthorizedRequest({ url, method });
	},

	getStudentsByCourses({ courseId }) {
		const url = `/api/v1/core/courses/${courseId}/students`;
		const params = { include_fields: 'enrollment_id' }
		const method = 'GET';
		return this.makeAuthorizedRequest({ url, method, params });
	},

	getLecturesByStudentId({ student_id, start_date, end_date, except_group_course }) {
		const url = `/api/v1/scheduling/students/${student_id}/lectures`;
		const method = 'GET';
		const params = {
			start_date,
			end_date,
			except_group_course
		};
		return this.makeAuthorizedRequest({ url, method, params });
	},

	getAbsences (enrollmentId) {
		const url = `/api/v1/scheduling/enrollments/${enrollmentId}/absences`;
		const method = 'GET';
		return this.makeAuthorizedRequest({ url, method });
		
	},

	updateLectureAbsenceSingleStudent(paramsData = {}) {
		const url = `/api/v1/scheduling/students/${paramsData.student_id}/lectures/${paramsData.lecture_id}`;
		const method = 'PUT';
		let data = paramsData.data;
		return this.makeAuthorizedRequest({ url, method, data });
	},

	updateLecture(paramsData = {}) {
		const url = `/api/v1/scheduling/lectures/${paramsData.id}/`;
		const method = 'PUT';
		let data = paramsData.data;
		return this.makeAuthorizedRequest({ url, method, data });
	},

	setAttendanceLogs(paramsData = {}) {
		const url = `/api/v1/scheduling/lectures/${paramsData.lecture_id}/attendance_logs`;
		const method = 'POST';
		let data = paramsData.data;
		let params = paramsData.params;
		return this.makeAuthorizedRequest({ url, method, data, params });
	},

	getPDF({ enrollment_id, student_id, period_id }) {
		const url = `/api/v1/grading/students/${student_id}/report_card.pdf?enrollment_id=${enrollment_id}&period_id=${period_id}`
		const method = 'GET';
		return this.makeAuthorizedRequest({ url, method });
	},

	getConfigsBySchoolId({ school_id }) {
		const url = `/api/v1/configurations/schools/${school_id}/attendance_configs`;
		const method = 'GET';
		return this.makeAuthorizedRequest({ url, method });
	},

	getConfigsByIds({ ids }) {
		const url = `/api/v1/configurations/attendance_configs`;
		const method = 'GET';
		const params = {
			filters: `ids=${ids.join(',')}`
		};
		return this.makeAuthorizedRequest({ url, method, params });
	},

	getConfigsByCourseId({ course_id }) {
		const url = `/api/v1/configurations/courses/${course_id}/attendance_configs`;
		const method = 'GET';
		return this.makeAuthorizedRequest({ url, method })
	},

	selectCoursesByEnrollmentId({ enrollment_id }) {
		const url = `/api/v1/core/enrollments/${enrollment_id}/courses`;
		const method = 'GET';
		return this.makeAuthorizedRequest({ url, method });
	},

	selectCoursesByIds({ ids }) {
		const url = `/api/v1/core/courses`;
		const method = 'GET';
		const params = {
			filters: `ids=${ids.join(',')}`,
			fields: 'attendance_config_id,name,room,group'
		}
		return this.makeAuthorizedRequest({ url, method, params });
	},

	selectAttendanceLogsByLectureIds({ ids }) {
		const url = `/api/v1/scheduling/attendance_logs`;
		const method = 'GET';
		const params = {
			filters: `latest;lecture_ids=${ids.join(',')}`,
			include_fields: 'lecture_id,absence_code'
		}
		return this.makeAuthorizedRequest({ url, method, params });
	},

	selectAttendanceLogsByLectureIdsByCurrentStudent({ ids }) {
		const url = `/api/v1/scheduling/attendance_logs`;
		const method = 'GET';
		const params = {
			filters: `latest;lecture_ids=${ids.join(',')}`,
			include_fields: 'lecture_id,absence_code'
		}
		return this.makeAuthorizedRequest({ url, method, params });
	},

	getReportCard(params) {
		const url = `/api/v1/grading/students/${params.student_id}/report_card.pdf?enrollment_id=${params.enrollment_id}&period_id=${params.period_id}`;
		const method = 'GET';
		return this.makeAuthorizedRequest({ url, method });
	},

	async getNewToken(refresh_token) {
		const url = '/oauth/token';
		const method = 'POST';
		const data = {
			grant_type: 'refresh_token',
			refresh_token
		};
		return this.makeRequest({ method, url, data });
	},

	async makeRequest(requestData = {}) {
		let res = await saekoAuthAxios(requestData);
		return res.data;
	},

	async makeAuthorizedRequest(requestData = {}) {
		let res = await saekoApiAxios(requestData);
		return res.data;
	}
};

export default {
	...ApiService,
	//...FakeApiService//Uncomment this line to override with fake api methods
};
