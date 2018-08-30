var circles = [];

function onKeyDown(event) {
    keyData[event.key].sound.play();

    var maxPoint = new Point(view.size.width, view.size.height);
    var rndPoint = Point.random() * (maxPoint+1);

    var myCircle = new Path.Circle(rndPoint, 300);
    myCircle.fillColor = keyData[event.key].color;

    circles.push(myCircle);
}

function onFrame(event) {
    for(var i = 0; i < circles.length; i++){
        circles[i].fillColor.hue += 1;
        circles[i].scale(0.95);

        if(circles[i].area < 1){
            circles[i].remove();
            circles.splice(i,1);
        }
    }
}