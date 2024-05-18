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
      className="settings playlists-container" // Apply the CSS class here
    >
      <Heading align="center" className="heading-large">
        {displayedText}
      </Heading>
      <iframe
        className="spotify-embed" // Apply the CSS class here
        src="https://open.spotify.com/embed/playlist/2HsrrjrXZZmHK2ASAVqX1Z?utm_source=generator&theme=0"
        width="45%"
        height="400"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      <Flex gap="4" justify="center">
        {" "}
        {/* Flex container for the first row of buttons */}
        <Button className="bt1">Open in Spotify</Button>
        <Button className="bt1">Delete Playlist from Library</Button>
      </Flex>
    </Flex>
  );
};

export default Playlists;
