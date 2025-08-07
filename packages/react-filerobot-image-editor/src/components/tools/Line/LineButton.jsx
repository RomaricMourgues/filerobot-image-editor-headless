/** External Dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Line from '@scaleflex/icons/line';

/** Internal Dependencies */

import { TOOLS_IDS } from '../../../utils/constants';

const LineButton = ({ selectTool, isSelected, t }) => (
  <div />
);

LineButton.defaultProps = {
  isSelected: false,
};

LineButton.propTypes = {
  selectTool: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
  t: PropTypes.func.isRequired,
};

export default LineButton;
