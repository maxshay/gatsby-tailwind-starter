import * as React from "react";
import PropTypes from "prop-types";
// import { useStaticQuery, graphql, Link } from "gatsby";

// import Header from "./header";

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  return (
    <div className="relative">
      {/* <Header siteTitle={data.site.SiteTitleQuery?.title || `Title`} /> */}
      <main>{children}</main>
      <div className="overflow-hidden" style={{ backgroundColor: "#111" }}>
        <div className="container mx-auto">
          <div className="px-4">
            <footer className="my-10 text-white">
              <div className="mb-3">© mshay {new Date().getFullYear()}</div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
