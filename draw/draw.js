var serial;
var max=0;
var draw=function lotteryDraw(){
        var sum=document.getElementById('sum').value;
        var num=document.getElementById('num');
        var summ=parseInt(sum);
        if(sum!=null){
            var arr_t=new Array(summ);
	        arr_t.fill(0);
            var rand;
            for(var i=0;i<20;i++){
		        serial=Math.round(Math.random()*(sum-1)+1);
                arr_t[serial-1]+=1;
            }
        for(var j=0;j<summ;j++){
            if(arr_t[j]>arr_t[max]){
                max=j;
                //console.log("already");
            }
        }
            rand=max+1;
            num.innerHTML = '<h1 style="color: lightcoral;">'+rand+'</h1>';

        }
    }
