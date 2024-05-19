// import { useNavigate } from "react-router-dom";
import { Heading, Button, Flex, Text } from "@radix-ui/themes";
import { useState, useEffect } from "react";
import "./Home.css";
import "../../styles.css"
import InteractiveButton from "../../InteractiveButton.jsx"; // Adjust the path as needed
import { Link } from "react-router-dom";
import ReviewsList from "../../components/ReviewsList.jsx";
import { motion } from "framer-motion"; // Import motion from framer-motion

const Home = () => {
  // const navigate = useNavigate();

  // const handleGetStartedClick = () => {
  //   navigate("/analyze");
  // };
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Moodify";

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
      <Flex
        gap="4"
        direction="column"
        align="center"
        justify="center"
        className="home"
      >
        <Heading className="title">{displayedText}</Heading>
        <Text style={{ marginTop: "15px", fontSize: "20px" }}>
          Music is <span id="emphasis">Emotion</span>
          <span id="dot-emphasis">.</span>
        </Text>
        <div style={{ marginTop: "20px" }}>
          <Link to="/analyze">
            <InteractiveButton
              id="home-screen-button"
              onTapStart={() => handleGetStartedClick}
            />
          </Link>
        </div>
        <ReviewsList />
      </Flex>
    </motion.div>
  );
};

export default Home;
