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
// i think we may be able to set this up so this takes a value like a function so on click the value thats passed tells this element which scorekeeping layout to pull
// the scorekeeping layout will be the same regardless of templates, we can make a sub-folder to store them etc.
const scorekeeper = () => {
  return (
    <View className="App">
      <Card>
        <Image src={logo} className="App-logo" alt="logo" />
        <Heading level={1}>control your scoreboard session here</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
};

export default scorekeeper;