async function harry(){
    try{
   const response=await fetch('https://api.github.com/users');
   const users=await response.text();
   return users;
   } catch(err){
   alert(err);
   }
}
console.log('before calling harry');
let a=harry();
console.log('after calling harry');
console.log(a);
a.then(data=>console.log(data));
console.log('last file of this file');