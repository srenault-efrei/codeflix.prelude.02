module.exports = function sample(list,n=1) {

    let number = '';
    let arr = [];
 
    if (n == 1){
         arr =   list[Math.floor(Math.random()*list.length)]
    }
    else{
        for(let i=0; i<=n ; i++){
           
            number = list[Math.floor(Math.random()*list.length)]
            arr.push(number)
           
        }
    }
//    for( const [key,value] of Object.entries(list)){
//        if(n == 1){  
//        let number =  Math.floor(Math.random()* Math.floor(value))
//        }
     
//    }
 
return arr
}