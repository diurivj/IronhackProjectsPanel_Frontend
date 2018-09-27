import React, {Component} from "react";
import { DragDropContext } from 'react-beautiful-dnd';
//import initialData from "./initialData";
import Column from "./Column"
import {getCohortProjects} from "../../services/projectServices";

class DraggableContainer extends Component{

  state = {
    arr: [],
    api: {}
  };

  componentWillMount() {
    getCohortProjects('5b897ecaf4c4f4001462b4bd', 2)
      .then(result => {
        result.map(r => {
          this.state.arr.push(r.title);
          return r.title;
        });
        this.state.api = {
          ...result,
          columns: {
            'column-1': {
              id: 'column-1',
              title: 'Projects',
              taskIds: this.state.arr
            },
            columnOrder: ['column-1']
          }
        };
        //console.log(dataAPI)
      })
      .catch(e => console.log(e));
    this.setState(this.state)
  }

  onDragEnd = result => {
/*    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) return;
    const column = this.state.columns[source.droppableId];
    const newTaskIds = Array.from(column.taskIds);
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);
    const newColumn = {
      ...column,
      taskIds: newTaskIds,
    };
    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newColumn.id]: newColumn,
      },
    };
    this.setState(newState);*/
  };

  render(){
    console.log(this.state);
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {this.state.api.columnOrder.map(id => {
          const column = this.state.api.columns[id];
          const tasks = column.taskIds.map(id => this.state.tasks[id]);

          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </DragDropContext>
    );
  }
}

export default DraggableContainer