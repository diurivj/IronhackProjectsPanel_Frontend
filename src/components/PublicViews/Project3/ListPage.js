import React, {Component} from 'react';
import {Card, Collapse, Icon, Button} from "antd";
//import {getStudents} from "../../../services/studentServices";
import {getCohortProjects} from "../../../services/studentServices";

const Panel = Collapse.Panel;
const cohort = "5b897ecaf4c4f4001462b4bd";

class ListPage extends Component{

  componentWillMount(){
    getCohortProjects(cohort)
      .then(students => {
        console.log(students);
        this.setState({students})
      })
      .catch(e => console.log(e))
  }

  state = {
    students: []
  };

  handleClick = () => {
    this.props.history.goBack()
  };

  render(){
    const {students} = this.state;
    return (
      <div style={{ backgroundColor: "#181B23", display: "flex", justifyContent: "center", height: "100vh", alignItems: "center", width: "100%" }}>
        <div style={{ display: "flex", justifyContent: "center", height: "90vh", alignItems: "center", width: "90%" }}  >
          <Card hoverable style={{ width: "60%", height: "90vh", overflow: "scroll" }} >
            <h2 style={{ color: "#2DC5FA", fontSize: "3em" }}>PROJECTS</h2>
            <Collapse className="contain" bordered={false} style={{ textAlign: "left", fontSize: "1.2em", width: "100%" }} >

              {students.map(student => {
                  const fullname = student.name + ' ' + student.lastname;
                  const title = student.projects[0].title;
                  const projects = student.projects[0];
                  return(
                    <Panel header={fullname} key={student._id} >
                      <Icon type="desktop" /> <a rel="noopener noreferrer" href={projects.presentation_slides} target="_blank" >Slides</a>
                      <br />
                      <Icon type="code" /> <a rel="noopener noreferrer" href={projects.deployed_site} target="_blank" >{title}</a>
                      <br />
                      <Icon type="github" /> <a rel="noopener noreferrer" href={projects.github_repo[0]} target="_blank" >Github</a>
                    </Panel>
                  );
                })}

            </Collapse>
          </Card>
          <Button size="large" onClick={this.handleClick} icon="rollback" style={{ position: "absolute", float: "right", bottom: "40px", right: "100px"}} />
        </div>
      </div>
    )
  }
}

export default ListPage;