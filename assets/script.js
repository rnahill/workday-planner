// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

function createCalendar () {
  

  // create calendar container

  var calendarContainer = $('<div>');
  $('body').append(calendarContainer);

    //  add for loop to create text blocks with times
  
    for (i=9; i<=17; i++) { 
    
    var timeBlock = $('<div>');

    // add classes & id's to time block

    timeBlock.addClass('row time-block');
    timeBlock.attr('Hour-' + i);

    // create times text variable

    var timeText = $('<div>');

    // add classes & id'd to times text variable
    timeText.addClass('col-2 col-md-1 hour text-center py-3');

  // if statement to determine AM or PM
    if (i < 12) {
      timeText.text(i + 'AM');
    } else if (i === 12) {
      timeText.text(i + 'PM');
    } else {
      timeText.text(i - 12 + 'PM');
    }
    // add times to time block

    timeBlock.append(timeText);

    // create text area

    var textArea = $('<textarea>');

    // add classes & id's to text area

    textArea.addClass('col-8 col-md-10 description');
    textArea.attr('rows',3);

    // append textArea to timeBlock

    timeBlock.append(textArea);

    // add button

    var saveBtn = $('<button>');

     // add classes & id's to button

    saveBtn.addClass('btn saveBtn col-2 col-md-1');
    saveBtn.attr('aria-label', 'save')

    // append button to timeBlock

    timeBlock.append(saveBtn);
   
    // add button icon

    var btnIcon = $('<i>');


    // add classes & id's to button icon
    btnIcon.addClass('fas fa-save');
    btnIcon.attr('aria-hidden', 'true');


    // append icon to button

    saveBtn.append(btnIcon);

    // add timeblock to main container

    calendarContainer.append(timeBlock);

    }

}

createCalendar();

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
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