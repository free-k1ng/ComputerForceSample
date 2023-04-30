if (document.getElementById("pricetotal").innerHTML == "") {
	document.getElementById("pricetotal").innerHTML = "$0";
}

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("part1").style.marginLeft = "250px";
  document.getElementById("footer").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.getElementById("part1").style.marginLeft = "0";
  document.getElementById("footer").style.marginLeft = "0";
}

let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function show(shown, hid1, hid2, hid3, hid4) {  
  document.getElementById(shown).style.display='block';
  document.getElementById(hid1).style.display='none';
  document.getElementById(hid2).style.display='none';
  document.getElementById(hid3).style.display='none';
  document.getElementById(hid4).style.display='none';
  return false;
}

function showspecial(a) {
	show('prod', 'homepage', 'us', 'check', 'reg');
	if (a==0) {
	window.scrollTo(0, 0);	
	}
	if (a==1) {
	window.scrollTo(0, 900);		
	}
	if (a==2) {
	window.scrollTo(0, 1600);		
	}
	if (a==3) {
	window.scrollTo(0, 2050);		
	}
	if (a==4) {
	window.scrollTo(0, 0);		
	}
	if (a==5) {
	window.scrollTo(0, 0);		
	}
	if (a==6) {
	window.scrollTo(0, 0);		
	}
	if (a==7) {
	window.scrollTo(0, 0);		
	}
	if (a==8) {
	window.scrollTo(0, 0);		
	}
	if (a==9) {
	window.scrollTo(0, 0);		
	}
	if (a==10) {
	window.scrollTo(0, 0);		
	}
	if (a==11) {
	window.scrollTo(0, 0);		
	}
}

window.onload = show('homepage', 'us', 'prod', 'check', 'reg');

function addtocart(i) {
		if (i==1) {
		  alert('Your item was added to the Cart!');
		  document.getElementById('shoplist').innerHTML = document.getElementById('shoplist').innerHTML + '<br>' + 'Bose Noise Cancelling Headphones 700 - Black '+'$445';
		  document.getElementById('pricetotal').innerHTML = '$' + (Number(document.getElementById('pricetotal').innerHTML.slice(1)) + 445);
		}
		if (i==2) {
		  alert('Your item was added to the Cart!');
		  document.getElementById('shoplist').innerHTML = document.getElementById('shoplist').innerHTML + '<br>' + 'JBL Tune 230NC True wireless Earbuds - Black '+'$148';
		  document.getElementById('pricetotal').innerHTML = '$' + (Number(document.getElementById('pricetotal').innerHTML.slice(1)) + 148);
		}
		if (i==3) {
		  alert('Your item was added to the Cart!');
		  document.getElementById('shoplist').innerHTML = document.getElementById('shoplist').innerHTML + '<br>' + 'JBL Boombox 2 Portable Bluetooth Speaker - Black';
		  document.getElementById('pricetotal').innerHTML = '$' + (Number(document.getElementById('pricetotal').innerHTML.slice(1)) + 398);
		}
		if (i==4) {
		  alert('Your item was added to the Cart!');
		  document.getElementById('shoplist').innerHTML = document.getElementById('shoplist').innerHTML + '<br>' + 'Samsung Galaxy Buds Live Wireless Earbuds - Mystic Bronze';
		  document.getElementById('pricetotal').innerHTML = '$' + (Number(document.getElementById('pricetotal').innerHTML.slice(1)) + 249);
		}
		if (i==5) {
		  alert('Your item was added to the Cart!');
		  document.getElementById('shoplist').innerHTML = document.getElementById('shoplist').innerHTML + '<br>' + 'JBL Xtreme 3 Portable Bluetooth Speaker - Black';
		  document.getElementById('pricetotal').innerHTML = '$' + (Number(document.getElementById('pricetotal').innerHTML.slice(1)) + 398);
		}
		if (i==6) {
		  alert('Your item was added to the Cart!');
		  document.getElementById('shoplist').innerHTML = document.getElementById('shoplist').innerHTML + '<br>' + 'Targus Bluetooth Speaker Audio Transmitter and Receiver';
		  document.getElementById('pricetotal').innerHTML = '$' + (Number(document.getElementById('pricetotal').innerHTML.slice(1)) + 59.95);
		}
		if (i==7) {
		  alert('Your item was added to the Cart!');
		  document.getElementById('shoplist').innerHTML = document.getElementById('shoplist').innerHTML + '<br>' + 'G0 Gaming PC CPU - Intel i5 4590 3.3Ghz 4c/4t GPU - Gigabyte Gaming RX 570 8GB ';
		  document.getElementById('pricetotal').innerHTML = '$' + (Number(document.getElementById('pricetotal').innerHTML.slice(1)) + 465);
		}
		if (i==8) {
		  alert('Your item was added to the Cart!');
		  document.getElementById('shoplist').innerHTML = document.getElementById('shoplist').innerHTML + '<br>' + 'NZXT Starter PC CPU - RYZEN 5 5600G GPU - In built AMD Graphics (+$0) / RX 6600 8GB (+$400) - out of stock';
		  document.getElementById('pricetotal').innerHTML = '$' + (Number(document.getElementById('pricetotal').innerHTML.slice(1)) + 899);
		}
		if (i==9) {
		  alert('Your item was added to the Cart!');
		  document.getElementById('shoplist').innerHTML = document.getElementById('shoplist').innerHTML + '<br>' + 'Lenovo ThinkCentre M70s G3 SFF CPU: Intel i5-12400 Integrated Graphics: Intel UHD Graphics 730';
		  document.getElementById('pricetotal').innerHTML = '$' + (Number(document.getElementById('pricetotal').innerHTML.slice(1)) + 995);
		}
		if (i==10) {
		  alert('Your item was added to the Cart!');
		  document.getElementById('shoplist').innerHTML = document.getElementById('shoplist').innerHTML + '<br>' + 'Gigabyte Radeon RX 6500 XT GAMING OC 4G';
		  document.getElementById('pricetotal').innerHTML = '$' + (Number(document.getElementById('pricetotal').innerHTML.slice(1)) + 95);
		}
		if (i==11) {
		  alert('Your item was added to the Cart!');
		  document.getElementById('shoplist').innerHTML = document.getElementById('shoplist').innerHTML + '<br>' + 'Gigabyte Radeon RX 6500 XT GAMING OC 4G';
		  document.getElementById('pricetotal').innerHTML = '$' + (Number(document.getElementById('pricetotal').innerHTML.slice(1)) + 269);
		}
		if (i==12) {
		  alert('Your item was added to the Cart!');
		  document.getElementById('shoplist').innerHTML = document.getElementById('shoplist').innerHTML + '<br>' + 'Gigabyte Radeon RX 6500 XT GAMING OC 4G';
		  document.getElementById('pricetotal').innerHTML = '$' + (Number(document.getElementById('pricetotal').innerHTML.slice(1)) + 269);
		}
		if (i==13) {
		  alert('Your item was added to the Cart!');
		  document.getElementById('shoplist').innerHTML = document.getElementById('shoplist').innerHTML + '<br>' + 'Gigabyte Radeon RX 6500 XT GAMING OC 4G';
		  document.getElementById('pricetotal').innerHTML = '$' + (Number(document.getElementById('pricetotal').innerHTML.slice(1)) + 269);
		}
		if (i==14) {
		  alert('Your item was added to the Cart!');
		  document.getElementById('shoplist').innerHTML = document.getElementById('shoplist').innerHTML + '<br>' + 'Gigabyte Radeon RX 6500 XT GAMING OC 4G';
		  document.getElementById('pricetotal').innerHTML = '$' + (Number(document.getElementById('pricetotal').innerHTML.slice(1)) + 269);
		}
		if (i==15) {
		  alert('Your item was added to the Cart!');
		  document.getElementById('shoplist').innerHTML = document.getElementById('shoplist').innerHTML + '<br>' + 'Gigabyte Radeon RX 6500 XT GAMING OC 4G';
		  document.getElementById('pricetotal').innerHTML = '$' + (Number(document.getElementById('pricetotal').innerHTML.slice(1)) + 269);
		}
		if (i==16) {
		  alert('Your item was added to the Cart!');
		  document.getElementById('shoplist').innerHTML = document.getElementById('shoplist').innerHTML + '<br>' + 'Gigabyte Radeon RX 6500 XT GAMING OC 4G';
		  document.getElementById('pricetotal').innerHTML = '$' + (Number(document.getElementById('pricetotal').innerHTML.slice(1)) + 269);
		}
		if (i==17) {
		  alert('Your item was added to the Cart!');
		  document.getElementById('shoplist').innerHTML = document.getElementById('shoplist').innerHTML + '<br>' + 'Gigabyte Radeon RX 6500 XT GAMING OC 4G';
		  document.getElementById('pricetotal').innerHTML = '$' + (Number(document.getElementById('pricetotal').innerHTML.slice(1)) + 269);
		}
		if (i==18) {
		  alert('Your item was added to the Cart!');
		  document.getElementById('shoplist').innerHTML = document.getElementById('shoplist').innerHTML + '<br>' + 'Gigabyte Radeon RX 6500 XT GAMING OC 4G';
		  document.getElementById('pricetotal').innerHTML = '$' + (Number(document.getElementById('pricetotal').innerHTML.slice(1)) + 269);
		}
		if (i==19) {
		  alert('Your item was added to the Cart!');
		  document.getElementById('shoplist').innerHTML = document.getElementById('shoplist').innerHTML + '<br>' + 'Gigabyte Radeon RX 6500 XT GAMING OC 4G';
		  document.getElementById('pricetotal').innerHTML = '$' + (Number(document.getElementById('pricetotal').innerHTML.slice(1)) + 269);
		}
		if (i==20) {
		  alert('Your item was added to the Cart!');
		  document.getElementById('shoplist').innerHTML = document.getElementById('shoplist').innerHTML + '<br>' + 'Gigabyte Radeon RX 6500 XT GAMING OC 4G';
		  document.getElementById('pricetotal').innerHTML = '$' + (Number(document.getElementById('pricetotal').innerHTML.slice(1)) + 269);
		}
		if (i==21) {
		  alert('Your item was added to the Cart!');
		  document.getElementById('shoplist').innerHTML = document.getElementById('shoplist').innerHTML + '<br>' + 'Gigabyte Radeon RX 6500 XT GAMING OC 4G';
		  document.getElementById('pricetotal').innerHTML = '$' + (Number(document.getElementById('pricetotal').innerHTML.slice(1)) + 269);
		}
		if (i==22) {
		  alert('Your item was added to the Cart!');
		  document.getElementById('shoplist').innerHTML = document.getElementById('shoplist').innerHTML + '<br>' + 'Gigabyte Radeon RX 6500 XT GAMING OC 4G';
		  document.getElementById('pricetotal').innerHTML = '$' + (Number(document.getElementById('pricetotal').innerHTML.slice(1)) + 269);
		}
		if (i==23) {
		  alert('Your item was added to the Cart!');
		  document.getElementById('shoplist').innerHTML = document.getElementById('shoplist').innerHTML + '<br>' + 'Gigabyte Radeon RX 6500 XT GAMING OC 4G';
		  document.getElementById('pricetotal').innerHTML = '$' + (Number(document.getElementById('pricetotal').innerHTML.slice(1)) + 269);
		}
		if (i==24) {
		  alert('Your item was added to the Cart!');
		  document.getElementById('shoplist').innerHTML = document.getElementById('shoplist').innerHTML + '<br>' + 'Gigabyte Radeon RX 6500 XT GAMING OC 4G';
		  document.getElementById('pricetotal').innerHTML = '$' + (Number(document.getElementById('pricetotal').innerHTML.slice(1)) + 269);
		}
		if (i==25) {
		  alert('Your item was added to the Cart!');
		  document.getElementById('shoplist').innerHTML = document.getElementById('shoplist').innerHTML + '<br>' + 'Gigabyte Radeon RX 6500 XT GAMING OC 4G';
		  document.getElementById('pricetotal').innerHTML = '$' + (Number(document.getElementById('pricetotal').innerHTML.slice(1)) + 269);
		}
		if (i==26) {
		  alert('Your item was added to the Cart!');
		  document.getElementById('shoplist').innerHTML = document.getElementById('shoplist').innerHTML + '<br>' + 'Gigabyte Radeon RX 6500 XT GAMING OC 4G';
		  document.getElementById('pricetotal').innerHTML = '$' + (Number(document.getElementById('pricetotal').innerHTML.slice(1)) + 269);
		}
		if (i==27) {
		  alert('Your item was added to the Cart!');
		  document.getElementById('shoplist').innerHTML = document.getElementById('shoplist').innerHTML + '<br>' + 'Gigabyte Radeon RX 6500 XT GAMING OC 4G';
		  document.getElementById('pricetotal').innerHTML = '$' + (Number(document.getElementById('pricetotal').innerHTML.slice(1)) + 269);
		}
		if (i==28) {
		  alert('Your item was added to the Cart!');
		  document.getElementById('shoplist').innerHTML = document.getElementById('shoplist').innerHTML + '<br>' + 'Gigabyte Radeon RX 6500 XT GAMING OC 4G';
		  document.getElementById('pricetotal').innerHTML = '$' + (Number(document.getElementById('pricetotal').innerHTML.slice(1)) + 269);
		}
		if (i==29) {
		  alert('Your item was added to the Cart!');
		  document.getElementById('shoplist').innerHTML = document.getElementById('shoplist').innerHTML + '<br>' + 'Gigabyte Radeon RX 6500 XT GAMING OC 4G';
		  document.getElementById('pricetotal').innerHTML = '$' + (Number(document.getElementById('pricetotal').innerHTML.slice(1)) + 269);
		}
		if (i==30) {
		  alert('Your item was added to the Cart!');
		  document.getElementById('shoplist').innerHTML = document.getElementById('shoplist').innerHTML + '<br>' + 'Gigabyte Radeon RX 6500 XT GAMING OC 4G';
		  document.getElementById('pricetotal').innerHTML = '$' + (Number(document.getElementById('pricetotal').innerHTML.slice(1)) + 269);
		}
		if (i==31) {
		  alert('Your item was added to the Cart!');
		  document.getElementById('shoplist').innerHTML = document.getElementById('shoplist').innerHTML + '<br>' + 'Gigabyte Radeon RX 6500 XT GAMING OC 4G';
		  document.getElementById('pricetotal').innerHTML = '$' + (Number(document.getElementById('pricetotal').innerHTML.slice(1)) + 269);
		}
}

function pwshow() {
	var x = document.getElementById("password");
	if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}

function cartshow() {
	var ass = document.getElementById("cartlist");
    if (ass.style.display === "none") {
      ass.style.display = "block";
	  cartdisplay();
    } else {
      ass.style.display = "none";
    }
}

function empty() {
	document.getElementById('shoplist').innerHTML = '';
	document.getElementById("pricetotal").innerHTML = "$0";
}

function final() {
	if (document.getElementById('shoplist').innerHTML !== "") {
		let text = "Would you like to confirm your order?";
		if (confirm(text) == true) {
			text = "Your purchase is now being processed. Thank you for shopping with Computer Force! :P";
		} else {
		text = "Your purchase was cancelled! :/";
		}
		document.getElementById("outcome").innerHTML = text;
		}
}