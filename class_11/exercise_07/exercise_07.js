const radiusInput = document.getElementById("radiusInput");
const createCircleButton = document.getElementById("createCircleButton");
const getAreaButton = document.getElementById("getAreaButton");
const getPerimeterButton = document.getElementById("getPerimeterButton");
const message = document.getElementById("message");

let circle = null;

createCircleButton.addEventListener("click", function () {
  if (!radiusInput.value || radiusInput.value <= 0) {
    message.innerText = "Please enter a valid radius.";
    return;
  }

  const radius = parseFloat(radiusInput.value);
  circle = {
    radius: radius,
    getArea: function () {
      return Math.PI * this.radius ** 2;
    },
    getPerimeter: function () {
      return 2 * Math.PI * this.radius;
    },
  };

  message.innerText = `Circle created with radius: ${radius}`;
  getAreaButton.disabled = false;
  getPerimeterButton.disabled = false;
});

getAreaButton.addEventListener("click", function () {
  if (circle) {
    message.innerText = `The area is: ${circle.getArea()}`;
  }
});

getPerimeterButton.addEventListener("click", function () {
  if (circle) {
    message.innerText = `The perimeter is: ${circle.getPerimeter()}`;
  }
});



// optimized version

function validateRadius() {
  if (!radiusInput.value || radiusInput.value <= 0) {
    message.innerText = "Please enter a valid radius.";
    return false;
  }
  return true;
}

function createCircle() {
  if (!validateRadius()) {
    return;
  }
  let radius = radiusInput.value;
  circle = {
    radius: radius,
    getArea: function () {
      return Math.PI * Math.pow(this.radius, 2);
    },
    getPerimeter: function () {
      return 2 * Math.PI * this.radius;
    },
  };
  message.innerText = `Circle is created with radius: ${radius}`;
  getAreaButton.disabled = false;
  getPerimeterButton.disabled = false;
}
function displayArea() {
  if (circle) {
    message.innerText = `The area is: ${circle.getArea()}`;
  }
}

function displayPerimeter() {
  if (circle) {
    message.innerText = `The perimeter is: ${circle.getPerimeter()}`;
  }
}

createCircleButton.addEventListener("click", createCircle);
getAreaButton.addEventListener("click", displayArea);
getPerimeterButton.addEventListener("click", displayPerimeter);
