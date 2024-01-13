import {
  Canvas,
  Skia,
  Atlas,
  Image,
  PaintStyle,
  rsx,
} from "@shopify/react-native-skia";
import React, { useMemo, useState } from "react";
import {
  StyleSheet,
  useWindowDimensions,
  View,
  Text,
  Button,
  PixelRatio,
} from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";

const Size = 25;
const Increaser = 50;

const SizeWidth = Size;
const SizeHeight = Size * 0.45;
const strokeWidth = 2;

export const PerformanceDrawingTest: React.FC = () => {
  const [numberOfBoxes, setNumberOfBoxes] = useState(150);

  const { width, height } = useWindowDimensions();

  const rct = useMemo(() => {
    // TODO: this could be done wit the JSX syntax
    const rect = Skia.XYWHRect(
      strokeWidth / 2,
      strokeWidth / 2,
      SizeWidth - strokeWidth,
      SizeHeight - strokeWidth
    );
    const surface = Skia.Surface.MakeOffscreen(SizeWidth, SizeHeight)!;
    const canvas = surface.getCanvas();
    canvas.drawColor(Skia.Color("#4060A3"));
    const paint = Skia.Paint();
    paint.setColor(Skia.Color("#00ff00"));
    canvas.drawRect(rect, paint);
    surface.flush();
    // TODO run on the UI Thread
    // TODO: check how textures work on Web?
    return surface.makeImageSnapshot().makeNonTextureImage();
  }, []);

  const pos = useSharedValue<{ x: number; y: number }>({
    x: width / 2,
    y: height * 0.25,
  });

  const rects = useDerivedValue(() => {
    return new Array(numberOfBoxes).fill(0).map((_, i) => {
      const tx = 5 + ((i * Size) % width);
      const ty = 25 + Math.floor(i / (width / Size)) * Size;
      const p2 = pos.value;
      const r = Math.atan2(p2.y - ty, p2.x - tx);
      return {
        // TODO: make rect optional
        rect: Skia.XYWHRect(0, 0, SizeWidth, SizeHeight),
        // TODO: make transform easier
        transform: {
          scos: 1 * Math.cos(r),
          ssin: Math.sin(r),
          tx: tx,
          ty: ty,
        },
      };
    });
  });

  const gesture = Gesture.Pan().onChange((e) => (pos.value = e));

  return (
    <View style={styles.container}>
      <View style={styles.mode}>
        <View style={styles.panel}>
          <Button
            title="⬇️"
            onPress={() => setNumberOfBoxes((n) => Math.max(0, n - Increaser))}
          />
          <Text>&nbsp;Size&nbsp;</Text>
          <Text>{numberOfBoxes}</Text>
          <Text>&nbsp;</Text>
          <Button
            title="⬆️"
            onPress={() => setNumberOfBoxes((n) => n + Increaser)}
          />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <Canvas style={styles.container} mode="default">
          <Atlas image={rct} rects={rects} />
        </Canvas>
        <GestureDetector gesture={gesture}>
          <Animated.View style={StyleSheet.absoluteFill} />
        </GestureDetector>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mode: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  panel: {
    flexDirection: "row",
    alignItems: "center",
  },
});