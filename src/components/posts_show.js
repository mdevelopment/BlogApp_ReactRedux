import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions';


class PostsShow extends Component {
 componentDidMount() {
   if (!this.props.post) {
     const { id } = this.props.match.params;
    this.props.fetchPost(id);
   }
 }

 /*onDeleteClick() {
   //GET the id from the url  // it's always a
   const {id} = this.props.match.params;
   this.props.deletePost(id);
 }*/

 onDeleteClick(){
    const {id} = this.props.match.params;
         this.props.deletePost(id, ()=>{
             this.props.history.push('/');
         });
    }



 render() {
     const { post } = this.props;
     //console.log(post);
     if(!post) {
      return (<div> Loading...</div>);
     }
     return(
         <div>
             <Link to="/"> Back To Index</Link>
             <button className="btn btn-primary pull-xs-right" onClick={this.onDeleteClick.bind(this)}>Delete Post</button>
             <h3>{ post.title }</h3>
             {/*<h6>Categories: { post.categories } </h6>*/}
             <p>{ post.content } </p>
         </div>
     );
  }
}
function mapStateToProps({ posts }, ownProps) {
  //console.log(posts);
 return { post: posts[ownProps.match.params.id] };
}
export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
