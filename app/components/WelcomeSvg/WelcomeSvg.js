import React, { 
	// useEffect, 
	// useState 
} from 'react';
import {
	Svg,
	ClipPath,
	Defs,
	Stop,
	LinearGradient,
	G,
	Path,
	Rect
} from 'react-native-svg';
import { Metrics } from 'saeko-native/app/styles';

export default function WelcomeSvg () {
	return (
		<Svg
			height={Metrics.screenWidth * 1.06}
			width={Metrics.screenWidth}
			viewBox="0 0 375 394"
			fill="none"
		>
			<Defs>
				<LinearGradient id="linearGradient1" x1="375" y1="0" x2="82" y2="131" gradientUnits="userSpaceOnUse">
					<Stop offset="0" stopColor="#AA258C"/>
					<Stop offset="1" stopColor="#6F2F8E"/>
				</LinearGradient>
				<LinearGradient id="linearGradient2" x1="375" y1="0" x2="4" y2="375" gradientUnits="userSpaceOnUse">
					<Stop offset="0" stopColor="#156AB2"/>
					<Stop offset="1" stopColor="#2D93D0"/>
				</LinearGradient>
				<LinearGradient id="linearGradient3" x1="272" y1="0" x2="133" y2="238" gradientUnits="userSpaceOnUse">
					<Stop offset="0" stopColor="#17AE4B"/>
					<Stop offset="1" stopColor="#A7C538"/>
				</LinearGradient>
			</Defs>
			<G clipPath="url(#clipPath)">
				<Path d="M214 290.5C277.281 377.609 341.634 392.741 375 394.043V0L361.5 15.5L274 128C312.9 169.829 150.719 203.391 214 290.5Z" fill="url(#linearGradient1)"/>
				<Path d="M219.608 325.49C151.765 411.765 44.9346 355.556 0 316.667V0H375V73.0392C354.412 111.275 308.824 133.824 267.157 173.529C233.824 205.294 225.98 263.235 228.922 289.216C229.643 295.588 229.02 313.333 219.608 325.49Z" fill="url(#linearGradient2)"/>
				<Path d="M72.5 93.5C47.7 149.1 13.8333 161 0 160V0H272.5C260.1 13.2 229.314 17.7332 210.5 20.5C176.5 25.5 97.3 37.9 72.5 93.5Z" fill="url(#linearGradient3)"/>
			</G>
			<ClipPath id="clipPath">
				<Rect width="375" height="394" fill="white"/>
			</ClipPath>
		</Svg>
	)
}