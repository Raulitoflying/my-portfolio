// 图标调试脚本
document.addEventListener('DOMContentLoaded', function() {
  console.log('Icon Debug Script Loaded');
  
  // 查找所有图标元素
  const icons = document.querySelectorAll('i[class*="icon-"]');
  
  // 输出每个图标的类名
  icons.forEach((icon, index) => {
    console.log(`Icon ${index + 1}:`, icon.className);
  });
  
  // 特别检查项目部分的按钮图标
  const projectButtons = document.querySelectorAll('.projects__button-group .btn i');
  projectButtons.forEach((icon, index) => {
    console.log(`Project Button Icon ${index + 1}:`, icon.className);
  });
}); 