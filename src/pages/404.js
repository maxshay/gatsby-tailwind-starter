import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div className="overflow-hidden" style={{ backgroundColor: "#111" }}>
      <div className="container mx-auto text-white">
        <div className="px-4">
          <div className="mt-20">
            <h1>404: Not Found</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
