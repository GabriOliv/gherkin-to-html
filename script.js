
function generate(){
	let input_text = document.getElementById("input_field").value;

	let output_text = translate(input_text)

	document.getElementById("output_field").value = output_text;
}

function clear_all(){
	document.getElementById("input_field").value = "";

	document.getElementById("output_field").value = "";
}

function translate(text){

	// Context Description
	let translated = text.replace(
		/(: )(?<Context>[A-Za-z\u00C0-\u00ff "]{3,})/g,
		'$1<b><span style="color:#E90;white-space: pre-wrap;">$<Context></span></b>'
	);

	// Language Used
	translated = translated.replace(
		/(^(# )[a-z]*: [a-z]*)/g,
		'<span style="color:#95a5a6;white-space: pre-wrap;">$1</span>'
	);

	// Reserved Params
	translated = translated.replace(
		/((\n\t*)(?<Param>([A-Z\u00C0-\u00DE]|[a-z\u00C0-\u00ff]| )+:))/g,
		'<b><span style="color:#2980b9;white-space: pre-wrap;">$1</span></b>'
	);
	
	// Reserved Action Words
	translated = translated.replace(
		/((\n\t*)([A-Z\u00C0-\u00DE]{1}[a-z\u00C0-\u00ff]*))/g,
		'<b><span style="color:#2980b9;white-space: pre-wrap;">$1</span></b>'
	);
	
	translated = "<pre>" + translated + "</pre>"

	return translated
}
