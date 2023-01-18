import React, {useContext} from 'react';
import'../App.css';
import {Card} from "../card";
import { withGlobalState } from "../hocs/withGlobalState";


class CardListNoState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderBy: 'desc',
    }
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  
  handleOnChange(event){
    this.setState({
      orderBy : event.target.value
    })
  }

  
  render() {

    const {orderBy} = this.state;
    const {citiesList} = this.props.state;

    let sortiedCitiesList = citiesList.sort();

    if (orderBy === 'desc') {
      sortiedCitiesList.reverse();
    }
    
    return (
      <>
        <select name="" id="" className='select' value={orderBy} onChange={this.handleOnChange}>
          <option value="desc">desc</option>
          <option value="asc">asc</option>
        </select>
        <div className='cardList'>          
          {      
            sortiedCitiesList.map(city => <Card key={city} city={city} /> )
          }
        </div>
      </>
    )
  }
}

export const CardList = withGlobalState(CardListNoState);