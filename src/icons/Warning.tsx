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
                <Rect x="1" y="1" width="30" height="30" rx="15" ry="15" stroke={color} strokeWidth={2} strokeLinecap="round" />
                <Line x1="16" y1="7" x2="16" y2="21" stroke={color} strokeWidth={2} strokeLinecap="round" />
                <Rect x="15" y="24" width="2" height="2" rx="1" ry="1" stroke={color} strokeWidth={2} strokeLinecap="round" />
            </Svg>
        </Pressable>
    );
}

export default Icon;
