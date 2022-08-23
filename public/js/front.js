'use strict';
console.log('main.js');

// kreiptis ir gauti users is back end
const backEndUrl = 'http://localhost:3000/api/users/1';

async function getUsers() {
  const resp = await fetch(backEndUrl);
  const dataInJs = await resp.json();
  console.log('dataInJs ===', dataInJs);
}
getUsers();
