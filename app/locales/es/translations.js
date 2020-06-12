export default {
	locale: 'es',
	back: 'Regresar',
	welcomeScreen: {
		welcome: 'Bienvenido a Saeko App',
		swipe: 'Desliza para comenzar',
		carousel: [
			{
				title: 'Mensajes',
				text: 'Entérate de todo lo que sucede en tu institución.'
			}, {
				title: 'Pase de lista',
				text: 'Mantén tu asistencia al día.'
			}, {
				title: 'Calificaciones',
				text: 'No pierdas detalle de tus calificaciones.'
			}
		],
		begin: 'Comenzar'
	},
	loginScreen: {
		welcome: 'Bienvenido a Saeko!',
		subtitle: 'Lorem ipsum dolor sit amet, consectetur es.',
		username: 'Nombre de usuario',
		password: 'Contraseña',
		// logIn: 'Iniciar sesión',
		// loggingIn: 'Iniciando...',
		goBack: 'Regresar',
		errorTitle: 'Usuario o contraseña incorrecto',
		errorSubtitle: 'Por favor inténtalo de nuevo.'
	},
	homeScreen:{
		welcome: '¡Hola',
		show: 'Ver',
		more: 'más',
		showLess: 'Ver menos'
	},
	documentsTabNavigator: {
		report: 'Reportes',
		reportCards: 'REPORTES',
		portfolios: 'PORTAFOLIOS',
	},
	reportCardsScreen:{
		title: 'Boletas',
		currentReport: 'Reportes actuales',
		pastReport: 'Reportes anteriores',
	},
	portfolioScreen: {
		title: 'Portafolios',
		currentTerm: 'Carpetas del ciclo actual',
		pastTerm: 'Carpetas de ciclos pasados',
	},
	filtersHeader: {
		title: 'Filtrar por',
		clear: 'Limpiar',
		children: 'Niños'
	},
	headerCalendar: {
		days: {
			sun: 'Do',
			mon: 'Lu',
			tue: 'Ma',
			wed: 'Mi',
			thu: 'Ju',
			fri: 'Vi',
			sat: 'Sa'
		},
		months: {
			January: 'Enero',
			February: 'Febrero',
			March: 'Marzo',
			April: 'Abril',
			May: 'Mayo',
			June: 'Junio',
			July: 'Julio',
			August: 'Agosto',
			September: 'Septiembre',
			October: 'Octubre',
			November: 'Noviembre',
			December: 'Diciembre',
		},
	},
	scheduleScreen: {
		markabsent: 'Marca falta'
	},
	doubleText: {
		selectReason: 'Selecciona una razón de ausencia',
		from: "Selecciona una razón de ausencia desde",
		on: 'en',
		to: 'en',
		to2: 'a',
		apply: 'Aplicar esta opción de ausencia a los',
		student: 'Estudiantes'
	},
	profileScreen: {
		children: 'Todos los alumnos',
		settings: 'Detalles de la cuenta',
		accountInfo: 'Información de la cuenta',
		language: 'Idioma',
		logout: 'Cerrar sesión',
		logoutText: '¿Seguro que quieres cerrar sesión?',
		cancelBtn: 'Cancelar',
		confirmBtn: 'Continuar'
	},
	personalDetailsScreen: {
		title: 'Has clic para cambiar tu nombre de usuario, correo electrónico o contraseña',
		username: 'Nombre de usuario',
		email: 'Correo electrónico',
		password: 'Contraseña'
	},
	selectLanguageScreen: {
		title: 'Elige tu idioma',
		english: 'Inglés',
		spanish: 'Español'
	},
	selectModeScreen: {
		title: 'Su hijo se ausentará por ...',
		aSingleDay: 'Un solo día',
		manyDays: 'Muchos días'
	},
	selectDateScreen: {
		singleDate: 'Marcar falta de un día',
		dateRange: 'Marcar falta de varios días',
		selectDate: 'Selecciona fecha',
		apply: 'Aplicar a',
		children: 'niños',
		startDate: 'Selecciona fecha de inicio',
		endDate: 'Selecciona fecha de fin',
		cancel: 'Cancelar',
		confirm: 'Confirmar',
		differentCodes: 'Hay niños que pertenecen a escuelas diferentes. Marca las faltas por separado.',
		nullCodes: 'La escuela no perimte poner faltas'
	},
	selectDateRangeScreen: {
		title: 'Selecciona el rango',
		continue: 'Continuar',
	},
	selectReasonScreen: {
		errorAlert: 'Ocurrió un error, inténtalo más tarde'
	},
	selectChildrenScreen: {
		title: 'Pase de lista',
		headertext: 'Curso'
	},

	yourChildren: 'Tus Hij@s',
	home: 'Inicio',
	attendance: 'Asistencias',
	profile: 'Perfil',
	portfolio: 'Portafolio',
	reportCards: 'Reportes',
	authError: {
		errorTxt: 'No logramos conectar con el servidor. Por favor, inténtalo de nuevo más tarde.',
		retryLoginInstructions: 'Si este problema persiste, por favor',
		retryLogin: 'Vuelve a iniciar sesión'
	},
	bottomBar: {
		'home': 'Mensajes',
		'reports': 'Reportes',
		'timetable': 'Asistencia',
		'profile': 'Perfil'
	},
	activityFeed: {
		feedTitle: 'Mensajes',
		view: 'Ver',
		newSingular: 'nuevo',
		newPlural: 'nuevos',
		message: 'mensaje',
		paginationEnd: 'Has llegado al final (:',
		noMessages: 'No tienes ningún mensaj'
	},
	feedCard: {
		showLess: 'Mostrar meno'
	},
	reports: {
		noItems: 'Sin registros :)',
		view: 'VER',
	},
	attendance: {
		attendanceTitle: 'Asistencia',
		showPending: {
			one: 'Tienes un pase de lista pendiente',
			other: 'Tienes {{count}} pases de lista pendiente'
		},
		hidePending: 'Pases de lista pendientes',
		showBtn: 'MOSTRAR',
		hideBtn: 'OCULTA'
	},
	reportDownloadButton: {
		view: 'VER'
	},
	timeTable: {
		noItems: 'Sin registros :)',
		notifyBtn: 'NOTIFICAR AUSENCIA',
		noClasses: '¡Hoy no hay clases!'
	},
	lectureCard: {
		to: 'a',
		notifyBtn: 'NOTIFICAR AUSENCIA',
		absent: 'AUSENTE',
		explain: 'EXPLICAR',
		notChecked: 'AÚN NO SE HA REGISTRADO',
	},
	rollCall: {
		save: 'GUARDAR',
		saving: 'GUARDANDO...',
		endRollCall: 'Continúa para terminar el pase de lista',
		continue: 'Continuar'
	},
	rollCallCard: {
		unamedCourse: 'Curso anónimo',
		group: 'Grupo',
		rollCall: 'PASAR LISTA',
		rollPassed: 'YA PASASTE LISTA',
		rollNotPassed: 'PASE DE LISTA PENDIENTE',
		rollNotPassedYet: 'NO HAS PASADO LISTA',
		late: 'RETARDOS',
		absents: 'FALTA',
	},
	studentRollcallDisplay: {
		late: 'RETARDO',
		absent: 'FALTA'
	},
	chooseReason: {
		chooseReason: 'Selecciona una razón',
		select: 'Por favor selecciona el código de ausencia que se aplicará',
		cancelBtn: 'CANCELAR',
		continueBtn: 'CONTINUAR',
		notifyAbsence: 'Notificar ausencia',
		confirm: '¿Estás seguro que quieres notificar una falta'
	},
	chooseDate: {
		selectDate: 'Selecciona una fecha',
		selectDateRangeTxt: 'Selecciona el rango de fechas en el que tu hijo(a) estará ausente, por favor',
		from: 'De:',
		to: 'A:',
		pickDate: "{{t 'selectDate'}}",
		selectDateTxt: 'Selecciona la fecha en la que tu hijo(a) estará ausente, por favor',
		singleDayQuestion: '¿Estará fuera solo un día?',
		pickSingle: 'Selecciona solo una fecha',
		vacationQuestion: '¿Ausente por más de un día?',
		pickRange: 'Selecciona un rango de fechas',
		back: 'ATRÁS',
		continue: 'CONTINUAR',
		invalidDate: 'Por favor seleccione una fecha a partir de hoy',
		invalidDateRange: 'Por favor seleccione un rango de fechas a partir de ho'
	},
	chooseStudents: {
		selectStudent: 'Seleccionar Estudiantes',
		selectStudentTxt: 'Selecciona que estudiantes estarán ausentes, por favor',
		back: 'ATRÁS',
		continue: 'CONTINUA'
	},
	exec: {
		done: '¡Listo!',
		updateTxt1: 'La lista de asistencia fue',
		updateTxt2: 'actualizada exitosament'
	},
	profile: {
		profileTitle: 'Perfil',
		email: 'Correo electrónico',
		name: 'Nombre',
		enableNotifications: 'Habilitar notificaciones',
		notificationsTxt: 'Por favor, habilita las notificaciones en la configuración del dispositivo',
		currentPeriod: 'Semestre actual',
		aboutYou: 'Acerca de ti',
		children: 'hijos',

	},
	errorState: {
		title: '¡Oops ha ocurrido un error!',
		head: '¡No se ha encontrado ningún comentario!',
		subtitle: 'Vuelve a intentar más tarde',
		btnText: 'Volver a cargar'
	},
	emptyState: {
		title: 'Todavía no hay registros',
		subtitle: 'Cuando haya registros disponibles podrás encontrarlos aquí',
		btnText: 'Refresh',
		titleLoading: 'Cargando...',
		subtitleLoading: ' ',
	},
	timelineCard: {
		students: 'estudiantes',
		present: 'PRESENTE',
		absent: 'FALTA',
		late: 'RETARDO',
		pending: 'Pasar lista',
		notPassed: 'Lista no pasada',
		passed: 'Lista pasada',
	},
	attendanceItem: {
		present: 'PRESENTE',
		absent: 'AUSENTE',
		late: 'RETARDO',
		excused: 'JUSTIFICADO',
		tap: 'Pulsa para cambiar estado'
	},
	PendingIndicator: {
		show: 'Mostrar',
		hide: 'Ocultar',
		youHave: 'Tienes ',
		pendingRollCalls: ' pases de lista pendientes'
	},
	SelectReasonProfessorScreen: {
		title: 'Razón de Ausencia',
		student: 'Alumno'
	},
	reportItem: {
		download: 'Pulsa para descargar',
		open: 'Pulsa para abrir'
	}
}