var modal = document.getElementById("myModal");

var img = $('.myImg');
var modalImg = $('#img01');

$('.myImg').click(function()
{
	modal.style.display = "block";
	var newSrc = this.src;
	modalImg.attr('src', newSrc);
});

var span = document.getElementsByClassName("close")[0];

span.onclick = function()
{
	modal.style.display = "none";
}