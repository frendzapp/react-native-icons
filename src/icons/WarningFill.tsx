// packages
import React from 'react';
import { Pressable } from 'react-native';
import { Svg, Path, Circle } from 'react-native-svg';

// types
import * as types from '@/types';

function Icon({ size = 32, bgColor = '#000000', color = '#ffffff', style, onPress, ...properties }: types.Parameters): types.Component {
    return (
        <Pressable onPress={onPress} style={[{ width: size, height: size }, style]} {...properties}>
            <Svg width={size} height={size} viewBox="0 0 32 32">
                <Circle cx={16} cy={16} r={15} fill={bgColor} />
                <Path
                    d="M16,26c-1.1,0-2-.9-2-2s.9-2,2-2,2,.9,2,2-.9,2-2,2ZM18,18c0,1.1-.9,2-2,2s-2-.9-2-2v-10c0-1.1.9-2,2-2s2,.9,2,2v10Z"
                    stroke={color}
                    fill={color}
                    strokeLinecap="round"
                />
            </Svg>
        </Pressable>
    );
}

export default Icon;