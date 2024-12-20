function select_image() {
  document.getElementById('profileModal').style.display = 'block';
}
function closeModalBtn() {
  document.getElementById('profileModal').style.display = 'none';
}
var loadFile = function(event) {
  var select_image = document.getElementById('select_image');  
  if (event.target.files[0]) { // Check if a file is selected
    select_image.src = URL.createObjectURL(event.target.files[0]);
  }
};
function profileImage() {
  var fileInput = document.getElementById('file'); // The file input element
  if (fileInput.files.length === 0) { // Check if a file is selected
    alert('Please select a photo before submitting!');
    return; // Exit the function if no file is selected
  }
  // Proceed if a file is selected
  alert('Photo Successfully Uploaded');
  document.getElementById('profileModal').style.display = 'none';
}
