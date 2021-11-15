import { connect } from 'react-redux';
import { fetchUserTasks } from '../../actions/task_actions';
import Tasks from './tasks';

const mapStateToProps = (state) => {
    return {
        tasks: Object.values(state.tasks.all)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserTasks: () => dispatch(fetchUserTasks())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
