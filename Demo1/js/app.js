//test for svg
/*window.onload=function() {
  var object = document.getElementById("logoObject");
  var svgDocument = object.contentDocument;
  var svgb1 = svgDocument.getElementsByClassName("firstb");
  var svgb2 = svgDocument.getElementsByClassName("secondb");
  svgb1[0].setAttribute("fill", "yellow");
  svgb2[0].setAttribute("fill", "red");
};*/

window.onload = function () {
    var control = document.querySelector('input[name="control"]');
    control.onchange = function () {
            var elements = document.getElementsByTagName('input');
            for (var i = 0; i < elements.length; i++) {
                if (elements[i] !== control && control.checked) {
                    elements[i].disabled = false;
                }else if(elements[i] !== control ){
                    elements[i].disabled = true;
                }
        }
    };
}