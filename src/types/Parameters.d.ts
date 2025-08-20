// packages
import { GestureResponderEvent as GestureResponderEventT } from 'react-native';

export interface Parameters {
	size: number;
	color: string;
	onPress: (event: GestureResponderEventT) => void;
}
