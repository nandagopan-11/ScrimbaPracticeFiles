
console.log("javascript started");
console.log("''''''''''''''''''");

try{
    let ps1 = document.getElementById("pswrd1");
    let ps2 = document.getElementById("pswrd2");
    console.log("ps1 is : " + ps1);
    console.log("ps2 is : " + ps2);
}catch(err){console.log("error is : "+err.message);}

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let l = characters.length;
let cA = characters.indexOf("Z")+1;
let sA = characters.indexOf("z")+1;
let n = characters.indexOf("9")+1;
let s = characters.indexOf("/")+1;

console.log("array length is : " + l);
console.log("capital alphabets : " + cA );
console.log("small alphabets : " + sA);
console.log("numbers : " + n);
console.log("special charac : " + s);

let cASum = 0;
let sASum = 0;
let nSum = 0;
let sSum = 0;

function genPass(){

    try{
        ps1.textContent = callPasswrd();
        ps2.textContent = callPasswrd();
    } catch(err){console.log(err.message);}
    
}

function callPasswrd(){

    try{
        console.log("callPasswrd() called")
        let wrd = ""
        let choice = 0;

        console.log("wrd is : "+wrd);
        console.log("choice is : "+choice)

        while(wrd.length < 15){
            console.log("wrd length less than 15");
            choice = choose();
            
            while(choice == 1 ){
                console.log("inside choice 1");
                if(cASum <=4){
                    let index = Math.floor( Math.random()*cA);
                    wrd += characters[index];
                    console.log("wrd is : "+wrd);
                    cASum ++;
                    console.log("cASum is : "+cASum);
                    break;
                }
                else{choice = choose();}
            }

            while(choice == 2 ){
                console.log("inside choice 2")
                if(sASum <4){
                    let index = Math.floor( Math.random()*(sA - cA) + cA);
                    wrd += characters[index];
                    console.log("wrd is : "+wrd);
                    sASum ++;
                    console.log("sASum is : "+sASum);
                    break;
                }
                else{choice = choose();}
            }

            while(choice == 3 ){
                console.log("inside choice 3")
                if(nSum <4){
                    let index = Math.floor( Math.random()*(n - sA) + sA);
                    wrd += characters[index];
                    console.log("wrd is : "+wrd);
                    nSum ++;
                    console.log("nSum is : "+nSum);
                    break;
                }
                else{choice = choose();}
            }

            while(choice == 4 ){
                console.log("inside choice 4")
                if(nSum <4){
                    let index = Math.floor( Math.random()*(s - n) + n);
                    wrd += characters[index];
                    console.log("wrd is : "+wrd);
                    sSum ++;
                    console.log("sSum is : "+sSum);
                    break;
                }
                else{choice = choose();}
            }
        }

        console.log("the final wrd is : "+wrd);
        return wrd;
    } catch(er){console.log(er.message);}

    
}

function choose(){
    try{
        console.log("choose called");
        let c = Math.floor( Math.random()*4 + 1);
        console.log("choise is : "+c);
        return c;
    }catch(e){console.log(e.message);}
    
}