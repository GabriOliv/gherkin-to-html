
function generate(){
	let input_text = document.getElementById("input_field").value;

	let output_text = translate(input_text);

	document.getElementById("output_field").value = output_text;
}

function clear_all(){
	document.getElementById("input_field").value = "";

	document.getElementById("output_field").value = "";
}

function translate(text){

	let array = text.split(/[\n\r]/g);
	
	let translated = "";

	for (let i = 0; i < array.length; i++) {
		console.log("Loop:",i)
		// Comment
		if ( array[i].match(/^[\t ]*(?<Comment>(#).*)$/g) ){
			translated += array[i].replace(
				/^([\t ]*)(?<Comment>(#).*)$/g,
				"$1<span style='color:#9AA;white-space: pre-wrap;'>$<Comment></span><br>"
			);

		} else if ( array[i].match(/^[\t ]*(?<Behavior>(?<Keyword>([A-Z\u00C0-\u00DE]|[a-z\u00C0-\u00ff]| )+:)(?<Context>.*))$/g) ){
			//Behavior Context
			translated += array[i].replace(
				/^([\t ]*)(?<Behavior>(?<Keyword>([A-Z\u00C0-\u00DE]|[a-z\u00C0-\u00ff]| )+:)(?<Context>.*))$/g,
				"$1<b><span style='color:#059;white-space: pre-wrap;'>$<Keyword></span><span style='color:#E90;white-space: pre-wrap;'>$<Context></span></b><br>"
			);
			// #6DE
		} else if ( array[i].match(/^[\t ]*(?<Scenario>(?<Action>(Dado |Quando |Então |E |Mas |\* )+)(?<Description>(.{3,})))$/g) ){
			//Scenario Actions
			translated += array[i].replace(
				/^([\t ]*)(?<Scenario>(?<Action>(Dado|Quando|Então|E|Mas|\*)+)(?<Description>(.{3,})))$/g,
				"$1<b><span style='color:#508;white-space: pre-wrap;'>$<Action></span></b><span>$<Description></span><br>"
			);
		} else {
			// Not Matched Text
			translated += array[i] + "<br>"
		}
	}

	translated = "<pre>" + translated + "</pre>"

	return translated
}
