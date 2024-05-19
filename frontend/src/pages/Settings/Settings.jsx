import React, { useState, useEffect } from "react";
import { Heading, Button, Flex, Text, Switch, Slider } from "@radix-ui/themes";
import { motion } from "framer-motion"; // Import motion from framer-motion
import SelectOption from "./Select";

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
    <motion.div // Wrap the content with motion.div for scroll transitions
      className="settings playlists-container" // Apply the CSS class here
      initial={{ scaleY: 0 }} // Initial state
      animate={{ scaleY: 1 }} // Animation when component is present
      exit={{ scaleY: 0 }} // Animation when component is removed
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} // Transition configuration
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }} // Centering styles
    >
      <Flex direction="column" align="center" justify="center">
        <Heading align="center" className="heading-large">
          {displayedText}
        </Heading>
        {/* Playlist Preferences */}
        <div className="playlistcontainer">
          <Flex gap="8" direction="row" className="flex">
            <label className="txt">Allow Camera</label>
            <Switch className="btn" defaultUnchecked />
          </Flex>
        </div>
        <div className="playlistcontainer2">
          <Flex gap="8" direction="row" className="flex">
            <label className="txt">Clear All Playlists</label>
            <Switch className="btn" defaultUnchecked />
          </Flex>
        </div>
        <div className="playlistcontainer">
          <Flex gap="8" direction="row" className="flex">
            <label className="txt"> 𝓕𝓻𝓮𝓪𝓴𝔂 𝓜𝓸𝓭𝓮 😈</label>
            <Switch className="btn" defaultUnchecked />
          </Flex>
        </div>
        <div className="deletebutton">
          <Flex gap="8" direction="row" className="flex">
            <Button size="4" variant="surface" color="red" radius="none">Clear All Playlists<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></Button>
          </Flex>
        </div>
      </Flex>
    </motion.div>
  );
};

export default Settings;
