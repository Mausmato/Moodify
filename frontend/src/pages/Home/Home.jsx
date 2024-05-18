import React from "react";
import { useNavigate } from "react-router-dom";
import { Heading, Button, Flex, Text } from "@radix-ui/themes";
import "./Home.css";
import InteractiveButton from "../../InteractiveButton.jsx"; // Adjust the path as needed

const Home = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate("/analyze");
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
      <Text style={{ marginTop: "15px" }}>Music IS emotion.</Text>
      <div style={{ marginTop: "20px" }}>
        <InteractiveButton onClick={handleGetStartedClick} />
      </div>
    </Flex>
  );
};

export default Home;
