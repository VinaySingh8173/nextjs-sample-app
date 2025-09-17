import Image from "next/image";
import styles from "./page.module.css";

import image from "@/images/img2.webp";

export default function Home() {
  return (
    <>
    <main>
   <h1>This is Home Page</h1>

   <img src={image.src}/>
   </main>
   </>
   
  );
}
