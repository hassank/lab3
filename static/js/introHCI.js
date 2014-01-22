'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Button Clicked");
		$('#testjs').text("Classes Changed")
		$('.jumbotron p').toggleClass("active");
	});

	$('#submitBtn').click(submitFunction);

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
}

/*
function projectClick(e) {
	// console.log(some_str) prints some_str to console
	console.log("reached project click function");

	// prevent the page from reloading
	e.preventDefault();

	// In an event handler, $(this) refers to triggering object
	$(this).css("background-color", "#7fff00");
}
*/

function submitFunction(e) {
	var project = $("#project").val();

	$(project).animate({
		width: $("#width").val()
	})

	var text = $("#description").val();
	$(project).find(".project-description").text(text);
}


function projectClick(e) {
  // Cancel the default action, which prevents the page from reloading
    e.preventDefault();

    // In an event listener, $(this) is the leement that fired the event
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);

    var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
	    $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
	} else {
		description.fadeOut();
	}
}