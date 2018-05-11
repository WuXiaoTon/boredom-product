   var arr=[]
   var draw=function lotteryDraw(){
        var sum=document.getElementById('sum').value;
        var num=document.getElementById('num');
        if(sum!=null){
            arr=[];
            var rand;
            for(var i=0;i<10;i++){
                arr.push(Math.round(Math.random()*(sum-1)+1));
            }
            rand=arr.join(",");
            num.innerHTML = '<h1 style="color: lightcoral;">'+rand+'</h1>';
        }
    }