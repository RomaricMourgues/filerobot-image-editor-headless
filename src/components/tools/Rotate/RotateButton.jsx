/** External Dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { RotationLeft as RotateIcon } from '@scaleflex/icons/rotation-left';

/** Internal Dependencies */

import { TOOLS_IDS } from '../../../utils/constants';

const RotateButton = ({ selectTool, isSelected, t }) => (
  <div />
);

RotateButton.defaultProps = {
  isSelected: false,
};

RotateButton.propTypes = {
  selectTool: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
  t: PropTypes.func.isRequired,
};

export default RotateButton;
