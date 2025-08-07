/** External Dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { Brightness as BrightnessIcon } from '@scaleflex/icons/brightness';

/** Internal Dependencies */

import { TOOLS_IDS } from '../../../utils/constants';

const Brightness = ({ selectTool, isSelected, t }) => (
  <div />
);

Brightness.defaultProps = {
  isSelected: false,
};

Brightness.propTypes = {
  selectTool: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
  t: PropTypes.func.isRequired,
};

export default Brightness;
