// 获取进度条元素
const progressBar = document.getElementById('progressBar');

// 设置默认颜色
let progressBarColor = 'green';

// 函数：更新进度条颜色
function updateProgressBarColor(color) {
    progressBarColor = color;
    progressBar.style.backgroundColor = progressBarColor;
}

// 函数：更新进度条进度
function updateProgressBar(progress) {
    progressBar.style.width = `${progress}%`;
}

// 初始化进度条颜色
updateProgressBarColor(progressBarColor);

// 使用示例：更新进度条颜色和进度
updateProgressBarColor('blue');
updateProgressBar(50);
