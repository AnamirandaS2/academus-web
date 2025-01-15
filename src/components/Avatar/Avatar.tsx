import { tv } from "tailwind-variants";

interface AvatarProps {
  size: "lg" | "sm";
  src?: string;
}

const AvatarVariants = tv({
  base: "object-cover rounded-full hover:scale-105 hover:transition duration-300 ease-in-out border-2 border-blue-700",
  variants: {
    size: {
      sm: "min-w-12 min-h-12 max-w-12 max-h-12",
      lg: "min-w-36 min-h-36 max-w-36 max-h-36",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});
export const Avatar = ({ size, src }: AvatarProps) => {
  const variantClasses = AvatarVariants({ size });
  return (
    <main>
      <img src={src} alt="foto de perfil" className={`${variantClasses}`} />
    </main>
  );
};
