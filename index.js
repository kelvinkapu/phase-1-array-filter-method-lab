// Code your solution here
// Function: findMatching
function findMatching(drivers, query) {
    // Convert the query and driver names to lowercase for case-insensitive comparison
    const lowerCaseQuery = query.toLowerCase();
  
    // Use filter() to find the matching drivers
    const matchingDrivers = drivers.filter(driver =>
      driver.toLowerCase() === lowerCaseQuery
    );
  
    // Return the matching drivers
    return matchingDrivers;
  }
  // Function: fuzzyMatch
function fuzzyMatch(drivers, query) {
    // Convert the query and driver names to lowercase for case-insensitive comparison
    const lowerCaseQuery = query.toLowerCase();
  
    // Use filter() to find the drivers whose names start with the provided letters
    const matchingDrivers = drivers.filter(driver =>
      driver.toLowerCase().startsWith(lowerCaseQuery)
    );
  
    // Return the matching drivers
    return matchingDrivers;
  }
  
  // Function: matchName
  function matchName(drivers, query) {
    // Convert the query to lowercase for case-insensitive comparison
    const lowerCaseQuery = query.toLowerCase();
  
    // Use filter() to find the drivers whose name property matches the provided string
    const matchingDrivers = drivers.filter(driver =>
      driver.name.toLowerCase() === lowerCaseQuery
    );
  
    // Return the matching drivers
    return matchingDrivers;
  }
 
  
  
  
  
  
  
  