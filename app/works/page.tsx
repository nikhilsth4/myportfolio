import Navbar from "@/components/Navbar";
import { WorksLinks } from "@/data";

export default function Works() {
  return (
    <>
      <Navbar linksData={WorksLinks} />
      <div className="padding-container"></div>
    </>
  );
}
