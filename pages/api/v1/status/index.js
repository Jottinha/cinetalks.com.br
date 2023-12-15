import dataBase from "infra/database.js";

async function status(request, response) {
  const queryResponse = await dataBase.query("SELECT 1 + 1 AS sum");
  console.log(queryResponse.rows);
  response.status(200).send("Tudo certo por aqui");
}

export default status;
