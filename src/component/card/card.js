import React, { Component } from "react";
import "./card.css"
import axios from 'axios';
import { NavLink, Link, Redirect } from "react-router-dom";
import Spinner from "../spinner/spinner"

class Card extends Component {
   state = {
      item: [],
      img: null,
      name: 'Not-defined',
      defaultimg: null,
      type: null,
      loading: false,
   }

   async componentDidMount() {
      const url = this.props.url;
      if (!this.state.loading) {
         this.setState({ loading: true })
         try {
            const response = await axios.get(`${url}`)
            const data = await response.data
            this.setState({
               item: data,
               loadingData: false,
            })
            this.setState({
               name: this.state.item.name,
               img: this.state?.item?.sprites?.front_default,
               type: this.state?.item?.types[0].type.name || '',
               defaultimg: this.state.item.sprites.front_shiny,
               loading: false,
            })
         }
         catch (Err) {
            console.log(Err)
         }
      }
   }
   render() {
      const cardColor = () => {
         const cat = this.state.type;
         if (cat == 'normal')
            return 'rgb(211, 211, 211)'
         else if (cat == 'fire')
            return 'rgba(255, 0, 0, 0.342)'
         else if (cat == 'water')
            return 'rgba(0, 184, 240, 0.366)'
         else if (cat == 'grass')
            return 'rgba(1, 196, 1, 0.366)';
         else if (cat == 'bug')
            return 'rgba(255, 166, 0, 0.466)'
         else
            return 'white';
      }
      const ClickHandler = () => {
         const id = (this.props.url.split('v2')[1].split('/')[2])
         this.props.history.push({ pathname: `/about/${id}` })
      }
      const HoverOn = (type) => {
         const c = document.getElementById(this.props.name)
         type == 'add' ? c.classList.add('CardHover') : c.classList.remove('CardHover');
      }
      
      return (
         this.state.loading ? <Spinner /> : <div className="Card" id={this.props.name} onMouseOver={HoverOn.bind(null, 'add')} onMouseLeave={HoverOn.bind(null, 'remove')} onClick={ClickHandler} style={{ backgroundColor: `${cardColor()}` }}>
            <div className="image" style={{ backgroundImage: `url('${this.state.img || this.state.defaultimg}')` }}></div>
            <div className="field">
               <strong>{this.state.name || this.props.name}</strong>
               <div className="type"><strong>Type: </strong>{this.state.type}</div>
            </div>
         </div>
      );
   }
}

export default (Card);