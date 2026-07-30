"use client"

import Draggable from "react-draggable"
import Image from "next/image"

interface Props {
  image: string
  logo: string
  text: string
  textColor: string
  logoSize: number
  logoRotation: number
  previewRef: React.RefObject<HTMLDivElement | null>
}

export default function HoodieCanvas({
  image,
  logo,
  text,
  textColor,
  logoSize,
  logoRotation,
  previewRef,
}: Props) {
  return (
    <div ref={previewRef} className="relative flex justify-center">
      <Image src={image} alt="hoodie" className="w-107.5" width={430} height={430} />

      {logo && (
        <Draggable>
          <Image
            src={logo}
            alt="logo"
            style={{
              width: `${logoSize}px`,
              transform: `rotate(${logoRotation}deg)`,
            }}
            className="absolute top-32.5  cursor-move"
            width={130} height={130}
          />
        </Draggable>
      )}

      {text && (
        <p
          style={{ color: textColor }}
          className="absolute bottom-30 text-xl font-bold"
  
        >
          {text}
        </p>
      )}
    </div>
  )
}
