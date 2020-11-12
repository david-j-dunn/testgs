function testGS (){
	
	const url = "https://script.googleusercontent.com/a/macros/undauntedcollective.com/echo?user_content_key=As_1USTt-GpO-yNT_SF21DOGf86uvqbTyuYZgT2_-ryO8a8xJ0h_kmY2i2lFY4sMtFKCqXvJP0QnYdnW95G52-Z7edxm66Vnm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_kX5aTwxGMWvLtXlgAkyg1r2TufOunmNU23d8rLk1ZzNF7AgPtx3vuj2Lc5r8y8TkeeIBap9DNBXi6fr9lPCFP0JMIEQUCA7ezEXmYYgol5WEDdVdAFggYQ&lib=Mgiq5mdIVXMGRsivQJjxEmIxYb0ExmjCW";
	
	
	fetch(url)
	.then(d => d.json())
	.then(d => {
		document.getElementById("app").textContent = d[0].status;
	});
}

	
document.getElementById("btn").addEventListener("click",testGS);
