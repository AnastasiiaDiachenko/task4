import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { END } from 'redux-saga';

import App from './App';
import rootSaga from './modules';
import store from './store';
import { sagaMiddleware } from './store/middlewares';

function renderHTML(html, preloadedState) {
  return `
      <!doctype html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Movie App</title>
          <link href="/css/main.css" rel="stylesheet" type="text/css">
        </head>
        <body>
          <section id="root">${html}</section>
          <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          <script defer="defer" src="/js/runtime.js"></script><script defer="defer" src="/js/vendors.js"></script><script defer="defer" src="/js/main.js"></script>
        </body>
      </html>
  `;
}

export default function serverRenderer() {
  return (req, res) => {
    // This context object contains the results of the render
    const context = {};
    const appStore = store;

    const renderRoot = () => (
      <App
        context={context}
        location={req.url}
        Router={StaticRouter}
        store={appStore}
      />
    );

    const renderFinal = () => {
      const htmlString = renderToString(renderRoot());

      // context.url will contain the URL to redirect to if a <Redirect> was used
      if (context.url) {
        res.writeHead(302, {
          Location: context.url
        });
        res.end();
        return;
      }

      const preloadedState = store.getState();

      res.send(renderHTML(htmlString, preloadedState));
    };
    const task = sagaMiddleware.run(rootSaga);
    // Do first render, starts initial actions.
    renderToString(renderRoot());
    // When the first render is finished, send the END action to redux-saga.
    store.dispatch(END);
    if (!task.done && task.toPromise) task.done = task.toPromise();
    task.done.then(() => renderFinal());
  };
}
