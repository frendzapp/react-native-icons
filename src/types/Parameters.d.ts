// packages
import { GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';

export interface Parameters {
	size?: number;
	bgColor?: string; // only used in some icons
	color?: string;
	style?: StyleProp<ViewStyle>;
	onPress?: (event: GestureResponderEvent) => void;
}
