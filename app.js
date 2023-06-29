// alert("Hello world!")

var opts = {
    gradientType: 1,
    angle: -0.1, /// The span of the gauge arc
    lineWidth: 0.2, // The line thickness
    pointer: {
      length: 0.5, // Relative to gauge radius
      strokeWidth: 0.035 // The thickness
    },
    // colorStart: '#a9d70b',   // Colors
    // colorStop: '#ff0000',    // just experiment with them
    // strokeColor: '#E0E0E0',   // to see which ones work best for you
    percentColors: [[0.0, "#00FF00" ], [0.85, "#FFBF00"], [1.0, "#ff0000"]],
    generateGradient: true,
    // staticZones: [
    //     {strokeStyle: "#30B32D", min: 0, max: 999}, // Green
    //     {strokeStyle: "#FFDD00", min: 1000, max: 1999}, // Yellow
    //     {strokeStyle: "#F03E3E", min: 2000, max: 3000}  // Red
    //  ]
  };
var target = document.getElementById('foo'); // your canvas element
var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
gauge.setTextField(document.getElementById("gauge-text"),2, " &#8451;"); // adds the degree celsius symbol
gauge.maxValue = 150; // set max gauge value
gauge.setMinValue(0);  // set min value
gauge.set(130); // set actual value


