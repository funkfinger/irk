import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import "../style/main.scss";

const IndexPage = () => {
  return (
    <main>
      <StaticImage src="../images/bg.png" alt="irk.com" layout="fullWidth" />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>irk.com</title>;
