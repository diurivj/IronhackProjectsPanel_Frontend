import {base_url} from "../variables";

const herokuAPI = `${base_url}/project`;

export function createProject(project) {
  return fetch(herokuAPI + '/create_new', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(project)
  })
    .then(r => r.json())
    .then(project => project);
}

export function getUserProjects(id){
    return fetch(`${herokuAPI}/student/${id}`)
        .then(r => r.json())
        .then(projects => projects);
}
