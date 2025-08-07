/** External Dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { ArrowTool as ArrowIcon } from '@scaleflex/icons/arrow-tool';

/** Internal Dependencies */

import { TOOLS_IDS } from '../../../utils/constants';

const ArrowButton = ({ selectTool, isSelected, t }) => (
  <div />
);

ArrowButton.defaultProps = {
  isSelected: false,
};

ArrowButton.propTypes = {
  selectTool: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
  t: PropTypes.func.isRequired,
};

export default ArrowButton;
