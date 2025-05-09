// Feature Rollout System
function FeatureToggle(featureName, isEnabled, userGroupAccess) {
  this.featureName = featureName;
  this.isEnabled = isEnabled;
  this.userGroupAccess = userGroupAccess;
}

FeatureToggle.prototype.canAccess = function(userRole) {
  return this.isEnabled && this.userGroupAccess.includes(userRole);
};

FeatureToggle.prototype.toggleFeature = function(flag, role) {
  this.isEnabled = flag;
  if (this.isEnabled === true) {
    switch (role) {
      case "admins":
        console.log("Full access gained!");
        break;
      case "betaTesters":
        console.log("Testing access gained!");
        break;
      case "users":
        console.log("Limited access gained!");
        break;
      default:
        console.log("No access at all!");
        break;
    }
  }
};

const feature = new FeatureToggle("WhiteMod", true, ["betaTesters", "admins", "users"]);
console.log(feature.canAccess("admins"));
feature.toggleFeature(true, "admins");


//  Freelancer Time-Tracking 
  function TimeLog(freelancerName, projectDetails, logs) {
    this.freelancerName = freelancerName;
    this.projectDetails = projectDetails;
    this.logs = logs;
  }
  TimeLog.prototype.totalEarnings = function() {
    const totalHours = this.logs.reduce((sum, log) => sum + log.hoursWorked, 0);
    return totalHours * this.projectDetails.hourlyRate;
  };
  TimeLog.prototype.filterLogsByDate = function(startDate, endDate) {
    return this.logs.filter(log => {
      const date = new Date(log.date);
      return date >= new Date(startDate) && date <= new Date(endDate);
    });
  };
  TimeLog.prototype.isOverWeeklyHours = function() {
    const totalHours = this.logs.reduce((sum, log) => sum + log.hoursWorked, 0);
    if (totalHours > 40) {
      return true;
    } else {
      return false;
    }
  };
  const logs = [
    { date: "2025-05-01", hoursWorked: 10 },
    { date: "2025-05-02", hoursWorked: 15 },
    { date: "2025-05-03", hoursWorked: 20 }
  ];
  const timeLog = new TimeLog("Alex", { name: "WebApp", hourlyRate: 25 }, logs);


//  Order Management System
  function Order(customer, items, status) {
    this.customer = customer;
    this.items = items;
    this.status = status;
  }
  Order.prototype.computeTotalCost = function() {
    return this.items.reduce((total, item) =>
      total + item.quantity * item.unitPrice, 0);
  };
  Order.prototype.updateStatus = function(paymentReceived) {
    this.status = paymentReceived ? "Paid" : "Pending";
  };
  Order.prototype.categorizeUrgency = function() {
    const itemCount = this.items.length;
    switch (true) {
      case (itemCount >= 5):
        return "High";
      case (itemCount >= 3):
        return "Medium";
      default:
        return "Low";
    }
  };
  const order = new Order(
    { name: "Yordanos Tesfay", email: "yordanoshagos@gmail.com" },
    [
      { productName: "Laptop", quantity: 1, unitPrice: 1000 },
      { productName: "Mouse", quantity: 2, unitPrice: 25 }
    ],
    "Pending"
  );


  // Employee Review Tool
  function Employee(id, name, performanceMetrics, feedback) {
    this.id = id;
    this.name = name;
    this.performanceMetrics = performanceMetrics;
    this.feedback = feedback;
  }
  Employee.prototype.getAverageScore = function() {
    const scores = Object.values(this.performanceMetrics);
    const sum = scores.reduce((a, b) => a + b, 0);
    return sum / scores.length;
  };
  Employee.prototype.classifyPerformance = function() {
    const avg = this.getAverageScore();
    if (avg >= 4.5) return "Excellent";
    else if (avg >= 3.5) return "Good";
    else return "Needs Improvement";
  };
  Employee.prototype.addFeedback = function(comment) {
    if (comment.length > 5) {
      this.feedback.push(comment);
    }
  };
  const emp = new Employee(1, "Chris", { communication: 4, efficiency: 5, reliability: 4.5 }, []);


  // E-learning System
  function Course(title, instructor, students) {
    this.title = title;
    this.instructor = instructor;
    this.students = students;
  }
  Course.prototype.getCompletedStudents = function() {
    return this.students
      .filter(s => s.completionStatus)
      .map(s => s.name);
  };
  Course.prototype.countByExpertise = function(expertiseArea) {
    return this.students.filter(s => s.expertise === expertiseArea).length;
  };
  Course.prototype.instructorMessage = function() {
    if (this.students.length >= 5) {
      console.log("Great job! You're handling a full class.");
    } else {
      console.log("Keep promoting your course!");
    }
  };
  const course = new Course(
    "JavaScript 101",
    { name: "Danu", expertise: "Web Dev" },
    [
      { name: "Merry", completionStatus: true },
      { name: "Nebu", completionStatus: false },
      { name: "Melu", completionStatus: true }
    ]
  );
  