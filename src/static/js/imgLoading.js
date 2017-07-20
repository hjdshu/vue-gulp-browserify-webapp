/**
 * Created by weber on 17/3/3.
 */

function  imgLoading (imglist, callback) {
  //todo 拿到接口之后，先push接口中的图片中去
  let allImgElement = [];
  let count = 0;
  let len   = imglist.length;
  if (len > 0) {
    imglist.forEach((item) => {
      let imgUrl = item;
      let imgElement = document.createElement('img');
      imgElement.src = imgUrl;
      allImgElement.push(imgElement);
    })
  }

  let relProgress = 0;
  let timer = window.setInterval( ()=>{
    allImgElement.forEach((img, index)=>{
      if(img.complete){
        count = count + 1
        allImgElement.splice(index, 1)
      }
    });

    relProgress = parseInt(count * 100 / len)
    if(relProgress >= 100){
      window.clearInterval(timer)
    }
  }, 33)


  let bufferProGress = 0;
  //每时间间隔检查一下是不是有新的图片已经加载好了
  let timerBuffer = window.setInterval(()=>{
    //开始巡视
    if(relProgress >= bufferProGress){
      bufferProGress ++;
      if(bufferProGress >= 100){
        callback(true,bufferProGress);
        window.clearInterval(timerBuffer)
        window.setTimeout(function(){
        }, 25)
      }else{
        callback(false,bufferProGress);
      }
    }
  },25)

};

export default(imgLoading)