let question=document.getElementById("question");
let o1=document.getElementById("btn0");
let o2=document.getElementById("btn1");
let o3=document.getElementById("btn2");
let o4=document.getElementById("btn3");
let numT=4;
let numC=0;
let count=0;
let correct;

let createQuestion=function(qt,c1,c2,c3,c4,cc){
    question.innerText=qt;
    o1.innerText=c1;
    o2.innerText=c2;
    o3.innerText=c3;
    o4.innerText=c4;
    correct=cc
};



let doGame=function(){
    o1.onclick=function(){checkCorrect(this)};
    o2.onclick=function(){checkCorrect(this)};
    o3.onclick=function(){checkCorrect(this)};
    o4.onclick=function(){checkCorrect(this)};


    if(count===0){
        createQuestion("This is a sentence","yup","no","whats a sentence","nope","yup");


    }else if(count===1){
        createQuestion("How are you ","Good","Bad","Bad^2","no","Good");

    }else if(count===2){

        createQuestion("What","thats not a question","shut up", "huh","what do you mean huh","thats not a question");

    }else if(count===3){

        createQuestion("why","cant you ","you do this ","with loops","with loops");


    }else {
        question.innerText="you got "+numC+" correct out of "+numT;
        document.getElementById("buttons").innerHTML=""
    }
    document.getElementById("progress").innerText = "Question " + (count+1)+" of "+numT
    if(count==4){
        document.getElementById("progress").innerText = "Question " + (count)+" of "+numT

    }


    };





let checkCorrect=function(button){
    if(button.innerText===correct){
        numC++

    }
    count++;
    doGame()
}


//get the first set of questions
//on click change questions
//check if right answer
    //if so add point
    //else dont add point
//





