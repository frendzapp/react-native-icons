// packages
import { memo } from 'react';
import { Pressable } from 'react-native';
import { Svg, Line } from 'react-native-svg';

// types
import * as types from '@/types';

function Icon({ size = 32, color = '#000000', style, onPress, ...properties }: types.Parameters): types.Component {
	// calculate stroke width
	const strokeWidth: number = size / 16;

	return (
		<Pressable onPress={onPress} style={[{ width: size, height: size, overflow: 'visible' }, style]} {...properties}>
			<Svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={{ overflow: 'visible' }}>
				<Line x1="1" y1="16" x2="31" y2="16" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
				<Line x1="20" y1="5" x2="31" y2="16" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
				<Line x1="20" y1="27" x2="31" y2="16" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
			</Svg>
		</Pressable>
	);
}

export default memo(Icon);
