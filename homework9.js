var vg_1 = "students.vg.json"; // Define the location of the Vega-Lite map specification
vegaEmbed("#map", vg_1).then(function(result) {
  // Access the Vega view instance as result.view
}).catch(console.error);
