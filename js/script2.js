// Treehouse Unit 5 Project Submission
// Ebony Hargro
// Aiming for: Meets Expectations

// Setting up global variable

const link = 'https://randomuser.me/api/?results=12&nat=us';

//Create modal window
//Get users from Random User Generator API
//Display users from Random User Generator API

fetch(link) 
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        createModalWindow(data.results);
        updateModal(data.results);

        function createModalWindow(data) {
            // console.log(data);
            displayModal(data);
            const modalWindow = 
            `<div class="modal-container" id="modal">
                 <div class="modal"> 
                    <button type="button" id="modal-close-btn"><strong> X</strong> </button> 
                     </div>
                      </div> `;
            document.body.insertAdjacentHTML('beforeend', modalWindow);
            document.getElementById('modal').hidden = true;
        }

        //Create and append gallery items to the `gallery` div.
        function displayModal(data) {
            modifyModal();
            const gallery = document.getElementById('gallery');
            gallery.innerHTML = '';
            for (let i = 0; i <data.length; i+=1) {
                const employee = data[i];
                //Testing to make sure data is pulled and stored in employee variable correctly 
                console.log(`Name is: ${employee.name.first} Email is: ${employee.email}`)
                const html = `<div class="card"> <div class="card-img-container"> <div class = "card-img" src="${employee.picture.large}" alt="image of employee" </div>
                <div class="card-info-container"> <h3 id="name" class ="card-name cap">${employee.name.first} ${employee.name.last} </h3> <p class="card-text">${employee.email}</p> <p class="card-text cap"> ${employee.location.city}, ${employee.location.state} </p> </div> </div>`;
                gallery.insertAdjacentHTML('beforeend',html);

            };

    }

        function updateModal(data) {
            for (let i = 0; i< data.length; i+=1) {
                let employee = data[i];
                let birthday = employee.dob.date.substring(0,10);
                birthday = birthday.substring(5,7)+'/'+birthday.substring(8,)+'/'+birthday.substring(0,4);
                let phoneNum = employee.phone.toString();
                phoneNum = phoneNum.substring(0,5)+' '+phoneNum.substring(6,);
                console.log(`Date of birth: ${birthday} and phone is ${phoneNum}`);
                document.getElementById('modal-info-container').innerHTML = `<img class="modal-img" src="${employee.picture.large}" alt="profile picture"> <h3 id="name" class="modal-name cap">${employee.name.first} ${employee.name.last} </h3> <p class="modal-text">${employee.location.city}</p> <p class="modal-text"> ${phoneNum}</p> <p class="modal-text">${employee.location.street.number} ${employee.location.street.name} ${employee.location.city} ${employee.location.state} ${employee.location.postcode} </p> <p class="modal-text"> Birth date: ${birthday} </p>`;
            }
            
        }
        function modifyModal() {
            let cardIndex;
            const closebtn = document.getElementById('modal-close-btn');
            const modal = document.getElementById('modal');
            document.querySelectorAll('.card').forEach((card, i) => {
                card.addEventListener('click', () => {
                    cardIndex = i;
                    updateModal(data[i]);
                    modal.hidden=false;

                })
                closebtn.addEventListener('click', (e) => {
                    modal.hidden = true;
                });
            })
        }
})
 
