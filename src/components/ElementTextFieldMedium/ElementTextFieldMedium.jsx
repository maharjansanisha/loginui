/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ElementTextFieldMedium = ({ className, hasTrailingIcon = true, hasLabel = true, hasData = true }) => {
  return (
    <div className={`element-text-field-medium ${className}`}>
      {hasTrailingIcon && <div className="trailing-icon" />}

      {hasLabel && <div className="label">Label</div>}

      {hasData && (
        <div className="data">
          <div className="text">Password</div>
        </div>
      )}
    </div>
  );
};

ElementTextFieldMedium.propTypes = {
  hasTrailingIcon: PropTypes.bool,
  hasLabel: PropTypes.bool,
  hasData: PropTypes.bool,
};
