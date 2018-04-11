import { connect } from 'react-redux';
import SelectedVisitor from '../components/SelectedVisitor';

const mapStateToProps = ({ visitors }) => ({
  visitor: visitors.selected,
});


export default connect(mapStateToProps)(SelectedVisitor);
