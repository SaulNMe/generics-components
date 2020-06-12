import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudents } from 'saeko-native/app/actions/StudentsActions';
import ApiService from 'saeko-native/app/services/ApiService';
import Local from 'saeko-native/app/services/Local';
import useStudents from "saeko-native/app/hooks/useStudents";
import Selectors from 'saeko-native/app/Selectors';
import useCurrentUser from 'saeko-native/app/hooks/useCurrentUser';

export default function PortfolioListContainer(props) {

	const dispatch = useDispatch();
	const [googleFiles, setGoogleFiles] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState([]);
	const [studentsData, studentsLoader] = useStudents({ skipFirstFetch: true });
	const filters = useSelector(Selectors.selectPortfolioUnselected)
	const [userData, userLoader] = useCurrentUser();
	useEffect(() => {
		loadData();
	}, [studentsData.length]);

	const loadData = async () => {
		let gFiles = [];
		let errors = [];
		let enrollments = [];
		try {
			userData.type === 'relative' ? await Promise.all(studentsData.map(async (student) => {
				const result = await ApiService.getEnrollmentsByStudentId({ student_id: student.id });
				result.enrollments.map(enrollment => enrollments.push({
					...enrollment,
					first_name: student.first_name,
					student_id: student.id
				}));
			})) : await ApiService.getEnrollments().then( result => {
				result.enrollments.map(enrollment => enrollments.push({
					...enrollment,
					first_name: userData.first_name,
				}));
			});
		} catch (e) {
			setIsLoading(false);
			errors.push(e);
			return;
		}

		await Promise.all(enrollments.map(async (enrollment) => {
			try {
				const result = await ApiService.getGoogleFilesByEnrollments({ enrollment_id: enrollment.id });
				result.google_files.map(googleFile => gFiles.push({
					...googleFile,
					first_name: enrollment.first_name,
					begins_at: enrollment.term.begins_at,
					ends_at: enrollment.term.ends_at,
					is_current: enrollment.term.is_current,
					student_id: enrollment.student_id
				}));
			} catch (e) {
				if (e.status !== 404) errors.push(e);
			}
		}));
		setGoogleFiles(gFiles);
		setIsLoading(false);
		setError(errors);
		setError((gFiles.length === 0 && errors !== 0) ? errors : []);
	}
	const reloadData = () => {
		setGoogleFiles([]);
		setIsLoading(true);
		setError('');
		loadData();
	}

	let section = []
	let currentTerm = userData.type === 'relative' ? googleFiles.filter(d => d.is_current).filter(report => filters.indexOf(report.student_id) === -1) : googleFiles.filter(d => d.is_current);
	let pastTerm = userData.type === 'relative' ? googleFiles.filter(d => !d.is_current).filter(report => filters.indexOf(report.student_id) === -1) : googleFiles.filter(d => !d.is_current);
	if (currentTerm.length) section.push({
		title: Local.get('portfolioScreen.currentTerm'),
		data: currentTerm
	});
	if (pastTerm.length) section.push({
		title: Local.get('portfolioScreen.pastTerm'),
		data: pastTerm
	});

	return (props.children({ section, isLoading, error, filters }, loadData, reloadData));
}