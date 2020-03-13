var whiteQueen = {
  direction: "N",
  position: {
    X: 0,
    Y: 0
  }
};

var directionnew = prompt("Enter direction,steps");
var Array = directionnew.split("");
for (i = 0; i < Array.length; i++) {
  var steps = Array[i].slice(-1);
  //var direction = Array[i].slice(0, 1);
}
var direction = directionnew.slice(0, -1);

console.log("steps= " + steps);
console.log("Direction= " + direction);

changedirection(steps, direction);

function changedirection(steps, direction) {
  console.log("inside");
  switch (direction) {
    case "S":
      console.log(steps);
      temp = whiteQueen.position.X + steps;
      if (boundarycheck(temp)) {
        WhiteQueen.position.X = temp;
        console.log(whiteQueen.position);
        console.log(whiteQueen.direction);
        moveForward();
        jumpmovefarward();
      } else {
        console.log("crossing the boundary");
      }
      break;
    case "N":
      temp = whiteQueen.position.X - steps;
      if (boundarycheck(temp)) {
        WhiteQueen.position.X = temp;
        console.log(direction);
        console.log(steps);
        moveForward();
        jumpmovefarward();
      } else {
        console.log("crossing the boundary");
      }
      break;
    case "E":
      temp = whiteQueen.position.Y + steps;
      if (boundarycheck(temp)) {
        Queen.position.Y = temp;
        console.log(direction);
        console.log(steps);

        moveForward();
        jumpmovefarward();
      } else {
        console.log("crossing the boundary");
      }
      break;
    case "W":
      temp = whiteQueen.position.Y - steps;
      if (boundarycheck(temp)) {
        Queen.position.Y = temp;
        console.log(direction);
        console.log(steps);

        moveForward();
        jumpmovefarward();
      } else {
        console.log("crossing the boundary");
      }
      break;
    case "NE":
      temp1 = whiteQueen.position.X - steps;
      temp2 = whiteQueen.position.Y + steps;
      if (boundarycheck(temp)) {
        Queen.position.X = temp1;
        Queen.position.Y = temp2;
        console.log(direction);
        console.log(steps);

        moveForward();
        jumpmovefarward();
      } else {
        console.log("crossing the boundary");
      }
      break;
    case "SE":
      temp1 = whiteQueen.position.X + steps;
      temp2 = whiteQueen.position.Y + steps;
      if (boundarycheck(temp)) {
        Queen.position.X = temp1;
        Queen.position.Y = temp2;
        console.log(direction);
        console.log(steps);

        moveForward();
        jumpmovefarward();
      } else {
        console.log("crossing the boundary");
      }
      break;
    case "NW":
      whiteQueen.position.X = whiteQueen.position.X - steps;
      whiteQueen.position.Y = whiteQueen.position.Y - steps;
      if (boundarycheck(temp)) {
        Queen.position.X = temp1;
        Queen.position.Y = temp2;
        console.log(direction);
        console.log(steps);

        moveForward();
        jumpmovefarward();
      } else {
        console.log("crossing the boundary");
      }
      break;
    case "SW":
      whiteQueen.position.X = whiteQueen.position.X + steps;
      whiteQueen.position.Y = whiteQueen.position.Y - steps;
      if (boundarycheck(temp)) {
        Queen.position.X = temp1;
        Queen.position.Y = temp2;
        console.log(direction);
        console.log(steps);

        moveForward();
        jumpmovefarward();
      } else {
        console.log("crossing the boundary");
      }
      break;
  }
}

function boundarycheck(temp) {
  if (0 < temp < 9) return true;
  else return false;
}

function moveForward(position) {
  whiteQueen.position.X = whiteQueen.position.X + 1;
}

function jumpmovefarward(noofsteps, direction) {
  whiteQueen.position.X = whiteQueen.position.X + noofsteps;
}

function updateposition(X, Y) {
  whiteQueen.position.X = X;
  whiteQueen.position.Y = Y;
}
