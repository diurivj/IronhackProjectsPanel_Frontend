import React, {Component} from "react";
import { DragDropContext } from 'react-beautiful-dnd';
import Column from "./Column"
import {getCohortProjects} from "../../services/projectServices";

class DraggableContainer extends Component{

  state = {
    dataAPI: {},
    arr: []
  };

  componentDidMount() {
    const {arr} = this.state;
    getCohortProjects(this.props.match.params.cohort, this.props.match.params.project)
      .then(result => {
        result.map(r => {
          arr.push(r.title);
          return arr;
        });
        this.setState({
          dataAPI: {
            tasks: {...result},
            columns: {
              'column-1': {
                id: 'column-1',
                title: 'Project 2: Full Stack Web Application',
                taskIds: arr
              }
            },
            columnOrder: ['column-1']
          }
        })
      })
      .catch(e => console.log(e));
  }

  onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const column = this.state.dataAPI.columns[source.droppableId];
    console.log(column);
    const newTaskIds = Array.from(column.taskIds);
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      taskIds: newTaskIds,
    };

    const newState = {
      ...this.state.dataAPI,
      columns: {
        ...this.state.dataAPI.columns,
        [newColumn.id]: newColumn,
      },
    };

    this.setState(newState);
  };

  render(){
    const {dataAPI} = this.state;
    if(dataAPI.columnOrder === undefined) return <p>Loading ...</p>;
    return (
      <div style={{width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#2D354C'}}>
        <DragDropContext onDragEnd={this.onDragEnd}>
          {dataAPI.columnOrder.map(columnId => {
            const column = dataAPI.columns[columnId];
            const tasks = column.taskIds.map((taskId, i) => dataAPI.tasks[i]);
            return <Column key={column.id} column={column} tasks={tasks} />;
          })}
        </DragDropContext>
      </div>
    )
  }
}

export default DraggableContainer;