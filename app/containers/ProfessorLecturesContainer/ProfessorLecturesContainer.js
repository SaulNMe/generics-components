import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
	View,
	Text,
} from 'react-native';
import ApiService from 'saeko-native/app/services/ApiService';

import { SetStudents } from 'saeko-native/app/actions/ProfessorStudentsActions';
import Selectors from 'saeko-native/app/Selectors';
import { useDispatch, useSelector } from 'react-redux';

export default function ProfessorLecturesContainer (props) {	
	const dispatch = useDispatch();
	let [loading, setLoading] = useState(true);
	let [error, setError] = useState('');
	let [data, setData] = useState([]);

	let updatingLectures = useSelector(Selectors.selectUpdatingLectures);

	useEffect(() => {
		makeCards();
	}, [props.date, updatingLectures]);

	async function makeCards () {
		//TODO: Refactor this, optimize on API
		setLoading(true);
		props.setIsLoading(true);
		const lectures = await fetchLectures();
		setData(lectures);
		setLoading(false);
		props.setIsLoading(false);
	}

	async function fetchLectures() {
		const lectures = [];
		const date = props.date;
		const result = await ApiService.getLecturesByProfessor({
			start_date: date,
			end_date: date,
			include_fields: 'total_present,total_absent,total_late'
		});
		lectures.push(...result.lectures);
		return lectures
	}
	return props.children({ cards: data, isLoading: loading, error: error, reload: makeCards});
}