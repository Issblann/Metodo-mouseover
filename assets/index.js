const imgList = document.querySelectorAll("#img-1,#img-2,#img-3");
const imgSelected = document.getElementById("imgSelected");

imgList.forEach(function (img) {
  img.addEventListener("mouseover", function () {
    imgSelected.src = img.src;
  });
});
