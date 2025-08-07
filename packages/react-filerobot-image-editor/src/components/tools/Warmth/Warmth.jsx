/** External Dependencies */
import PropTypes from 'prop-types';

/** Internal Dependencies */


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
