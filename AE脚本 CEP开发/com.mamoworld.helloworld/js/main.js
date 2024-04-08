/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, window, location, CSInterface, SystemPath, themeManager*/

(function () {
    'use strict';

    var csInterface = new CSInterface();
    
    function init() {
                
        themeManager.init();
        
        $("#btn_tests").click(function () {
          var bools=$("#kaiqi1").prop("checked");
            csInterface.evalScript('chaifen('+bools+')');//绑定按钮函数
        });

        $("#suiji").click(function () {
          var bools=$("#kaiqi2").prop("checked");
          var bools1=$("#option1").prop("checked");
          var bools2=$("#option2").prop("checked");
          var bools3=$("#option3").prop("checked");
          var width_input=$("#width_input").prop("value");
          csInterface.evalScript('suiji('+bools+','+bools1+','+bools2+','+bools3+','+width_input+')');//绑定按钮函数
        });

        $("#context-menu").click(function () {
          var base_file_pasth=$("#context-menu").prop("class")
          var file_pasth =(decodeURIComponent(window.location.pathname).replace('效果添加.Html','GIF文件和AE文件/')+base_file_pasth.replace('.gif','.aep')).slice(1);
          csInterface.evalScript('addPjToPj("' + file_pasth + '")'); //将字符串参数用引号包裹起来
          $("#context-menu").css("display", "none"); //隐藏右键菜单
          

        });


    }
        
    init();



}());
function handleCheckbox(checkbox) {
    var checkboxes = document.getElementsByName("option");
    
    // 遍历所有复选框，除了当前点击的复选框
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] !== checkbox) {
        checkboxes[i].checked = false;
      }
    }
  }

