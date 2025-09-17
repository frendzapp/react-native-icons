// packages
import React from 'react';
import { Pressable } from 'react-native';
import { Svg, Line, Rect } from 'react-native-svg';

// types
import * as types from '@/types';

function Icon({ size = 32, color = '#000000', style, onPress, ...properties }: types.Parameters): types.Component {
	return (
		<Pressable onPress={onPress} style={[{ width: size, height: size }, style]} {...properties}>
			<Svg width={size} height={size} viewBox="0 0 32 32" fill="none">
				<Rect x="1" y="5" width="30" height="22" rx="3" ry="3" stroke={color} strokeWidth={2} strokeLinecap="round" />
				<Line x1="1" y1="9" x2="16" y2="16" stroke={color} strokeWidth={2} strokeLinecap="round" />
				<Line x1="31" y1="9" x2="16" y2="16" stroke={color} strokeWidth={2} strokeLinecap="round" />
			</Svg>
		</Pressable>
	);
}

export default Icon;
