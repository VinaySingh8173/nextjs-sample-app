import React from 'react'
import Image from 'next/image'
import image from "@/images/pic.png";

export default function AboutPage() {
  return (
     <main>
      <h1>About Page</h1>
       <div style={{
       
      width:500, 
      height:500,
      position:"relative"
      }}>
      <Image alt='this is image' fill src={image.src}/>
      
      </div>

 {/* method 2 */}
      {/* <Image width={500} height={500} src={image.src}/> */}

{/* method 3 */}
      {/* <img src={image.src}/> */}
    </main>
  )
}
