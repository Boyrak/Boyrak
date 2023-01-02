<?php 
    $subject = "This is my UDID from iOS device";
    $body  = "Hello<br /> This is my UDID: {$_GET['UDID']} <br />";
    $body .= "Device product: {$_GET['DEVICE_PRODUCT']} <br />";
    $body .= "Device version: {$_GET['DEVICE_VERSION']} <br />";
    $body .= "Device name: {$_GET['DEVICE_NAME']} <br />";
?>
<!DOCTYPE html>
<html>
    <head>
       <!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="https://www.sachcharak.com/RAK.PNG">
    <link rel="apple-touch-icon" href="https://www.sachcharak.com/RAK.PNG">
    <link rel="icon" type="image/png" href="https://www.sachcharak.com/RAK.PNG">
    <title>RAK</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://www.sachcharak.com/css/rak.css">
    <link rel="stylesheet" href="https://www.sachcharak.com/css/rak1.css">
    <link rel="stylesheet" href="https://www.sachcharak.com/css/rak2.css">
    <link rel="stylesheet" href="https://www.sachcharak.com/css/rak3.css">
    <link rel="stylesheet" href="https://www.sachcharak.com/css/rak4.css">

<style>
body, html{
	margin:0px;
	font-family:helvetica;
	overflow-x:hidden;
	height:100%;
	background: rgb(255, 255, 255) url(https://www.sachcharak.com/bg/Backgroud.png) no-repeat;
  background-size: 100%;
            width: 100%;
            height: 100%;
}
        #wrap_page{
            background: rgb(255, 255, 255) url(https://www.sachcharak.com/bg/Backgroud.png) no-repeat;
            background-size: 100%;
                    width: 100%;
                    height: 200%;
}
:root {
		  --main-color: rgb(218, 3, 87);
	}   

        * {box-sizing: border-box;}
      body {font-family: Verdana, sans-serif;}
      .mySlides {display: none;}
      img {vertical-align: middle;}

/* Slideshow container */
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active {
  background-color: #717171;
}

/* Fading animation */
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .text {font-size: 11px}
}  
  .sticky-container{ 
        padding:0px; 
        margin:0px; 
        position:fixed; 
        left:-145px; 
        top:350px; 
        width:225px; 
        z-index: 1100; 
    } 
        
    .sticky li{ 
        list-style-type:none; 
        background-color:#0000005c; 
        border-radius: 15px; 
        color:#efefef; 
        height:43px; 
        padding:0px; 
        margin:0px 0px 1px 0px; 
        -webkit-transition:all 0.25s ease-in-out; 
        -moz-transition:all 0.25s ease-in-out; 
        -o-transition:all 0.25s ease-in-out; 
        transition:all 0.25s ease-in-out; 
        cursor:pointer; 
    } 
    .sticky li:hover{ 
        margin-right:-115px; 
    } 
    .sticky li img{ 
        float:right; 
        margin:5px 4px; 
        margin-left:5px; 
    } 
    .sticky li p{ 
        padding-top:5px; 
        margin:0px; 
        line-height:16px; 
        font-size:11px; 
    } 
    .sticky li p a{ 
        text-decoration:none; 
        color:#fff; 
    } 
    .sticky li p a:hover{ 
        text-decoration:underline; 
    } 
    
.button{
	display:inline-block;
	width:150px;
	padding:10px;
	border-radius:5px;
	background-color:#367cd8;
	margin:10px;
	color:white;
	text-decoration:none;
	font-weight:500;
}

#text {
  box-sizing: border-box;
  background-color: #e8ebee;
  color: #000;
  border-radius: 15px;
  padding: 10px 15px;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "Quicksand", sans-serif;
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 1px;
  line-height: 1.5;
  box-shadow: inset 4px 4px 8px #caced1, inset -4px -4px 8px #fff;
}
#copy {
  position: relative;
  box-sizing: border-box;
  background-color: #482ff7;
  color: #fff;
  width: 180px;
  min-height: 44px;
  font-size: 1rem;
  font-family: "Jost", sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  padding: 5px;
  border: 0;
  border-radius: 15px;
  outline: none;
  cursor: pointer;
  user-select: none;
  box-shadow: 13px 13px 20px #caced1, -13px -13px 20px #fff;
}
#copy:before {
  content: "";
  width: 16px;
  height: 16px;
  bottom: -20px;
  left: 82px;
  clip-path: polygon(50% 40%, 0% 100%, 100% 100%);
}
#copy:after {
  content: attr(tooltip);
  width: 140px;
  bottom: -48px;
  left: 20px;
  padding: 5px;
  border-radius: 4px;
  font-size: 0.8rem;
}
#copy:before,
#copy:after {
  opacity: 0;
  pointer-events: none;
  position: absolute;
  box-sizing: border-box;
  background-color: #000;
  color: #fff;
  transform: translateY(-10px);
  transition: all 300ms ease;
}
#copy:hover:before,
#copy:hover:after {
  opacity: 1;
  transform: translateY(0);
}

.k2-copy-button svg{margin-right: 10px;vertical-align: top;}  
.k2-copy-button{
  height: 45px; width: 155px; color: #fff; background: #265df2; outline: none; border: none; border-radius: 8px; font-size: 17px; font-weight: 400; margin: 8px 0; cursor: pointer; transition: all 0.4s ease;}
.k2-copy-button:hover{background: #2ECC71;}
@media (max-width: 480px) {#k2button{width: 100%;}}

    </style>
    </head>
    <body>
        <center>
<header id="headerMobile" class="container__header__mobile">
 <a href="https://www.sachcharak.com">
 <div class="logo">
 <img class="image" style="margin:10px;border-radius:10px;;margin-top:40px;" src="https://www.sachcharak.com/RAK.PNG" width="47" alt="">
 </div>
 </a>
 <div class="wrapper">
	<a class="nav-link" href="#
	rel="VkRJNFpsSmhkMGRSU0UxVk4wbHpObTlFU1M5eFVUMDlPanFwNGlGQXhRUjJKMVJ0WWdiS1hmeW4=" id="changeLang" role="button">
	<img src="https://sachcharak.com/cambodia.png" width="47" />
	</a>
</center>
  <section class="isipho__breadcrumb hm">
    <div class="wrapper">
    <a href="https://sachcharak.com" class="link active">Back</a>
  
    
    </div>
    </section>
    </center>
     <center>
<section class="container__availablepackages">
		<article class="package__premium">
		<div class="top__badge">
		<span>You Device information</span>
		</div>
		<div class="top">
		<p>UDID :<p id="myInput"></a><?php echo $_GET['UDID']; ?></p></p>
		<p>Device Product : <?php echo $_GET['DEVICE_PRODUCT']; ?></p>
		<p>Device Version : <?php echo $_GET['DEVICE_VERSION']; ?></p>
		<button class="k2-copy-button" id="k2button">Copy</button>
		</div>
		</article>
		</section>
</center>
<center>
 <p style="margin:10px;font-size:15px;color:rgb(58, 58, 58);">ផ្ងេី​ UDID មក Telegram ខាងក្រោម</p>
</center>
<center>
	<img style="width:100px;margin:10px;border-radius:20px;;margin-top:40px;" src="https://www.sachcharak.com/RAK.PNG">
	<h1 style="margin:0px;font-size:25px;color:rgb(0, 0, 0);">RAK</h1>
	<p style="margin:10px;font-size:15px;color:rgb(41, 41, 41);">Contact Tegeram</p>
	<a class="button" href="https://t.me/RcSrAK">Send Message</a>
</center>
    </body>
       <script>
  function copyFunction() {
  const copyText = document.getElementById("myInput").textContent;
  const textArea = document.createElement('textarea');
  textArea.textContent = copyText;
  document.body.append(textArea);
  textArea.select();
  document.execCommand("copy");
  k2button.innerText = "Text copied";
    textArea.remove();
}
document.getElementById('k2button').addEventListener('click', copyFunction);
  </script>
</html>