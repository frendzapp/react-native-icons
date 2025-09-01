// packages
import React from 'react';
import { Pressable } from 'react-native';
import { Svg, Polygon } from 'react-native-svg';

// types
import * as types from '@/types';

function Icon({ size = 32, color = '#000000', style, onPress, ...properties }: types.Parameters): types.Component {
	return (
		<Pressable onPress={onPress} style={[{ width: size, height: size }, style]} {...properties}>
			<Svg width={size} height={size} viewBox="0 0 32 32" fill="none">
				<Polygon points="16 1 19.54 12.46 31 12.46 21.73 19.54 25.27 31 16 23.92 6.73 31 10.27 19.54 1 12.46 12.46 12.46 16 1" stroke={color} strokeWidth={2} strokeLinecap="round" />
			</Svg>
		</Pressable>
	);
}

export default Icon;
