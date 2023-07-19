function sendMail() {
    var a = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      category: document.getElementById("category").value,
      artist: document.getElementById("artist").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_7ggqr71";
    const templateID = "template_hwqvzb7";
  
      emailjs.send(serviceID, templateID, a)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("category").value = "";
          document.getElementById("artist").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }






