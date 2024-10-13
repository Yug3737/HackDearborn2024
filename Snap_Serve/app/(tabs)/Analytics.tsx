import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
    return (
        <Image
        source={require('@/assets/images/placeholder.jpg')}
        style={{ width: 250, height: 250, alignSelf: 'center' }}
      />
    );
}