"use client"

import { useRef, useState } from "react"

import HoodiePreview from "./HoodiePreview"
import UploadLogo from "./UploadLogo"
import TextEditor from "./TextEditor"

import ColorPicker from "./ColorPicker"
import SizeSelector from "./SizeSelector"

import { hoodieColors } from "../data/hoodie"
import LogoControls from "./Logocontrols"
import DownloadButton from "./DownloadButton"
import { SizeProps } from "@/interfaces/common"
import AddToCartButton from "./AddToCartButton"


export default function HoodieCustomizer() {
  const [selected, setSelected] = useState(hoodieColors[0]);

  const [size, setSize] = useState<SizeProps>(SizeProps.MEDIUM);

  const [logo, setLogo] = useState("");

  const [text, setText] = useState("");

  const [textColor, setTextColor] = useState("#ffffff");

  const [logoSize, setLogoSize] = useState(100);

  const [logoRotation, setLogoRotation] = useState(0);

  const previewRef = useRef<HTMLDivElement>(null);
  

  return (
    <section id="customize" className="py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2">
        <HoodiePreview
          image={selected.image}
          logo={logo}
          text={text}
          textColor={textColor}
          logoSize={logoSize}
          logoRotation={logoRotation}
          previewRef={previewRef}
        />
        
        <LogoControls 
          size={logoSize}
          setSize={setLogoSize}
          rotation={logoRotation}
          setRotation={setLogoRotation}
        />

        <DownloadButton
          target={previewRef}
        />  

        <div className="space-y-8">
          <ColorPicker
            colors={hoodieColors}
            selected={selected}
            onSelect={setSelected}
          />

          <SizeSelector size={size} setSize={setSize} />

          <UploadLogo onUpload={setLogo} />

          <TextEditor
            text={text}
            setText={setText}
            color={textColor}
            setColor={setTextColor}
          />

          <div className="rounded-2xl bg-white/10 p-6">
            <p>Color: {selected.name}</p>

            <p>Size: {size}</p>

            <h2 className="mt-5 text-3xl font-bold">$29.99</h2>
          </div>

          <AddToCartButton 
          item={{
            id: selected.id,
            name: selected.name,
            image: selected.image,
            color: selected.color,
            size: size,
            price: 29.99,
            quantity: 1,
          }}
          />
        </div>
      </div>
    </section>
  )
}
