import Image from "next/image";

interface NextJsImageProps {
  photo: {
    src: any;
    width: number;
    height: number;
    alt?: string;
  };
  imageProps: {
    alt?: string;
    title?: string;
    sizes?: string;
    className?: string;
    onClick?: (event: React.MouseEvent) => void;
    style?: React.CSSProperties;
  };
  wrapperStyle?: React.CSSProperties;
}

export default function NextJsImage({
  photo,
  imageProps: { alt, title, sizes, className, onClick, style },
  wrapperStyle = {},
}: NextJsImageProps) {
  return (
    <div
      style={{
        ...wrapperStyle,
        position: "relative",
      }}
    >
      <Image
        src={photo.src}
        alt={alt || photo.alt || "Gallery image"}
        title={title}
        sizes={
          sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        }
        className={className || "object-cover"}
        onClick={onClick}
        fill
        priority
        style={style}
      />
    </div>
  );
}
