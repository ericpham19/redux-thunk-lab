import React, { Component } from 'react';
import {connect} from "react-redux"
import { fetchCats } from "./actions/catActions";
import CatList from "./CatList"
class App extends Component {   
  componentDidMount() {
    this.props.fetchCats();
  }
  render() {
    console.log(this.props.catPics);
    return (
      <div>
        <h1>CatBook</h1>
        <CatList cats= {this.props.catPics}></CatList>
      </div>
    );
  }
}

const mapStateToProps= (state) => {
  return {
    catPics: state.cats,
    loading: state.loading,
  };
};
const mapDispatchToProps= (dispatch) => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

