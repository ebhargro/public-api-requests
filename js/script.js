// Treehouse Unit 5 Project Submission
// Ebony Hargro
// Aiming for: Meets Expectations

// Setting up global variables 

const link = 'https://randomuser.me/api/?results=12&nat=us';
const gallery = document.getElementById('gallery');


//Create modal window
//Get users from Random User Generator API
//Display users from Random User Generator API

createModalWindow();

 fetch(link) 
    // .then(response => apiStatus(response))
    .then(res => res.json())
    .then(data => {
        console.log(data);
        createModalWindow(data.results);
        closeModal(data.results);

    })


//The apiStatus function checks to see if the status of the API response is ok and returns an error message if not    
// function apiStatus(response) {
//     if(response.ok){
//         return Promise.resolve(response);
//     } else {
//         return Promise.reject(new Error(response.statusText));
//     }
// }

function createModalWindow(data) {
    displayModal(data);
    const modalWindow = `<div class="modal-container" id="modal"> <div class="modal"> <button type="button" id="modal-close-btn"> </button> <div class="modal-info-container" id="modal-info"> </div> </div> <div class="modal-btn-container"> <button type="button" id="modal-prev" class="modal-prev btn"> Previous </button> <button type="button" id="modal-next" class="modal-next-btn"> Next </button> </div> </div>`;
    document.body.insertAdjacentHTML('beforeend', modalWindow);
    document.getElementById('modal').hidden = true;
}

//Create and append gallery items to the `gallery` div.
function displayModal(data) {
    gallery.innerHTML = '';
    for (let i = 0; i < data.length; i+=1) {
        const employee = data[i];
        const html = ` <div class="card"> <div class="card-img-container"> <div class = "card-img" src="${employee.picture.large}" alt="image of employee" </div>
        <div class="card-info-container"> <h3 id="name" class ="card-name cap">${employee.name.first} ${employee.name.last} </h3> <p class="card-text">${employee.email}</p> <p class="card-text cap"> ${employee.location.city}, ${employee.location.state} </p> </div> </div>`;
        gallery.insertAdjacentHTML('beforeend', html);        
    };

}

function closeModal() {
    const closebtn = document.getElementById('modal-close-btn');
    const modal = document.getElementById('modal');
    document.querySelectorAll('.card').forEach((card, i) => {
        card.addEventListener('click', () => {
            cardIndex = i;
            updateModal();
            modalWindow.hidden = false;
        });
    })

    closebtn.addEventListener('click', (e) => {
        modal.hidden = true;
    })
updateModal(data[cardIndex]);
}


function updateModal() {
let dob = employee.dob.date.substring(0,10);
dob = dob.substring(5,7)+'/'+dob.substring(8,)+'/'+dob.substring(0,4);
let phone = employee.phone.toString();
phone = phone.substring(0,5)+' '+phone.substring(6,);
document.getElementById('modal-info').innerHTML = `<img class="modal-img" src="$
{employee.picture.large}" alt="profile picture"> <h3 id="name" class="modal-name cap">${employee.name.first} ${employee.name.last} </h3> <p class="modl-text">${employee.location.city}</p> <p class="modal-text"> ${phone}</p> <p class="modal-text">${employee.location.street.number} ${employee.location.street.name} ${employee.location.city} ${employee.location.state} ${employee.location.postcode} </p> <p class="modal-text"> Birth date: ${dob} </p>`;
}