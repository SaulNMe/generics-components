export default {
	locale: 'en',
	back: 'Back',
	welcomeScreen: {
		welcome: 'Welcome to Saeko App',
		swipe: 'Swipe to start',
		carousel: [
			{
				title: 'News feed',
				text: 'Keep up with the activity that is happening in your school'
			}, {
				title: 'Roll call',
				text: 'Keep your attendance up to date.'
			}, {
				title: 'Grades',
				text: 'Take a look at your grades.'
			}
		],
		begin: 'Begin'
	},
	loginScreen: {
		welcome: 'Welcome to Saeko!',
		subtitle: 'Lorem ipsum dolor sit amet, consectetur en.',
		username: 'Username',
		password: 'Password',
		// logIn: 'Log in',
		// loggingIn: 'Logging in...',
		goBack: 'Go back',
		errorTitle: 'Invalid credentials',
		errorSubtitle: 'Please verify them and try again.'
	},
	homeScreen: {
		welcome: 'Welcome',
		show: 'See',
		more: 'more',
		showLess: 'See less'
	},
	documentsTabNavigator: {
		report: 'Report',
		reportCards: 'REPORT CARDS',
		portfolios: 'PORTFOLIOS',
	},
	reportCardsScreen: {
		title: 'Report Cards',
		currentReport: 'Current report cards',
		pastReport: 'Past report cards',
	},
	portfolioScreen: {
		title: 'Portfolios',
		currentTerm: 'Current term folders',
		pastTerm: 'Past terms folders',
	},
	filtersHeader: {
		title: 'Filter by',
		clear: 'Clear',
		children: 'Children'
	},
	headerCalendar: {
		days: {
			sun: 'Sun',
			mon: 'Mon',
			tue: 'Tue',
			wed: 'Wed',
			thu: 'Thu',
			fri: 'Fri',
			sat: 'Sat'
		},
		months: {
			January: 'January',
			February: 'February',
			March: 'March',
			April: 'April',
			May: 'May',
			June: 'June',
			July: 'July',
			August: 'August',
			September: 'September',
			October: 'October',
			November: 'November',
			December: 'December',
		},
	},
	scheduleScreen: {
		markabsent: 'Mark Absent'
	},
	doubleText: {
		selectReason: 'Select a reason for the absence',
		from: "Select a reason for the absence from",
		on: 'on',
		to: 'to',
		to2: 'to',
		apply: 'Apply this absence option to',
		student: 'Students'
	},
	profileScreen: {
		children: 'All Children',
		settings: 'Account',
		accountInfo: 'Account information',
		language: 'Language',
		logout: 'Log out',
		logoutText: 'Are you sure you want to log out?',
		cancelBtn: 'Cancel',
		confirmBtn: 'Continue'
	},
	personalDetailsScreen: {
		title: 'Click to change your username, email or password',
		username: 'Username',
		email: 'Email',
		password: 'Password'
	},
	selectLanguageScreen: {
		title: 'Choose your language',
		english: 'English',
		spanish: 'Spanish'
	},
	selectModeScreen: {
		title: 'Your child will be absent for...',
		aSingleDay: 'A single day',
		manyDays: 'Many days'
	},
	selectDateScreen: {
		singleDate: 'Mark absent single day',
		dateRange: 'Mark absent date range',
		selectDate: 'Select date',
		apply: 'Apply to',
		children: 'children',
		startDate: 'Select starting date',
		endDate: 'Select finishing date',
		cancel: 'Cancel',
		confirm: 'Confirm',
		differentCodes: 'One or more children are from a different school. Try marking the absence separately.',
		nullCodes: 'The school does not allow absences'
	},
	selectDateRangeScreen: {
		title: 'Select Date Range',
		continue: 'Continue',
	},
	selectReasonScreen: {
		errorAlert: 'An error ocurred, please try again later'
	},
	selectChildrenScreen: {
		title: 'Roll call at',
		headertext: 'Course'
	},

	yourChildren: 'Your children',
	home: 'Home',
	attendance: 'Attendance',
	profile: 'Profile',
	portfolio: 'Portfolio',
	reportCards: 'Report Cards',
	bottomBar: {
		'home': 'Messages',
		'reports': 'Reports',
		'timetable': 'Attendance',
		'profile': 'Profile'
	},
	authError: {
		errorTxt: 'We were unable to connect to our severs. Please try again later.',
		retryLoginInstructions: 'If this problem persists, please',
		retryLogin: 'Log in again'
	},
	activityFeed: {
		feedTitle: 'Messages',
		view: 'View',
		newSingular: 'new',
		newPlural: "{{t 'newSingular'}}'",
		message: 'message',
		paginationEnd: "You've got to the end (:",
		noMessages: 'You have no messages'
	},
	feedCard: {
		showLess: 'Show less'
	},
	reports: {
		noItems: 'No items here :)',
		view: 'VIEW',
	},
	attendance: {
		attendanceTitle: 'Attendance',
		showPending: {
			one: 'You have one pending roll call',
			other: 'You have {{count}} pending roll call'
		},
		hidePending: 'Pending roll calls',
		showBtn: 'SHOW',
		hideBtn: 'HIDE'
	},
	reportDownloadButton: {
		view: 'VIEW'
	},
	timeTable: {
		noItems: 'No items here :)',
		notifyBtn: 'NOTIFY ABSENCE',
		noClasses: 'No classes today!'
	},
	lectureCard: {
		to: 'to',
		notifyBtn: 'NOTIFY ABSENCE',
		absent: 'ABSENT',
		explain: 'EXPLAIN',
		notChecked: 'NOT CHECKED YET',
	},
	rollCall: {
		save: 'SAVE',
		saving: 'SAVING...',
		endRollCall: 'Continue to end rollcall',
		continue: 'Continue',
	},
	rollCallCard: {
		unamedCourse: 'Unamed Course',
		group: 'Group',
		rollCall: 'ROLL CALL',
		rollPassed: 'ROLL PASSED',
		rollNotPassed: 'ROLL NOT PASSED',
		rollNotPassedYet: 'ROLL NOT PASSED YET',
		late: 'LATE',
		absents: 'ABSENT'
	},
	studentRollcallDisplay: {
		late: 'LATE',
		absent: 'ABSENT'
	},
	chooseReason: {
		chooseReason: 'Choose a Reason',
		select: 'Please select which absence code will be applied',
		cancelBtn: 'CANCEL',
		continueBtn: 'CONTINUE',
		notifyAbsence: 'Notify absence',
		confirm: 'Are you sure you want to mark an absence'
	},
	chooseDate: {
		selectDate: 'Select a Date',
		selectDateRangeTxt: 'Please select a date range in which your child will be absent from school',
		from: 'From:',
		to: 'To:',
		pickDate: 'Pick a date',
		selectDateTxt: 'Please select a date in which your child will be absent from school',
		singleDayQuestion: 'Absent for a single day?',
		pickSingle: 'Pick a single date',
		vacationQuestion: 'Absent for more than one day?',
		pickRange: 'Pick a date range',
		back: 'BACK',
		continue: 'CONTINUE',
		invalidDate: 'Please select a date from today',
		invalidDateRange: 'Please select a date range from today'
	},
	chooseStudents: {
		selectStudent: 'Select Students',
		selectStudentTxt: 'Please select which students will be absent',
		back: 'BACK',
		continue: 'CONTINUE'
	},
	exec: {
		done: 'Done!',
		updateTxt1: 'The attendance list was',
		updateTxt2: 'successfully update'
	},
	profile: {
		profileTitle: 'Profile',
		email: 'Email',
		name: 'Name',
		enableNotifications: 'Enable Notifications',
		notificationsTxt: 'Please allow notifications in your device settings',
		currentPeriod: 'Current Period',
		aboutYou: 'About You',
		children: 'children',

	},
	errorState: {
		title: 'Oops something went wrong!',
		head: "¡There's no comments here!",
		subtitle: 'Please try again later',
		btnText: 'Refresh'
	},
	emptyState: {
		title: 'There are still no records',
		subtitle: 'When there are records available you can find them here',
		btnText: 'Refresh',
		titleLoading: 'Loading...',
		subtitleLoading: ' '
	},
	timelineCard: {
		students: 'students',
		present: 'PRESENT',
		absent: 'ABSENT',
		late: 'LATE',
		pending: 'ROLL CALL',
		notPassed: 'ROLL NOT PASSED',
		passed: 'ACCOMPLISHED',
	},
	attendanceItem: {
		present: 'PRESENT',
		absent: 'ABSENT',
		late: 'LATE',
		excused: 'EXCUSED',
		tap: 'Tap to change status'
	},
	PendingIndicator: {
		show: 'Show',
		hide: 'Hide',
		youHave: 'You have ',
		pendingRollCalls: ' pending roll calls'
	},
	SelectReasonProfessorScreen: {
		title: 'Reason for Absence',
		student: 'Student'
	},
	reportItem: {
		download: 'Tap to download',
		open: 'Tap to open'
	}
}