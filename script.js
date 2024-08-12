var encryptMessage = "";
function encryption(){
    document.querySelector('#encrypt-btn').addEventListener("click",function(){
        var input = document.querySelector('#txtmsg').value;
        var pass = document.querySelector('#password').value;
        var str = input.split("");
        str.forEach(element => {
            encryptMessage += `&#128${(element.charCodeAt())} `;
        });

        document.querySelector('.result').innerHTML = encryptMessage;

        var dataArr = [];
        if(JSON.parse(localStorage.getItem('data1'))){
            dataArr = JSON.parse(localStorage.getItem('data1'));
            dataArr.push({"pass":pass,"input":input,"encryptMessage":encryptMessage})
        }else{
            dataArr = [{"pass":pass,"input":input,"encryptMessage":encryptMessage}];
        }
        localStorage.setItem(`data1`,JSON.stringify(dataArr));
    });
}
encryption();

function decryption(){
    document.querySelector('#decrypt-btn').addEventListener("click",function(){
        var decryptedMesaage = "";
        var input2 = document.querySelector('#emojimsg').value;
        var finalpass = document.querySelector('#finalpassword').value;
        var user = JSON.parse(localStorage.getItem('data1'));
        var str2 = input2.split(" ");
        str2.forEach(element => {
            decryptedMesaage += `&#${(element.codePointAt(0))} `;
        });

        var found;
        for(let i of user){
            if(i.encryptMessage === decryptedMesaage && i.pass === finalpass){
                found = i;
                break;
            }
        }

        if(found){
            document.querySelector('.result').style.display = "block";
            document.querySelector('.result').style.color = "#000000";
            document.querySelector('.result').style.backgroundColor = "#90EE90";
            document.querySelector('.result').innerHTML = found.input;
        } else{
            document.querySelector('.result').style.display = "block";
            document.querySelector('.result').style.backgroundColor = "#cc3336";
            document.querySelector('.result').innerHTML = "Wrong Password or wrong emojis";
        }
    });
}

decryption();

function btnClicking(){
    document.querySelector('.decBtn').addEventListener("click",function(){
        document.querySelector('.decryption').style.display = "block";
        document.querySelector('.encryption').style.display = "none";
        document.querySelector('.decBtn').style.backgroundColor = "#333";
        document.querySelector('.encBtn').style.backgroundColor = "#222";
        document.querySelector('.main   h1 span img').style.rotate = "180deg";
        document.querySelector('.result').style.display = "none";
    });

    document.querySelector('.encBtn').addEventListener("click",function(){
        document.querySelector('.decryption').style.display = "none";
        document.querySelector('.encryption').style.display = "block";
        document.querySelector('.decBtn').style.backgroundColor = "#222";
        document.querySelector('.encBtn').style.backgroundColor = "#333";
        document.querySelector('.main h1 span img').style.rotate = "360deg";
        document.querySelector('.result').style.display = "none";
    })

    document.querySelector("button").addEventListener("click",function(){
        document.querySelector('.result').style.display = "block";
    })
}
btnClicking();
