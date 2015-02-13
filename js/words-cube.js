var Point  = Isomer.Point;
var Path   = Isomer.Path;
var Shape  = Isomer.Shape;
var Vector = Isomer.Vector;
var Color  = Isomer.Color;
var iso = new Isomer(document.getElementById("art"));
var red = new Color(0, 0, 0);
var blue = new Color(255, 255, 255);
var colors = [red, blue];

face1 = new Path([
  Point(1, 1, 2),
  Point(1, 1, 3),
  Point(1, 2, 3),
  Point(1, 2, 2)
]); 

face2 = new Path([
  Point(1, 1, 2),
  Point(2, 1, 2),
  Point(2, 1, 3),
  Point(1, 1, 3)
]); 

face3 = new Path([
  Point(1, 1, 3),
  Point(1, 2, 3),
  Point(2, 2, 3),
  Point(2, 1, 3)
]); 

for (var i = 0; i < 3; ++i) {
    for (var j = 0; j < 3; ++j) {
        iso.add(face3.translate(i,j,2), colors[(i + j)%2]);
    }
}

for (var i = 0; i < 3; ++i) {
    for (var j = 0; j < 3; ++j) {
        iso.add(face1.translate(0,i,j), colors[(i + j)%2]);
    }
}

for (var i = 0; i < 3; ++i) {
    for (var j = 0; j < 3; ++j) {
        iso.add(face2.translate(i, 0,j), colors[(i + j)%2]);
    }
}
