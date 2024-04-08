// // document.addEventListener("DOMContentLoaded", function() {
// //     var folders = document.getElementsByClassName("folder");
    
// //     for (var i = 0; i < folders.length; i++) {
// //       folders[i].addEventListener("click", function() {
// //         this.classList.toggle("open");
// //       });
// //     }
    
// //     var files = document.getElementsByClassName("file");
    
// //     for (var i = 0; i < files.length; i++) {
// //       files[i].addEventListener("click", function() {
// //         alert("打开文件：" + this.textContent);
// //       });
// //     }
// //   });


// (function () {
//   'use strict';

//   var csInterface = new CSInterface();
  
//   function init() {
              
//       themeManager.init();
      
//       $("#btn_tests").click(function () {
//         var bools=$("#kaiqi1").prop("checked");
//           csInterface.evalScript('chaifen('+bools+')');//绑定按钮函数
//       });

//       $("#suiji").click(function () {
//         var bools=$("#kaiqi2").prop("checked");
//         var bools1=$("#option1").prop("checked");
//         var bools2=$("#option2").prop("checked");
//         var bools3=$("#option3").prop("checked");
//         var width_input=$("#width_input").prop("value");
//         csInterface.evalScript('suiji('+bools+','+bools1+','+bools2+','+bools3+','+width_input+')');//绑定按钮函数
//       });

     




//   }
      
//   init();



// }());

// // var csInterface = new CSInterface();
  
// // function addpaojecttoProject(file_path){

// //   csInterface.evalScript('suiji('+bools+','+bools1+','+bools2+','+bools3+','+width_input+')');//绑定按钮函数
// // }

// // //-------------------------------为图片添加右键菜单
//   // document.addEventListener("DOMContentLoaded", function() {
//   //   var imageContainer = document.getElementsByName("image-container");
//   //   var contextMenu = document.getElementById("context-menu");
//   //   var addToProject = document.getElementById("add-to-project");
//   //   for(i=0;i<imageContainer.length;i++){
//   //     imageContainer[i].addEventListener("contextmenu", function(e) {
//   //       e.preventDefault();
//   //       var x = e.clientX;
//   //       var y = e.clientY;
        
//   //       contextMenu.style.display = "block";
//   //       contextMenu.style.left = x + "px";
//   //       contextMenu.style.top = y + "px";

//   //       addToProject.addEventListener("click", function() {
//   //         alert("图片已添加到项目");
//   //         contextMenu.style.display = "none";
//   //       });
//   //     });
//   //   } 
  
    
//     // document.addEventListener("click", function() {
//     //   contextMenu.style.display = "none";
//     // });
    

//   // });
  
