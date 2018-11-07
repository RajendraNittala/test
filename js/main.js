
$(document).ready(function()
{
	$('#leftpanel').hide();
	$('#rightpanel').empty().load('html/overview.html');
});




function loadTemplate(name)
{

	switch(name) {

		case 'overview':
			$('#rightpanel').empty().load('html/overview.html');
			break;
		
		case 'doc':
			$('#leftpanel').hide();
			$('#rightpanel').empty().load('html/doc.html');
			break;
	
	    case 'basic':
	        $('#rightpanel').html();
			//document.getElementById('ta').value = '<?xml version="1.0" encoding="UTF-8" ?><!DOCTYPE foo SYSTEM "Foo.dtd"><a><b>bbb</b><c/><d><soapenv:Envelope xmlns:soapenv="http://xxx" xmlns:xsd="http://yyy" xmlns:xsi="http://zzz"></soapenv></d><e><![CDATA[ <z></z> ]]></e><f><g></g></f></a>';
	        $('#rightpanel').empty().load('../html/basic.html');
			break;
			
	    case 'basicjson':
	        $('#rightpanel').html();
		    $('#rightpanel').empty().load('../html/basicjson.html');
			break;

		case 'yahoojson':
			$('#ta').width(800);
			$('#leftpanel').show();
			document.getElementById('ta').value = 'Loading Yahoo JSON . . . ';
			getWebService('http://weather.yahooapis.com/forecastjson?w=2459115')
			$('#rightpanel').empty();
			$('#mode').html('JSON');
			break;
		case 'googlenewsjson':
			$('#ta').width(800);
			$('#leftpanel').show();
			document.getElementById('ta').value = 'Loading Google News JSON. . . ';
			getWebService('http://ajax.googleapis.com/ajax/services/search/news?v=1.0&q=obama');
			$('#rightpanel').empty();
			$('#mode').html('JSON');
			break;			
			
		case 'basiccss':
		    $('#rightpanel').empty().load('html/basicsql.html');
			break;
			
		case 'yahoocss':
			$('#ta').width(800);
			$('#leftpanel').show();
			document.getElementById('ta').value = 'Loading Google CSS . . . ';
			getWebService('http://ssl.gstatic.com/codesite/ph/3604335043632762799/css/core.css');
			$('#rightpanel').empty();
			$('#mode').html('CSS');
			break;			
		case 'basicsql':		
			$('#rightpanel').empty().load('html/basicsql.html');
			break;	
	}

}
