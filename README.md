# explore-vega
The goal of this repo is to explore the Vega data flow graph.

The idea is to see if we can inspect it, and replace some nodes in it that compute data
with a new node that triggers a call to a database to do the computation in there.

There is an `index.js` file that imports vega libraries and tries out some
things on them.

```bash
python -m http.server
```