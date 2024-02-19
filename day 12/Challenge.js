console.log('hello');

const readline = require('readline')
let contacts = [{name:'Hnn' , phone :"0254632877"}];
let rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
   });

   const prompt = (question)=>{
    return new Promise((resolve,reject)=>{
        rl.question(question,(ansewr)=>{
            resolve(ansewr);
        })
    })
   }
   

const addContact=async ()=>{

   let name;
   let phone;
   name = await prompt('Enter the  name :');
   phone = await prompt('Enter the  phone number :');

   let ContactInfo = {name : name,phone : phone};

   contacts.push(ContactInfo);
   displayContacts();
   rl.close();
}

const displayContacts = () =>{
    console.log('\n***List Contact***');
    console.log(contacts);
}

const Search =async() =>{
    let search = await prompt('Enter the  name you search for :');
    let filterArray = contacts.filter((item)=>{
        return item.name == search;
    })
    console.log(filterArray);
    rl.close()
}

Search();


