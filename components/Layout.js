import React from "react";
import { Container } from "semantic-ui-react";
import Head from "next/head";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";
// import { StripeProvider } from "react-stripe-elements";

export default props => {
  return (
    <div>
      {/* <StripeProvider apiKey="pk_test_12345"> */}
      <Navbar />
      <Navbar2 />
      <Container>
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
        </Head>
        <style jsx global>{`
          body {
            background: #fbfbfb;
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
