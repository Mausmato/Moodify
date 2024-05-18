import React, { useState, useEffect } from "react";
import { Heading, Button, Flex, Text, Switch } from "@radix-ui/themes";
import { motion } from "framer-motion"; // Import motion from framer-motion
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
      <Flex
        direction="column"
        align="center"
        justify="center"
        gap="4"
        style={{ maxWidth: "800px", width: "100%" }} // Limiting width to maintain readability
      >
        <Heading align="center" className="heading-large">
          {displayedText}
        </Heading>
        <iframe
          className="spotify-embed" // Apply the CSS class here
          src="https://open.spotify.com/embed/playlist/2HsrrjrXZZmHK2ASAVqX1Z?utm_source=generator&theme=0"
          width="600rem" // Set width to fill the container
          height="400"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <Flex gap="4" justify="center">
          {/* Flex container for the first row of buttons */}
          <Button className="bt1">Open in Spotify</Button>
          <Button className="bt1">Delete Playlist from Library</Button>
        </Flex>
      </Flex>
    </motion.div>
  );
};

export default Playlists;
