// types/three-examples.d.ts
declare module 'three/examples/jsm/controls/OrbitControls' {
    import { Camera, EventDispatcher, MOUSE, Object3D, TOUCH, Vector3 } from 'three';
  
    class OrbitControls extends EventDispatcher {
      constructor(object: Camera, domElement?: HTMLElement);
  
      object: Camera;
      domElement: HTMLElement | Document;
  
      // API
      enabled: boolean;
      target: Vector3;
  
      minDistance: number;
      maxDistance: number;
  
      minZoom: number;
      maxZoom: number;
  
      minPolarAngle: number;
      maxPolarAngle: number;
  
      minAzimuthAngle: number;
      maxAzimuthAngle: number;
  
      enableDamping: boolean;
      dampingFactor: number;
  
      enableZoom: boolean;
      zoomSpeed: number;
  
      enableRotate: boolean;
      rotateSpeed: number;
  
      enablePan: boolean;
      panSpeed: number;
      screenSpacePanning: boolean;
      keyPanSpeed: number;
  
      autoRotate: boolean;
      autoRotateSpeed: number;
  
      enableKeys: boolean;
      keys: { LEFT: string; UP: string; RIGHT: string; BOTTOM: string };
  
      mouseButtons: { LEFT: MOUSE; MIDDLE: MOUSE; RIGHT: MOUSE };
      touches: { ONE: TOUCH; TWO: TOUCH };
  
      target0: Vector3;
      position0: Vector3;
      zoom0: number;
  
      update(): boolean;
  
      saveState(): void;
  
      reset(): void;
  
      dispose(): void;
  
      getPolarAngle(): number;
  
      getAzimuthalAngle(): number;
  
      listenToKeyEvents(domElement: HTMLElement): void;
  
      static getMouseButtons(): { LEFT: MOUSE; MIDDLE: MOUSE; RIGHT: MOUSE };
      static getTouchPanning(): { ONE: TOUCH; TWO: TOUCH };
    }
  
    export { OrbitControls };
  }
  