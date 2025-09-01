// packages
import { memo } from 'react';
import { Pressable } from 'react-native';
import { Svg, Line, Rect } from 'react-native-svg';

// types
import * as types from '@/types';

function Icon({ size = 32, color = '#000000', style, onPress, ...properties }: types.Parameters): types.Component {
	// calculate stroke width
	const strokeWidth: number = size / 16;

	return (
		<Pressable onPress={onPress} style={[{ width: size, height: size }, style]} {...properties}>
			<Svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={{ overflow: 'visible' }}>
				<Rect x="1" y="1" width="30" height="30" rx="15" ry="15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
				<Line x1="26" y1="26" x2="6" y2="6" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
			</Svg>
		</Pressable>
	);
}

export default memo(Icon);
