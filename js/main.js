// const app = new Vue({
//     el:"#root",
//     data:{
//         emails:[]
//     },

//     created(){
//         for(i = 0; i < 10; i++){
//             axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
//                 .then((res) => {
//                     // handle success
//                     this.emails.push(res.data.response);
//                 })
//                 .catch(function (error) {
//                     // handle error
//                     console.log(error);
//                 })
//             }  
//             console.log(this.emails)
//         },
//     methods:{

        

//     },
// })


let mail = document.getElementById('emails');
let newArr = [];

for(let i = 0; i < 10; i++){
    async function main (){

        try{
            const res = await fetch('https://flynn.boolean.careers/exercises/api/random/mail');
            const json = await res.json();
            newArr.push(json.response);
                displayElement(newArr)  
            
        } catch {
            console.log('Fatality')
        }
    }
    main() 
}


function displayElement(element){
    if(newArr.length == 10){
        for(let k = 0; k < newArr.length; k++){
            mail.innerHTML += `<li>${element[k]}</li>`
        }
    }
    }



