/** External Dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { Ellipse as EllipseIcon } from '@scaleflex/icons/ellipse';

/** Internal Dependencies */

import { TOOLS_IDS } from '../../../utils/constants';

const EllipseButton = ({ selectTool, isSelected, t }) => (
  <div />
);

EllipseButton.defaultProps = {
  isSelected: false,
};

EllipseButton.propTypes = {
  selectTool: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
  t: PropTypes.func.isRequired,
};

export default EllipseButton;
