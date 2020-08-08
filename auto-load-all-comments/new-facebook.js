/*
* Code by JayremntB, 2020
* Requirement: New Facebook 
* Please copy all the code to make sure that you will not get any errors
* BEFORE YOU RUN CODE, INSPECT ANY LIKE BUTTON YOU SEE FIRST, THEN THIS CODE WILL RUN SUCCESSFULLY
* Please switch to NEW Facebook and choose whatever post you want by click the time under the name of author
*/

/*
* Yêu cầu: Facebook bản mới
* Chuyển sang Facebook bản MỚI, điều hướng tới link bài viết bạn cần load toàn bộ bình luận bằng cách bấm vào thời gian đăng bài dưới tên tác giả
* Copy hết code, mở DevTools Console bằng cách bấm chuột phải, chọn Inspect, chọn Console
* Dán code vào khoảng trống, sửa các thông số cần thiết bên dưới, bấm Enter
*/

// Don't modify code below
(() => {
    console.log("\x1b[36m%s\x1b[0m", "Code by JayremntB, 2020");
    console.log("\x1b[36m%s\x1b[0m", "Please remember if you meet an error, just reload page, wait for 3 seconds and run the code again");
    let LoadRepliesButtonIndex = 0;
    // load comments
    console.log("Loading comments...");
    setTimeout(function clickNextLoadComments() {
        let LoadRepliesButtons = document.getElementsByClassName('j83agx80 fv0vnmcu hpfvmrgz');
        if(LoadRepliesButtons.length === 0 || LoadRepliesButtonIndex > LoadRepliesButtons.length - 1) return console.warn("Loaded all comments successfully!");
        let textContent = LoadRepliesButtons[LoadRepliesButtonIndex].firstChild.textContent.toLowerCase();
        if(textContent.includes("hide") || textContent.includes('ẩn')) {
            LoadRepliesButtonIndex ++;
            setTimeout(clickNextLoadComments, 0);
            return;
        }
        LoadRepliesButtons[LoadRepliesButtonIndex].parentNode.click();
        setTimeout(clickNextLoadComments, 1000);
    }, 0);
})();

