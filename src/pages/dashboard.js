import Head from "next/head";
import { Text } from "@chakra-ui/react";


export default function Dashboard() {
  
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main style={{maxHeight: "100vh", height: "100vh"}}>
        <Text>Dashboard</Text>
        <Text>Practice</Text>
        </main>
    </>
  );
}
