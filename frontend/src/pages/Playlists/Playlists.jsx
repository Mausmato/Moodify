import React, { useState, useEffect } from "react";
import { Heading, Button, Flex, Text, Switch } from "@radix-ui/themes";
import "./Playlists.css";

const Playlists = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Playlists";

  useEffect(() => {
    if (isTyping) {
      if (displayedText.length < fullText.length) {
        const timeoutId = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        }, 75); // Adjust typing speed here
        return () => clearTimeout(timeoutId);
      } else {
        setIsTyping(false);
        setTimeout(() => {
          setDisplayedText("");
          setIsTyping(true);
        }, 3000); // 3 seconds delay before restarting
      }
    }
  }, [displayedText, isTyping]);

  return (
    <Flex
      gap="4"
      direction="column"
      align="center"
      justify="center"
      className="settings"
    >
      <Heading align="center" className="heading-large">
        {displayedText}
      </Heading>
    </Flex>
  );
};

export default Playlists;
