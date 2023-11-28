const express = require("express");
const {
  createStaticHandler,
} = require("react-router-dom/server");

const createFetchRequest = require("./request");
const routes = require("./routes");

const app = express();

let handler = createStaticHandler(routes);

app.get("*", async (req, res) => {
    let fetchRequest = createFetchRequest(req);
    let context = await handler.query(fetchRequest);
  
    let router = createStaticRouter(
      handler.dataRoutes,
      context
    );
    let html = ReactDOMServer.renderToString(
      <StaticRouterProvider
        router={router}
        context={context}
      />
    );
  
    res.send("<!DOCTYPE html>" + html);
});

const listener = app.listen(3000, () => {
  let { port } = listener.address();
  console.log(`Listening on port ${port}`);
});