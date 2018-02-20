function vim(keyboard){
	var keynum;

    if(keyboard.which){
	    keynum = keyboard.which;
		key = String.fromCharCode(keynum);
	}

	if(key == "x"){
		console.log(document.getElementById("text").innerHTML)
		console.log("it sss");
	}
}
