//const localAPI = "http://localhost:3000/auth";
const herokuAPI = "https://ironhack-projects.herokuapp.com/auth";

export function logIn(user){
  return fetch(herokuAPI + '/login', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
  .then(r => {
    return r.json();
  })
  .then(user => {
    return user;
  });
}

export function editProfile(changes, id){
  let formData = new FormData();
  for(let key in changes){
    formData.append(key, changes[key]);
  }
  return fetch(herokuAPI +'/edit/profile/' + id, {
    method:'PATCH',
    body: formData
  })
    .then(r => r.json())
    .then(profile => profile)
    .catch(error => console.log(error));
}

export function getLoggedUser(){
  const token = localStorage.getItem('access_token');
  return fetch(herokuAPI + '/loggedUser', {
    headers:{
      "Authorization": `Bearer ${token}`
    }
  })
    .then(r => r.json())
    .then(user => {
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    })
    .catch(error => console.log(error))
}




