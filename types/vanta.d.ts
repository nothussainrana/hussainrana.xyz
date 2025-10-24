declare module 'vanta/dist/vanta.net.min.js' {
  interface VantaEffect {
    destroy: () => void;
    resize: () => void;
    setOptions: (options: any) => void;
  }

  interface VantaNetOptions {
    el: HTMLElement | string;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    color?: number;
    backgroundColor?: number;
    points?: number;
    maxDistance?: number;
    spacing?: number;
    showDots?: boolean;
  }

  interface VantaStatic {
    NET: (options: VantaNetOptions) => VantaEffect;
    current?: VantaEffect;
  }

  const VANTA: VantaStatic;
  export default VANTA;
}

declare module 'vanta/dist/vanta.fog.min.js' {
  interface VantaEffect {
    destroy: () => void;
    resize: () => void;
    setOptions: (options: any) => void;
  }

  interface VantaFogOptions {
    el: HTMLElement | string;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    highlightColor?: number;
    midtoneColor?: number;
    lowlightColor?: number;
    baseColor?: number;
    blurFactor?: number;
    speed?: number;
    zoom?: number;
  }

  interface VantaStatic {
    FOG: (options: VantaFogOptions) => VantaEffect;
    current?: VantaEffect;
  }

  const VANTA: VantaStatic;
  export default VANTA;
}

declare module 'vanta/dist/vanta.clouds.min.js' {
  interface VantaEffect {
    destroy: () => void;
    resize: () => void;
    setOptions: (options: any) => void;
  }

  interface VantaCloudsOptions {
    el: HTMLElement | string;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    skyColor?: number;
    cloudColor?: number;
    cloudShadowColor?: number;
    sunColor?: number;
    sunGlareColor?: number;
    sunlightColor?: number;
    speed?: number;
  }

  interface VantaStatic {
    CLOUDS: (options: VantaCloudsOptions) => VantaEffect;
    current?: VantaEffect;
  }

  const VANTA: VantaStatic;
  export default VANTA;
}
