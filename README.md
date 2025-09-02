# @frendzapp/react-native-icons

[![npm version](https://img.shields.io/npm/v/@frendzapp/react-native-icons?style=flat)](https://www.npmjs.com/package/@frendzapp/react-native-icons)
[![npm downloads](https://img.shields.io/npm/dm/@frendzapp/react-native-icons?style=flat)](https://www.npmjs.com/package/@frendzapp/react-native-icons)
[![license](https://img.shields.io/npm/l/@frendzapp/react-native-icons?style=flat)](https://opensource.org/licenses/MIT)

A handmade pack of icons made for the **frendz** app. **INCOMPLETE**

## Install

```sh
npm install @frendzapp/react-native-icons
```

## Usage

```jsx
import React from 'react';
import { PlusIcon, CrossIcon } from '@frendzapp/react-native-icons';

export default function Icon({ added }) {
	return added ? <PlusIcon /> : <CrossIcon />;
}
```

Every icon is exported individually to allow you to import only the ones you need. Here's a list of all the [icons](#all-icons)

### Properties

#### Size

The `size` property takes `numerical` values and can be used to render icons at different sizes. The default value is `16`.

```jsx
import React from 'react';
import { ArrowLeftIcon } from '@frendzapp/react-native-icons';

export default function Icon() {
	return <ArrowLeftIcon size={32} />;
}
```

#### Color

The `color` property takes `hexadecimal` values and can be used to change the stroke and fill color of the icons. The default value is `#000000`.

```jsx
import React from 'react';
import { ArrowLeftIcon } from '@frendzapp/react-native-icons';

export default function Icon() {
	return <ArrowLeftIcon color="#f2f3f4" />;
}
```

#### Other parameters

Every icon is wrapped in a `Pressable` component, so you can pass any `Pressable` props (e.g. `onPress`, `style`, etc.) directly to the icon.

```jsx
import { useState } from 'react';
import { View, Text } from 'react-native';
import { PlusIcon } from '@frendzapp/react-native-icons';

const styles = StyleSheet.create({...});

export default function Page() {
	const [count, setCount] = useState(0);

	return (
		<View style={styles.container}>
			<Text style={styles.text}>{count}</Text>
			<PlusIcon size={32} color='#f2f3f4' onPress={() => setCount(count + 1)} />
		</View>
	)
}
```

The example above shows a counter app where the value increases by 1 each time the icon is pressed.

## All icons

| ArrowLeftIcon 12x16                   | ArrowRightIcon 12x16                    |
| ------------------------------------- | --------------------------------------- |
| ![ArrowLeft](./assets/arrow-left.svg) | ![ArrowRight](./assets/arrow-right.svg) |
