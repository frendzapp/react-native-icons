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
                    d="M16,29l-4.77-3.91C6.17,20.93-2.3,13.97,2.35,6.55c2.23-3.56,6.89-4.62,10.42-2.37,1.64,1.05,2.75,2.62,3.24,4.37.49-1.75,1.59-3.33,3.24-4.37,3.53-2.25,8.19-1.18,10.42,2.37,4.65,7.42-3.82,14.38-8.88,18.54l-4.77,3.91Z"
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
