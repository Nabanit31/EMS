 localStorage.clear()
 const employees = [
    {
      "id": 1,
      "firstName": "Rohan",
      "email": "employee1@gmail.com",
      "password": "123",
      "tasks": [
        { "title": "Onboard New Client",  "active": true,  "newTask": false, "completed": true,  "failed": false },
        { "title": "Database Backup",     "active": true,  "newTask": false, "completed": false, "failed": false },
        { "title": "Update Documentation","active": false, "newTask": true,  "completed": false, "failed": false },
        { "title": "Team Meeting",        "active": false, "newTask": false, "completed": true,  "failed": false }
      ],
      "taskCount": {
        "active": 2,
        "newTask": 1,
        "completed": 2,
        "failed": 0
      }
    },
    {
      "id": 2,
      "firstName": "Priya",
      "email": "employee2@gmail.com",
      "password": "123",
      "tasks": [
        { "title": "Code Review",         "active": true,  "newTask": false, "completed": false, "failed": false },
        { "title": "Design Mockups",      "active": true,  "newTask": true,  "completed": false, "failed": false },
        { "title": "Server Health Check", "active": false, "newTask": false, "completed": true,  "failed": false }
      ],
      "taskCount": {
        "active": 2,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      }
    },
    {
      "id": 3,
      "firstName": "Amit",
      "email": "employee3@gmail.com",
      "password": "123",
      "tasks": [
        { "title": "Write Unit Tests",    "active": false, "newTask": false, "completed": true,  "failed": false },
        { "title": "Deploy Hotfix",       "active": true,  "newTask": false, "completed": false, "failed": false },
        { "title": "Performance Profiling","active": true,  "newTask": true,  "completed": false, "failed": false },
        { "title": "Error Logging",       "active": true,  "newTask": true,  "completed": false, "failed": false }
      ],
      "taskCount": {
        "active": 3,
        "newTask": 2,
        "completed": 1,
        "failed": 0
      }
    },
    {
      "id": 4,
      "firstName": "Sneha",
      "email": "employee4@gmail.com",
      "password": "123",
      "tasks": [
        { "title": "UX Feedback",         "active": false, "newTask": false, "completed": true,  "failed": false },
        { "title": "Bug Triage",          "active": false, "newTask": false, "completed": false, "failed": true  },
        { "title": "Prototype Testing",   "active": true,  "newTask": true,  "completed": false, "failed": false }
      ],
      "taskCount": {
        "active": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 1
      }
    },
    {
      "id": 5,
      "firstName": "Rahul",
      "email": "employee5@gmail.com",
      "password": "123",
      "tasks": [
        { "title": "Marketing Plan",      "active": true,  "newTask": false, "completed": false, "failed": false },
        { "title": "Social Media Posts",  "active": true,  "newTask": false, "completed": false, "failed": false },
        { "title": "Ad Campaign Analysis","active": false, "newTask": false, "completed": true,  "failed": false },
        { "title": "Content Calendar",    "active": true,  "newTask": true,  "completed": false, "failed": false }
      ],
      "taskCount": {
        "active": 3,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      }}
      ]
    
  const admin = {
    "id": 100,
    "firstName": "Arjun",
    "email": "admin@gmail.com",
    "password": "123"
  }


export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};


export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  
  return{employees, admin};

};
