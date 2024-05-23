// square of star
function squarePattern(row=0,col=0){

    for(let i=1;i<=row;i++){
        let inner ='';
        for(let j=1;j<=col;j++){
            inner += "*";
        }
        
        
        console.log(`${inner}\n`)

    }


}
// squarePattern(4,5);

function reactAnglePatter(row=0,col=0){

    for(let i=1;i<=row;i++){
        let inner = '';

        for (let j = 1; j <=col; j++) {
            
            if(i==1||j==1||i==row||j==col) 
            inner +="*"
            else
                inner += " "
            
            
        }
        console.log(`${inner}\n`)


    }



}

// reactAnglePatter(5,5)

// print half pyramid with number 

(function halfPyramidPattern(level=0) {
    for(
        let i=1;
        i<=level;
        i++
    ){
        let array = [];
        for(
            let j=1;
            j<=i;
            j++
        ){
            array.push(j);
        }

        console.log(`${array}\n`)
    }
});

// tringale with level number 

(function halfPyramidWithLevelPattern(level){

    for(let i=1;i<=level;i++){
        let array = [];
        for(let j=1;j<=i;j++) 
            array.push(j);
        console.info(`${array}\n`);
    }

})
// (4);

// print the series of the number in tringle with increamnting

(function(levle){
    let num = 1;
    for(let i= 1; i<=levle;i++){

        let array = [];
        for(let j=1;j<=i;j++)
           array.push(num++)
        console.log(`${array}\n`);
    }
})
// (4)  

// revers triangle with number

;((level)=>{
    for(let i=level ; i>=1;i--){
        let array =[];
        for(let j=1;j<=i;j++)
            array.push(j);
        console.log(`${array}\n`)
    }
})
// (4)


// full pyaramid with number

;((level)=>{
   
    for(let i=1;i<=level;i++){
        let array =[];
        // push spaces 
            for(let j=1;j<=level-i;j++)
                array.push(" ");
            // push numbers
            for(let j=1;j<=2*i-1;j++)
                array.push(j);

        
            console.log(`${array}\n`);
    }
})
// (5)

// tring with number series
;((level)=>{
   let num = 1;
    for(let i=1;i<=level;i++){
        let array =[];
        // push spaces 
            for(let j=1;j<=level-i;j++)
                array.push(" ");
            // push numbers
            for(let j=1;j<=2*i-1;j++)
                array.push(num++);

            
            console.log(`${array}\n`);
    }
})
// (5)

// half  butter fly

const halfButterFly = (level)=>{

    for (let i = 1; i <= level; i++) {
        
        let array = [];
         
        for(let j = 1; j<=i;j++) // store first *
                array.push('*');
            
            for(let j =1; j<=2*(level-i);j++) // store spaces 
            array.push(' ');
            
            for(let j = 1; j<=i;j++) // store last *
                    array.push('*');

            // print one row 
            console.log(...array);
    }



};

// opposit half butturFly * pattern

const oppHalfButterFly = (level)=>{


    for(let i = level; i>0 ; i--){
        let array = [];

            for(let j=i; j>0;j--)
                array.push('*'); // store star
                for(let j=1; j<=2*(level-i);j++)
                array.push(' '); // store space 2 *(level-i) i = number of row
                
                for(let j=i; j>0;j--)
                    array.push('*'); // store last star
    
                        console.log(...array) // print row pattern
    
    }


}

const fullButterFly = (level)=>{

    // first half butter fly
    halfButterFly(level);

    // then opposit half butter fly
    oppHalfButterFly(level);


}

fullButterFly(4);



