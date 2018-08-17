import React, {Component} from 'react';
import { List, Avatar, Button, Spin } from 'antd';

class AllStudentsList extends Component{

  state = {
    loading: false,
    loadingMore: false,
    showLoadingMore: true,
    data: [
      {
        gender: "female",
        name: {
          title: "mrs",
          first: "kitty",
          last: "robinson"
        },
        email: "kitty.robinson@example.com",
        nat: "US"
      },
      {
        gender: "female",
        name: {
          title: "mademoiselle",
          first: "regina",
          last: "bertrand"
        },
        email: "regina.bertrand@example.com",
        nat: "CH"
      }
    ]
  };

 render(){
   const {loading, data} = this.state;
   return(
     <List style={{textAlign: 'left'}} className="demo-loadmore-list" loading={loading} itemLayout="horizontal" dataSource={data} renderItem={item => (
       <List.Item actions={[<a>edit</a>, <a>more</a>]}>
         <List.Item.Meta
           avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
           title={<a href="https://ant.design">{item.name.last}</a>}
           description="Ant Design, a design language for background applications, is refined by Ant UED Team"
         />
       </List.Item>
     )}/>
   )
 }
}

export default AllStudentsList;