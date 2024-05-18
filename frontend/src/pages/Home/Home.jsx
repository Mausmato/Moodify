import './Home.css'
import { Heading, Button, Flex, Text } from '@radix-ui/themes';

const Home = () => {
  return (
    <Flex
      gap="4"
      direction="column"
      align="center"
      justify="center"
      className="home"
    >
      <Heading align="center" size="9">
        Moodify
      </Heading>
      <Text>Music IS emotion.</Text>
      <Button>Get Started</Button>
    </Flex>
  );
};

export default Home