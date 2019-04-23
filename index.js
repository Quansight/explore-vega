
// This is a VL graph which has a slider to change the 
// filtered month and then takes the average of the day
window.VLSpc = {
  "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
  "data": {"url": "data/movies.json"},
  "mark": "bar",
  "encoding": {
    "x": {
      "bin": true,
      "field": "IMDB_Rating",
      "type": "quantitative"
    },
    "y": {
      "aggregate": "count",
      "type": "quantitative"
    }
  }
};

window.VSpec = vl.compile(window.VLSpc);
console.log(JSON.stringify(window.VSpec))

// Returns graph in form of https://github.com/vega/vega/tree/master/packages/vega-runtime

window.graph = vega.parse(window.VSpec)

console.log(window.graph)
console.log(JSON.stringify(window.graph))