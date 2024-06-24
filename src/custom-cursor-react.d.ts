declare module 'custom-cursor-react' {
    import React from 'react';
  
    interface CustomCursorProps {
      targets: string[];
      customClass?: string;
      dimensions?: number;
      fill?: string;
      smoothness?: {
        movement?: number;
        scale?: number;
        opacity?: number;
      };
      targetOpacity?: number;
    }
  
    const CustomCursor: React.FC<CustomCursorProps>;
  
    export default CustomCursor;
  }
  