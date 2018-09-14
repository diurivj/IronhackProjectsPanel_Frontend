import React, {Component} from 'react';
import {getCohortProjects} from "../../services/studentServices";
import {Card, Button, Icon, Collapse} from 'antd';
import photo from '../../assets/QP0A6403.JPG';
const Panel = Collapse.Panel;

class Project1 extends Component{

  componentWillMount(){
    getCohortProjects(this.props.match.params.id)
      .then(students => this.setState({students}))
      .catch(error => console.log(error))
  }

  state = {
    studets: []
  };

  render(){
    const {students} = this.state;
    console.log(students);
    if (students === undefined) return <p>Loading</p>
    return (
      <div style={{backgroundColor:'#181B23'}}>
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', width: '100vw', height: '100vh'}}>
          <Card style={{width: '60%', height: '90%'}} hoverable={true} cover={<img src={photo} alt="ironhackers"/>}>
            <h1>Projecto 1 - The Game</h1>
            <Button onClick={() => this.refs.list.scrollIntoView({ block: 'end',  behavior: 'smooth' })}>Ver proyectos<Icon type="down-circle" theme="twoTone" /></Button>
          </Card>
        </div>
        <div ref="list" style={{display:'flex', alignItems:'center', justifyContent:'center', width: '100vw', height: '100vh'}}>
          <Card hoverable style={{ width: "60%", height: "90vh", overflow: "scroll" }} >
            <h2 style={{ color: "#2DC5FA", fontSize: "3em" }}>PROJECTS</h2>
            <Collapse className="contain" bordered={false} style={{ textAlign: "left", fontSize: "1.2em", width: "100%" }} >

              {students.map(student => {
                console.log(student);
                const title = student.projects[0].title;
                const projects = student.projects[0];
                return(
                  <Panel header={student.username} key={student._id} >
                    <Icon type="desktop" /> <a rel="noopener noreferrer" href={projects.presentation_slides} target="_blank" >Slides</a>
                    <br />
                    <Icon type="code" /> <a rel="noopener noreferrer" href={projects.deployed_site} target="_blank" >{title}</a>
                    <br />
                    <Icon type="github" /> <a rel="noopener noreferrer" href={projects.github_repo} target="_blank" >Github</a>
                  </Panel>
                );
              })}

            </Collapse>
          </Card>
        </div>
      </div>
    )
  }
}

export default Project1;