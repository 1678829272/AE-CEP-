/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, Folder*/


function sayHello(){
    alert("王");
}

function addPjToPj(file_pasth,){ //传入一个项目路径  把项目引入到当前打开的项目中

    var projectFilePath = file_pasth   //C:\Program Files (x86)\Common Files\Adobe\CEP\extensions\com.mamoworld.helloworld\GIF文件和AE文件\螺旋线条动画.aep
    // 引入项目文件
    var importedProject = app.project.importFile(new ImportOptions(File(projectFilePath)));

    //app.project.importFile(projectFilePath)
}


function chaifen(bool){
    item_now=app.project.activeItem  //获取当前活动合成
    var seled_layer=item_now.selectedLayers[0] //获取所选图层的第一个
    a=seled_layer.text(1).value.toString() //获取文字图层的原文本并转换成字符串
    //seled_layer.remove() //删除图层
    var rate=app.project.activeItem.frameRate //获取当前帧速率
    if(bool){
        for(i=0;i<a.length;i++){ //遍历循环字符串
            q=item_now.layers.addText(a[i]) //创建新的文本层并赋值源文本
            q.inPoint=i/rate //设置新建文本层的开始帧位置
            q.outPoint=i/rate+1/rate //设置新建文本层的结束帧位置
        }
    }
    else{
        for(i=0;i<a.length;i++){ //遍历循环字符串
            q=item_now.layers.addText(a[i]) //创建新的文本层并赋值源文本
        }
    }
}

function suiji(bool,bool1,bool2,bool3,width_input){
    width_height=parseInt(width_input)  //parseInt(edittext1.text) //获取UI上输入的合成大小并转换成整数
    new_comp=app.project.items.addComp("随机字符",width_height,width_height,1,5,25) //新建一个合成并设置 name, width, height, pixelAspect（像素长宽比 1.6 或 1）, duration（持续时间(秒)）, frameRate（帧速率）
    app.project.activeItem.layers.add(new_comp) //把新创建的合成移动到当前选择的活动合成中
    
    var rate=app.project.activeItem.frameRate //获取当前帧速率
    if(bool)
    {
            if(bool1){ //生成1-10的数字
                for(q=0;q<10;q++){
                    new_layer=new_comp.layers.addText(q.toString())
                    new_layer.inPoint=q/rate //设置新建文本层的开始帧位置
                    new_layer.outPoint=q/rate+1/rate //设置新建文本层的结束帧位置
                    // new_layer.property("position").setValue([new_comp.width / 2, new_layer.property("position").value[1]])
                    // new_layer.property("position").setValue([new_layer.property("position").value[0], new_comp.height / 2])
                }
            }
            if(bool2){//生成字母26个
                z=("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
                for(q=0;q<26;q++){
                    new_layer=new_comp.layers.addText(z[q])
                    new_layer.inPoint=q/rate //设置新建文本层的开始帧位置
                    new_layer.outPoint=q/rate+1/rate //设置新建文本层的结束帧位置
                }
            }
            if(bool3){//生成1-10数字和26个字母
                index=0
                var comps=new Array() //创建一个数组

                for(q=0;q<10;q++){
                    new_layer=new_comp.layers.addText(q.toString())
                    comps.push(new_layer)
                }
                z=("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
                for(q=0;q<26;q++){
                    new_layer=new_comp.layers.addText(z[q])
                    comps.push(new_layer)
                }
                for(w=0;w<comps.length;w++){
                    comps[w].inPoint=w/rate //设置新建文本层的开始帧位置
                    comps[w].outPoint=w/rate+1/rate //设置新建文本层的结束帧位置
                }
                

            }
    }
    else
    {
        if(bool1){ //生成1-10的数字
            for(q=0;q<10;q++){
                new_layer=new_comp.layers.addText(q.toString())
                //new_layer.inPoint=q/rate //设置新建文本层的开始帧位置
                //new_layer.outPoint=q/rate+1/rate //设置新建文本层的结束帧位置
                // new_layer.property("position").setValue([new_comp.width / 2, new_layer.property("position").value[1]])
                // new_layer.property("position").setValue([new_layer.property("position").value[0], new_comp.height / 2])
            }
        }
        if(bool2){//生成字母26个
            z=("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
            for(q=0;q<26;q++){
                new_layer=new_comp.layers.addText(z[q])
                //new_layer.inPoint=q/rate //设置新建文本层的开始帧位置
                //new_layer.outPoint=q/rate+1/rate //设置新建文本层的结束帧位置
            }
        }
        if(bool3){//生成1-10数字和26个字母
            index=0
            //var comps=new Array() //创建一个数组

            for(q=0;q<10;q++){
                new_layer=new_comp.layers.addText(q.toString())
                //comps.push(new_layer)
            }
            z=("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
            for(q=0;q<26;q++){
                new_layer=new_comp.layers.addText(z[q])
                //comps.push(new_layer)
            }
            //for(w=0;w<comps.length;w++){
                //comps[w].inPoint=w/rate //设置新建文本层的开始帧位置
                //comps[w].outPoint=w/rate+1/rate //设置新建文本层的结束帧位置
           // }
            

        }
    }

}



