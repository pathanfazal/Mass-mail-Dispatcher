//---------------Validate
let upload = document.getElementById('upload');
upload.addEventListener('change', () => {
    let fr = new FileReader();
    fr.readAsText(upload.files[0]);
    fr.onload = function () {

        let Arr = fr.result.split('\n').map(e => {
            return e.split(',');
        });
        Window.valNo = 0;
        let invalNo = 0;
        Window.valMail = [];
        Arr.forEach(e => {
            let em = String(e);
            let m = e.map(e => {
                return `<td>${e}</td>`;
            })
            let creEle = document.createElement("tr"); //tr = table row
            creEle.innerHTML = m;
            if (em != "") {
                if (em.charAt(em.length - 4) == '.') {

                    document.querySelector("table#val").appendChild(creEle);

                    Window.valMail.push(em);
                    Window.valNo = Window.valNo + 1;
                    return false;
                }
                    else if (em.charAt(em.length - 3) == '.') {
                    document.querySelector("table#val").appendChild(creEle);
                    Window.valMail.push(em);
                    Window.valNo = Window.valNo + 1;
                    return false;
                }
                else {
                    invalNo = invalNo + 1;
                    document.querySelector("table#inval").appendChild(creEle); 
                    return false;

                    //console.log(creEle);
                }

            }

        });
        document.querySelector('#valCount').innerHTML = Window.valNo;
        document.querySelector('#invalCount').innerHTML = invalNo;
        //--sending emails--
    };
});
function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "zzmnqwpo@gmail.com",
        Password: "zzmnqwpo@123",
        To: "fazalzzxx@gmail.com",
        From: "zzmnqwpo@gmail.com",
        Subject: document.querySelector('#subject').value,
        Body: document.getElementById('msg').value
    }).then(message => alert(Window.valNo + "mails has been sent successfully, press OK " + message + " to continue"));
    console.log(document.getElementById('msg').value);
    console.log(document.getElementById('msg').innerHTML);
    console.log(document.getElementById('msg').innerText);
}
