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
    const { destination, source } = result;

    if (!destination) {
      console.log('está fuera de la columna');
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      console.log('es el mismo lugar de inicio');
      return;
    }

    const sourceIndex = result.source.index;
    const destinationIndex = result.destination.index;

    const {columns} = this.state.dataAPI;
    const item = columns['column-1'].taskIds[sourceIndex];

    columns['column-1'].taskIds.splice(sourceIndex, 1);
    columns['column-1'].taskIds.splice(destinationIndex, 0, item);

    this.setState(columns);
    console.log(columns['column-1'].taskIds);
  };

  render(){
    const {dataAPI} = this.state;
    const {columns} = this.state.dataAPI;
    if(dataAPI.columnOrder === undefined) return <p>Loading ...</p>;
    console.log(columns['column-1'].taskIds);
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