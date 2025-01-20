import Head from "next/head";
import { Flex, Input, Button, Text, Heading } from "@chakra-ui/react";
import Link from "next/link";

export default function Register() {
  return (
    <>
      <Head>
        <title>Register</title>
        <meta name="description" content="Register for an account" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ maxHeight: "100vh", height: "100vh" }}>
        <Flex height="100vh" alignItems="center" justifyContent="center">
          <Flex direction="column" background="#967969" p={10} rounded={8}>
            <Heading mb={6} color="#f1f1d9" size="lg">
              Welcome to ActiveLog
            </Heading>
            <Input
              placeholder="Name"
              variant="filled"
              mb="4"
              size="md"
              focusBorderColor="#f1f1d9"
              color="black"
            />
            <Input
              placeholder="user@gmail.com"
              variant="filled"
              mb="4"
              size="md"
              type="email"
              focusBorderColor="#f1f1d9"
              color="black"
            />
            <Input
              placeholder="**********"
              variant="filled"
              mb="8"
              size="md"
              type="password"
              focusBorderColor="#f1f1d9"
              color="black"
            />
            <Button background="#f1f1d9" mb="4">
              Register
            </Button>
            <Text textAlign="center" color="white">
              Already have an account?{" "}
              <Link href="/">
                <Text as="span" color="#f1f1d9" fontWeight="bold" cursor="pointer">
                  Log in
                </Text>
              </Link>
            </Text>
          </Flex>
        </Flex>
      </main>
    </>
  );
}
