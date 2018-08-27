import React, {Component} from 'react';
import {Card} from 'antd';
import AllCohortsList from "./AllCohortsList";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as adminCohortActions from '../../../../redux/actions/AdminActions/AdminCohortActions';

class AllCohortsContainer extends Component{

  state = {
    loading: true,
    loadingMore: false,
    showLoadingMore: true
  };

  render(){
    const {cohorts} = this.props;
    return(
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
        <Card title='All Cohorts'  hoverable={true} style={{width: '80%'}}>
          <div style={{ display: 'flex', flexWrap:'wrap', alignItems: 'center', justifyContent: 'space-between', flexGrow:'1' }}>
            <AllCohortsList cohorts={cohorts} />
          </div>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cohorts: state.cohorts
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(adminCohortActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AllCohortsContainer);