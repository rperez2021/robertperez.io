import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { siteMetadata } from "../../gatsby-config";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <meta name="description" content={siteMetadata.description} />
      <meta name="keywords" content={siteMetadata.keywords} />
      <meta name="author" content={siteMetadata.author} />
      <title>{siteMetadata.title}</title>
      <link rel="icon" href="../assets/favicon.png" type="image/x-icon"/>
      <html lang="en" />
      
    </Helmet>
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
