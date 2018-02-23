function vim(keyboard){
	var keynum;

    if(keyboard.which){
	    keynum = keyboard.which;
		key = String.fromCharCode(keynum);
	}
	console.log(key)

	if(key === "x"){
		console.log(document.getElementById("text").innerHTML)
		console.log("it sss");
	}
    $( "#text" ).keypress(function() {
	console.log("kjkj")
    });
}
