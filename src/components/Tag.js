import React, { PropTypes } from "react";

const Tag = ({ tags }) => {
  return (
    <div className="tags">
      {tags.map((tag, index) => <span className="tag">{tag}</span>)}
    </div>
  );
};

Tag.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string)
};

export default Tag;
