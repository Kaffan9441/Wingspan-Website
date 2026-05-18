/**
 * Motion constants — exported so every component uses the same easing + timing.
 * Derived from the live Linear teardown: opacity + translateY only, 400-800ms,
 * out-quint or out-expo, 40-80ms stagger, single-shot at 15% intersection.
 */

export const EASE_OUT_QUAD = [0.25, 0.46, 0.45, 0.94] as const;
export const EASE_OUT_QUINT = [0.23, 1, 0.32, 1] as const;
export const EASE_OUT_EXPO = [0.19, 1, 0.22, 1] as const;

export const DUR = {
  micro: 0.16,
  small: 0.5,
  medium: 0.72,
  large: 1.0,
  hero: 1.4,
} as const;

export const STAGGER = {
  tight: 0.04,
  normal: 0.06,
  loose: 0.08,
} as const;
