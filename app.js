function displayDayAndTime() {
    // Create a new Date object to get the current date and time
    const currentDate = new Date();

    // Get the current day of the week as a text string
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDayOfWeek = daysOfWeek[currentDate.getDay()];

    // Get the current time in milliseconds since January 1, 1970 (Unix Epoch)
    const currentTimeInMilliseconds = currentDate.getTime();

    // Display the current day of the week and time in milliseconds
    const dayElement = document.querySelector('.this-day');
    const timeElement = document.querySelector('.current-time');
    dayElement.textContent = `DAY: ${currentDayOfWeek}`;
    timeElement.textContent = `TIME IN MILLISECONDS: ${currentTimeInMilliseconds}`;
}

// Call the function immediately to display the initial day and time
displayDayAndTime();

// Set up an interval to update the day and time every second (1000 milliseconds)
setInterval(displayDayAndTime, 1000);