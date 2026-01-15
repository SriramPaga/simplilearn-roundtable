import Image from 'next/image';

export const Logo = () => {
  return (
    <div className="flex items-center">
      <Image
        src="/logo.png"
        alt="Simplilearn Logo"
        width={120}
        height={40}
        className="h-28 w-auto"
        priority
      />
    </div>
  );
};
