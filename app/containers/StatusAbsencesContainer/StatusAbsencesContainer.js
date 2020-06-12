import React, { 
	useEffect, 
	useState 
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import StatusItem from 'saeko-native/app/components/StatusItem';
import Local from 'saeko-native/app/services/Local';
import ApiService from 'saeko-native/app/services/ApiService';
import { setInfoInStudent } from "saeko-native/app/actions/StudentsActions";
import BodyText from 'saeko-native/app/components/BodyText';

export default function StatusAbsencesContainer (props) {

	const [enrollment, setEnrollments] = useState([]);
	const dispatch = useDispatch();

	const [userAbsent, setUserAbsent] = useState(0);
	const [userLate, setUserLate] = useState(0);

	useEffect(() => {
		if(props.userData.type === 'student') fetchEnrollment();
	}, [enrollment.length]);

	// useEffect(() => {
	// 	if(props.userData.type === 'student') fetchEnrollment();
	// }, [enrollment]);

	useEffect(() => {
		if(!(props.student || {}).id) return;
		if(((props.student || {}).late >= 0 || (props.student || {}).absent) >= 0) return;
		fetchEnrollments(props.student.id);

	}, [(props.student || {}).id]);

	useEffect(() => {
		if(((props.student || {}).late >= 0 || (props.student || {}).absent) >= 0) return;
		if(enrollment.length > 0) {
			fetchAbsences(enrollment.map(e => e.id));
		}
	}, [enrollment.length]); 

	const fetchEnrollments = async (studentId) => {
		const result = await ApiService.getEnrollmentsByStudentIdLastTerm({ student_id: studentId });
		setEnrollments(result.enrollments);
	};

	const fetchEnrollment = async () => {
		const result = await ApiService.getEnrollments();
		setEnrollments(result.enrollments);

	};

	const fetchAbsences = async (enrollmentsId) => {
		let absent = 0;
		let late = 0;
		await Promise.all(enrollmentsId.map(async (id) => {
			try {
				const result = await ApiService.getAbsences(id);
				result.absences.map(a => {
					absent += a.total;
					late += a.total_late;
				});
			} catch(e) {
				//console.log(e);
			}
		}));

		if(props.userData.type === 'student'){
			setUserLate(late);
			setUserAbsent(absent);
		} else dispatch(setInfoInStudent({
			studentId: props.student.id,
			absent: absent,
			late: late
		}));
	}

	let isRelativeData = (props.student || {}).late > 0 || (props.student || {}).absent > 0;
	
	return isRelativeData || userLate > 0 || userAbsent > 0 ? (
		<React.Fragment>
			<BodyText
				color="dark"
				text={Local.get('profile.currentPeriod')}
			/>
			<View style={props.style}>
				{
					// <StatusItem
					// 	text={Local.get('attendanceItem.present')}
					// 	color="present"
					// 	amount="10"
					// 	isLoading={isLoadingStudents}
					// />
				}
				<StatusItem
					text={Local.get('attendanceItem.late')}
					color="yellow"
					amount={`${(props.student || {}).late ? props.student.late : userLate}`}
					isLoading={props.isLoading}
					addHorizontalMargin
				/>
				<StatusItem
					text={Local.get('attendanceItem.absent')}
					color="absent"
					amount={`${(props.student || {}).absent ? props.student.absent : userAbsent}`}
					isLoading={props.isLoading}
				/>
			</View>
		</React.Fragment>
	): <React.Fragment />;
}


StatusAbsencesContainer.propTypes = {
	// data: PropTypes.array
}

StatusAbsencesContainer.defaultProps = {
	// data: []
}


