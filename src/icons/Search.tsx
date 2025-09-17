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
                <Line x1="18.5" y1="18.5" x2="31" y2="31" stroke={color} strokeWidth={2} strokeLinecap="round" />
                <Rect x="1" y="1" width="20" height="20" rx="10" ry="10" stroke={color} strokeWidth={2} strokeLinecap="round" />
            </Svg>
        </Pressable>
    );
}

export default Icon;
