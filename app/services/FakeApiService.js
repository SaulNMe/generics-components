import FakerFactory from 'saeko-native/app/utils/FakerFactory';

const delay = ms => new Promise(res => setTimeout(res, ms));

async function fakeRequest( payload ) {
	await delay(500);
	if (payload) {
		return payload
	}
	return;
}

//Uncomment the endpoints you want to fake
export default {
	// async login ({username, password}, env) {
	// 	const result = {
	// 		access_token: "ThisIsAFakeToken",
	// 		token_type: "bearer",
	// 		expires_in: 7200,
	// 		refresh_token: "ThisIsAFakeToken",
	// 		scope: "public admin",
	// 		created_at: new Date().getTime() + 31536000//ej. 1556637966
	// 	};
	// 	return fakeRequest(result);
	// },
	// selectUser () {
	// 	const result = {
	// 		user: {
	// 			id: "bc8b09d13d8b9c2c1ab1c290b8c73fc422a00693",
	// 			type: "relative",
	// 			email: "omar.parent@kioru.com",
	// 			first_name: "Bosh",
	// 			surname: "Zapata",
	// 			avatar: null,
	// 			timezone: null,
	// 			server: "DEV_sae_sakura",
	// 			actor_id: "3d4de71b785bda9b9420a27268c3a227fca25e37",
	// 			user_apps: []
	// 		}
	// 	}
	// 	return fakeRequest(result);
	// },
	// registerDevice( token ) {
	// 	return fakeRequest();
	// },
	getActivities ({ lt }) {
		const result = {
			feed_activities: FakerFactory.generateActivities(10)
		}
		return fakeRequest(result);
	},
	getStudents(){
		const result = {
			"students": FakerFactory.generateStudents(10)
		}
		return fakeRequest(result);
	},
	getEnrollmentsByStudentId() {
		const result = {
			"enrollments": [
				{
					"date": "2011-01-01",
					"grade_level": 0,
					"group_id": 246,
					"id": 8494,
					"program_id": 20,
					"school_id": 12,
					"score_avg": null,
					"status": 3,
					"term": {
					"begins_at": "2011-01-01",
					"custom_terms": null,
					"ends_at": "2011-12-31",
					"id": 37,
					"is_current": false,
					"links": {
						"courses": "/api/v1/core/terms/37/courses",
						"groups": "/api/v1/core/terms/37/groups",
					},
					"name": "2011",
					"periods": [
						{
						"date": "2011-06-01",
						"id": 76,
						"name": "2011.1",
						},
						{
						"date": "2011-12-31",
						"id": 77,
						"name": "2011.2",
						},
					],
					"term_type": 5,
					},
					"term_id": 37,
				},
				{
					"date": "2012-01-01",
					"grade_level": 1,
					"group_id": 247,
					"id": 8495,
					"program_id": 20,
					"school_id": 12,
					"score_avg": null,
					"status": 3,
					"term": {
					"begins_at": "2012-01-01",
					"custom_terms": null,
					"ends_at": "2012-12-31",
					"id": 36,
					"is_current": false,
					"links": {
						"courses": "/api/v1/core/terms/36/courses",
						"groups": "/api/v1/core/terms/36/groups",
					},
					"name": "2012",
					"periods": [
						{
						"date": "2012-06-01",
						"id": 74,
						"name": "2012.1",
						},
						{
						"date": "2012-12-31",
						"id": 75,
						"name": "2012.2",
						},
					],
					"term_type": 5,
					},
					"term_id": 36,
				},
				{
					"date": "2013-01-01",
					"grade_level": 2,
					"group_id": 248,
					"id": 8498,
					"program_id": 20,
					"school_id": 12,
					"score_avg": null,
					"status": 3,
					"term": {
					"begins_at": "2013-01-01",
					"custom_terms": null,
					"ends_at": "2013-12-31",
					"id": 33,
					"is_current": false,
					"links": {
						"courses": "/api/v1/core/terms/33/courses",
						"groups": "/api/v1/core/terms/33/groups",
					},
					"name": "2013",
					"periods": [
						{
						"date": "2013-06-01",
						"id": 68,
						"name": "2013.1",
						},
						{
						"date": "2013-12-31",
						"id": 69,
						"name": "2013.2",
						},
					],
					"term_type": 5,
					},
					"term_id": 33,
				},
				{
					"date": "2014-01-01",
					"grade_level": 3,
					"group_id": 249,
					"id": 8496,
					"program_id": 20,
					"school_id": 12,
					"score_avg": null,
					"status": 3,
					"term": {
					"begins_at": "2014-01-01",
					"custom_terms": null,
					"ends_at": "2014-12-31",
					"id": 34,
					"is_current": false,
					"links": {
						"courses": "/api/v1/core/terms/34/courses",
						"groups": "/api/v1/core/terms/34/groups",
					},
					"name": "2014",
					"periods": [
						{
						"date": "2014-06-01",
						"id": 70,
						"name": "2014.1",
						},
						{
						"date": "2014-12-31",
						"id": 71,
						"name": "2014.2",
						},
					],
					"term_type": 5,
					},
					"term_id": 34,
				},
				{
					"date": "2015-01-01",
					"grade_level": 4,
					"group_id": 250,
					"id": 8497,
					"program_id": 20,
					"school_id": 11,
					"score_avg": null,
					"status": 3,
					"term": {
					"begins_at": "2015-01-01",
					"custom_terms": null,
					"ends_at": "2015-12-31",
					"id": 32,
					"is_current": false,
					"links": {
						"courses": "/api/v1/core/terms/32/courses",
						"groups": "/api/v1/core/terms/32/groups",
					},
					"name": "2015",
					"periods": [
						{
						"date": "2015-06-01",
						"id": 66,
						"name": "2015.1",
						},
						{
						"date": "2015-12-31",
						"id": 67,
						"name": "2015.2",
						},
					],
					"term_type": 5,
					},
					"term_id": 32,
				},
				{
					"date": "2016-01-01",
					"grade_level": 5,
					"group_id": 193,
					"id": 7161,
					"program_id": 20,
					"school_id": 12,
					"score_avg": null,
					"status": 2,
					"term": {
					"begins_at": "2016-01-28",
					"custom_terms": null,
					"ends_at": "2016-12-20",
					"id": 30,
					"is_current": false,
					"links": {
						"courses": "/api/v1/core/terms/30/courses",
						"groups": "/api/v1/core/terms/30/groups",
					},
					"name": "2016",
					"periods": [
						{
						"date": "2016-06-01",
						"id": 62,
						"name": "2016.1",
						},
						{
						"date": "2016-12-31",
						"id": 63,
						"name": "2016.2",
						},
					],
					"term_type": 5,
					},
					"term_id": 30,
				},
				{
					"date": "2017-01-31",
					"grade_level": 6,
					"group_id": 218,
					"id": 7797,
					"program_id": 22,
					"school_id": 12,
					"score_avg": "2.63",
					"status": 2,
					"term": {
					"begins_at": "2017-01-31",
					"custom_terms": false,
					"ends_at": "2017-12-22",
					"id": 31,
					"is_current": false,
					"links": {
						"courses": "/api/v1/core/terms/31/courses",
						"groups": "/api/v1/core/terms/31/groups",
					},
					"name": "2017",
					"periods": [
						{
						"date": "2017-06-30",
						"id": 64,
						"name": "2017.1",
						},
						{
						"date": "2017-12-16",
						"id": 65,
						"name": "2017.2",
						},
					],
					"term_type": 5,
					},
					"term_id": 31,
				},
				{
					"date": "2018-02-01",
					"grade_level": 6,
					"group_id": 285,
					"id": 10121,
					"program_id": 22,
					"school_id": 12,
					"score_avg": null,
					"status": 2,
					"term": {
					"begins_at": "2017-12-31",
					"custom_terms": false,
					"ends_at": "2019-12-25",
					"id": 63,
					"is_current": true,
					"links": {
						"courses": "/api/v1/core/terms/63/courses",
						"groups": "/api/v1/core/terms/63/groups",
					},
					"name": "2018",
					"periods": [
						{
						"date": "2018-05-16",
						"id": 81,
						"name": "2018.1",
						},
						{
						"date": "2018-12-12",
						"id": 82,
						"name": "2018.2",
						},
					],
					"term_type": 5,
					},
					"term_id": 63,
				},
				{
					"date": "2019-06-05",
					"grade_level": 0,
					"group_id": 297,
					"id": 10140,
					"program_id": 20,
					"school_id": 12,
					"score_avg": null,
					"status": 2,
					"term": {
					"begins_at": "2019-05-31",
					"custom_terms": false,
					"ends_at": "2020-01-01",
					"id": 65,
					"is_current": true,
					"links": {
						"courses": "/api/v1/core/terms/65/courses",
						"groups": "/api/v1/core/terms/65/groups",
					},
					"name": "2019 verano",
					"periods": [
						{
						"date": "2019-06-28",
						"id": 85,
						"name": "1",
						},
					],
					"term_type": 5,
					},
					"term_id": 65,
				},
				{
					"date": "2019-06-12",
					"grade_level": 1,
					"group_id": 293,
					"id": 10137,
					"program_id": 1,
					"school_id": 4,
					"score_avg": null,
					"status": 2,
					"term": {
					"begins_at": "2019-02-02",
					"custom_terms": false,
					"ends_at": "2019-12-27",
					"id": 64,
					"is_current": true,
					"links": {
						"courses": "/api/v1/core/terms/64/courses",
						"groups": "/api/v1/core/terms/64/groups",
					},
					"name": "2019",
					"periods": [
						{
						"date": "2019-04-11",
						"id": 83,
						"name": "Mid Term",
						},
						{
						"date": "2019-12-15",
						"id": 84,
						"name": "Final Term",
						},
					],
					"term_type": 5,
					},
					"term_id": 64,
				},
			],
			"meta": {
			"total": 10,
			},
		}
		return fakeRequest(result);
	},
	getGoogleFilesByEnrollments() {
		const result = {
			"google_files": [
				{
					"file_id": "0B5rmsF5hzxn3Qkk4LWV0UHlOMTg",
					"file_url": "https://drive.google.com/drive/folders/0B5rmsF5hzxn3Qkk4LWV0UHlOMTg",
					"id": FakerFactory.getId(),
					"type": "group:student",
				},
			],
		}
		return fakeRequest(result);
	},
	getLecturesByStudentId ({ student_id, start_date, end_date, except_group_course }) {
		const result = {
			"lectures": [
				{
					"absences_codes": [
						{
							"code": "200",
							"student_ids": [
								7111,
							],
						},
					],
					"absent_student_ids": [
						7111,
					],
					"allow_delay": true,
					"attendable": true,
					"begin_at": "2019-07-08T10:30:00+10:00",
					"checked_at": "2019-07-06T00:34:31.000+10:00",
					"course_id": 2495,
					"end_at": null,
					"id": 89628,
					"late_student_ids": [],
					"total_absent": 1,
					"total_late": 0,
					"total_present": 0,
				},
				{
					"absences_codes": [
						{
							"code": "200",
							"student_ids": [
								7111,
							],
						},
					],
					"absent_student_ids": [
						7111,
					],
					"allow_delay": true,
					"attendable": true,
					"begin_at": "2019-07-08T10:30:00+10:00",
					"checked_at": "2019-07-06T00:43:47.000+10:00",
					"course_id": 2500,
					"end_at": "2019-07-08T13:00:00+10:00",
					"id": 89627,
					"late_student_ids": [],
					"total_absent": 1,
					"total_late": 0,
					"total_present": 0,
				},
				{
					"absences_codes": [
						{
							"code": "200",
							"student_ids": [
								7111,
							],
						},
					],
					"absent_student_ids": [
						7111,
					],
					"allow_delay": true,
					"attendable": true,
					"begin_at": "2019-07-08T13:00:00+10:00",
					"checked_at": "2019-07-06T00:41:14.000+10:00",
					"course_id": 2499,
					"end_at": "2019-07-08T15:00:00+10:00",
					"id": 89626,
					"late_student_ids": [],
					"total_absent": 1,
					"total_late": 0,
					"total_present": 0,
				},
				{
					"absences_codes": [
						{
							"code": "200",
							"student_ids": [
								7111,
							],
						},
					],
					"absent_student_ids": [
						7111,
					],
					"allow_delay": true,
					"attendable": true,
					"begin_at": "2019-07-08T13:00:00+10:00",
					"checked_at": "2019-07-06T00:24:39.000+10:00",
					"course_id": 2500,
					"end_at": null,
					"id": 89631,
					"late_student_ids": [],
					"total_absent": 1,
					"total_late": 0,
					"total_present": 0,
				},
				{
					"absences_codes": [
						{
							"code": "200",
							"student_ids": [
								7111,
							],
						},
					],
					"absent_student_ids": [
						7111,
					],
					"allow_delay": true,
					"attendable": true,
					"begin_at": "2019-07-08T15:00:00+10:00",
					"checked_at": "2019-07-06T00:23:08.000+10:00",
					"course_id": 2499,
					"end_at": null,
					"id": 89630,
					"late_student_ids": [],
					"total_absent": 1,
					"total_late": 0,
					"total_present": 0,
				},
				{
					"absences_codes": [
						{
							"code": "100",
							"student_ids": [
								7111,
							],
						},
					],
					"absent_student_ids": [],
					"allow_delay": true,
					"attendable": true,
					"begin_at": "2019-07-08T15:30:00+10:00",
					"checked_at": "2019-07-06T00:39:27.000+10:00",
					"course_id": 2497,
					"end_at": "2019-07-08T17:30:00+10:00",
					"id": 89625,
					"late_student_ids": [],
					"total_absent": 0,
					"total_late": 0,
					"total_present": 1,
				},
				{
					"absences_codes": [],
					"absent_student_ids": [],
					"allow_delay": true,
					"attendable": true,
					"begin_at": "2019-07-08T16:00:00+10:00",
					"checked_at": null,
					"course_id": 2441,
					"end_at": null,
					"id": 89513,
					"late_student_ids": [],
					"total_absent": 0,
					"total_late": 0,
					"total_present": 0,
				},
				{
					"absences_codes": [
						{
							"code": "100",
							"student_ids": [
								7111,
							],
						},
					],
					"absent_student_ids": [],
					"allow_delay": true,
					"attendable": true,
					"begin_at": "2019-07-08T17:30:00+10:00",
					"checked_at": "2019-07-06T00:19:55.000+10:00",
					"course_id": 2497,
					"end_at": null,
					"id": 89629,
					"late_student_ids": [],
					"total_absent": 0,
					"total_late": 0,
					"total_present": 1,
				},
			],
			"meta": {
				"cursor": 25601159201777,
				"cursor_asc": 25601159201777,
				"cursor_desc": 25600739771370,
			},
		}
		return fakeRequest(result);
	},
	selectAttendanceLogsByLectureIds({ ids }) {
		const result = {
			"attendance_logs": [
				{
					"absence_code": "100",
					"check": "out",
					"checksum": "RPQBBqCo",
					"comment": null,
					"created_at": "2019-07-06T00:19:55+10:00",
					"id": 922,
					"latest": true,
					"lecture_id": 89629,
					"mark_type": 4,
					"student_id": 7111,
				},
				{
					"absence_code": "200",
					"check": "out",
					"checksum": "kBBerX5d",
					"comment": null,
					"created_at": "2019-07-06T00:19:55+10:00",
					"id": 923,
					"latest": true,
					"lecture_id": 89629,
					"mark_type": 1,
					"student_id": 7886,
				},
				{
					"absence_code": "200",
					"check": "out",
					"checksum": "_Da4clrV",
					"comment": null,
					"created_at": "2019-07-06T00:23:08+10:00",
					"id": 926,
					"latest": true,
					"lecture_id": 89630,
					"mark_type": 1,
					"student_id": 7111,
				},
				{
					"absence_code": "200",
					"check": "out",
					"checksum": "iNG4UiAW",
					"comment": null,
					"created_at": "2019-07-06T00:24:39+10:00",
					"id": 927,
					"latest": true,
					"lecture_id": 89631,
					"mark_type": 1,
					"student_id": 7111,
				},
				{
					"absence_code": "401",
					"check": "out",
					"checksum": "MTZitp4T",
					"comment": null,
					"created_at": "2019-07-06T00:24:39+10:00",
					"id": 928,
					"latest": true,
					"lecture_id": 89631,
					"mark_type": 2,
					"student_id": 7886,
				},
				{
					"absence_code": "200",
					"check": "out",
					"checksum": "AO1z6EQD",
					"comment": null,
					"created_at": "2019-07-06T00:34:31+10:00",
					"id": 931,
					"latest": true,
					"lecture_id": 89628,
					"mark_type": 1,
					"student_id": 7111,
				},
				{
					"absence_code": "100",
					"check": "out",
					"checksum": "MuaP-XC2",
					"comment": null,
					"created_at": "2019-07-06T00:34:31+10:00",
					"id": 932,
					"latest": true,
					"lecture_id": 89628,
					"mark_type": 4,
					"student_id": 7886,
				},
				{
					"absence_code": "100",
					"check": "in",
					"checksum": "lsRF4Lyi",
					"comment": null,
					"created_at": "2019-07-06T00:39:27+10:00",
					"id": 940,
					"latest": true,
					"lecture_id": 89625,
					"mark_type": 4,
					"student_id": 7111,
				},
				{
					"absence_code": "401",
					"check": "in",
					"checksum": "NIK1TAtE",
					"comment": null,
					"created_at": "2019-07-06T00:39:27+10:00",
					"id": 941,
					"latest": true,
					"lecture_id": 89625,
					"mark_type": 2,
					"student_id": 7886,
				},
				{
					"absence_code": "200",
					"check": "in",
					"checksum": "0yL3EFYK",
					"comment": null,
					"created_at": "2019-07-06T00:41:14+10:00",
					"id": 942,
					"latest": true,
					"lecture_id": 89626,
					"mark_type": 1,
					"student_id": 7111,
				},
				{
					"absence_code": "100",
					"check": "in",
					"checksum": "nJlMxJj-",
					"comment": null,
					"created_at": "2019-07-06T00:43:47+10:00",
					"id": 945,
					"latest": true,
					"lecture_id": 89627,
					"mark_type": 4,
					"student_id": 7886,
				},
				{
					"absence_code": "200",
					"check": "in",
					"checksum": "rhh__20G",
					"comment": null,
					"created_at": "2019-07-06T00:43:47+10:00",
					"id": 944,
					"latest": true,
					"lecture_id": 89627,
					"mark_type": 1,
					"student_id": 7111,
				},
			],
			"meta": {
				"cursor_asc": "1562337827",
				"cursor_desc": "1562336395",
			},
		}
		return fakeRequest(result);
	},
	getConfigsByIds ({ ids }) {
		const result = {
			"attendance_logs": [
				{
					"absence_code": "100",
					"check": "out",
					"checksum": "RPQBBqCo",
					"comment": null,
					"created_at": "2019-07-06T00:19:55+10:00",
					"id": 922,
					"latest": true,
					"lecture_id": 89629,
					"mark_type": 4,
					"student_id": 7111,
				},
				{
					"absence_code": "200",
					"check": "out",
					"checksum": "kBBerX5d",
					"comment": null,
					"created_at": "2019-07-06T00:19:55+10:00",
					"id": 923,
					"latest": true,
					"lecture_id": 89629,
					"mark_type": 1,
					"student_id": 7886,
				},
				{
					"absence_code": "200",
					"check": "out",
					"checksum": "_Da4clrV",
					"comment": null,
					"created_at": "2019-07-06T00:23:08+10:00",
					"id": 926,
					"latest": true,
					"lecture_id": 89630,
					"mark_type": 1,
					"student_id": 7111,
				},
				{
					"absence_code": "200",
					"check": "out",
					"checksum": "iNG4UiAW",
					"comment": null,
					"created_at": "2019-07-06T00:24:39+10:00",
					"id": 927,
					"latest": true,
					"lecture_id": 89631,
					"mark_type": 1,
					"student_id": 7111,
				},
				{
					"absence_code": "401",
					"check": "out",
					"checksum": "MTZitp4T",
					"comment": null,
					"created_at": "2019-07-06T00:24:39+10:00",
					"id": 928,
					"latest": true,
					"lecture_id": 89631,
					"mark_type": 2,
					"student_id": 7886,
				},
				{
					"absence_code": "200",
					"check": "out",
					"checksum": "AO1z6EQD",
					"comment": null,
					"created_at": "2019-07-06T00:34:31+10:00",
					"id": 931,
					"latest": true,
					"lecture_id": 89628,
					"mark_type": 1,
					"student_id": 7111,
				},
				{
					"absence_code": "100",
					"check": "out",
					"checksum": "MuaP-XC2",
					"comment": null,
					"created_at": "2019-07-06T00:34:31+10:00",
					"id": 932,
					"latest": true,
					"lecture_id": 89628,
					"mark_type": 4,
					"student_id": 7886,
				},
				{
					"absence_code": "100",
					"check": "in",
					"checksum": "lsRF4Lyi",
					"comment": null,
					"created_at": "2019-07-06T00:39:27+10:00",
					"id": 940,
					"latest": true,
					"lecture_id": 89625,
					"mark_type": 4,
					"student_id": 7111,
				},
				{
					"absence_code": "401",
					"check": "in",
					"checksum": "NIK1TAtE",
					"comment": null,
					"created_at": "2019-07-06T00:39:27+10:00",
					"id": 941,
					"latest": true,
					"lecture_id": 89625,
					"mark_type": 2,
					"student_id": 7886,
				},
				{
					"absence_code": "200",
					"check": "in",
					"checksum": "0yL3EFYK",
					"comment": null,
					"created_at": "2019-07-06T00:41:14+10:00",
					"id": 942,
					"latest": true,
					"lecture_id": 89626,
					"mark_type": 1,
					"student_id": 7111,
				},
				{
					"absence_code": "100",
					"check": "in",
					"checksum": "nJlMxJj-",
					"comment": null,
					"created_at": "2019-07-06T00:43:47+10:00",
					"id": 945,
					"latest": true,
					"lecture_id": 89627,
					"mark_type": 4,
					"student_id": 7886,
				},
				{
					"absence_code": "200",
					"check": "in",
					"checksum": "rhh__20G",
					"comment": null,
					"created_at": "2019-07-06T00:43:47+10:00",
					"id": 944,
					"latest": true,
					"lecture_id": 89627,
					"mark_type": 1,
					"student_id": 7111,
				},
			],
			"meta": {
				"cursor_asc": "1562337827",
				"cursor_desc": "1562336395",
			},
		}
		return fakeRequest(result);
	}
};
