/** External Dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { Annotation as PenIcon } from '@scaleflex/icons/annotation';

/** Internal Dependencies */

import { TOOLS_IDS } from '../../../utils/constants';

const PenButton = ({ selectTool, isSelected, t }) => (
  <div />
);

PenButton.defaultProps = {
  isSelected: false,
};

PenButton.propTypes = {
  selectTool: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
  t: PropTypes.func.isRequired,
};

export default PenButton;
