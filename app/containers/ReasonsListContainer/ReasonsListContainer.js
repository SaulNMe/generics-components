import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query-hooks';
import { connect } from "react-redux";
import ApiService from 'saeko-native/app/services/ApiService';
import { useSelector } from 'react-redux';
import Selectors from 'saeko-native/app/Selectors';

export default function ReasonsListContainer (props) {

	useEffect(() => {
		if (!props.skipFirstFetch)
			makeConfigsCodes();
	}, []);
	
	const env = useSelector(Selectors.selectEnv);
	const [configsCodes, setConfigsCodes] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState('');

	const makeConfigsCodes = async (studentId) => {
		const enrollments = await fetchEnrollments(props.studentId || studentId);
		const configsPromise = await fetchConfigs(enrollments);
		setConfigsCodes(configsPromise);
		setIsLoading(false);
		return configsPromise
	};

	const fetchEnrollments = async (studentId) => {
		const result = await ApiService.getEnrollmentsByStudentId({ student_id: studentId });
		return result.enrollments;
	};

	const fetchConfigs = async (enrollments) => {
		let schoolIds = enrollments.map(enrollment => enrollment.school_id);
		schoolIds = [...new Set(schoolIds)];
		let configs = [];
		await Promise.all(schoolIds.map(async (schoolId) => {
			const result = await ApiService.getConfigsBySchoolId({ school_id: schoolId });
			if (result.attendance_config)
				configs = result.attendance_config.tags;
			//configs.push(...result.attendance_config.tags);
		}));
		return configs;
	};

	return (props.children({configsCodes, isLoading ,error, makeConfigsCodes}));
}