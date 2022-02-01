import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <div className="min-h-screen">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
    </Layout>
  );
};

export default IndexPage;
