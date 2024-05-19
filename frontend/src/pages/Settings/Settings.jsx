import React, { useState, useEffect } from "react";
import { Heading, Button, Flex, Text, Switch, Slider } from "@radix-ui/themes";
import { motion } from "framer-motion"; // Import motion from framer-motion

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
            <label className="clrtxt">Clear All Playlists</label>
            <Switch className="bbtn" defaultUnchecked />
          </Flex>
        </div>
        <div className="playlistcontainer">
          <Flex gap="8" direction="row" className="flex">
            <label className="txt"> 𝓕𝓻𝓮𝓪𝓴𝔂 𝓜𝓸𝓭𝓮 😈</label>
            <Switch className="btn" defaultUnchecked />
          </Flex>
        </div>
      </Flex>
    </motion.div>
  );
};

export default Settings;
