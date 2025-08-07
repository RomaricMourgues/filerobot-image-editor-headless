/** External Dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { Contrast as ContrastIcon } from '@scaleflex/icons/contrast';

/** Internal Dependencies */

import { TOOLS_IDS } from '../../../utils/constants';

const Contrast = ({ selectTool, isSelected, t }) => (
  <div />
);

Contrast.defaultProps = {
  isSelected: false,
};

Contrast.propTypes = {
  selectTool: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
  t: PropTypes.func.isRequired,
};

export default Contrast;
