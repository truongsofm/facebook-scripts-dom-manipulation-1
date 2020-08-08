/*
* Code by JayremntB, 2020
* Requirement: New Facebook, English/Vietnamese version
* Please copy all the code to make sure that you will not get any errors
* Please switch to NEW Facebook and navigate to this link: https://www.facebook.com/pokes
*/

/*
* Yêu cầu: Facebook bản mới
* Chuyển sang Facebook bản MỚI, điều hướng tới link: https://www.facebook.com/pokes
* Copy hết code, mở DevTools Console bằng cách bấm chuột phải, chọn Inspect, chọn Console
* Dán code vào khoảng trống, sửa các thông số cần thiết bên dưới, bấm Enter
*/

// You can change the delay time or not (in milliseconds, 1 s = 1000 ms)
// REMEMBER: the longer the delay time you set, the bigger your chance of not getting Facebook Checkpoint

// Bạn có thể sửa lại thời gian nếu muốn, tính theo milliseconds (1 s = 1000 ms)
// Để càng lâu càng khó ăn Checkpoint
let timePerAction = 500; // time per action / Thời gian mỗi lần chọc

// Advanced setting / Cài đặt khác
let timeToLoadPage = 3000; // thời gian chờ trang load xong khi kéo trang đến cuối cùng để load thêm bạn bè

// Don't modify code below
(() => {
	console.log("Code by JayremntB, 2020");
	if(timePerAction < 500) return console.warn("time per action must be set >= 500 ms");
	// prepare
	let listPokeButtons;
	let PokeButtonIndex = 0;
	// process
	setTimeout(function continuousWhenPageLoad() {
		listPokeButtons = document.getElementsByClassName('oajrlxb2 s1i5eluu gcieejh5 bn081pho humdl8nn izx4hr6d rq0escxv nhd2j8a9 j83agx80 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys d1544ag0 qt6c0cv9 tw6a2znq i1ao9s8h esuyzwwr f1sip0of lzcic4wl l9j0dhe7 abiwlrkh p8dawk7l beltcj47 p86d2i9g aot14ch1 kzx2olss cbu4d94t taijpn5t ni8dbmo4 stjgntxs k4urcfbm tv7at329');
        if(listPokeButtons.length === 0 || PokeButtonIndex > listPokeButtons.length - 1) return console.warn("Poked successfully!");
        // Poke
		setTimeout(function clickNextPokeButton() {
			if(PokeButtonIndex > listPokeButtons.length - 1) {
				// scroll
				window.scrollTo(0, document.body.scrollHeight); // scroll to page end
				setTimeout(continuousWhenPageLoad, timeToLoadPage);
				return;
			}
            // check if Poke button
            const buttonContent = listPokeButtons[PokeButtonIndex].textContent;
            if(!buttonContent || (buttonContent && !buttonContent.toLowerCase().includes("poke") && !buttonContent.includes("chọc"))) {
                PokeButtonIndex ++;
                return setTimeout(clickNextPokeButton, 0);
            }
            listPokeButtons[PokeButtonIndex].click();
			// get user's name
			let friendName = listPokeButtons[PokeButtonIndex].parentNode.parentNode.parentNode.parentNode.firstChild.textContent;
			console.log(`Poked ${friendName} successfully!`);
			setTimeout(clickNextPokeButton, timePerAction);
		}, 0);
	}, 0);
})();
