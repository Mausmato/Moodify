import React, { useState, useEffect } from "react";
import { Heading, Button, Flex } from "@radix-ui/themes";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Playlists.css";

const client_id = '1eaa9c1ea22246c4b88bde2a4ef04efb';
const redirect_uri = 'http://localhost:4000/callback';

const generateRandomString = (length) => {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

const Playlists = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [accessToken, setAccessToken] = useState(null);
  const [playlists, setPlaylists] = useState([
    { id: 1, src: "https://open.spotify.com/embed/playlist/2HsrrjrXZZmHK2ASAVqX1Z?utm_source=generator&theme=0" },
    { id: 2, src: "https://open.spotify.com/embed/playlist/37i9dQZF1DWWQRwui0ExPn?utm_source=generator" },
    { id: 3, src: "https://open.spotify.com/embed/playlist/0PzKm1C0ti5msFNWcHvXV1?utm_source=generator" },
    { id: 4, src: "https://open.spotify.com/embed/playlist/0XNeycwzq4GzLAYE3eUxcx?utm_source=generator" },
    { id: 5, src: "https://open.spotify.com/embed/playlist/2F6JtyDh4aHd77mfcxrz4R?utm_source=generator" },
    { id: 6, src: "https://open.spotify.com/embed/playlist/4PyBu7ruL74ERJ0NTg0sYD?utm_source=generator" },
  ]);

  const navigate = useNavigate();
  const fullText = "Playlists";

  useEffect(() => {
    if (isTyping) {
      if (displayedText.length < fullText.length) {
        const timeoutId = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        }, 75);
        return () => clearTimeout(timeoutId);
      } else {
        setIsTyping(false);
      }
    }
  }, [displayedText, isTyping]);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const params = new URLSearchParams(hash.substring(1));
      const access_token = params.get('access_token');
      if (access_token) {
        setAccessToken(access_token);
        navigate('/playlists');
      }
    }
  }, [navigate]);

  const handleSpotifyLogin = () => {
    const state = generateRandomString(16);
    const scope = 'user-read-private user-read-email';
    const authUrl = `https://accounts.spotify.com/authorize?response_type=token&client_id=${client_id}&scope=${scope}&redirect_uri=${redirect_uri}&state=${state}`;
    window.location.href = authUrl;
  };

  const handleDelete = (id) => {
    setPlaylists(playlists.filter(playlist => playlist.id !== id));
  };

  const handleAddPlaylist = () => {
    const id = playlists.length + 1; // Generate new ID for the new playlist
    const newPlaylist = { id, src: "NEW_PLAYLIST_SRC" }; // Replace "NEW_PLAYLIST_SRC" with actual URL
    setPlaylists([...playlists, newPlaylist]);
  };

  const pinchAwayVariants = {
    exit: {
      scale: 0,
      opacity: 0,
      transition: { duration: 0.5, ease: "easeInOut" }
    },
    enter: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" }
    }
  };

  return (
    <motion.div
      className="settings playlists-container"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Flex
        direction="column"
        align="center"
        justify="center"
        gap="4"
        style={{ maxWidth: "800px", width: "100%" }}
      >
        <Heading align="center" className="heading-large">
          {displayedText}
        </Heading>
        {!accessToken ? (
          <button className="mainbtn" onClick={handleSpotifyLogin} type="button">
            Connect Spotify
          </button>
        ) : (
          <>
            <p>Logged in with Spotify</p>
          </>
        )}

        <AnimatePresence>
          {playlists.map((playlist) => (
            <motion.div
              key={playlist.id}
              className="playlist-item"
              variants={pinchAwayVariants}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit="exit"
            >
              <iframe
                className="spotify-embed"
                src={playlist.src}
                width="600rem"
                height="400"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
              <Flex gap="4" justify="center">
                <Button className="bt1">Share</Button>
                <Button className="bt1" onClick={() => handleDelete(playlist.id)}>Delete from Library</Button>
              </Flex>
            </motion.div>
          ))}
        </AnimatePresence>


      </Flex>
    </motion.div>
  );
};

export default Playlists;
