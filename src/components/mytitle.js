import React, {Component} from 'react';


class ATitle extends Component {


render () {
    //console.log(this.props.pagetitle)
    const divStyle = {
    color: '#1477d5',
    marginLeft:'30px'
    //backgroundImage: 'url(' + imgUrl + ')',
  };
    const title = String(this.props.pagetitle);

    console.log(title);
  return (
    <h2 style={divStyle} className="myheader">{title}</h2>
        );
  };
}
export default ATitle;
