function setupFormValidator(formId, inputId){
    const form = document.getElementById(formId)
    const input = document.getElementById(inputId)
    form.addEventListener("submit" ,(event)=>{
        event.preventDefault();
        if(input.value.length < 3){
            alert("Input must be at least 3 characters");
        } else {
            alert("Form submitted successfully");
        }
    })
}