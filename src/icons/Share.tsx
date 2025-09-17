// packages
import React from 'react';
import { Pressable } from 'react-native';
import { Svg, Path, Line, Rect } from 'react-native-svg';

// types
import * as types from '@/types';

function Icon({ size = 32, color = '#000000', style, onPress, ...properties }: types.Parameters): types.Component {
    return (
        <Pressable onPress={onPress} style={[{ width: size, height: size }, style]} {...properties}>
            <Svg width={size} height={size} viewBox="0 0 32 32" fill="none">
                <Path
                    d="M1,27c-.07-.89-.2-4.1,2-7,3.21-4.24,8.53-4.03,9-4"
                    stroke={color}
                    strokeWidth={2}
                    strokeLinecap="round"
                />
                <Line x1="31" y1="16" x2="12" y2="16" stroke={color} strokeWidth={2} strokeLinecap="round" />
                <Line x1="20" y1="5" x2="31" y2="16" stroke={color} strokeWidth={2} strokeLinecap="round" />
                <Line x1="20" y1="27" x2="31" y2="16" stroke={color} strokeWidth={2} strokeLinecap="round" />
            </Svg>
        </Pressable>
    );
}

export default Icon;
