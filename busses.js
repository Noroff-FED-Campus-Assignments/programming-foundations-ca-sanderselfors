const John = {
    name: "John",
    age: 31
  };
  
  const Patrick = {
    name: "Patrick",
    age: 40
  };
  
  const bus5 = {
    colour: "red",
    number: 15,
    startTime: "10:15",
    isDriving: true, 
    toggleDriving: function() {
     this.isDriving = !this.isDriving
    },
    size: "big",
    passengers: ["John", "Patrick"],
  };

  console.log(bus5);
  
  