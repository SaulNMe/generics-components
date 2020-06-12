import React from 'react';
import { View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import styles from './ProfileHeaderRightSvgStyle';
import StudentContainer from 'saeko-native/app/containers/StudentContainer';
import CircleImg from 'saeko-native/app/components/CircleImg';

export default function ProfileHeaderRightSvg(props) {
	return (
		<ImageBackground
			source={require('saeko-native/assets/vector.png')}
			style={{ width: 180, height: 320, alignSelf: 'flex-end', zIndex: 999 }}>
			<StudentContainer>
				{(students, error, isLoading) => {
					let relativeImg = students[props.indexChildren] ? students[props.indexChildren].avatar : '';
					let imgLayout = !students.length || students.length === 1 || props.type !== 'relative' ? styles.imgLayout : {};
					if (students.length === 2) imgLayout = {};
					return (
						<View>
							{
								students.length >= 3 && (
									<TouchableOpacity
										activeOpacity={0.8}
										onPress={() => props.nextChildren(2, students.length)}
										style={[styles.alignSelfCenter, styles.smallImg]}>
										<CircleImg
											size={'Small'}
											image={students[(props.indexChildren + 2) % students.length].avatar}
										/>
									</TouchableOpacity>
								)}
							{
								students.length >= 2 && (
									<TouchableOpacity
										activeOpacity={0.8}
										onPress={() => props.nextChildren(1, students.length)}
										style={[styles.alignSelfEnd, styles.hugeImg]}>
										<CircleImg
											size={'Huge'}
											image={students[(props.indexChildren + 1) % students.length].avatar}
										/>
									</TouchableOpacity>
								)}
							<View style={[styles.smallLeftMargin, imgLayout]}>

								<TouchableOpacity
									activeOpacity={0.8}
									onPress={() => props.nextChildren(1, students.length)}>
									<CircleImg
										size={'ExtraHuge'}
										isLoading={props.isLoadingStudents}
										image={
											props.type === 'relative' ? relativeImg : props.avatar
										}
									/>
								</TouchableOpacity>
							</View>
						</View>
					);
				}}
			</StudentContainer>
		</ImageBackground>
	);
}

ProfileHeaderRightSvg.propTypes = {
	// data: PropTypes.array
};

ProfileHeaderRightSvg.defaultProps = {
	// data: []
};
