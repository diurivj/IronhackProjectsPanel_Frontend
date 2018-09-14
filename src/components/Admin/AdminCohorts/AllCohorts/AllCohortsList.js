import React from 'react';
import { List, Avatar, Icon } from 'antd';

const AllCohortsList = ({cohorts}) => {

  let loading = false;
  //let loadingMore = false;
  //let showLoadingMore = true;

  return(
    <List style={{textAlign: 'left', width: '100%', height: '50vh', overflow: 'scroll', marginTop: '50px'}} className="demo-loadmore-list" loading={loading} itemLayout="horizontal" dataSource={cohorts} renderItem={item => (
      <List.Item actions={[<Icon type="edit" style={{margin: '10px'}}/>, <Icon type="delete" style={{margin: '10px', color: 'red'}}/>]}>
        <List.Item.Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={<a href={`/cohort/${item._id}/project1`}>{item.name} </a>}
          description={item.date}
        />
      </List.Item>
    )}/>
  )
};

export default AllCohortsList;