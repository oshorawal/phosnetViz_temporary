function directed_graph() {
    var radio_checked_yes = document.getElementById("directed_yes").checked
    var radio_checked_no = document.getElementById("directed_no").checked 

    if (radio_checked_yes == true) {
        sessionStorage.setItem('directed', true);
        document.getElementById("next_button_directed").style.display = "block";
        //document.getElementById("next_button_directed").disabled = false;
    } 
    else if(radio_checked_no == true) {
        sessionStorage.setItem('directed', false);
        document.getElementById("next_button_directed").style.display = "block";
        //document.getElementById("next_button_directed").disabled = false;
      }
    
}

function next_directed() {
    if(document.getElementById("directed_yes").checked == false && document.getElementById("directed_no").checked == false){
        alert("Please select one of the options in order to continue!")
    }
    else{
    location.href='source_attributes.html';}
}