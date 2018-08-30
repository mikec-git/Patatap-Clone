
function onKeyDown(event) {
    var maxPoint = new Point(view.size.width, view.size.height);
    var rndPoint = Point.random() * (maxPoint+1);
    
    var myCircle = new Path.Circle(rndPoint, 10).fillColor = "orange";
}

var animatedCircle = new Path.Circle(new Point(300,300), 100);
animatedCircle.fillColor = "red";

function onFrame(event) {
    animatedCircle.fillColor.hue += 1;

}