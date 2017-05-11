import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { calculate } from '../actions/index';
import { bindActionCreators } from 'redux';

class Inputs extends Component{
  constructor(props){
    super(props);
    this.props = {
       n1: '',
       n2: '',
       n3: ''
     };
  }

 render(){
  // const { fields: { n1, n2, n3 }, handleSubmit } = this.props;

  return(
      <div>
        <form>
          <div className="col-sm-12">
            <input
                type="text"
                className="n1"
                value={this.props.n1}
                onChange={(e) => { calculate(e.target);}}
                placeholder='n1'
            />
          </div>
          <div className="col-sm-12">
            <input type="text" className="n2"  value={this.props.n3}/>
          </div>
          <div className="col-sm-12">
            <input type="text" className="n3" value={this.props.n2}/>
          </div>
          <div className="col-sm-12">
            <submit className="submit btn btn-primary">Submit</submit>
          </div>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({calculate}, dispatch); //akce spadne k reduceru
}

export default connect(null, mapDispatchToProps)(Inputs);
