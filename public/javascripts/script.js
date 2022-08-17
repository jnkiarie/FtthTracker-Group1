const progressBar = document.getElementById("progress-bar");
const progressNext = document.getElementById("progress-next");
const progressPrev = document.getElementById("progress-prev");
const steps = document.querySelectorAll(".step");
let active = 1;

progressNext.addEventListener("click", () => {
  active++;
  if (active > steps.length) {
    active = steps.length;
  }
  updateProgress();

});

progressPrev.addEventListener("click", () => {
  active--;
  if (active < 1) {
    active = 1;
  }
  updateProgress();
});

let functionarray = [
  func1 = () => {
  const stage1 = "Dear A, Ticket ID: REQ123456 Picked by Safaricom LTD and is being actioned, You will get an update once it progresses"
  document.getElementById("ticket").innerHTML = stage1
},

func2 = () => {
  const stage2 = "Dear A, Ticket ID: REQ123456 Ticket Details Updated, Likoni Road, Viraj Apartments, House Number 48"
  document.getElementById("ticketdetails").innerHTML = stage2
},

func2 = () => {
  const stage3 = "Dear A, Ticket ID: REQ123456: Technician B has been assigned your Ticket will attend to your issue"
  document.getElementById("technician").innerHTML = stage3
},

func2 = () => {
  const stage4 = "Dear A, Ticket ID: REQ123456: Technician B is on the way to attend to your issue"
  document.getElementById("location").innerHTML = stage4
},
]

// functionarray.forEach(element => {
//   element();
// });

const updateProgress = () => {
  steps.forEach((step, i) => {
    
    if (i < active) {
      step.classList.add("active");
  
     
      //  } else if(active = 2){
      // step.classList.add("active");
      // const stage1 = "Ticket ID: REQ123456 Details Picked as: LOS of internet along Likoni Road, Viraj Apartments, House No. 5"
      // document.getElementById("ticket").innerHTML = stage1
    // for (let index = 0; index < functionarray.length; index++) {
    //   functionarray[index]();
    // }

  //   functionarray.forEach(element => {
  //     element();
  // });

    }

    else {
      step.classList.remove("active");
    }




  });
  progressBar.style.width = ((active - 1) / (steps.length - 1)) * 100 + "%";
  if (active === 1) {
    progressPrev.disabled = true;
  } else if (active === steps.length) {
    progressNext.disabled = true;
  } else {
    progressPrev.disabled = false;
    progressNext.disabled = false;
  }
};
