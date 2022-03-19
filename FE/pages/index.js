import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import { useEffect, useState } from "react";

const Button = styled.button`
  padding: 20px;
  font-size: 18px;
  cursor: pointer;
  margin: auto;
  margin-top: 200px;
  display: block;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Home = () => {
  // const spotify = Credentials();
  const [token, setToken] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:3000/login", {
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded",
  //       Authorization:
  //         "Basic" + btoa(spotify.ClientId + ":" + spotify.ClientSecret),
  //     },
  //     data: "grant_type=client_credentials",
  //     method: "POST",
  //   }).then((tokenResponse) => {
  //     console.log(tokenResponse.data.access_token);
  //     setToken(tokenResponse.data.access_token);

  //     fetch("https://accounts.spotify.com/token", {
  //       headers: {
  //         method: "GET",
  //         headers: {
  //           Authorization: "Bearer" + tokenResponse.data.access_token,
  //         },
  //       },
  //     }).then((genreResponse) => {
  //       console.log(genreResponse);
  //     });
  //   });
  // }, []);

  const login = () => {
    fetch("http://localhost:8888/login")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Container>
      <Button
        onClick={() => {
          login();
        }}
      >
        Login
      </Button>
    </Container>
  );
};

export default Home;
