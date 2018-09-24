import React from 'react';
import {Button, Card, Divider, Icon, Input} from "antd";

const UploadProject = ({handleChange, handleSubmit, project}) => {
  return(
    <div style={{display:'flex', alignItems:'center', justifyContent:'center', width:'100vw', height:'100vh', flexGrow: '1', flexWrap:'wrap'}}>
      <div style={{width:'100%', margin: '5px 1%', height:'15%' }}>
        <Card title='Title of your project'>
          <Input type='text' placeholder='Title' name='title' onChange={handleChange} defaultValue={project.title}/>
        </Card>
      </div>
      <div style={{width: '30%', margin: '1%' }}>
        <Card hoverable={true} title='Slides'>
          <Icon style={{color:'black',fontSize:'5rem'}} type="robot" theme="outlined" />
          <Divider/>
          <Input type='url' name='presentation_slides' placeholder="Slides URL" onChange={handleChange} defaultValue={project.presentation_slides}/>
        </Card>
      </div>
      <div style={{width: '30%', margin: '1%'}}>
        <Card title='Deployed Site'>
          <Icon style={{color:'black',fontSize:'5rem'}} type="code" theme="outlined" />
          <Divider/>
          <Input type='url' name='deployed_site' placeholder="Deployed Site URL" onChange={handleChange} defaultValue={project.deployed_site}/>
        </Card>
      </div>
      <div style={{width: '30%', margin: '1%'}}>
        <Card title='Github'>
          <Icon style={{color:'black',fontSize:'5rem'}} type="github" theme="outlined" />
          <Divider/>
          <Input type='url' name='github_repo' placeholder="Github URL" onChange={handleChange} defaultValue={project.github_repo}/>
        </Card>
      </div>
      <Button style={{bottom:'5%'}} type='primary' onClick={handleSubmit}>Save</Button>
    </div>
  )
};

export default UploadProject;