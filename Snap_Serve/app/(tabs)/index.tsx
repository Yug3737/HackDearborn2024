import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/soda_banner.jpg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Snap & Serve</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText>The app that allows <ThemedText type="defaultSemiBold">you</ThemedText> to get insights on food you buy.</ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">Step 1:</ThemedText> Take a picture of the food Barcode or QR Code.{"\n"}
          <ThemedText type="defaultSemiBold">Step 2:</ThemedText> Get insights on the food.{"\n"}
          It's that simple!{"\n"}
          {"\n"}
          <ThemedText type="defaultSemiBold">Nutrition Breakdown:</ThemedText>{"\n"}
          - Calories{"\n"}
          - Fat{"\n"}
          - Carbs{"\n"}
          - Protein{"\n"}
          - Fiber{"\n"}
          - Sugar{"\n"}
          - Sodium{"\n"}
          {"\n"}
        </ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">Color Breakdown:</ThemedText>{"\n"}
          - Light Green: Good {"\n"}
          - Yellow: Fair {"\n"}
          - Red: Bad {"\n"}
          {"\n"}
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  stepContainer: {
    gap: 4,
    marginBottom: 4,
  },
  reactLogo: {
    height: 250,
    width: 425,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
