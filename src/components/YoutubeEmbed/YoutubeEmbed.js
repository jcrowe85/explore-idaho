import React from "react";
import PropTypes from "prop-types";
import classes from "./YoutubeEmbed.module.css";

const YoutubeEmbed = ({ embedId }) => (
  <div className={classes["video-responsive"]}>
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}?modestbranding=1&controls=0`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;