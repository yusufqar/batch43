function getData(){
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phoneNumber = document.getElementById("telp").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value

    if(name == ""){
        return alert("Nama tidak boleh kosong")
    } else if(email == "") {
        return alert("email tidak boleh kosong")
    } else if(phoneNumber == "") {
        return alert("telpon tidak boleh kosong")
    } else if(subject == "") {
        return alert("subject tidak boleh kosong")
    } else if(message == "") {
        return alert("pesan tidak boleh kosong")
    }

    let emailReceiver = "mqardhawi9@.com"

    let mailTo = document.createElement('a')
    mailTo.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello my name ${name}, ${subject}, ${message}`
    mailTo.click()

    let users = {
        myName: name,
        myEmail: email,
        myPhone: phoneNumber,
        mySubject: subject,
        myMessage: message
    }

    console.log(users)

}