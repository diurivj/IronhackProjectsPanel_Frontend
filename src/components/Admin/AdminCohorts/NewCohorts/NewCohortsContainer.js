import React, { Component } from 'react';
import { NewCohortsForm } from "./NewCohortsForm";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AdminCohortActions from '../../../../redux/actions/AdminActions/AdminCohortActions';
import { Card } from "antd";
import toastr from "toastr";

class NewCohortsContainer extends Component{

  state = {
    cohort: {}
  };

  onChangeDate = (date, dateString) => {
    const {cohort} = this.state;
    cohort.date = dateString;
    this.setState({...cohort});
  };

  onChangeGeneration = (value) => {
    const {cohort} = this.state;
    cohort.generation = value;
    this.setState({...cohort});
  };

  handleChange = (e) => {
    const {cohort} = this.state;
    cohort.name = e.target.value;
    this.setState({...cohort});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {cohort} = this.state;
    this.props.actions.createCohort(cohort);
    toastr.success('New student successfully created');
    this.props.history.push('/admin/cohorts/all');
  };

  render(){
    return(
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
        <Card style={{width: '80%'}} hoverable={true} title='Create New Cohort'>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <NewCohortsForm
              handleSubmit={this.handleSubmit}
              onChangeDate={this.onChangeDate}
              handleChange={this.handleChange}
              onChangeGeneration={this.onChangeGeneration}
            />
          </div>
        </Card>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(AdminCohortActions, dispatch)
});

export default connect(null, mapDispatchToProps)(NewCohortsContainer);