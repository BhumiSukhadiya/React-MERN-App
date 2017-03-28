import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';

// Import Components
import PostList from '../../components/PostList';
import PostCreateWidget from '../../components/PostCreateWidget/PostCreateWidget';
import styles from '../../../App/components/Header/Header.css'
// Import Actions
import {addPostRequest, fetchPosts, deletePostRequest} from '../../PostActions';
import {toggleAddPost} from '../../../App/AppActions';

// Import Selectors
import {getShowAddPost} from '../../../App/AppReducer';
import {getPosts} from '../../PostReducer';

class PostListPage extends Component {
    componentDidMount() {
        this.props.dispatch(fetchPosts());
    }

    handleDeletePost = post => {
        if (confirm('Do you want to delete this post')) { // eslint-disable-line
            this.props.dispatch(deletePostRequest(post));
        }
    };

    handleAddPost = (name, title, content) => {
        this.props.dispatch(toggleAddPost());
        this.props.dispatch(addPostRequest({name, title, content}));
    };
    toggleAddPostSection = () => {
        this.props.dispatch(toggleAddPost());
    };

    render() {
        let style = {
            display: "inline-block",
            padding: "8px 16px",
            fontSize: "18px",
            color: "#FFF",
            background: "#03a9f4",
            borderRadius: "4px"
        }
        return (
            <div>
                <button style={style} onClick={this.toggleAddPostSection}>Add Post</button>
                <PostCreateWidget addPost={this.handleAddPost} showAddPost={this.props.showAddPost}/>
                <PostList handleDeletePost={this.handleDeletePost} posts={this.props.posts}/>
            </div>
        );
    }
}

// Actions required to provide data for this component to render in sever side.
PostListPage.need = [() => {
    return fetchPosts();
}];

// Retrieve data from store as props
function mapStateToProps(state) {
    return {
        showAddPost: getShowAddPost(state),
        posts: getPosts(state),
    };
}

PostListPage.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    })).isRequired,
    showAddPost: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
};

PostListPage.contextTypes = {
    router: React.PropTypes.object,
};

export default connect(mapStateToProps)(PostListPage);
