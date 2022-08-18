const progressBar = document.getElementById("progress-bar");
const progressNext = document.getElementById("progress-next");
const progressPrev = document.getElementById("progress-prev");
const steps = document.querySelectorAll(".step");
let active = 0;

progressNext.addEventListener("click", () => {
  active++;
  if (active > steps.length) {
    active = steps.length;
  }
  updateProgress();

  switch (active) {
    case 1:
      func1();
      break;
    case 2:
      func2()
      break;
    case 3:
      func3()
      break;
    case 4:
      func4()
      break;
  }

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
<<<<<<< HEAD
    const stage1 = "Dear A, Ticket ID: REQ123456 Picked by Safaricom LTD and is being actioned, You will get an update once it progresses"
=======
    const stage1 = "Dear Customer, Ticket ID: REQ123456 Picked by Safaricom LTD and is being actioned, You will get an update once it progresses"
>>>>>>> b8af53ebe0c36f9a3c8c1194f0b007087e5eb3ee
    document.getElementById("ticket").innerHTML = stage1
  },

  func2 = () => {
<<<<<<< HEAD
    const stage2 = "Dear A, Ticket ID: REQ123456 Ticket Details Updated, Likoni Road, Viraj Apartments, House Number 48"
    document.getElementById("ticketdetails").innerHTML = stage2
  },

  func2 = () => {
    const stage3 = "Dear A, Ticket ID: REQ123456: Technician B has been assigned your Ticket will attend to your issue"
    document.getElementById("technician").innerHTML = stage3
  },

  func2 = () => {
    const stage4 = "Dear A, Ticket ID: REQ123456: Router Replaced and Configurations Updated, Thank for Choosing Safaricom PLC"
=======
    const stage2 = "Dear Customer, Ticket ID: REQ123456 Ticket Details Updated, Likoni Road, Viraj Apartments, House Number 48"
    document.getElementById("ticketdetails").innerHTML = stage2
  },

  func3 = () => {
    const stage3 = "Dear Customer, Ticket ID: REQ123456: Technician B has been assigned your Ticket will attend to your issue"
    document.getElementById("technician").innerHTML = stage3
  },

  func4 = () => {
    const stage4 = "Dear Customer, Ticket ID: REQ123456: Technician B is on the way to attend to your issue"
>>>>>>> b8af53ebe0c36f9a3c8c1194f0b007087e5eb3ee
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
<<<<<<< HEAD

=======
>>>>>>> b8af53ebe0c36f9a3c8c1194f0b007087e5eb3ee
    }
    else {
      step.classList.remove("active");
    }
<<<<<<< HEAD

=======
>>>>>>> b8af53ebe0c36f9a3c8c1194f0b007087e5eb3ee
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