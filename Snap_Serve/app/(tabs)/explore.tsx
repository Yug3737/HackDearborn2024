import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, Platform, TouchableOpacity } from 'react-native';
import axios from 'axios';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useNavigation } from '@react-navigation/native';

export default function TabTwoScreen() {
  const navigation = useNavigation();
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
      <Image
        source={require('@/assets/images/placeholder.jpg')}
        style={{ width: 375, height: 450, alignSelf: 'center' }}
      />
    <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">Item Information:{"\n"}</ThemedText>
        <ThemedText>*Calories: Insert DATABASE Call + Color*{"\n"}</ThemedText>
        <ThemedText>*Fat: Insert DATABASE Call + Color*{"\n"}</ThemedText>
        <ThemedText>*Carbs: Insert DATABASE Call + Color*{"\n"}</ThemedText>
        <ThemedText>*Protein: Insert DATABASE Call + Color*{"\n"}</ThemedText>
        <ThemedText>*Fiber: Insert DATABASE Call + Color*{"\n"}</ThemedText>
        <ThemedText>*Sugar: Insert DATABASE Call + Color*{"\n"}</ThemedText>
        <ThemedText>*Sodium: Insert DATABASE Call + Color*{"\n"}</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -415,
    left: -63,
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
