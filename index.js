const express = require("express");
const app = express();
const port = 3000;

// employees/department/:department
let employees = [
  { name: "Rahul Gupta", department: "HR", Salary: "50000" },
  { name: "Rohit Sharma", department: "Finance", Salary: "60000" },
  { name: "Rohan Sharma", department: "Marketing", Salary: "55000" },
  { name: "Raj Gupta", department: "IT", Salary: "65000" },
];

function filterByDepartment(employee, department) {
  return employee.department === department;
}

app.get("/employees/department/:department", (req, res) => {
  let department = req.params.department;
  let result = employees.filter((employee) =>
    filterByDepartment(employee, department),
  );
  res.json(result);
});

// bikes

let bikes = [
  { make: "Hero", model: "Splender", mileage: 80 },
  { make: "Bajaj", model: "Pulsar", mileage: 70 },
  { make: "TVS", model: "Apache", mileage: 60 },
];

function filterByMileage(bike, minMileage) {
  return bike.mileage > minMileage;
}

app.get("/bikes/mileage/:minMileage", (req, res) => {
  let minMileage = req.params.minMileage;
  let result = bikes.filter((bike) => filterByMileage(bike, minMileage));
  res.json(result);
});

// bikes/make/:make

function filterByMake(bike, make) {
  return bike.make.toLowerCase() === make.toLowerCase();
}

app.get("/bikes/make/:make", (req, res) => {
  let make = req.params.make;
  let result = bikes.filter((bike) => filterByMake(bike, make));
  res.json(result);
});

// songs/rating/:minRating
let songs = [
  { title: "Tum Hi Ho", genre: "Romantic", rating: 4 },
  { title: "Channa Mereya", genre: "Comedy", rating: 5 },
  { title: "Channa Mereya", genre: "Action", rating: 6 },
  { title: "Channa Mereya", genre: "Romantic", rating: 7 },
];

function filterByRating(song, minRating) {
  return song.rating > minRating;
}

app.get("/songs/rating/:minRating", (req, res) => {
  let minRating = req.params.minRating;
  let result = songs.filter((song) => filterByRating(song, minRating));
  res.json(result);
});

// songs/genre/:genre

function filterByGenre(song, genre) {
  return song.genre.toLowerCase() === genre.toLowerCase();
}

app.get("/songs/genre/:genre", (req, res) => {
  let genre = req.params.genre;
  let result = songs.filter((song) => filterByGenre(song, genre));
  res.json(result);
});


// tasks/status/:status

let tasks =[
  {"taskId" : 1, "taskName" : "Prepare Presentation", "status" : "pending"},
  {"taskId" : 2, "taskName" : "Attaind Meeting", "status" : "in-progress"},
  {"taskId" : 3, "taskName" : "Submit Report", "status" : "completed"}
]

function filterByStatus(task, status){
  return task.status === status
}

app.get('/tasks/status/:status', (req, res) =>{
  let status = req.params.status;
  let result = tasks.filter((task)=> filterByStatus(task, status))
  res.json(result)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
