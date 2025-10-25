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
                    d="M22.41,19.59c.78.78.78,2.05,0,2.83-.39.39-.9.59-1.41.59s-1.02-.2-1.41-.59l-3.59-3.59-3.59,3.59c-.39.39-.9.59-1.41.59s-1.02-.2-1.41-.59c-.78-.78-.78-2.05,0-2.83l3.59-3.59-3.59-3.59c-.78-.78-.78-2.05,0-2.83.78-.78,2.05-.78,2.83,0l3.59,3.59,3.59-3.59c.78-.78,2.05-.78,2.83,0,.78.78.78,2.05,0,2.83l-3.59,3.59,3.59,3.59Z"
                    stroke={color}
                    fill={color}
                    strokeLinecap="round"
                />
            </Svg>
        </Pressable>
    );
}

export default Icon;