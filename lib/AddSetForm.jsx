import React, {Component} from 'react';

export default class AddSetForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rep: null,
      kg: null,
    };
    this.handleRepChange = this.handleRepChange.bind(this);
    this.handleKgChange = this.handleKgChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleRepChange(e) {
    this.setState({
      rep: e.target.value,
    });
  }

  handleKgChange(e) {
    this.setState({
      kg: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.rep, this.state.kg);
    this.setState({
      rep: null,
      kg: null,
    });
    this.props.onClick();
  }

  render() {
    return (
      <div id='AddSetForm'>

        <div className="row set-space">
          <div className="col-xs-2 col-xs-offset-4">{this.props.index}</div>
          <div className="col-xs-1 input-wrapper">
            <input type="text" 
                   className="form-control set-input rep-input" 
                   placeholder="Rep"
                   value={this.state.item}
                   onChange={this.handleRepChange} 
                 />
          </div>
          <div className="col-xs-1 text-center time-symbol">&times;</div>
          <div className="col-xs-1 input-wrapper">
            <input type="text" 
                   className="form-control set-input kg-input" 
                   placeholder="Kg"
                   value={this.state.item}
                   onChange={this.handleKgChange} 
                 />
          </div>
        </div>

        <div className="row set-add set-space">
          <div className="col-xs-4 col-xs-offset-8 input-wrapper">
            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Add</button>
            <a href="#" className="close-icon" onClick={this.props.onClick}>
              <i className="fa fa-times" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    )
  }
}