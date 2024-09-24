import Image from "next/image";
import Header from "./components/Header";
import Fotter from "./components/Fotter";
import About from "./components/About";

export default function Home() {
  const teachers=["Asharib Ali","Naeem"]
  return (
    <>
    <Header/>
    <About/>
   <Fotter teachers={teachers}/>
    </>
  );
}
