var timer;

// OnLaunch
if(isStringInDocument() == 1) // znaleziono od razu
{
 		//console.log("1)");
	timer = setTimeout(timerRefresh, 800+randomRange(100, 2000));
}
else // nie znaleziono, np. ładuje się static page
{
	timer = setTimeout(timerCheckAgain, 6000+randomRange(1, 300));
}


function isStringInDocument()
{
	if(
			(document.documentElement.textContent || document.documentElement.innerText).indexOf('towar jest sukcesywnie') > -1
			|| (document.documentElement.textContent || document.documentElement.innerText).indexOf('jednoczesnych transakcji zakupu') > -1
			|| (document.documentElement.textContent || document.documentElement.innerText).indexOf('od ----,-- zł') > -1
			|| (document.documentElement.textContent || document.documentElement.innerText).indexOf('pgg.pl<i class=') > -1
			)
	{
		return 1;
	}
	return 0;
}


function timerRefresh() 
{
	//console.log("2)");
	clearTimeout(timer);
	window.location.reload();
}

function timerCheckAgain() 
{
	//console.log("1B)");
	clearTimeout(timer);
	if(isStringInDocument() == 1)
	{
	 		//console.log("2B)");
			window.location.reload();
	}
}

function randomRange(min, max) 
{
  	return Math.floor(Math.random() * (max-min)) + min;
}