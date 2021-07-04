const navbar = require("../views/UI template/nav");
const footer = require("../views/UI template/footer");
module.exports = ({ content, title, id }) => {
  return `
 <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
        <title>${title}</title>
        <link rel="icon" type="image/png" href= ${
          id ? "assets/img/avataaars.svg" : "assets/favicon.ico"
        } sizes="96x96">
         <link
      href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic"
      rel="stylesheet"
      type="text/css"
    />
        <script defer
      src="https://use.fontawesome.com/releases/v5.15.3/js/all.js"
      crossorigin="anonymous"
    ></script>
        <link href="css/styles.css" type="text/css"  rel="stylesheet"></link>
<link href="css/responsive.css" type="text/css"  rel="stylesheet"></link>

        </head>

      <body id="page-top">
          ${navbar(id)}
          
          ${content}
          ${footer()}
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/scripts.js"></script>
    <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
      </body>
    </html>
  `;
};
