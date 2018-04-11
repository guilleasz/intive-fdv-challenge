import { connect } from 'react-redux';
import Visitors from '../components/Visitors';
import { changeVisitor } from '../redux/action-creators/visitors';

const mapStateToProps = ({ visitors }) => ({
  visitors: visitors.list,
});

const mapDispatchToProps = {
  changeVisitor,
};

export default connect(mapStateToProps, mapDispatchToProps)(Visitors);
