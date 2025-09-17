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
                    d="M16,1h0C10.14,6.86,6.86,10.14,1,16v12c0,1.66,1.34,3,3,3h5c1.66,0,3-1.34,3-3v-6c0-2.19,1.81-4,4-4s4,1.81,4,4v6c0,1.66,1.34,3,3,3h5c1.66,0,3-1.34,3-3v-12L16,1Z"
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
