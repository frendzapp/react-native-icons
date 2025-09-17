// packages
import React from 'react';
import { Pressable } from 'react-native';
import { Svg, Path, Line } from 'react-native-svg';

// types
import * as types from '@/types';

function Icon({ size = 32, color = '#000000', style, onPress, ...properties }: types.Parameters): types.Component {
    return (
        <Pressable onPress={onPress} style={[{ width: size, height: size }, style]} {...properties}>
            <Svg width={size} height={size} viewBox="0 0 32 32" fill="none">
                <Line x1="9" y1="23" x2="31" y2="1" stroke={color} strokeWidth={2} strokeLinecap="round" />
                <Line x1="16" y1="31" x2="31" y2="1" stroke={color} strokeWidth={2} strokeLinecap="round" />
                <Line x1="1" y1="16" x2="31" y2="1" stroke={color} strokeWidth={2} strokeLinecap="round" />
                <Path
                    d="M1,16c.81.21,7.48,2.05,8,6,.04.31.05.64,0,1"
                    stroke={color}
                    strokeWidth={2}
                    strokeLinecap="round"
                />
                <Path
                    d="M16,31c-.21-.81-2.05-7.48-6-8-.31-.04-.64-.05-1,0"
                    stroke={color}
                    strokeWidth={2}
                    strokeLinecap="round"
                />
            </Svg>
        </Pressable>
    );
}

export default Icon;
