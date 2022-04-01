// Imports
import React from 'react';
import PropTypes from 'prop-types';
import { Symbol } from './symbol';

// Create symbol O (Symbol O Component)
const SymbolO = (props) => {
    return(
        <Symbol className={`symbol vertical${props.vertical}`}>
            {/* Create O symbol with a circle placed in a svg tag */}
            <svg viewBox='0 0 60 60'>
                <circle cx={30} cy={30} r={25} stroke='white' strokeWidth='10' fill='black' />
            </svg>
        </Symbol> 
    )
};
// Define type of vertical
SymbolO.protoTypes = {
    vertical: PropTypes.number.isRequired
};
// Export
export default SymbolO;