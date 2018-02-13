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
    const { groups } = this.props;
    return (
      <div className='tag-category'>
        <form onSubmit={this.handleSubmit}>
          <div className='tag-category__form'>
            <div className='tag-category__left'>
              <div className='tag-category__title'>
                <p>{this.props.title}</p>
              </div>
              <select
                value={this.state.groupId}
                onChange={this.handleChange}
                className='tag-category__select'
              >
                <option value='0' disabled>Select</option>
                {groups.map(({ id, title }, index) => {
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
            </div>
            <input
              className={'tag-btn ' + (this.state.groupId === '0' ? 'tag-btn--disabled' : '')}
              type='submit'
              value='Submit'
            />
          </div>
        </form>
      </div>
    );
  }
}

export default TagCategory;
