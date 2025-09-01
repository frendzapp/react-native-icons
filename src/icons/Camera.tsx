// packages
import React from 'react';
import { Pressable } from 'react-native';
import { Svg, Path, Rect } from 'react-native-svg';

// types
import * as types from '@/types';

function Icon({ size = 32, color = '#000000', style, onPress, ...properties }: types.Parameters): types.Component {
	return (
		<Pressable onPress={onPress} style={[{ width: size, height: size }, style]} {...properties}>
			<Svg width={size} height={size} viewBox="0 0 32 32" fill="none">
				<Path
					d="M28,7h-2.76c-.8,0-1.56-.32-2.12-.88l-.24-.24c-.56-.56-1.33-.88-2.12-.88h-9.51c-.8,0-1.56.32-2.12.88l-.25.25c-.55.55-1.32.87-2.11.87h-2.76c-1.66,0-3,1.34-3,3v14c0,1.66,1.34,3,3,3h24c1.66,0,3-1.34,3-3v-14c0-1.66-1.34-3-3-3Z"
					stroke={color}
					strokeWidth={2}
					strokeLinecap="round"
				/>
				<Rect x="12" y="12" width="8" height="8" rx="4" ry="4" stroke={color} strokeWidth={2} strokeLinecap="round" />
				<Rect x="21" y="9" width="2" height="2" rx="1" ry="1" stroke={color} strokeWidth={2} strokeLinecap="round" />
			</Svg>
		</Pressable>
	);
}

export default Icon;
