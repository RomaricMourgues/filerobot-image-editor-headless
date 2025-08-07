/** External Dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { Polygon as PolygonIcon } from '@scaleflex/icons/polygon';

/** Internal Dependencies */

import { TOOLS_IDS } from '../../../utils/constants';

const PolygonButton = ({ selectTool, isSelected, t }) => (
  <div />
);

PolygonButton.defaultProps = {
  isSelected: false,
};

PolygonButton.propTypes = {
  selectTool: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
  t: PropTypes.func.isRequired,
};

export default PolygonButton;
