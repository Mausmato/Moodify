import React, { useState, useEffect } from "react";
import { Heading, Button, Flex, Text, Switch, Slider } from "@radix-ui/themes";
import "./settings.css";

const Settings = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Settings";

  useEffect(() => {
    if (isTyping) {
      if (displayedText.length < fullText.length) {
        const timeoutId = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        }, 75); // Adjust typing speed here
        return () => clearTimeout(timeoutId);
      } else {
        setIsTyping(false);
        // setTimeout(() => {
        //   setDisplayedText("");
        //   setIsTyping(true);
        // }, 3000); // 3 seconds delay before restarting
      }
    }
  }, [displayedText, isTyping]);

  return (
    <Flex direction="column" align="center" justify="center">
      <Heading align="center" className="heading-large">
        {displayedText}
      </Heading>
      {/* Playlist Preferences */}
      <div className="playlistcontainer">
        <Flex gap="8" direction="row" className="flex">
          <label className="txt">Make Playlists Public</label>
          <Switch className="btn" defaultChecked />
        </Flex>
      </div>
      <div className="playlistcontainer">
        <Flex gap="8" direction="row" className="flex">
          <label className="txt">Automatically save playlists to Spotify</label>
          <Switch className="btn" defaultChecked={false} />
        </Flex>
      </div>
      <div className="playlistcontainer">
        <Flex gap="8" direction="row" className="flex">
          <label className="txt1">Playlist Length</label>
          <Slider className="slider" defaultValue={[50]} />
        </Flex>
      </div>
      <div className="playlistcontainer">
        <Flex gap="8" direction="row" className="flex">
          <label className="txt">Allow Camera</label>
          <Switch className="btn" defaultChecked />
        </Flex>
      </div>
    </Flex>
  );
};

export default Settings;
