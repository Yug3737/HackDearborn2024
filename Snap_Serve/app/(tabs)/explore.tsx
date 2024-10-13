import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
    headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
    headerImage={
      <Image
        source={require('@/assets/images/camera_ClipArt.png')}
        style={styles.headerImage}
      />
    }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Camera </ThemedText>
      </ThemedView>
    <ThemedView style={styles.stepContainer}>
      <ThemedText>Scan a QR code or UPC Barcode</ThemedText>
    </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  stepContainer: {
    gap: 4,
    marginBottom: 4,
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
