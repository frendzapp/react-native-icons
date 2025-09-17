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
                <Rect x="10" y="1" width="12" height="12" rx="6" ry="6" stroke={color} strokeWidth={2} strokeLinecap="round" />
                <Path
                    d="M31,31c-.52-7.82-7.03-14-15-14S1.52,23.18,1,31"
                    stroke={color}
                    strokeWidth={2}
                    strokeLinecap="round"
                />
                <Rect x="25" y="14" width="2" height="2" rx="1" ry="1" stroke={color} strokeWidth={2} strokeLinecap="round" />
                <Line x1="26" y1="11" x2="26" y2="4" stroke={color} strokeWidth={2} strokeLinecap="round" />
            </Svg>
        </Pressable>
    );
}

export default Icon;
