import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import  {connect } from 'react-redux';
import {createPost} from '../actions';



class PostsNew extends Component {



  renderField(field) {



  //NOTE to refractured vars below. the first allows one to drop make a shorter
  //reference to the objects touched and error.  as opposed to writing
  // field.meta.touched or field.meta.error //
    const {meta: {touched, error}} = field;

    const className = `form-group ${touched && error ? 'has-danger' : ''}`;


    //console.log(field.label);
  return(
    <div className={className}>
      <label>{field.label}</label>
        <field.type className='form-control'
          type="text"
          {...field.input}
        />
        {/*
        //BOOTSTRAP class below text-help is what is styling the error messages as red//
        */}
        <div className="text-danger">
        {touched ? error: ''}
        </div>
    </div>
  )
}


onSubmit(values) {
    //this === component === PostsNew
    //console.log(values);
    this.props.createPost(values, () => {
      this.props.history.push('/');
      //console.log(values);
    });
}



render () {
  //NOTE handleSubmit is a specific function of the reduxForm class
  const {handleSubmit} = this.props;
return (
    //onSubmit is bound to 'this' at the component level
    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
    <Field label="Title:" name="title" type="input" component={this.renderField}/>
    <Field label="Categories:" name="categories" type="input" component={this.renderField}/>
  <Field label="Content:"  name="content" type="textarea" component={this.renderField}/>
    <button type="submit" className="btn btn-primary">Submit</button>
    <Link to="/" className="btn btn-danger">Cancel</Link>
    </form>
     )
   };
}
function validate(values) {
//console.log(values) -> {title:"", categories:"", content:""}
//Validate the inputs from 'values'
const errors= {};
  if(!values.title) {
       errors.title = "Enter a title!";
  }
  if(!values.categories) {
       errors.categories = "Enter some categories!";
  }
  if(!values.content) {
       errors.content = "Enter some content!";
     }
//If errors is empty form is good to submit
return errors;
}

export default reduxForm({
  validate,
  form:'PostsNewForm'
  })(
  connect(null, {createPost}) (PostsNew)
);
