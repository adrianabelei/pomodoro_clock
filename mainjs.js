
$(document).ready(function(){
    
    var count=parseInt($("#num").html());
    var breakTime= parseInt($("#breakNum").html());
    var buzzer = $('#buzzer')[0];
    $("#reset").hide();
    $("#start").click(function(){
      
      $("#start").hide();
      $("#minus5Clock").hide();
       $("#add5Clock").hide();
      $("#minus5Break").hide();
       $("#add5Break").hide();
      $("#breakNum").hide();
      $("#title1, #title2").hide();
        $("#timeType").html("Session Time: ");
      $("#timeType").show();
      
      var counter = setInterval(timer,1000);
      count*=60;
      breakTime*=60;
      function timer(){
        count -=1;
      if(count===0){
              buzzer.play();
        clearInterval(counter);
        var startBreak = setInterval(breakTimer,1000);
        $("#num").hide();
      }
    
        if (count%60===0){
          $("#num").html(Math.floor(count/60)+":" + "00");
        }
        else if (count%60<10){
          $("#num").html(Math.floor(count/60)+":" + "0" + count%60);
        }
        else{
          $("#num").html(Math.floor(count/60)+":" + count%60);
        }
          function breakTimer(){
             $("#timeType").html("Break Time: ");
            $("#breakNum").show();
            $("#reset").show();
        breakTime-=1;
        if (breakTime===0){
          clearInterval(startBreak);
          
           buzzer.play();
        }
            if (breakTime%60===0){
          $("#breakNum").html(Math.floor(breakTime/60)+":" + "00");
        }
        else if (breakTime%60<10){
          $("#breakNum").html(Math.floor(breakTime/60)+":" + "0" + breakTime%60);
        }
        else{
          $("#breakNum").html(Math.floor(breakTime/60)+":" + breakTime%60);
        }
            
           
      }
    }
    
      
    });
    $("#reset").click(function(){
        count =25;
      breakTime=25;
      $("#num").html(count);
      $("#breakNum").html(breakTime);
     $("#start").show();
      $("#minus5Clock").show();
       $("#add5Clock").show();
      $("#minus5Break").show();
       $("#add5Break").show();
      $("#breakNum").show();
        $("#timeType").html("Session Time: ");
      $("#timeType").hide();
    
     
      $("#num").show();
      $("#reset").hide();
    });
    
    
    
    
    
  $("#minus5Clock").click(function(){
    if(count>5){
      count=count-1;
    $("#num").html(count);
    } 
  });
    $("#add5Clock").click(function(){
      count=count+1;
    $("#num").html(count);
  });
    $("#minus5Break").click(function(){
    if(breakTime>5){
      breakTime=breakTime-1;
    $("#breakNum").html(breakTime);
    } 
  });
    $("#add5Break").click(function(){
      breakTime=breakTime+1;
    $("#breakNum").html(breakTime);
  });
    
  });