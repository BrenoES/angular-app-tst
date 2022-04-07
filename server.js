const express =  require("express")
const nomeApp = process.env.npm_package_name;
const app = express();

app.use(express.static(`${__dirname}/dist/${nomeApp}`));
app.use(express.static(`${__dirname}/dist`));

app.get('/*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/dist/${nomeApp}/index.html`));
  res.sendFile(path.join(`${__dirname}/dist/index.html`));
});

app.listen(process.env.PORT || 8080);
