import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import { Flex, Input, Button, Text, Heading, useToast } from "@chakra-ui/react";
import Link from "next/link";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const router = useRouter();
  const toast = useToast();

  const handleInputChange = (e) => {
    console.log('Input changed:', e.target.name, e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form data:', JSON.stringify(formData));
    
    try {
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Registration failed");
      }

      toast({
        title: "Registration successful",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      router.push("/");
    } catch (error) {
      // console.error('Error during registration:', error);
      toast({
        title: "Registration failed",
        description: error.message || "Could not connect to the server. Please try again.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

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
              name="username"
              placeholder="Username"
              variant="filled"
              mb="4"
              size="md"
              focusBorderColor="#f1f1d9"
              color="black"
              value={formData.username}
              onChange={handleInputChange}
            />
            <Input
              name="email"
              placeholder="user@gmail.com"
              variant="filled"
              mb="4"
              size="md"
              type="email"
              focusBorderColor="#f1f1d9"
              color="black"
              value={formData.email}
              onChange={handleInputChange}
            />
            <Input
              name="password"
              placeholder="**********"
              variant="filled"
              mb="8"
              size="md"
              type="password"
              focusBorderColor="#f1f1d9"
              color="black"
              value={formData.password}
              onChange={handleInputChange}
            />
            <Button background="#f1f1d9" mb="4" onClick={handleSubmit}>
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
