/*
* Code by JayremntB, 2020
* Requirement: New Facebook 
* Please copy all the code to make sure that you will not get any errors
* Before run this script, please switch to NEW Facebook and navigate to wherever in Facebook you want
*/

/*
* Yêu cầu: Facebook bản mới
* Chuyển sang Facebook bản MỚI, điều hướng tới các bài viết của một tài khoản/trang/nhóm/...
* Copy hết code, mở DevTools Console bằng cách bấm chuột phải, chọn Inspect, chọn Console
* Dán code vào khoảng trống, sửa các thông số cần thiết bên dưới, bấm Enter
*/

// You can change the delay time or not (in milliseconds, 1 s = 1000 ms)
// REMEMBER: the longer the delay time you set, the bigger your chance of not getting Facebook Checkpoint

// Bạn có thể sửa lại thời gian nếu muốn, tính theo milliseconds (1 s = 1000 ms)
// Để càng lâu càng khó ăn Checkpoint
let timePerAction = 2000; // time per action/ thời gian cách nhau mỗi lần

// Don't modify code below
(() => {
  console.log("\x1b[36m%s\x1b[0m", "Code by JayremntB, 2020");
  console.log("\x1b[36m%s\x1b[0m", "Please remember if you meet an error, just reload page, wait for 3 seconds and run the code again");
  if(timePerAction < 500) return console.error("timePerAction must greater than 500");
  let buttonIndex = 0;
  setTimeout(function continuousWhenPageLoad() {
    // get list of "Liked" buttons
    let listLikedButtons = document.getElementsByClassName('e71nayrh  _18vj');
    if(buttonIndex > listLikedButtons.length - 1 || listLikedButtons.length === 0) return console.warn("Not found any posts");
    setTimeout(function clickNextButton() {
      if(buttonIndex > listLikedButtons.length - 1) {
        window.scrollTo(0, document.body.scrollHeight); // scroll to the end of page
        setTimeout(continuousWhenPageLoad, 3000);
        return;
      }
      if(listLikedButtons[buttonIndex].firstChild.getAttribute("class") != "q9uorilb sf5mxxl7") {
        listLikedButtons[buttonIndex].click(); // click Like button
        console.log(`Liked post ${buttonIndex} successfully!`);
      }
      else console.log("You had liked this post");
      buttonIndex ++;
      setTimeout(clickNextButton, timePerAction);
    }, 0);
  }, 0);
})();