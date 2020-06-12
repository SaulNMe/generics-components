import React from 'react';
import useStudents from "saeko-native/app/hooks/useStudents";

export default function StudentContainer (props) {
	const [ studentsData, studentsLoader ] = useStudents();
	return (props.children(studentsData, studentsLoader.error, studentsLoader.isLoading));
}