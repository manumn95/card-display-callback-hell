const divElement = document.querySelector(".card-container");


async function getDetails(id) {
  try{
    const request = await fetch(`https://dummyjson.com/users/${id}`);
    if(!request.ok)
    {
      return new Error('No data Present');
    }
    const userData = await request.json();
    displayUser(userData,'beforeend');
  }
  catch(err){
console.log(err);
  }

}

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
getDetails(2)