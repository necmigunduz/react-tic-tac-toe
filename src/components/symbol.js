// Import React, propTypes, and styled-components
import React from "react";
import PropTypes from "prop-types";
import styledComponent from "styled-components";

// Creating a div with some CSS features
export const Symbol = styledComponent.div`
    background-color: white;
    border: 1px solid gray;
    height: 100px;
    width: 100px;
    margin: 1px;
    transition: background-color .6s ease;
`;

// Creating cells on the game board
const PrototypeSymbol = (props) => {
    return <Symbol></Symbol>
};

// Export PrototypeSymbol (reusable component)
export default PrototypeSymbol;