import { connect } from 'react-redux';
import { composeTask } from '../../actions/task_actions';
import TaskCompose from './create_task';

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.user,
        newTask: state.tasks.new
    };
};

const mapDispatchToProps = dispatch => {
    return {
        composeTask: data => dispatch(composeTask(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskCompose);
