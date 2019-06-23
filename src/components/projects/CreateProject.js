import React, { Component } from 'react';

export class CreatePorject extends Component {
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
    console.log('State:', this.state);
  };

  render() {
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
              />
            </div>

            <div className="input-field">
              <label htmlFor="content">Content</label>
              <textarea
                name="content"
                id="content"
                className="materialize-textarea"
                onChange={this.handleChange}
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

export default CreatePorject;
