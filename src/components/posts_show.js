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

  navigateToHomePage () {
     this.props.history.push('/');
  }


 render() {
     const { post } = this.props;
     //console.log(post);
     if(!post) {
      return (<div> Loading...</div>);
     }
     return(
         <div>
            {/* <Link to="/"> Back To Index</Link>
              <Link to="/" className="btn btn-primary" pull-sm-left>Home</Link>
            */}
            <div className="jumbotron">
            <h1>Hello, world!</h1>
            </div>
            <div className="contentNav">
             <button className="btn btn-primary pull-sm-left" onClick={this.navigateToHomePage.bind(this)}>Home</button>
             <button className="btn btn-danger pull-sm-right" onClick={this.onDeleteClick.bind(this)}>Delete Post</button>
             </div>
             <h3 className="contentT">{ post.title }</h3>
             {/*<h6>Categories: { post.categories } </h6>*/}
             <p className="contentP">{ post.content } </p>
         </div>
     );
  }
}
function mapStateToProps({ posts }, ownProps) {
  //console.log(posts);
 return { post: posts[ownProps.match.params.id] };
}
export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
