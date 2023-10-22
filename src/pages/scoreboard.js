import logo from "../logo.svg";
import React from "react";
import { Button, Heading, Image, View, Card } from "@aws-amplify/ui-react";
import { Auth } from 'aws-amplify'

async function signOut() {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('error signing out: ', error);
    }
}

// this page will be the actual scoreboard overlay
// we will offer several scoreboard layouts in the template editor and user customization 
// choices will be saved to a file that will be imported here
const scoreboard = () => {
  return (
    <View className="App">
      <Card>
        <Image src={logo} className="App-logo" alt="logo" />
        <Heading level={1}>this is the scoreboard overlay</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
};

export default scoreboard;