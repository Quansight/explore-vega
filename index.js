
// This is a VL graph which has a slider to change the 
// filtered month and then takes the average of the day
window.VLSpc = {
  $schema: "https://vega.github.io/schema/vega-lite/v3.0.2.json",
  config: { view: { height: 300, width: 400 } },
  data: {
    name: "initial-data"
  },
  encoding: {
    x: { field: "flight_dayofmonth", type: "ordinal" },
    y: { aggregate: "average", field: "depdelay", type: "quantitative" }
  },
  mark: "line",
  selection: {
    month: {
      bind: { input: "range", max: 12, min: 1, step: 1 },
      fields: ["flight_month"],
      type: "single"
    }
  },
  transform: [{ filter: { selection: "month" } }]
};

window.VSpec = vl.compile(window.VLSpc);

// Returns graph in form of https://github.com/vega/vega/tree/master/packages/vega-runtime

window.graph = vega.parse(window.VSpec)