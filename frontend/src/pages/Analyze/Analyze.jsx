import ManageVideoOnCanvas from "../../../detection/src/components/ManageVideoOnCanvas";
import { Button } from "@radix-ui/themes";
import "./Analyze.css";
import { MagicWandIcon } from "@radix-ui/react-icons";

const Analyze = () => {
  return (
    <div id="analyze-container">
      <div className="video-container">
        <ManageVideoOnCanvas/>
      </div>
      <Button size="4" id="spotify-button">
        <MagicWandIcon />
        Generate Playlists
      </Button>
    </div>
  );
};

export default Analyze;
