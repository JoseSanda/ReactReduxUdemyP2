import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
    render(){
      if(this.props.book){
        return (
          <div>
            <div>Book detail</div>
            <div>
              <h1>{this.props.book.title}</h1>
              <p>
                {this.props.book.desc}
              </p>
            </div>
          </div>
        );
      }else{
        return <div>Select a book from the list!</div>;
      }
    }
}

function mapStateToProps(state){
  return {
    book: state.selectedBook
  };
}

export default connect(mapStateToProps)(BookDetail);
