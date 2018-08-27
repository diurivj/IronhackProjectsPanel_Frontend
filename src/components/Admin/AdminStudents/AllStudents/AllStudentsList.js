import React from 'react';
import { List, Avatar, Icon } from 'antd';

const AllStudentsList = ({students}) => {

  let loading = false;
  //let loadingMore = false;
  //let showLoadingMore = true;

  return(
     <List style={{textAlign: 'left', width: '100%', height: '50vh', overflow: 'scroll', marginTop: '50px'}} className="demo-loadmore-list" loading={loading} itemLayout="horizontal" dataSource={students} renderItem={item => (
       <List.Item actions={[<Icon type="edit" style={{margin: '10px'}}/>, <Icon type="delete" style={{margin: '10px', color: 'red'}}/>]}>
         <List.Item.Meta
           avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
           title={<a href="https://ant.design">{item.name} {item.lastname}</a>}
           description={item.cohort.name}
         />
         <p>Cohort {item.cohort.generation}</p>
       </List.Item>
     )}/>
   )
};

export default AllStudentsList;