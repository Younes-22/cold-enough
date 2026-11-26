export type Media = {
  /** File path under /public. Videos also need a poster (cover image). */
  src: string; poster?: string; alt: string; caption: string; width: number; height: number
}

export const leakDetectorVideo: Media = {
  src: '/videos/gas-leak-detection.mp4', poster: '/videos/gas-leak-detection-poster.jpg', width: 576, height: 768,
  alt: 'Electronic leak detector being used on a refrigeration unit', caption: 'Another company couldn’t find this leak. We did.',
}

export const bubbleLeakVideo: Media = {
  src: '/videos/bubbles-leak.mp4', poster: '/videos/bubbles-leak-poster.jpg', width: 576, height: 1024,
  alt: 'Bubbles forming on a pipe valve where gas is escaping', caption: 'Bubbles show gas escaping at a valve.',
}
