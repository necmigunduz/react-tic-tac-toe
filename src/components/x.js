// Imports
import React from "react";
import PropTypes from "prop-types";
import { Symbol } from "./symbol";

// Create symbol X (Symbol X Component)
const SymbolX = () => {
  return (
    <Symbol>
      {/* Create X symbol with two lines crossing each other placed in a svg tag */}
      <svg viewBox="0 0 60 60">
        <line x1="3" y1="3" x2="60" y2="60" stroke="white" strokeWidth="10" />
        <line x1="3" y1="60" x2="60" y2="3" stroke="white" strokeWidth="10" />
      </svg>
    </Symbol>
  );
};

export default SymbolX;
