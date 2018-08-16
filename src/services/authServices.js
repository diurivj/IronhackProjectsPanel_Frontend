//const localAPI = "http://localhost:3000";
const herokuAPI = "https://ironhack-projects.herokuapp.com/";

export function logIn(user){
  return fetch(herokuAPI + '/auth/login', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
  .then(r => r.json())
  .then(user => user);
}