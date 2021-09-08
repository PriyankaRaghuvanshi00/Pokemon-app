import { Component } from "react";
import "./details.css"
import Spinner from "../spinner/spinner"
import axios from 'axios';

class details extends Component {
   state = {
      item: null,
      loading: false,
      img: null,
      name: 'Not-defined',
      defaultimg: null,
   }
   async componentDidMount() {
      const id = this.props.match.params.id;
      this.setState({ loading: true })
      const respons = await axios.get(`https://pokeapi.co/api/v2/pokemon/` + id);
      const data = respons.data;
      this.setState({ item: data })
      this.setState({
         name: this.state.item.name,
         img: this.state?.item?.sprites?.front_default,
         defaultimg: this.state.item.sprites.front_shiny,
         loading: false,
      })
      console.log(this.state.item)
   }
   render() {
      const ability = (
         this.state.item?.abilities.map(i => <li>{i.ability.name}</li>)
      );

      const moves = (
         this.state.item?.moves.map(i => {
            return <li>{i.move.name}</li>
         })
      )
      const type = (
         this.state.item?.types.map(i => {
            return <li>{i.type.name}</li>
         })
      )
      const forms = (
         this.state.item?.forms.map(i => {
            return <li>{i.name}</li>
         })
      )
      const cardColor = () => {
         const cat=this.state?.item?.types[0].type.name ;
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
   
      return (
         this.state.loading ? <Spinner /> : <div className="detail">
            <div className="detail-img" style={{ backgroundColor:cardColor(),backgroundImage: `url('${this.state.img || this.state.defaultimg}')` }}>
               <div className="detail-name">{this.state.name}</div>
            </div>
            <div className="info">
               <div className="info-field">
                  <label>Types</label>
                  <ul className="list type">
                     {type}
                  </ul>
               </div>
               <div className="info-field">
                  <label>Ability</label>
                  <ul className="list ability">
                     {ability}
                  </ul>
               </div>
               <div className="info-field">
                  <label>Forms</label>
                  <ul className="list forms">
                     {forms}
                  </ul>
               </div>
               <div className="info-field">
                  <label>Moves</label>
                  <ul className="list moves">
                     {moves}
                  </ul>
               </div>
            </div>
         </div>
      );
   }
}

export default details;