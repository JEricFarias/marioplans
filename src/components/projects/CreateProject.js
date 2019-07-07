import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';
import { Redirect } from 'react-router-dom';

export class CreateProject extends Component {
  state = {
    title: '',
    content: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createProject(this.state);
    console.log(e.target);
    this.setState({
      title: '',
      content: ''
    });
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div>
        <div className="container">
          <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Create Project</h5>
            <div className="input-field">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                onChange={this.handleChange}
                value={this.state.title}
              />
            </div>

            <div className="input-field">
              <label htmlFor="content">Content</label>
              <textarea
                name="content"
                id="content"
                className="materialize-textarea"
                onChange={this.handleChange}
                value={this.state.content}
              />
            </div>

            <div className="input-field lighten-1 z-depth-0">
              <button className="btn pink lighten-1 z-depth-0">Create</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProject);
