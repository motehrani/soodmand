import Image from 'next/image'

export const Space = () => {
  return (
    <div className="space">
      <Image src="/img/beauty.jpg" alt="beauty" width={660} height={279} />
      <Image src="/img/beauty2.jpg" alt="beauty" width={660} height={279} />
    </div>
  )
}
