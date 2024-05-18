// import { useNavigate } from "react-router-dom";
import { Heading, Button, Flex, Text } from "@radix-ui/themes";
import "./Home.css";
import InteractiveButton from "../../InteractiveButton.jsx"; // Adjust the path as needed
import { Link } from "react-router-dom";
import ReviewsList from "../../components/ReviewsList.jsx";

const Home = () => {
  // const navigate = useNavigate();

  // const handleGetStartedClick = () => {
  //   navigate("/analyze");
  // };

  return (
    <Flex
      gap="4"
      direction="column"
      align="center"
      justify="center"
      className="home"
    >
      <Heading className="title">Moodify</Heading>
      <Text style={{ marginTop: "15px" }}>Music is Emotion.</Text>
      <div style={{ marginTop: "20px" }}>
        <Link to="/analyze">
          <InteractiveButton onTapStart={() => handleGetStartedClick} />
        </Link>
      </div>
      <ReviewsList />
    </Flex>
  );
};

export default Home;
