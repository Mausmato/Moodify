import { Heading, Button, Flex, Text, Switch } from "@radix-ui/themes";
import './settings.css'

const Settings = () => {
  return (
    <Flex
      gap="4"
      direction="column"
      align="center"
      justify="center"
      className="settings"
    >
      <Heading align="center" size="8">
        Settings
      </Heading>
      <div className="switch-container">
        <label>Activity</label>
        <Switch defaultChecked />
      </div>
    </Flex>
  );
};

export default Settings;
