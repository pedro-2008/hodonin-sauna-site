import woodTexture from "@/assets/wood-texture.jpg";

interface WoodTextureProps {
  opacity?: number;
  className?: string;
}

export const WoodTexture = ({ opacity = 0.03, className = "" }: WoodTextureProps) => {
  return (
    <div 
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: `url(${woodTexture})`,
        backgroundSize: '400px',
        backgroundRepeat: 'repeat',
        opacity: opacity,
        mixBlendMode: 'multiply',
      }}
    />
  );
};
