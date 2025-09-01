// packages
import { GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';

export interface Parameters {
	size?: number;
	color?: string;
	style?: StyleProp<ViewStyle>;
	onPress?: (event: GestureResponderEvent) => void;
}
