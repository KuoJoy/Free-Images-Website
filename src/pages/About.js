import React from "react";

const About = () => {
  return (
    <div className="aboutContainer">
      <h1>Introduction</h1>
      <p>
        The Pexels API enables programmatic access to the full Pexels content
        library, including photos, videos. All content is available free of
        charge, and you are welcome to use Pexels content for anything you'd
        like, as long as it is within our{" "}
        <a
          target="_blank"
          href="https://www.pexels.com/api/documentation/#guidelines"
        >
          Guidelines
        </a>{" "}
        .
      </p>
      <p>
        The Pexels API is a RESTful JSON API, and you can interact with it from
        any language or framework with a HTTP library. Alternately, Pexels
        maintains some official{" "}
        <a href="https://www.pexels.com/api/documentation/#client_libraries">
          Client Libraries
        </a>{" "}
        you can use.
      </p>
      <p>
        If you have any questions, feel free to check out our{" "}
        <a href="https://help.pexels.com/hc/en-us/categories/900001326143-API">
          FAQ
        </a>{" "}
        or email us at <a href="mailto:api@pexels.com"> api@pexels.com.</a>
      </p>
      <p>
        <b>Note:</b> For historical reasons, all endpoints begin with <strong>https://api.pexels.com/v1/</strong> except for video endpoints,
        which begin with <strong>https://api.pexels.com/videos/</strong> .
        Please see the individual endpoints listed below for more details about
        how to call each endpoint.
      </p>
    </div>
  );
};

export default About;
