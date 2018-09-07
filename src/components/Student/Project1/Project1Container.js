import React, {Component} from 'react';
import {Card, Icon, Input, Divider, Button} from 'antd';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as projectActions from '../../../redux/actions/AdminActions/AdminProjectActions';
import toastr from 'toastr';

class Project1Container extends Component{

  state = {
    project: {}
  };

  handleChange = (e) => {
    const {project} = this.state;
    const field = e.target.name;
    project[field] = e.target.value;
    this.setState({...project});
  };

  handleSubmit = () => {
    const {project} = this.state;
    project.student = JSON.parse(localStorage.getItem('user'))._id;
    project.number_project = 1;
    this.props.actions.createProject(project);
    toastr.success('Project 1 Saved');
    this.props.history.push('/student');
  };

  render(){
    return(
      <div style={{display:'flex', alignItems:'center', justifyContent:'center', width:'100vw', height:'100vh', flexGrow: '1', flexWrap:'wrap'}}>
        <div style={{width:'100%', margin: '5px 1%', height:'15%' }}>
          <Card title='Title of your project'>
            <Input type='text' placeholder='Title' name='title' onChange={this.handleChange}/>
          </Card>
        </div>
        <div style={{width: '30%', margin: '1%' }}>
          <Card hoverable={true} title='Slides'>
            <Icon style={{color:'black',fontSize:'5rem'}} type="robot" theme="outlined" />
            <Divider/>
              <Input type='url' name='presentation_slides' placeholder="Slides URL" onChange={this.handleChange}/>
          </Card>
        </div>
        <div style={{width: '30%', margin: '1%'}}>
          <Card title='Deployed Site'>
            <Icon style={{color:'black',fontSize:'5rem'}} type="code" theme="outlined" />
            <Divider/>
            <Input type='url' name='deployed_site' placeholder="Deployed Site URL" onChange={this.handleChange}/>
          </Card>
        </div>
        <div style={{width: '30%', margin: '1%'}}>
          <Card title='Github'>
            <Icon style={{color:'black',fontSize:'5rem'}} type="github" theme="outlined" />
            <Divider/>
            <Input type='url' name='github_repo' placeholder="Github URL" onChange={this.handleChange}/>
          </Card>
        </div>
          <Button style={{bottom:'5%'}} type='primary' onClick={this.handleSubmit}>Save</Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  project: state.project
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(projectActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Project1Container);