
function am() {
  console.log("Button clicked!");
  // Add your code logic here
    h5gg.clearResults();
    h5gg.searchNumber('1057048494', 'I32', '0x100000000', '0x200000000'); 
    h5gg.searchNearby('1054951342', 'I32' , '0x100');
    h5gg.searchNearby('1053273620', 'I32' , '0x100');
    h5gg.editAll('-20000', 'I32'); 
    h5gg.clearResults();
    h5gg.searchNumber('0.00001', 'F32', '0x100000000', '0x200000000'); 
    h5gg.editAll('1', 'F32'); 
  // Remove the event listener after the first click
  document.getElementById("myButton1").removeEventListener("click", am);
}

 document.getElementById("myButton1").addEventListener("click", am);
  
  



     
      function sp() {
  console.log("Button clicked!");
  // Add your code logic here
    h5gg.clearResults();
    h5gg.searchNumber('1.2', 'F32', '0x100000000', '0x200000000'); 
    h5gg.editAll('1.780', 'F32'); 
      h5gg.clearResults();
      
  // Remove the event listener after the first click
  document.getElementById("myButton2").removeEventListener("click", sp);
}
        
        
        
        document.getElementById("myButton2").addEventListener("click", sp);
  
    
  function handleClick() {
  console.log("Button clicked!");
  // Add your code logic here
   h5gg.clearResults();
    h5gg.searchNumber('5.9762459e-7', 'F32', '0x100000000', '0x200000000'); 
      h5gg.searchNearby('1.0', 'F32' , '0x100'); 
    h5gg.editAll('250.1', 'F32'); 
      h5gg.clearResults();
    h5gg.searchNumber('7.5538861e-7', 'F32', '0x100000000', '0x200000000'); 
      h5gg.searchNearby('1.0', 'F32' , '0x100'); 
    h5gg.editAll('250.1', 'F32');
      
  // Remove the event listener after the first click
  document.getElementById("myButton3").removeEventListener("click", handleClick);
} 
  document.getElementById("myButton3").addEventListener("click", handleClick);
  

     