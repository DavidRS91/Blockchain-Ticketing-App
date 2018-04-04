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
          backgroundColor: "rgba(251, 251, 251, 0.98)",
          marginTop: "25px",
          marginBottom: "25px",
          padding: "100px 40px 100px 40px",
          borderRadius: "15px"
        }}
      >
        <Head>
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Arimo:400,400i,700"
            rel="stylesheet"
          />
          <script src="https://js.stripe.com/v3/" />
          <script
            async
            defer
            src={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&callback=initMap`}
            type="text/javascript"
          />
        </Head>
        {/* Layout from https://www.svgbackgrounds.com/#diamond-sunset */}
        <style jsx global>{`
          body {
            background-color: #ffffff;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' %3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23ffffff'/%3E%3Cstop offset='1' stop-color='%238fd5a6'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpattern id='b' width='24' height='24' patternUnits='userSpaceOnUse'%3E%3Ccircle fill='%23fff' cx='12' cy='12' r='12'/%3E%3C/pattern%3E%3Crect width='100%25' height='100%25' fill='url(%23a)'/%3E%3Crect width='100%25' height='100%25' fill='url(%23b)' fill-opacity='0'/%3E%3C/svg%3E");
            background-attachment: fixed;
            color: #0c8346;
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

// lightgrey:  fbfbfb
// light green:  8fd5a6
// green:  329f5b
// dark green:  0c8346
// dark: 1a281f
