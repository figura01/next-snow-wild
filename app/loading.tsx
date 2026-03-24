import Image from "next/image";
import Loader from "@/public/loader.gif";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <p>Loading</p>
      <Image src={Loader} alt="" width={50} height={50} />
    </div>
  );
}
