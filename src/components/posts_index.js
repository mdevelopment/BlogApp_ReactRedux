import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchPosts} from '../actions';



class PostsIndex extends Component {
  componentDidMount () {
this.props.fetchPosts();
  }


renderPosts() {
//LODASH FUNCTION BELOW TO MAP/LOOP OVER THE POSTS object
//MAP AS PREVIOUSLY USED WITH ES6 ONLY MAPS OVER ARRAYS
return _.map(this.props.posts, post=> {
    return (
      <div className="listItemHolder" key={post.id}>
          <li className="list-group-item" key={post.id}>
          <Link to={`/posts/${post.id}`}>
          {post.title}
          </Link>
          </li>

         </div>
        )
});

}


render () {
//console.log(this.props.posts);
return (
      <div>
      <div className="jumbotron">
      <h1>Mdevelopment / ReactJS Blog</h1>
      <p>Simple ReactJS with Redux blog app developed through a student training at https://www.udemy.com
       with Stephen Grider.  The purpose of the blog is to focus and gather information concerning ReactJS
       as part of my continuing studies.
       </p>
      </div>
          <div className="text-xs-right">
            <Link className="btn btn-primary addPost"  to="/posts/new">
            Add a Post
            </Link>
          </div>
          <ul className="list-group">
          {this.renderPosts()}
          </ul>
      </div>
  );
 }
}

function mapStateToProps(state) {
  return {posts: state.posts}
}
export default connect(mapStateToProps, {fetchPosts}) (PostsIndex);
