const express = require("express");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 2211;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));