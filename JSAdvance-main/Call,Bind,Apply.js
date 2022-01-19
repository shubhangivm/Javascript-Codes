// // 1 . With call(), an object can use a method belonging to another object

// // Eg
// var friend1={firstname:'hitesh',lastname:'Arora'}
// var friend2={firstname:'luke',lastname:'rafael'}
// function invite(greeting1,greeting2) {
//     console.log(greeting1+' '+this.firstname+' '+this.lastname+' '+greeting2);
    
// }
// invite.call(friend1,'Hey','Whats up?')
// invite.call(friend2,'Hey','Whats up?')


// // 2. Invokes the function and allows you to pass in arguments as ana array. apply() method takes argument  as an array.
// // Eg 
// var friend1={firstname:'Hitesh',lastname:'Arora'}
// var friend2={firstname:'Luke',lastname:'rafael'}
// function invite(greeting1,greeting2) {
//     console.log(greeting1+' '+this.firstname+' '+this.lastname+' '+greeting2);
//     // console.log(this.lastname+' '+greeting2)
    
// }
// invite.apply(friend1,['Hey','Whats up?'])
// invite.apply(friend2,['Hey','Whats up?'])



// // 3. Bind ()= Returns a new function allows you to pass in an array and any number of arguments.
// // bind creates a new function that will have to set to the first paramater passed to bind()
// // We can bind object to a common function, so that the function will give a different result when its needed.
// // Bind () takes an object as an 1st argument and creates a new function.

// var friend1={firstname:'Hitesh',lastname:'Arora'}
// var friend2={firstname:'Luke',lastname:'rafael'}
// function invite(greeting1,greeting2) {
//     console.log(greeting1+' '+this.firstname+' '+this.lastname+' '+greeting2);
    
// }
// var invitefriend1=invite.bind(friend1);
// var invitefriend2=invite.bind(friend2);
// console.log((invitefriend1));
// invitefriend1('Hello','how are you?')
// invitefriend2('Hello','how are you?')

// Eg2
const youtuber={
    name:'TT',
    content:'Coding',
    feature:function () {
        console.log( `my favourite youtuber name is ${this.name}. he made videos on ${this.content}.`)
    }
}
youtuber2={
    name:'kuchbhi',
    content:'coding'
}

youtuberfeature2=youtuber.feature.bind(youtuber2)
youtuberfeature2()


