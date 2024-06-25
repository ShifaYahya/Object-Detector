import ObjectDetection from "@/components/ObjectDetection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center p-8">
   <h1 className="font-extrabold text-3xl md:text-6xl lg:text-7xl tracking-tracker md:px-6 text-center gradient-title">Thief Dectector Alarm</h1>
   <ObjectDetection/>
   </main> 
   
  );
}
