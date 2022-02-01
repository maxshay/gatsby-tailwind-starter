import * as React from "react";
import { useState, useRef } from "react";
import { useStaticQuery, Link, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import "./header.scss";

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteLogo {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileNavRef = useRef();

  // TODO: maybe use ref, if not delete ref
  const handleMenuPress = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="site-header absolute top-0">
      <div className="site-header__container container relative mx-auto">
        <div className="site-header__navContainer flex sm:justify-between justify-center">
          <div className="site-header__navGroup flex justify-center items-center">
            <div className="site-header__logo text-white">
              <Link to="/">
                <GatsbyImage
                  className="site-header_Logo"
                  image={data.file.childImageSharp.gatsbyImageData}
                  alt="logo"
                />
              </Link>
            </div>
            <nav className="site-header-nav hidden sm:block ml-4">
              <ul className="site-header-nav__list flex m-0 p-0 list-none">
                <li className="site-header-navItem">
                  <Link to="/services">
                    <button className="site-header-navItem__link">
                      Services
                    </button>
                  </Link>
                </li>
                <li className="site-header-navItem">
                  <Link to="/gallery">
                    <button className="site-header-navItem__link">
                      Gallery
                    </button>
                  </Link>
                </li>
                <li className="site-header-navItem">
                  <Link to="/contact">
                    <button className="site-header-navItem__link">
                      Contact
                    </button>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="site-header__other text-white hidden sm:block">
            <nav>
              <ul className="flex list-none">
                <li>
                  <Link to="/">
                    <div
                      className="site-header__socialIcon"
                      style={{ width: "30px", height: "30px" }}
                    >
                      <svg
                        viewBox="0 -77 512.00213 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m501.453125 56.09375c-5.902344-21.933594-23.195313-39.222656-45.125-45.128906-40.066406-10.964844-200.332031-10.964844-200.332031-10.964844s-160.261719 0-200.328125 10.546875c-21.507813 5.902344-39.222657 23.617187-45.125 45.546875-10.542969 40.0625-10.542969 123.148438-10.542969 123.148438s0 83.503906 10.542969 123.148437c5.90625 21.929687 23.195312 39.222656 45.128906 45.128906 40.484375 10.964844 200.328125 10.964844 200.328125 10.964844s160.261719 0 200.328125-10.546875c21.933594-5.902344 39.222656-23.195312 45.128906-45.125 10.542969-40.066406 10.542969-123.148438 10.542969-123.148438s.421875-83.507812-10.546875-123.570312zm0 0"
                          fill="#f00"
                        />
                        <path
                          d="m204.96875 256 133.269531-76.757812-133.269531-76.757813zm0 0"
                          fill="#fff"
                        />
                      </svg>
                    </div>
                  </Link>
                </li>
                <li className="ml-4">
                  <Link to="/">
                    <div
                      className="site-header__socialIcon"
                      style={{ width: "24px", height: "24px" }}
                    >
                      <svg
                        enableBackground="new 0 0 24 24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <linearGradient
                          id="SVGID_1_"
                          gradientTransform="matrix(0 -1.982 -1.844 0 -132.522 -51.077)"
                          gradientUnits="userSpaceOnUse"
                          x1="-37.106"
                          x2="-26.555"
                          y1="-72.705"
                          y2="-84.047"
                        >
                          <stop offset="0" stopColor="#fd5" />
                          <stop offset=".5" stopColor="#ff543e" />
                          <stop offset="1" stopColor="#c837ab" />
                        </linearGradient>
                        <path
                          d="m1.5 1.633c-1.886 1.959-1.5 4.04-1.5 10.362 0 5.25-.916 10.513 3.878 11.752 1.497.385 14.761.385 16.256-.002 1.996-.515 3.62-2.134 3.842-4.957.031-.394.031-13.185-.001-13.587-.236-3.007-2.087-4.74-4.526-5.091-.559-.081-.671-.105-3.539-.11-10.173.005-12.403-.448-14.41 1.633z"
                          fill="url(#SVGID_1_)"
                        />
                        <path
                          d="m11.998 3.139c-3.631 0-7.079-.323-8.396 3.057-.544 1.396-.465 3.209-.465 5.805 0 2.278-.073 4.419.465 5.804 1.314 3.382 4.79 3.058 8.394 3.058 3.477 0 7.062.362 8.395-3.058.545-1.41.465-3.196.465-5.804 0-3.462.191-5.697-1.488-7.375-1.7-1.7-3.999-1.487-7.374-1.487zm-.794 1.597c7.574-.012 8.538-.854 8.006 10.843-.189 4.137-3.339 3.683-7.211 3.683-7.06 0-7.263-.202-7.263-7.265 0-7.145.56-7.257 6.468-7.263zm5.524 1.471c-.587 0-1.063.476-1.063 1.063s.476 1.063 1.063 1.063 1.063-.476 1.063-1.063-.476-1.063-1.063-1.063zm-4.73 1.243c-2.513 0-4.55 2.038-4.55 4.551s2.037 4.55 4.55 4.55 4.549-2.037 4.549-4.55-2.036-4.551-4.549-4.551zm0 1.597c3.905 0 3.91 5.908 0 5.908-3.904 0-3.91-5.908 0-5.908z"
                          fill="#fff"
                        />
                      </svg>
                    </div>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <nav className="mobile-menuButton block sm:hidden fixed bottom-0 right-0 mx-8 my-6 z-50">
        <button className="bg-gray-700" onClick={handleMenuPress}>
          {mobileMenuOpen ? (
            <svg viewBox="0 0 16 16" width="16" height="16">
              <title>Close mobile navigation</title>
              <g stroke="white" strokeWidth="2" strokeLinecap="round">
                <line x1="0" y1="8" x2="16" y2="8" transform="rotate(45 8 8)" />
                <line
                  x1="0"
                  y1="8"
                  x2="16"
                  y2="8"
                  transform="rotate(135 8 8)"
                />
              </g>
            </svg>
          ) : (
            <svg width="16" height="10" viewBox="0 0 16 10">
              <title>Open mobile navigation</title>
              <g fill="white" fillRule="evenodd">
                <rect y="8" width="16" height="2" rx="1"></rect>
                <rect y="4" width="16" height="2" rx="1"></rect>
                <rect width="16" height="2" rx="1"></rect>
              </g>
            </svg>
          )}
        </button>
      </nav>

      <nav
        ref={mobileNavRef}
        className={`mobile-menu__nav fixed bottom-0 w-full transition-height overflow-hidden duration-500 ease-in-out`}
        style={mobileMenuOpen ? { height: "100%" } : { height: 0 }}
      >
        <div className="h-full flex items-end">
          <ul className="mobile-menu__list m-0 w-full p-8 text-xl text-white">
            <li className="mobile-menu__navItem">
              <Link to="/">
                <div className="w-100">
                  <button className="mobile-menu__navLink">Home</button>
                </div>
              </Link>
            </li>
            <li className="mobile-menu__navItem mt-4">
              <Link to="/services">
                <div className="w-100">
                  <button className="mobile-menu__navLink">Services</button>
                </div>
              </Link>
            </li>
            <li className="mobile-menu__navItem mt-4">
              <Link to="/gallery">
                <div className="w-100">
                  <button className="mobile-menu__navLink">Gallery</button>
                </div>
              </Link>
            </li>
            <li className="mobile-menu__navItem mt-4">
              <Link to="/contact">
                <div className="w-100">
                  <button className="mobile-menu__navLink">Contact</button>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
