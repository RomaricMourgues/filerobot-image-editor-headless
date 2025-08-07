/** External Dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { Saturation as SaturationIcon } from '@scaleflex/icons/saturation';

/** Internal Dependencies */

import { TOOLS_IDS } from '../../../utils/constants';

const HSV = ({ selectTool, isSelected, t }) => (
  <div />
);

HSV.defaultProps = {
  isSelected: false,
};

HSV.propTypes = {
  selectTool: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
  t: PropTypes.func.isRequired,
};

export default HSV;
