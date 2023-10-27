// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

function createCalendar () {
  

  // Calendar container

  var calendarContainer = $('<div>');
  $('body').append(calendarContainer);

    //  Used a for loop to create time blocks. Added classes and attributes to time blocks. Then used an if statement and a text variable to determine whether or not the text on the timeblock should say AM or PM, and then added said text.
  
    for (i=9; i<=17; i++) { 
    
    var timeBlock = $('<div>');
    timeBlock.addClass('row time-block');
    timeBlock.attr('Hour-' + i);

    var timeText = $('<div>');
    timeText.addClass('col-2 col-md-1 hour text-center py-3');

    if (i < 12) {
      timeText.text(i + 'AM');
    } else if (i === 12) {
      timeText.text(i + 'PM');
    } else {
      timeText.text(i - 12 + 'PM');
    }
    
    timeBlock.append(timeText);

    // Created text area variable and added classes/attributes. Added a text area to each time block.

    var textArea = $('<textarea>');
    textArea.addClass('col-8 col-md-10 description');
    textArea.attr('rows',3);

    timeBlock.append(textArea);

    // Created button and added classes/attributes. Added a button to each time block and added the button icon to each button.

    var saveBtn = $('<button>');
    saveBtn.addClass('btn saveBtn col-2 col-md-1');
    saveBtn.attr('aria-label', 'save')

    timeBlock.append(saveBtn);
   
    var btnIcon = $('<i>');
    btnIcon.addClass('fas fa-save');
    btnIcon.attr('aria-hidden', 'true');

    saveBtn.append(btnIcon);

    // Added time blocks to calendar container.

    calendarContainer.append(timeBlock);


    }

}

// Run createCalendar function so calendar appears on the page.
createCalendar();

 // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  $(function () {
  
  var timeBtnEl = $('.saveBtn');

  timeBtnEl.on("click", function(){
    
    var chosenTimeBlock = $(this).parent();
    
    var timeBlockId = chosenTimeBlock.attr('Hour-' + i);

    var textToStore = chosenTimeBlock.find('.description').val();

    var dataToStore = {
      text: textToStore
    };

    localStorage.setItem(timeBlockId, JSON.stringify(dataToStore));
    
  )}


  //   if (localStorage.getItem(timeBlockId) !== null) {
  //     // Data is stored in localStorage with the key 'yourKey'
  //     // You can access and use it here
  //     var storedData = localStorage.getItem(timeBlockId);
  //     console.log('Data is stored: ' + storedData);
  //   } else {
  //     // Data is not stored in localStorage with the key 'yourKey'
  //     console.log('No data stored with the key timeBlockID');
  //   }
  // })


 



  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
        




  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});


// From homework setup
// check day.js website - format section - advanced format for current time in military time
// dayjs().format("YYYY") - would return 2023

// with save buttons, can save to different local storage boxes or make a big array
// add "Appointment added to local storage"

// if using get item use set item
// render function right away
// INIT function