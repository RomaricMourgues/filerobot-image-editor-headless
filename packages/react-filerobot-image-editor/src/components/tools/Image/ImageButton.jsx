/** External Dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { ImageOutline as ImageIcon } from '@scaleflex/icons/image-outline';

/** Internal Dependencies */

import { TOOLS_IDS } from '../../../utils/constants';

const ImageButton = ({ selectTool, isSelected, t }) => (
  <div />
);

ImageButton.defaultProps = {
  isSelected: false,
};

ImageButton.propTypes = {
  selectTool: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
  t: PropTypes.func.isRequired,
};

export default ImageButton;
