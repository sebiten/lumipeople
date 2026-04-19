import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  priority?: boolean;
};

export default function CustomImage({ src, alt, priority }: Props) {
  return (
    <div className="h-full w-full">
      <Image
        width={1920}
        height={1080}
        src={src}
        alt={alt}
        quality={90}
        priority={priority}
        className="h-auto w-full rounded-2xl object-cover"
      />
    </div>
  );
}
