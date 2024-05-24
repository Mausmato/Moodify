import ManageVideoOnCanvas from "../../../detection/src/components/ManageVideoOnCanvas";
import { Button } from "@radix-ui/themes";
import "./Analyze.css";
import { MagicWandIcon } from "@radix-ui/react-icons";

import sendPrediction, {prediction}  from "../../../detection/src/Common/tensorflowPredictions";

const Analyze = () => {
  return (
    <div id="analyze-container" style={{overflow:'none'}}>
      <ManageVideoOnCanvas/>
      <Button 
        onClick={() => sendPrediction(prediction)}
        size="4"
        id="spotify-button"
      >
        <MagicWandIcon />
        Generate Playlists
      </Button>

    <div id="output"></div>
    </div>
  );
};

export default Analyze;