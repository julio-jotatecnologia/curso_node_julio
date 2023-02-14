import inquirer from "inquirer";

inquirer
  .prompt([
    {
      name: "p1",
      message: "Digite seu nome.",
    },
    {
      name: "p2",
      message: "Digite a sua idade",
    },
  ])
  .then((answers) => {
    if((answers.p1 == '') || (answers.p2 == '')){
      console.log("Preencha todos os dados !")
      return
    }
    console.log(`Seu nome é ${answers.p1} e a sua idade é ${answers.p2}`)
  })
  .catch((err) => console.log(err));
