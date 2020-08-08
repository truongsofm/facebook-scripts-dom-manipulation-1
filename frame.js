// This is the frame of every feature

/*
* Code by (author)
* Requirement: (New/Old/Both) Facebook, (Language) version
* Please copy all the code to make sure that you will not get any errors
* Before run this script, please switch to (New/Old/Both) facebook and navigate to link: (link)
* Example: (link)
*/

/*
* Yêu cầu: Facebook bản (mới/cũ), bản (ngôn ngữ)
* Chuyển sang Facebook bản (MỚI/CŨ), điều hướng tới link: (link)
* Copy hết code, mở DevTools Console bằng cách bấm chuột phải, chọn Inspect, chọn Console
* Dán code vào khoảng trống, sửa các thông số cần thiết bên dưới, bấm Enter
*/

// You can change the delay time or not (in milliseconds, 1 s = 1000 ms)
// REMEMBER: the longer the delay time you set, the bigger your chance of not getting Facebook Checkpoint

// Bạn có thể sửa lại thời gian nếu muốn, tính theo milliseconds (1 s = 1000 ms)
// Để càng lâu càng khó ăn Checkpoint
let timePerAction = 1000; // time per action/ thời gian cách nhau mỗi lần
let timePerAction = _TIME_IN_MILLISECONDS_; // milliseconds
let timeToLoadPage = _TIME_IN_MILLISECONDS_; // milliseconds

// Don't modify code below
(() => {
	console.log("\x1b[36m%s\x1b[0m", "Code by (author)");
	console.log("\x1b[36m%s\x1b[0m", "Please remember if you meet an error, just reload page, wait for 3 seconds and run the code again");
	if(timePerAction < 500) return console.warn("time per action must be set >= 500 ms");
	// prepare
	let thingAims;
	let subThingIndex = 0;
	// process
	setTimeout(function continuousWhenPageLoad() {
		thingAims = document.getElementsByClassName('');
		if(thingAims.length === 0 || subThingIndex > thingAims.length - 1) return console.warn("Not found any ...");
		// Doing sth
		setTimeout(function handleNextSubThing() {
			if(subThingIndex > thingAims.length - 1) {
				// scroll
				// with things like dialog
				document.getElementsByClassName('')[0].scrollTo(0, document.getElementsByClassName('')[0].scrollHeight);
				// with window
				window.scrollTo(0, document.body.scrollHeight); // scroll to page end
				setTimeout(continuousWhenPageLoad, timeToLoadPage);
				return;
			}
			// click sth
			thingAims[subThingIndex].click();
			// wait for sth and click
			setTimeout(() => {
				// click sth, loop
			}, timeToDoSth);
			// get sth's name
			let sthHasName = thingAims[subThingIndex].textContent;
			console.log(`${action} ${sthHasName} successfully!`);
			setTimeout(handleNextSubThing, timePerAction);
		}, 0);
	}, 0);
})();
