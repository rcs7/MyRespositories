//o que tô mexendo é o form 
const project = document.getElementById('project');
// parte que será escrita do lado de name
const name = document.getElementById('name');
// console.log(name);
const name2 = document.getElementById('name2');

const btn = document.getElementById('data-click');

//botei que o botao é do tipo submit no .html, e e automaticamente qd dou input dentro do form ele percebe que
//tem um evento
//true é opcional
// submit sem as aspas é a função que eu vou chamar, que eu mesma criei
//tem tb a opção de click no lugar do 'submit'
project.addEventListener('submit', submit, true);
btn.addEventListener('click', seeDate, true);
//método!
//do lado de Name: aparece lá do lado
function submit(event){
    event.preventDefault();
    // console.log(event);
    //primeiro filho de form que é input
    // console.log(event.target[0]);
    // console.log(event.target[0]).value;
    //valor escrito na caixinha de texto do submit 
    const value = event.target[0].value;
    name.innerText = value;
    //variável do tipo Date:
    let d = new Date();
    document.getElementById("hor-bra").innerHTML = d.toUTCString();
// new Date()
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
//posso ir diminuindo os parâmetros, mas ele só vai até year e month, se eu deixar só year ele vai tratar como milisegundos
// new Date(milliseconds)
// new Date(date string). Ex:
  // var d = new Date("October 13, 2014 //11:13:00");
 //document.getElementById("demo").innerHTML = d.toDateString();
//sai: Thu May 09 2019
  //document.getElementById("demo").innerHTML = d;

  
  document.getElementById("welcome").innerHTML="WELCOME " + value + "!!!!!!  :D";
  let data2 = new Date();
  document.getElementById("ourYear").innerHTML = "Our Year : " + data2.getFullYear() + " YEAH";
  

  //document.getElementsByClassName("welcome").innerHTML="WELCOME " + value + "!!!!!!  :D";
      
    // console.log('enviou!', event);
}
//submit()

function seeDate() {
  let d = new Date();
  document.getElementById("data-click").innerHTML = d;
}
//////////////////////////////////////////////////////////////////////
//objeto crie assim!! Com const
// const person = {
    // name: '',
    // age: 18
// };
// const person = {
    // name: '',
    // age: 18
// };
//não faça assim!!!!
// let person2={
    // name:'',
    // age: 18
// };

// project.add
// console.log(project);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// letra maiúscula
// class App{

//     constructor(){
//         //é um variáveu
//         this.project = document.getElementById('project');
//         this.name = document.getElementById('name');
//         this.project.addEventListener('submit', this.submit.bind(this), true);
        
//     }

//     transformeText(adicional, text){
//         if(!text){
//    /return 'vazio'
//         text = aditional + text;
//         return text.toUpperCase();
//        } else{
           //
//}    
//}
    //+code vem um number
    //code vem uma string
// getProduct(+code){
  //  let result;
    //   switch (code) {
    //       case 1:
            //   result ='Furadeira';
    //           break;
    //       case 2:
             //  result = 'Parafusadeira';
    //           break;
    
    //       default:
    //           break;
    //   }
//  return result; 
//}


//     submitToClient(event){
//         event.preventDefault();
//         const value = event.target[0].value;
//  //         this.name.innerText = this.transformeText('submit-',value);
//         this.name.inner  
//}

// }

// new App();



// const App ={
//     project: '',
//     name: '',
//     submit: function(){
//         console.log(project);
//     }
// }

//new App();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////