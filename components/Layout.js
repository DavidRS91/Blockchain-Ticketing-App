import React from "react";
import { Container } from "semantic-ui-react";
import Head from "next/head";
import Navbar from "./Navbar";

export default props => {
  return (
    <div>
      <Navbar />
      <Container>
        <Head>
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
          />
        </Head>
        <style jsx global>{`
          body {
            background: #fbfbfb;
            color: #0c8346;
          }
        `}</style>
        {props.children}
      </Container>
    </div>
  );
};

// lightgrey:  fbfbfb
// light green:  8fd5a6
// green:  329f5b
// dark green:  0c8346
// dark: 1a281f
