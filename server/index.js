const express = require('express');
const app = express();
const path = require('path');
// const { ChunkExtractor } = require('@loadable/server');
// const { renderToString } = require('react-dom/server');
// const { StaticRouter } = require('react-router-dom');
// const App = require('../src/App').default;

app.use(express.static('build'));

app.get('*', (req, res) => {
  // const statsFile = path.resolve(__dirname, '../build/loadable-stats.json');
  // const extractor = new ChunkExtractor({ statsFile });
  // const html = renderToString(
  //   extractor.collectChunks(
  //     <StaticRouter location={req.url}>
  //       <App />
  //     </StaticRouter>
  //   )
  // );
  //
  // console.log(html);
  // res.send(html);
  res.sendFile(path.resolve(__dirname, '../build/index.html'));
});

app.listen(4444, () => {
  console.log('Server is listening on port 4444');
});
