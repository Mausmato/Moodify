import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import { Heading, Button, Flex, Text } from "@radix-ui/themes";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleGetStartedClick = () => {
    navigate("/analyze"); // Navigate to the "Analyze" route
  };

  return (
    <Flex
      gap="4"
      direction="column"
      align="center"
      justify="center"
      className="home"
    >
      <Heading className="title">Moodify</Heading>
      <Text>Music IS emotion.</Text>
      <Button onClick={handleGetStartedClick}>Get Started</Button>{" "}
      {/* Attach the click handler */}
    </Flex>
  );
};

export default Home;
