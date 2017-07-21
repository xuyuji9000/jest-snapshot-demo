import React from 'react'
import createReactClass from 'create-react-class'

const STATUS = {
      HOVERED: 'hovered',
      NORMAL: 'normal',
}

const Link = createReactClass({
    getInitialState: function() {
        return {
          class: STATUS.NORMAL,
        }
    },
    _onMouseEnter: function() {
        this.setState({class: STATUS.HOVERED})
    },
    _onMouseLeave: function() {
        this.setState({class: STATUS.NORMAL})
    },
    render: function(){
        return (
          <a
            className={this.state.class}
            href={this.props.page || '#'}
            onMouseEnter={this._onMouseEnter}
            onMouseLeave={this._onMouseLeave}
          >
            {this.props.children}
          </a>
        )
    }

})

export default Link
