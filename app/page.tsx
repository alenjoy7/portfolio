import Dock from "@/components/dock";
import Landing from "@/components/landing";
import LavaBlobs from "@/components/lava-blobs";
import Profile from "@/components/profile";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="gap-0">
      <LavaBlobs />
      <Landing />
      <Profile />
      <Projects />
      <Dock />
    </div>
  );
}
