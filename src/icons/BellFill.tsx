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
				<Path d="M13,28c0,1.66,1.34,3,3,3s3-1.34,3-3v-1h-6v1Z" stroke={color} strokeWidth={2} strokeLinecap="round" />
				<Path
					d="M30,25c-1.66,0-3-1.34-3-3v-9c0-5.74-4.4-10.45-10.01-10.95,0-.02.01-.03.01-.05,0-.55-.45-1-1-1s-1,.45-1,1c0,.02,0,.03.01.05-5.61.5-10.01,5.21-10.01,10.95v9c0,1.66-1.34,3-3,3-.55,0-1,.45-1,1s.45,1,1,1h28c.55,0,1-.45,1-1s-.45-1-1-1Z"
					stroke={color}
					strokeWidth={2}
					strokeLinecap="round"
				/>
			</Svg>
		</Pressable>
	);
}

export default Icon;
