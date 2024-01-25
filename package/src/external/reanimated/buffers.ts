import { useMemo } from "react";

import type { SkColor, SkPoint, SkRSXform, SkRect } from "../../skia/types";
import { Skia } from "../../skia";

import { useDerivedValue, useSharedValue } from "./moduleWrapper";
import { notifyChange } from "./interpolators";

const useBuffer = <T>(
  size: number,
  bufferInitializer: () => T,
  modifier: (input: T, index: number) => void,
  deps: unknown[]
) => {
  const buffer = useMemo(
    () => new Array(size).fill(0).map(bufferInitializer),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [size]
  );
  const transforms = useSharedValue(buffer);

  useDerivedValue(() => {
    buffer.forEach((val, index) => {
      modifier(val, index);
    });
    // Assuming notifyChange is a function that notifies about the change in transforms.
    notifyChange(transforms);
  }, deps);

  return transforms;
};

// Usage for Rect Buffer
export const useRectBuffer = (
  size: number,
  modifier: (input: SkRect, index: number) => void,
  deps: unknown[]
) => useBuffer(size, () => Skia.XYWHRect(0, 0, 0, 0), modifier, deps);

// Usage for RSXform Buffer
export const useRSXformBuffer = (
  size: number,
  modifier: (input: SkRSXform, index: number) => void,
  deps: unknown[]
) => useBuffer(size, () => Skia.RSXform(1, 0, 0, 0), modifier, deps);

// Usage for Point Buffer
export const usePointBuffer = (
  size: number,
  modifier: (input: SkPoint, index: number) => void,
  deps: unknown[]
) => useBuffer(size, () => Skia.Point(0, 0), modifier, deps);

// Usage for Color Buffer
export const useColorBuffer = (
  size: number,
  modifier: (input: SkColor, index: number) => void,
  deps: unknown[]
) => useBuffer(size, () => Skia.Color("black"), modifier, deps);