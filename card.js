const divEle = document.querySelector('.card-container');

function getDetails(id){
  const request = new XMLHttpRequest();

  request.open('GET', `https://dummyjson.com/users/${id}`);
  request.send();

  request.addEventListener('load', function () {
    //console.log(this.responseText);
    //console.log(JSON.parse(this.responseText));
    if(request.status===404)return;
    const data = JSON.parse(this.responseText);
    displayUser(data,'beforeend');

    const request2 = new XMLHttpRequest();

    request2.open('GET', `https://dummyjson.com/users/${id-1}`);
    request2.send();
    request2.addEventListener('load', function () {
        //console.log(this.responseText);
        //console.log(JSON.parse(this.responseText));
        if(request2.status===404)return;
        const data = JSON.parse(this.responseText);
        displayUser(data,"afterbegin",'other');
    });

    });
}

function displayUser(data,pos, className=''){
    const card = `<div class="user-card ${className}">
    <img src=${data.image} alt="Profile Image" />
        <h3>${data.firstName}</h3>
        <h3>${data.lastName}</h3>
        <p class="email">${data.email}</p>
        <button class="btn">View Profile</button>
        </div>`;

        divEle.insertAdjacentHTML(pos, card);
}

getDetails(2);
