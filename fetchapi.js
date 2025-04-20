const divElement = document.querySelector(".card-container");
// function getDetails(id) {
//   // const request = fetch(`https://dummyjson.com/users/${id}`);
//   // const response = request.then((response) => {
//   //   return response.json();
//   // });
//   // response.then((user) => {
//   //   console.log(user);
//   // });

  function getUser(url)
  {
return fetch(url).then((response)=>{
  if(!response.ok)
  {
    throw new Error('Id does not match any data');
  }
  return response.json();
})
  }

  function getUserDetails(id)
  {
    getUser(`https://dummyjson.com/users/${id}`)
    .then((user)=>{
      displayUser(user,'beforeend')
      return fetch(`https://dummyjson.com/users/${id-1}`)
    })
    .then((user)=>{
      displayUser(user,'afterbegin','other')
    })
    .catch((err)=>{
      console.log(err);
    })
  }
//   fetch(`https://dummyjson.com/users/${id}`).then((response)=> {
//     if(!response.ok)
//     {
//       throw new Error('Id does not match any data');
//     }
//     return response.json();
//   })
//   .then((user)=>{
//     displayUser(user,'beforeend');
//     return   fetch(`https://dummyjson.com/users/${id-1}`)
//   })
//   .then((response)=> {
//     if(!response.ok)
//     {
//       throw new Error('No previous Id exist');
//     }
//     return response.json();
//   })
//   .then((user)=>{
//     displayUser(user,'afterbegin','other');
//     return   fetch(`https://dummyjson.com/users/${id-1}`)
//   })
//   .catch((err)=>{
//     console.error(err);
//   })
// }

// Display Users
function displayUser(data,pos, className=''){
  const card = `<div class="user-card ${className}">
  <img src=${data.image} alt="Profile Image" />
      <h3>${data.firstName}</h3>
      <h3>${data.lastName}</h3>
      <p class="email">${data.email}</p>
      <button class="btn">View Profile</button>
      </div>`;

      divElement.insertAdjacentHTML(pos, card);
}

getUserDetails(2)
