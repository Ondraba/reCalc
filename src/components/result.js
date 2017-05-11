import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

class Result extends Component {
  render(){
    return(
      <div className="col-sm-12">
        <span>Vysledek je: {this.props.newNumber}</span>
      </div>
    ) ;
  }
}

function mapStateToProps(logic){
  return { logic }
  //state je tady global state a rika ze post
}

export default connect(mapStateToProps)(Result);
