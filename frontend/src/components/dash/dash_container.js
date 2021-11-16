import { connect } from 'react-redux';
import { fetchUserTweets } from '../../actions/tweet_actions';


const mapStateToProps = (state) => {
    return {
        currentUser: state.session.user
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, null)(Dash);
