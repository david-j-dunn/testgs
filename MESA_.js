function testGS (){
	
	const url = "https://script.googleusercontent.com/a/macros/undauntedcollective.com/echo?user_content_key=lTE-H3ZmpwaocvrPyrpwL5Wi5w7n3Zk9MuUGzkytCf10GnEpgvf2F92vBNYUNe-U7W9UFBIH0kHFGyiPvQqPESgb76mzwjRTm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_kX5aTwxGMWvLtXlgAkyg1r2TufOunmNU23d8rLk1ZzNF7AgPtx3vumLLy2TI0SFBHQ3vhE7lv5gd1C5X2THWA8k3iAq8xnqf_5xSZ8ykovLK9VeZYcmRyQ&lib=MkoQ6dHKVP5Vrp8dYbdlnXoxYb0ExmjCW";
	
	
	fetch(url)
	.then(d => d.json())
	.then(d => {
		document.getElementById("app").textContent = d[0].status;
	});
}

	
document.getElementById("btn").addEventListener("click",testGS);