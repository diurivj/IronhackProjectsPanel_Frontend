import {getCohortProjects} from "../../services/projectServices";

let dataAPI = {};
let arr = [];

const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Take out the garbage' },
    'task-2': { id: 'task-2', content: 'Watch my favorite show' },
    'task-3': { id: 'task-3', content: 'Charge my phone' },
    'task-4': { id: 'task-4', content: 'Cook dinner' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Projects',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ['column-1'],
};

getCohortProjects('5b897ecaf4c4f4001462b4bd', 2)
  .then(result => {
    result.map(r => {
      arr.push(r.title);
      return arr;
    });
    dataAPI = {
      ...result,
      columns: {
        'column-1': {
          id: 'column-1',
          title: 'Projects',
          taskIds: arr
        },
        columnOrder: ['column-1']
      }
    };
    //console.log(dataAPI)
  })
  .catch(e => console.log(e));


export default dataAPI;
//export default initialData;
