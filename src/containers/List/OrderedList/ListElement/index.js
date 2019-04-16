import { Link } from 'react-router-dom'
import ListElementContainer from './styled'
import React, { Component } from 'react';

class ListElement extends Component {
    render() {
        return (
            <ListElementContainer>
              <Link to={ `/breeds/${this.props.content}` }>
                { this.props.content.toUpperCase() }
              </Link>  
            </ListElementContainer>
        );
    }
}

export default ListElement;