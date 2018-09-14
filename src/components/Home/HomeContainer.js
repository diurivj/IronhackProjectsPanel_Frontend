import React, {Component} from 'react';
import {Button} from 'antd';
import {Link} from 'react-router-dom';

class HomeContainer extends Component{
  render(){
    return (
      <div className='home-container'>
        <Link to='/projects'>
          <Button type='primary' size='large'>Ver projectos</Button>
        </Link>
      </div>
    )
  }
}

export default HomeContainer;