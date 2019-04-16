import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ContentSelector from '../../components/ContentSelector'
import { getData } from '../../core/thunk'
import ListContainer from './styled';
import React, { Component } from 'react';
import OrderedList from './OrderedList';

class List extends Component {

    componentDidMount(){
        this.props.getData()
    }

    render() {
        return (
            <ListContainer>
                <ContentSelector 
                    if={ this.props.isFetching }
                    or={ this.props.isError }
                    then={ <OrderedList breeds={this.props.breeds}/>  }
                />
            </ListContainer>
        );
    }
}

const mapStateToProps = ({ breeds }) => ({
    breeds: breeds.breeds,
    isError: breeds.isErrorBreeds,
    isFetching: breeds.isFetchingBreeds,
  })
  
const mapDispatchToProps = dispatch =>
bindActionCreators({ getData }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(List)