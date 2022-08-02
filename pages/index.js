import CoverArea from "../components/Homepage/CoverArea";
import KnowledgePanel from "../components/Homepage/KnowledgePanel";
import MediaCleanup from "../components/Homepage/MediaCleanup";

import Newspaper from "../components/Homepage/Newspaper";
import Niche from "../components/Homepage/Niche";
import SocialMedia from "../components/Homepage/SocialMedia";
import WhySolvent from "../components/Homepage/WhySolvent";


export default function Home() {
  return (
    <div >
      <CoverArea />
      <WhySolvent />
      <Niche />
      <Newspaper />
      <KnowledgePanel />
      <MediaCleanup />
      <SocialMedia />
    </div>
  )
}
