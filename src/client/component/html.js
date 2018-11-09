const Html = ({ body, styles, title }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
      ${styles}
    </head>
    <body style="margin:0">
      <div id="app">${body}</div>
      <script src="./bundle.js"></script>
    </body>
  </html>
`;

export default Html;