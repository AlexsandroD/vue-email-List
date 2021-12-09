const app = new Vue({
    el:"#root",
    data:{
        emails:[],
        words:[],
    },

    created(){
        for(i = 0; i < 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((res) => {
                    // handle success
                    this.emails.push(res.data.response);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                 axios.get('https://flynn.boolean.careers/exercises/api/random/word')
                      .then((res) => {
                          // handle success
                          this.words.push(res.data.response);
                      })
                      .catch(function (error) {
                          // handle error
                          console.log(error);
                      })
            } 
            console.log(this.emails)
        },
    methods:{
    },
})


// let mail = document.getElementById('emails');
// let word = document.getElementById('parola-random')
// let newArr = [];
// let parole = [];

// for(let i = 0; i < 10; i++){
//     async function main (){

//         try{
//             const res = await fetch('https://flynn.boolean.careers/exercises/api/random/mail');
//             const json = await res.json();
//             newArr.push(json.response);
//                 displayElement(newArr)  
//         }catch{
//             console.log('email errore')
//         }
//        try{

//            const parola = await fetch('https://flynn.boolean.careers/exercises/api/random/word');
//            const parolaJson = await parola.json();
//            parole.push(parolaJson.response);
//            displayParolaRandom(parole)
//        }     
            
//          catch {
//             console.log('parole errore')
//         }
//     }
//     main() 
// }


// function displayElement(element){
//     if(newArr.length == 10){
//         for(let k = 0; k < newArr.length; k++){
//             mail.innerHTML += `<li>${element[k]}</li>`
//         }
//     }
//     }


// function displayParolaRandom(element){
//     if(parole.length == 10){
//         for(let j = 0; j < parole.length; j++){
//             word.innerHTML += `<li>${element[j]}</li>`
//         }
//     }
// }
