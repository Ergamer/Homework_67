import React, {Component} from 'react';
import './Locker.css';
import {connect} from 'react-redux';



class Locker extends Component {


    render () {

     let butt = [];
      for (let i = 0; i < 10; i ++) {
          butt.push(<button onClick={() => this.props.addSomeDigit(i)}>{i}</button>)
      }


      return (
          <div className="Locker">
              <div className="Screen">{this.props.dig.map(() => <span>*</span>)}
              </div>
              <div className="DigitButtons">
                  {butt}
                  <button onClick={this.props.deleteSomeDigit}>C</button>
                  <button onClick={this.props.compareSomeDigit}>E</button>
              </div>
          </div>
      )
    };
}




const mapStateToProps = state => {
    return {
        dig: state.digits
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addSomeDigit: (value) => dispatch({type: 'SHOW', value: value}),
        deleteSomeDigit: (value) => dispatch({type: 'DELETE', value: value}),
        compareSomeDigit: () => dispatch({type: 'COMPARE'})
    };
};

export default connect (mapStateToProps, mapDispatchToProps)(Locker);

