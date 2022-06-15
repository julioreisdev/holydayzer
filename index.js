import express from "express";
import cors from "cors";

const server = express();

const holidays = [
  { date: "01/01/2022", name: "Confraternização mundial" },
  { date: "01/03/2022", name: "Carnaval" },
  { date: "17/04/2022", name: "Páscoa" },
  { date: "21/04/2022", name: "Tiradentes" },
  { date: "01/05/2022", name: "Dia do trabalho" },
  { date: "16/06/2022", name: "Corpus Christi" },
  { date: "07/09/2022", name: "Independência do Brasil" },
  { date: "12/10/2022", name: "Nossa Senhora Aparecida" },
  { date: "02/11/2022", name: "Finados" },
  { date: "15/11/2022", name: "Proclamação da República" },
  { date: "25/12/2022", name: "Natal" },
];

server.get("/holidays", (request, response) => {
  response.send(holidays);
});

server.get("/is-today-holiday", (request, response) => {
  let holiday = false;
  let name = "";
  const hoje = new Date();
  const data = hoje.toLocaleDateString();

  for (let i = 0; i < holidays.length; i++) {
    if (holidays[i].date === data) {
      holiday = true;
      name = holidays[i].name;
    }
  }

  if (holiday) response.send(`Sim, hoje é ${name}`);
  if (!holiday) response.send("Não, hoje não é feriado");
});

server.listen(4000);
