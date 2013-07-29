// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require jquery-ui-1.10.3.custom
//= require_tree .


$(function(){

	
			$("#to").datepicker()
			$("#from").datepicker({
			numberOfMonths:1,
			showWeek: true,
			firstDay: 1,
			onClose: function(selectedDate){
				$("#to").datepicker("option", "minDate", selectedDate);
			}
		})

			$("#accordion").accordion({
			heightStyle :"fill",
			collapsible: true
			}).sortable({
			axis: "y",
			});

		$("#drag_from_here td").draggable({
				appendTo: "body",
				revert: true,
				helper: "clone"
			});
			$("#drop_here ol").droppable({
				drop: function(event, ui){
					$(this).find(".placeholder").remove();
					$("<li></li>").text(ui.draggable.text()).appendTo(this);
				}
			});

$('.myLinkToTop').click(function () {
$('html, body').animate({scrollTop:$(document).height()}, 'slow');
return false;
});

$('.myMenuLink').click(function () {
$('html, body').animate({scrollTop:0}, 'slow');
return false;
});
















});