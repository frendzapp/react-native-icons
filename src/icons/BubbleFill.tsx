// packages
import React from 'react';
import { Pressable } from 'react-native';
import { Svg, Path } from 'react-native-svg';

// types
import * as types from '@/types';

function Icon({ size = 32, color = '#000000', style, onPress, ...properties }: types.Parameters): types.Component {
	return (
		<Pressable onPress={onPress} style={[{ width: size, height: size }, style]} {...properties}>
			<Svg width={size} height={size} viewBox="0 0 32 32" fill="none">
				<Path
					d="M28,1H4c-1.66,0-3,1.34-3,3v16c0,1.66,1.34,3,3,3h1l8,8v-8h15c1.66,0,3-1.34,3-3V4c0-1.66-1.34-3-3-3Z"
					fill={color}
					stroke={color}
					strokeWidth={2}
					strokeLinecap="round"
				/>
			</Svg>
		</Pressable>
	);
}

export default Icon;
