const herokuAPI = "https://ironhack-projects.herokuapp.com/project";

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

