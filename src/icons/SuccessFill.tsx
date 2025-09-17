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
                    d="M16,0C7.16,0,0,7.16,0,16s7.16,16,16,16,16-7.16,16-16S24.84,0,16,0ZM22.82,11.83l-5,11s-.01.02-.02.03c-.07.15-.17.3-.28.43-.03.03-.06.06-.09.09-.05.05-.1.11-.15.16-.05.04-.11.08-.16.11-.03.02-.05.04-.08.06-.14.09-.29.15-.45.2-.03,0-.06.02-.09.02-.16.04-.33.07-.5.07,0,0,0,0,0,0-.14,0-.28-.02-.42-.05-.07-.01-.13-.04-.2-.07-.07-.02-.14-.04-.2-.07,0,0,0,0,0,0-.03-.01-.05-.03-.07-.04-.1-.05-.2-.11-.29-.17-.03-.02-.06-.05-.09-.08-.08-.07-.16-.14-.22-.21,0-.01-.02-.02-.03-.03l-5-6c-.71-.85-.59-2.11.26-2.82.85-.71,2.11-.59,2.82.26l2.96,3.55,3.68-8.1c.46-1.01,1.64-1.45,2.65-.99,1.01.46,1.45,1.64.99,2.65Z"
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
