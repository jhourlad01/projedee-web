import Image from 'next/image'

export function Brand() {
  return (
    <div className="flex items-center space-x-2">
      <Image
        src="/next.svg"
        alt="Logo"
        width={24}
        height={24}
        className="h-6 w-6"
      />
      <span className="font-bold text-xl">ProjeDee</span>
    </div>
  )
} 