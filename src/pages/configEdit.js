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

const configEditor = () => {
  return (
    <View className="App">
      <Card>
        <Image src={logo} className="App-logo" alt="logo" />
        <Heading level={1}>template editor</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
};

export default configEditor;
