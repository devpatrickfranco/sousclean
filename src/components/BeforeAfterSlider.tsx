import { useState, useRef, useEffect } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
}

const BeforeAfterSlider = ({ beforeImage, afterImage }: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (e: MouseEvent | TouchEvent) => {
    if (!sliderRef.current) return;
    
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.ceil((x / rect.width) * 100);
    setSliderPosition(percent);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMove);
      window.addEventListener('touchmove', handleMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchend', handleMouseUp);
      
      return () => {
        window.removeEventListener('mousemove', handleMove);
        window.removeEventListener('touchmove', handleMove);
        window.removeEventListener('mouseup', handleMouseUp);
        window.removeEventListener('touchend', handleMouseUp);
      };
    }
  }, [isDragging]);

  return (
    <div 
      ref={sliderRef}
      className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden"
    >
      {/* Imagem "antes" */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={beforeImage}
          alt="Sofá antes da limpeza"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Imagem "depois" */}
      <div 
        className="absolute inset-0 h-full overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img 
          src={afterImage}
          alt="Sofá depois da limpeza"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Controle deslizante */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-lg"
        style={{ left: `calc(${sliderPosition}% - 2px)` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#0B9D88]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;