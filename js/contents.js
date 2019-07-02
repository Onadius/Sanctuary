
/*
var contents = document.getElementById('AdultContents');

//hover
contents.addEventListener('mouseenter',function() {
		console.log('Hover Now');
})

//out
contents.addEventListener('mouseleave',function() {
		console.log('Hover Out');
})
*/

//mouse roll over


$('#AdultContents').hover(
	function(){
		$(this).css('opacity','1');
	},
	function(){
		$(this).css('opacity','0.1');
	}
);
