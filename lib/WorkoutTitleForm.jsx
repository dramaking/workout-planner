import React, {Component} from 'react';

export default class WorkoutTitleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(e) {
    this.setState({
      title: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.props.index, this.state.title);
    this.setState({
      title: '',
    });
    this.props.onClick();
  }

  render() {
    return (
      <form className="workout-title-form">
        <div className="form-wrapper">
          <div className="form-group">
            <input type="text" 
                   className="form-control" 
                   placeholder="workout title"
                   value={this.state.item}
                   onChange={this.handleTitleChange} />
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Rename</button>
          <a href="#" className="close-icon" onClick={this.props.onClick}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </a>
        </div>
      </form>
    );
  }
}