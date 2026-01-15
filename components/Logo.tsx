import Image from 'next/image';

export const Logo = () => {
  return (
    <Image
      src="/logo.png"
      alt="Simplilearn logo"
      width={120}
      height={40}
      priority
      className="w-auto h-auto"
    />
  );
};
