import React, { Component } from 'react';

class TagCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groupId: '0'
    }
  }

  handleChange = e => {
    this.setState({ groupId: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddGroup(this.props.id, this.state.groupId);
  }

  render() {
    const { options } = this.props;
    return (
      <div className='tag-category'>
        <p>{this.props.title}</p>
        <form onSubmit={this.handleSubmit}>
          <select
            value={this.state.groupId}
            onChange={this.handleChange}
          >
            <option value='0' disabled>Select</option>
            {options.map(({ id, title }, index) => {
              return (
                <option
                  value={id}
                  key={id}
                >
                  {title}
                </option>
              )
            })}
          </select>
          <input
            className={(this.state.groupId === '0' ? 'submit-disabled' : '')}
            type='submit'
            value='Submit'
          />
        </form>
      </div>
    );
  }
}

export default TagCategory;
