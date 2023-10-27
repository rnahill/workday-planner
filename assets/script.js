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
    timeBlock.attr('id', 'hour-' + i);

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



// Created an .on click function to save the data entered into the textarea.  
  $(function () {
  
  var timeBtnEl = $('.saveBtn');

  timeBtnEl.on("click", function(){
  
// Used .parent(); to access the text area, aquired the textarea block by id, and created a variable to find the text entered into the text area.

    var chosenTimeBlock = $(this).parent();
    
    var timeBlockId = chosenTimeBlock.attr('hour-' + i);

    var textToStore = chosenTimeBlock.find('.description').val();

// Created an object to store what was entered into the textbox, then used localStorage to actually store the data into the browser along with using JSON.stringify to turn the data into a string.
   
    var dataToStore = {
      text: textToStore
    };

    localStorage.setItem(timeBlockId, JSON.stringify(dataToStore));
    
  })
      
// Added past, present, and future classes to each time block.

  var currentHour = parseInt(dayjs().format("H"));
  
  for (i=9; i<=17; i++) { 

    var timePhase = $('#hour-' + i);
        
      if (i < currentHour) {
        timePhase.addClass('past');
      } 
      else if (currentHour === i){
        timePhase.addClass('present'); 
      }
      else {
        timePhase.addClass('future');
      }

      }
  
//Code for getting the inputted text out of local storage.

  for (i=9; i<=17; i++) { 

    var blockId = "hour-" +i;
    var textInBlock = JSON.parse(localStorage.getItem(blockId));
  }    

// Added current day to header.

  var currentDay = dayjs().format("MMM / DD / YYYY");

  $('#currentDay').text(currentDay);

}
);
