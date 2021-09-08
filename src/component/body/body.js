import "./body.css"
import React, { Component } from "react";
import Row from "../card/card";
import { connect } from "react-redux"
import Spinner from "../spinner/spinner"
import "../../store/action"
import { fetchPokemonBegin } from "../../store/action";
import InfiniteScroll from 'react-infinite-scroll-component'

class Body extends Component {
   async componentDidMount() {
      console.log("pokemon", this.props.pokemon);
      this.props.dispatch(fetchPokemonBegin());
   }

   render() {
      if (this.props.error) {
         return <div style={{ marginTop: '40px' }}>Error!{this.props.error}</div>
      }
      if (this.props.loading || !this.props.pokemon) {
         return <div style={{ color: 'red' }}><Spinner /></div>
      }
      return <div className="body">
            {this.props.pokemon.map(item => <Row name={item.name} url={item.url} {...this.props} />)}
         </div>
   };
}


const mapStateToProps = state => {
   return {
      pokemon: state.items,
      loading: state.loading,
      error: state.error,
   };
}
export default connect(mapStateToProps, null)(Body);