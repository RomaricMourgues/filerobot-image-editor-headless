/** External Dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { Temprature as WarmthIcon } from '@scaleflex/icons/tempreture';

/** Internal Dependencies */

import { TOOLS_IDS } from '../../../utils/constants';

const Warmth = ({ selectTool, isSelected, t }) => (
  <div />
);

Warmth.defaultProps = {
  isSelected: false,
};

Warmth.propTypes = {
  selectTool: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
  t: PropTypes.func.isRequired,
};

export default Warmth;
