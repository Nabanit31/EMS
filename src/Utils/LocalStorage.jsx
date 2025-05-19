 const employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Onboard New Client",
          "description": "Set up account and permissions for the new client Acme Corp.",
          "date": "2025-05-10",
          "category": "Client Management",
          "active": true,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Database Backup",
          "description": "Perform full backup of customer database.",
          "date": "2025-05-12",
          "category": "Maintenance",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Update Documentation",
          "description": "Revise API docs to include the latest endpoints.",
          "date": "2025-05-15",
          "category": "Documentation",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Team Meeting",
          "description": "Weekly sync with the development team.",
          "date": "2025-05-16",
          "category": "Meetings",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Code Review",
          "description": "Review pull requests in the payments repo.",
          "date": "2025-05-11",
          "category": "Development",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Design Mockups",
          "description": "Create UI mockups for the new dashboard.",
          "date": "2025-05-13",
          "category": "Design",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Server Health Check",
          "description": "Verify CPU and memory usage on prod servers.",
          "date": "2025-05-14",
          "category": "Maintenance",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Write Unit Tests",
          "description": "Cover edge cases for the authentication module.",
          "date": "2025-05-09",
          "category": "Testing",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Deploy Hotfix",
          "description": "Push urgent security patch to production.",
          "date": "2025-05-14",
          "category": "Deployment",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Performance Profiling",
          "description": "Analyze response times for payment endpoints.",
          "date": "2025-05-16",
          "category": "Performance",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Error Logging",
          "description": "Implement log aggregation for error tracking.",
          "date": "2025-05-17",
          "category": "Monitoring",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "UX Feedback",
          "description": "Collect user feedback on the new mobile app design.",
          "date": "2025-05-08",
          "category": "Research",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Bug Triage",
          "description": "Categorize and assign incoming bug reports.",
          "date": "2025-05-12",
          "category": "QA",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        },
        {
          "title": "Prototype Testing",
          "description": "Run usability tests on the payment flow prototype.",
          "date": "2025-05-15",
          "category": "Testing",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Marketing Plan",
          "description": "Draft Q3 marketing strategy presentation.",
          "date": "2025-05-10",
          "category": "Marketing",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Social Media Posts",
          "description": "Schedule LinkedIn and Twitter updates for product launch.",
          "date": "2025-05-13",
          "category": "Social Media",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Ad Campaign Analysis",
          "description": "Review performance metrics of last month’s campaign.",
          "date": "2025-05-14",
          "category": "Analytics",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Content Calendar",
          "description": "Plan blog post topics for June.",
          "date": "2025-05-17",
          "category": "Content",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    }
  ]
  const admin = {
    "id": 100,
    "email": "admin@example.com",
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
