
/*
var contents = document.getElementById('AdultContents');

//マウスホバー時に、モザイク処理
contents.addEventListener('mouseenter',function() {
		console.log('Hover Now');
})

//マウスアウト時に、モザイク処理
contents.addEventListener('mouseleave',function() {
		console.log('Hover Out');
})
*/

$(funtion() {

	$('#AdultContents').hover(
		function(){
			console.log('Hover Now');
		},

		function(){
			console.log('Hover Out');
		}
	);

});
