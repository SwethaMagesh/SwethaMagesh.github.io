//JS
function submitFeedback(){
    
    const name = document.getElementById('inputName').value;
    const phone = document.getElementById('phone').value;
    const message = `Thank you ${name}, ${phone} for your valuable feedback which won't reach me!!!!`;
    
    alert(message);


}
