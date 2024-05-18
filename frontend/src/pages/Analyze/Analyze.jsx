import ManageVideoOnCanvas from "../../../detection/src/components/ManageVideoOnCanvas";
import { Button } from "@radix-ui/themes";
import './Analyze.css'
import { MagicWandIcon } from '@radix-ui/react-icons'

const Analyze = () => {
  return (
    <div>
      <ManageVideoOnCanvas />
      {/* <h1>Analyze</h1> */}
      <Button
        size="4"
        className="spotify-button"
      >
        <MagicWandIcon />
        Generate Playlists
      </Button>
    </div>
  );
};

export default Analyze;
