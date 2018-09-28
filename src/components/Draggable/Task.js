import React, {Component} from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import { Collapse, Icon } from "antd";
const Panel = Collapse.Panel;

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? '#2DC5FA' : 'white')};
`;

export default class Task extends Component{
  render() {
    return (
      <Draggable draggableId={this.props.task._id} index={this.props.index}>
        {(provided, snapshot) => (
          <Container{...provided.draggableProps} {...provided.dragHandleProps} innerRef={provided.innerRef} isDragging={snapshot.isDragging}>
            <Collapse className="contain" bordered={false} style={{ textAlign: "left", fontSize: "1.2em", width: "100%" }} >
              <Panel header={this.props.task.title} key={this.props.task._id} >
                <Icon type="desktop" /> <a href={this.props.task.presentation_slides} target='_blank'>Slides</a>
                <br />
                <Icon type="code" /> <a rel="noopener noreferrer" href={this.props.task.deployed_site} target="_blank" >Deployed Site</a>
                <br />
                <Icon type="github" /> <a rel="noopener noreferrer"  href={this.props.task.github_repo[0]} target="_blank" >Github</a>
              </Panel>
            </Collapse>
          </Container>
        )}
      </Draggable>
    );
  }
}