//******************************************
//***** Written by Taylor Johnson 2006 *****
//******************************************

//***GLOBAL VARIABLES***
var currentURL = document.location;
var menuFrozen;

//***PRELOAD IMAGES***
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

//***FOOTER***
function insertFooter(){
	document.getElementById('footer').innerHTML = '&#0169;Copyright 2006 Young Guns Sportfishing. All rights reserved. &#160;&#160;&#160; &#0149; &#160;&#160;&#160; <a href="http://www.tt-graphics.com" style="color:#9D9282; font-weight:normal;">Design by T&amp;T Graphics</a>';
}

function menuItemOn(){
		if(currentURL==document.getElementById('menuLink1').href){
			document.getElementById('menuText1').className='menuItemOn';
			document.getElementById('menuImg1').src='images/menuFish1On.gif';
			menuFrozen='1';
		}
		if(currentURL==document.getElementById('menuLink2').href){
			document.getElementById('menuText2').className='menuItemOn';
			document.getElementById('menuImg2').src='images/menuFish2On.gif';
			menuFrozen='2';
		}
		if(currentURL==document.getElementById('menuLink3').href){
			document.getElementById('menuText3').className='menuItemOn';
			document.getElementById('menuImg3').src='images/menuFish3On.gif';
			menuFrozen='3';
		}
		if(currentURL==document.getElementById('menuLink4').href){
			document.getElementById('menuText4').className='menuItemOn';
			document.getElementById('menuImg4').src='images/menuFish4On.gif';
			menuFrozen='4';
		}
		if(currentURL==document.getElementById('menuLink5').href){
			document.getElementById('menuText5').className='menuItemOn';
			document.getElementById('menuImg5').src='images/menuFish5On.gif';
			menuFrozen='5';
		}
		if(currentURL==document.getElementById('menuLink6').href){
			document.getElementById('menuText6').className='menuItemOn';
			document.getElementById('menuImg6').src='images/menuFish6On.gif';
			menuFrozen='6';
		}
		if(currentURL==document.getElementById('menuLink7').href){
			document.getElementById('menuText7').className='menuItemOn';
			document.getElementById('menuImg7').src='images/menuFish7On.gif';
			menuFrozen='7';
		}
		if(currentURL==document.getElementById('menuLink8').href){
			document.getElementById('menuText8').className='menuItemOn';
			document.getElementById('menuImg8').src='images/menuFish8On.gif';
			menuFrozen='8';
		}
}

function menuItemOver(menuItemNumber){
	menuItem = 'menuText' + menuItemNumber;
	menuFish = 'menuImg' + menuItemNumber;
	menuFishImage = 'images/menuFish' + menuItemNumber + 'On.gif';	
	if(menuItemNumber!=menuFrozen){
		document.getElementById(menuItem).className='menuItemOn';
		document.getElementById(menuFish).src=menuFishImage;
	}
}

function menuItemOut(menuItemNumber){
	menuItem = 'menuText' + menuItemNumber;
	menuFish = 'menuImg' + menuItemNumber;
	menuFishImage = 'images/menuFish' + menuItemNumber + '.gif';	
	if(menuItemNumber!=menuFrozen){
		document.getElementById(menuItem).className='menuItem';
		document.getElementById(menuFish).src=menuFishImage;
	}
}

function toggleInfo(objectID) {
	if (document.getElementById(objectID).style.display =='block') document.getElementById(objectID).style.display='none';
	else document.getElementById(objectID).style.display='block';
	return;
}