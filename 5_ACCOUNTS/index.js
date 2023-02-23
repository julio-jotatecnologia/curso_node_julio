//modulos externos
import inquirer from "inquirer";
import chalk from "chalk";

//modulos internos
import fs from "fs";

operation();

function operation() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "O que você deseja fazer?",
        choices: [
          "Criar Conta",
          "Consultar Saldo",
          "Depositar",
          "Sacar",
          "Sair",
        ],
      },
    ])
    .then((answer) => {
      const action = answer["action"];

      if (action === "Criar Conta") {
        createAccount();
      } else if (action === "Depositar") {
      } else if (action === "Consultar Saldo") {
      } else if (action === "Sacar") {
      } else if(action === "Sair"){
        console.log(chalk.bgBlue.black('Obrigado por usar o Accounts!'))
        process.exit()
      }
    })
    .catch((err) => console.log(err));
}

// create an account
function createAccount() {
  console.log(chalk.bgGreen.black("Parabéns por escolher o nosso banco!"));
  console.log(chalk.green("Defina as opções da sua conta a seguir"));

  buildAccount();
}

// build an Account
function buildAccount() {
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "Digite um nome para a sua conta",
      },
    ])
    .then((answer) => {
      const accountName = answer["accountName"];

      //verificando se o diretório accounts já existe
      if (!fs.existsSync("accounts")) {
        fs.mkdirSync("accounts");
      }

      //verificando se já existe a account
      if (fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(
          chalk.bgRed.black("A referida conta já existe, digite um outro nome")
        );
        buildAccount();
        return;
      }

      fs.writeFileSync(
        `accounts/${accountName}.json`,
        '{"balance": 0}',
        function (err) {
          console.log(err);
        }
      );
      console.log(chalk.green("Parabéns, a sua conta foi criada"));
      operation();
    })
    .catch((err) => console.log(err));
}
