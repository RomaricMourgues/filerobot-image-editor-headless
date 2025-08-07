/** External Dependencies */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Crop as CropIcon } from '@scaleflex/icons/crop';

/** Internal Dependencies */
import { useStore } from '../../../hooks';

import { TOOLS_IDS } from '../../../utils/constants';
import CropPresetsOption from './CropPresetsOption';

const Crop = ({ selectTool, isSelected }) => {
  const { config, t } = useStore();
  const [anchorEl, setAnchorEl] = useState();

  return (
    <div />
  );
};

Crop.defaultProps = {
  isSelected: false,
};

Crop.propTypes = {
  selectTool: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
};

export default Crop;
