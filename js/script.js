// Treehouse Unit 5 Project Submission
// Ebony Hargro
// Aiming for: Meets Expectations

// Setting up API link as a global variable

const link = 'https://randomuser.me/api/?results=12&nat=us';
let employeeInfo;

// Use Fetch to collect to Random User API

fetch(link) 
    .then(res => res.json())
    .then(data => {
      createCards(data.results);

    

// The "Create cards" function pulls data from the API and appends it via template literal to the gallery div

function createCards(data) {
    //Store the gallery element as a variable
    const gallery = document.getElementById('gallery');
    //Set the HTML text of the gallery to an empty string
    // gallery.innerHTML = ' ';
    let cardIndex;
    //Create a loop that iterates through the length of the dataset and dynamically creates a card for each object
    for (let i = 0; i <data.length; i+=1) {
        //store the indexed data in a variable which we will reference in our template literal
        const employee = data[i];
        //Testing to make sure data is pulled and stored in employee variable correctly by logging a sample phrase to the console
        console.log(`Name is: ${employee.name.first} Email is: ${employee.email}`)
        // Create template literal with content to dynamically insert API data into index.HTML
        const html = `
        <div class="card">
         <div class="card-img-container"> <img class="card-img" src="${employee.picture.large}" alt="image of employee" 
         </div>
        <div class="card-info-container"> 
        <h3 id="name" class="card-name cap"> ${employee.name.first} ${employee.name.last} </h3>
         <p class="card-text">${employee.email}</p> 
         <p class="card-text cap"> 
         ${employee.location.city}, 
         ${employee.location.state} </p> 
         </div> 
         </div>`;
         //Inserting HTML 
        gallery.insertAdjacentHTML('beforeend',html) 
        };
        //Adding an event listener that runs the triggerModal function for each card in the gallery
        const cards = document.querySelectorAll('.card');
        
        cards.forEach((card, i) => {
            card.addEventListener('click', () => {
                //Testing this by logging the index of the card clicked to the console
                console.log(i);
                cardIndex = i;
              //Calling the function that adds the text of the modal window and passing the argument of the data at that specified index
                triggerModal(data[cardIndex]);
                  
            });
        })

    };
    
/**
 * This function generates the modal window popup and initiates the function to modify the window 
 * @param = {*} data 
 */
    function triggerModal(employee) {
        //Testing the console to see if values pulled correctly
        console.log(employee.name.first);        
        //Creating a variable to store the correctly formatted birthday
        let birthday = employee.dob.date.substring(0,10);
        birthday = birthday.substring(5,7)+'/'+birthday.substring(8,)+'/'+birthday.substring(0,4);
        // Creating a variable to store the correctly formatted phone number
        let phoneNum = employee.phone.toString();
        phoneNum = phoneNum.substring(0,5)+' '+phoneNum.substring(6,);
        //Testing the code by logging a sample sentence to the console
        console.log(`Date of birth: ${birthday} and phone is ${phoneNum}`);
        //Dynaming setting the value of the modal window to a template literal containing the employee's information
        const modalWindow = 
        `<div class="modal-container" id="modal">
             <div class="modal"> 
                <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button> 
            <img class="modal-img" src="${employee.picture.large}" alt="profile picture"> 
             <h3 id="name" class="modal-name cap">${employee.name.first} ${employee.name.last} </h3>
              <p class="modal-text">${employee.location.city}</p> 
              <p class="modal-text cap"> ${phoneNum}</p>  <hr>
              <p class="modal-text">${employee.location.street.number} ${employee.location.street.name} ${employee.location.city} </p>
              <p class="modal-text">${employee.location.state} ${employee.location.postcode} </p>
              <p class="modal-text"> Birth date: ${birthday} </p>
                 </div>
                 <div id="modal-info-container">
                  </div> `;
        gallery.insertAdjacentHTML('afterend', modalWindow);
        updateModal();

const window = document.getElementById('modal');

    function updateModal() {
        //Adding an event listener to the X button that makes the modal window hidden
        const xButton = document.getElementById('modal-close-btn');
        xButton.addEventListener('click', () => {
            window.style.display = 'none';
            window.remove();
        })
         //Resetting the display of the modal window in case this runs after X has been clicked
         document.getElementById('modal').style.display = 'inherit';
    }
}
})