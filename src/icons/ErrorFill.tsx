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
                    d="M16,0C7.16,0,0,7.16,0,16s7.16,16,16,16,16-7.16,16-16S24.84,0,16,0ZM22.41,19.59c.78.78.78,2.05,0,2.83-.39.39-.9.59-1.41.59s-1.02-.2-1.41-.59l-3.59-3.59-3.59,3.59c-.39.39-.9.59-1.41.59s-1.02-.2-1.41-.59c-.78-.78-.78-2.05,0-2.83l3.59-3.59-3.59-3.59c-.78-.78-.78-2.05,0-2.83.78-.78,2.05-.78,2.83,0l3.59,3.59,3.59-3.59c.78-.78,2.05-.78,2.83,0,.78.78.78,2.05,0,2.83l-3.59,3.59,3.59,3.59Z"
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
