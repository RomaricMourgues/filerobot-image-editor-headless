/** External Dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { Blur as BlurIcon } from '@scaleflex/icons/blur';

/** Internal Dependencies */

import { TOOLS_IDS } from '../../../utils/constants';

const Blur = ({ selectTool, isSelected, t }) => (
  <div />
);

Blur.defaultProps = {
  isSelected: false,
};

Blur.propTypes = {
  selectTool: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
  t: PropTypes.func.isRequired,
};

export default Blur;
