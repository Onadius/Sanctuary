
/*
var contents = document.getElementById('AdultContents');

//�}�E�X�z�o�[���ɁA���U�C�N����
contents.addEventListener('mouseenter',function() {
		console.log('Hover Now');
})

//�}�E�X�A�E�g���ɁA���U�C�N����
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
