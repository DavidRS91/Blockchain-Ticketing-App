import React from "react";
import { Container } from "semantic-ui-react";
import Head from "next/head";
import Navbar2 from "./Navbar2";
const { GOOGLE_API_KEY } = require("../config");

export default props => {
  return (
    <div>
      {/* <StripeProvider apiKey="pk_test_12345"> */}
      <Navbar2 />
      <Container
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          padding: "40px",
          minHeight: "100vh",
          height: "100%"
        }}
      >
        <Head>
          <script
            defer
            src="https://use.fontawesome.com/releases/v5.0.9/js/all.js"
            integrity="sha384-8iPTk2s/jMVj81dnzb/iFR2sdA7u06vHJyyLlAd4snFpCl/SnyUjRrbdJsw1pGIl"
            crossorigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Arimo:400,400i,700"
            rel="stylesheet"
          />
          <script src="https://js.stripe.com/v3/" />
        </Head>
        {/* Layout from https://www.svgbackgrounds.com/#diamond-sunset */}
        <style jsx global>{`
          body {
            background-color: rgb(255, 255, 255);
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'  width='90' height='90' viewBox='0 0 90 90'%3E%3Ccircle fill-opacity='1' fill='%230c8346'  cx='45' cy='45' r='10'/%3E%3Cg fill='%238fd5a6'  fill-opacity='1'%3E%3Ccircle  cx='0' cy='90' r='10'/%3E%3Ccircle  cx='90' cy='90' r='10'/%3E%3Ccircle  cx='90' cy='0' r='10'/%3E%3Ccircle  cx='0' cy='0' r='10'/%3E%3C/g%3E%3C/svg%3E");
            background-attachment: scroll;
            background-size: auto;
            color: #329f5b;
            font-family: "Arimo", sans-serif;
          }
          body * {
            font-family: "Arimo", sans-serif;
          }
        `}</style>
        {props.children}
      </Container>
      {/* </StripeProvider> */}
    </div>
  );
};

//
// background-color: #ffffff;
// background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' %3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23ffffff'/%3E%3Cstop offset='1' stop-color='%238fd5a6'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpattern id='b' width='24' height='24' patternUnits='userSpaceOnUse'%3E%3Ccircle fill='%23fff' cx='12' cy='12' r='12'/%3E%3C/pattern%3E%3Crect width='100%25' height='100%25' fill='url(%23a)'/%3E%3Crect width='100%25' height='100%25' fill='url(%23b)' fill-opacity='0'/%3E%3C/svg%3E");
// background-attachment: fixed;
// color: #0c8346;
// font-family: "Arimo", sans-serif;

// lightgrey:  fbfbfb
// light green:  8fd5a6
// green:  329f5b
// dark green:  0c8346
// dark: 1a281f
