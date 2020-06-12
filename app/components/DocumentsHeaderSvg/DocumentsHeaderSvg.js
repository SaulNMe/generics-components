import React, { 
	// useEffect, 
	// useState 
} from 'react';
import {
	Svg,
	Defs,
	Stop,
	LinearGradient,
	G,
	Path,
	Rect
} from 'react-native-svg';
import { View, Text, TouchableOpacity } from 'react-native';
import { Metrics } from 'saeko-native/app/styles';
import TinyText from 'saeko-native/app/components/TinyText';
import { Feather } from '@expo/vector-icons';
import styles from './DocumentsHeaderSvgStyle';
import Local from 'saeko-native/app/services/Local';

export default function DocumentsHeaderSvg (props) {
	let green = '#17AE4B';
	let yellow = "#A7C538";
	let magenta = "#AA258C";
	let purple = "#6F2F8E";

	return (
		<React.Fragment>
			<Svg
				width={Metrics.screenWidth + 10}
				height={Metrics.screenWidth * 0.37}
				viewBox='0 0 375 132'
			>
				<G>
					<Path d="M219 102.498C209.19 92.7063 186.739 96.5563 181.101 96.8892H166V1.49756H375V81.9976C369 100.498 355.5 101.498 341 102.498C332.996 103.05 327.555 103.359 319.037 100.384C314.56 98.8204 309.573 99.0585 305.508 101.501C279.532 117.114 279.63 111.545 277 109.998C221.5 104.498 229.636 113.113 219 102.498Z" fill="white" fillOpacity="0.9"/>
					<Path d="M130.074 115.73C58.3088 139.76 12.4321 100.577 0 98.2542V0.497559H244C240.86 27.0873 232.338 13.969 218.882 55.5547C198.431 118.76 207.488 89.8091 130.074 115.73Z" fill="url(#paint0_linear)" fillOpacity="0.95"/>
					<Path d="M304.411 -16.391C336.886 -39.0356 352.591 -28.4161 374.415 -2.7854C392.523 18.4828 376.214 54.3759 348.281 54.34C348.281 54.34 349.828 56.0617 309.253 45.1457C288.785 39.6392 239.894 28.5969 304.411 -16.391Z" fill="url(#paint1_linear)"/>
				</G>
				<Defs>
					<LinearGradient id="paint0_linear" x1="244" y1="0.497559" x2="145.119" y2="196.652" gradientUnits="userSpaceOnUse">
						<Stop offset="0" stopColor={props.screen === 'reports' ? green : magenta}/>
						<Stop offset="1" stopColor={props.screen === 'reports' ? yellow : purple}/>
					</LinearGradient>
					<LinearGradient id="paint1_linear" x1="428.337" y1="50.1606" x2="276.063" y2="78.8685" gradientUnits="userSpaceOnUse">
						<Stop offset="0" stopColor="#FAA61B"/>
						<Stop offset="1" stopColor="#F44336"/>
					</LinearGradient>
					<LinearGradient id="paint2_linear" x1="307" y1="44" x2="219" y2="132" gradientUnits="userSpaceOnUse">
						<Stop offset="0" stopColor={props.screen === 'reports' ? magenta : green}/>
						<Stop offset="1" stopColor={props.screen === 'reports' ? purple : yellow}/>
					</LinearGradient>
				</Defs>
			</Svg>
			<TouchableOpacity
				onPress={props.onSelect}
				style={styles.toggleBtn}
				activeOpacity={0.4}
			>
				<Svg
					width={Metrics.screenWidth}
					height={Metrics.screenWidth * 0.352}
					viewBox='0 0 375 132'
				>
					<Rect x="0" y="0" width="88" height="88" rx="44" fill="url(#paint2_linear)" fillOpacity="0.95"/>
					<Defs>
						<LinearGradient id="paint2_linear" x1="88" y1="0" x2="0" y2="88" gradientUnits="userSpaceOnUse">
							<Stop offset="0" stopColor={props.screen === 'reports' ? magenta : green}/>
							<Stop offset="1" stopColor={props.screen === 'reports' ? purple : yellow}/>
						</LinearGradient>
					</Defs>
				</Svg>
				<View style={styles.btnText}>
					<Feather size={22} color='#fff' name={props.screen === 'reports' ? 'folder' : 'file-text'}/>
					<TinyText color='white' text={props.screen === 'reports' ? Local.get('portfolioScreen.title') : Local.get('reportCardsScreen.title')} weight='light'/>
				</View>
			</TouchableOpacity>
			{
				props.type === 'relative' && (
					<TouchableOpacity
						onPress={props.onPress}
						style={styles.filtersBtn}
						activeOpacity={0.4}
					>
						<Svg
							width={Metrics.screenWidth}
							height={Metrics.screenWidth * 0.352}
							viewBox='0 0 375 132'
						>
							<Rect x="0" y="0" width="40" height="40" rx="20" fill="url(#paint3_linear)" fillOpacity="0.95"/>
							<Defs>
								<LinearGradient id="paint3_linear" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
									<Stop offset="0" stopColor="#AA258C"/>
									<Stop offset="1" stopColor="#F44336"/>
								</LinearGradient>
							</Defs>
						</Svg>
						<View style={styles.btnText}>
							<Feather size={18} color='#fff' name='sliders'/>
						</View>
					</TouchableOpacity>
				)
			}
		</React.Fragment>
	);
}