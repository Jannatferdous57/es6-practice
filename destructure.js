const person ={name:"Fahim ", age:24, job:"Project manager", gfName:"Jannat",phone:"01756321459", address:"farmget"};

//  property:name,age,job,gfName,phone,address

const {phone, gfName,address,salary} = person;
// second bracket er agula value hishebe dhorchi...
// const gfName = person.gfName;
// const phone = person.phone;

// console.log(gfName,phone,address,salary);
// console.log(gfName,phone,address,salary);

const complexObject = {
    name:'abc',
    info: {
         address:'kola bagan',
         leader:'Tiger Leader'
    } 
    
}

const {leader} = complexObject.info;
// leader property ta complexObject er info te ache....


const friends =['Dawar khan', 'Danish khan', 'sohana Jannat', 'Sara Jannat']
const [chotoFriend, nextFriend, ...olderFriend] = friends;
console.log(chotoFriend,nextFriend,olderFriend);
