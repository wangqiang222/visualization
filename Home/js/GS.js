
   
    function downHome(params) {
        $("#home").css({
            transition:"left 1.2s,bottom 1.2s",
            webkitTransition:"left 1.2s,bottom 1.2s",
            oTransition:"left 1.2s,bottom 1.2s",
            msTransition:"left 1.2s,bottom 1.2s",
            mozTransition:"left 1.2s,bottom 1.2s",
            left:"-120px",
            bottom:"-120px"
        });
    }
    function upHome(params) {
        $("#home").css({
            transition:"left 1.2s,bottom 1.2s",
            webkitTransition:"left 1.2s,bottom 1.2s",
            oTransition:"left 1.2s,bottom 1.2s",
            msTransition:"left 1.2s,bottom 1.2s",
            mozTransition:"left 1.2s,bottom 1.2s",
            left:"-40px",
            bottom:"-40px"
        });
    }

    function downFirst(params) {
        $("#firstLevelMenu").css({
            transition:"left 1.2s,bottom 1.2s",
            webkitTransition:"left 1.2s,bottom 1.2s",
            oTransition:"left 1.2s,bottom 1.2s",
            msTransition:"left 1.2s,bottom 1.2s",
            mozTransition:"left 1.2s,bottom 1.2s",
            left:"-600px",
            bottom:"-600px"
        });
    }
    function upFirst(params) {
        $("#firstLevelMenu").css({
            transition:"left 1.2s,bottom 1.2s",
            webkitTransition:"left 1.2s,bottom 1.2s",
            oTransition:"left 1.2s,bottom 1.2s",
            msTransition:"left 1.2s,bottom 1.2s",
            mozTransition:"left 1.2s,bottom 1.2s",
            left:"-300px",
            bottom:"-300px"
        });
        upItem()
     
        
    }



    function upItem(params) {
        $(".item0").css({
            transform: 'scale(1.2)',
            transition:"left 1.2s,top 1.2s,transform 1.2s",
            webkitTransition:"left 1.2s,top 1.2s",
            oTransition:"left 1.2s,top 1.2s",
            msTransition:"left 1.2s,top 1.2s",
            mozTransition:"left 1.2s,top 1.2s",
            left:"50px",
            top:"-170px"
        });
        $(".item1").css({
            transform: 'scale(1)',
            transition:"left 1.2s,top 1.2s,transform 1.2s",
            webkitTransition:"left 1.2s,top 1.2s",
            oTransition:"left 1.2s,top 1.2s",
            msTransition:"left 1.2s,top 1.2s",
            mozTransition:"left 1.2s,top 1.2s",
            left:"10px",
            top:"-437px"
        });
        $(".item2").css({
            transform: 'scale(1)',
            transition:"left 1.2s,top 1.2s",
            webkitTransition:"left 1.2s,top 1.2s",
            oTransition:"left 1.2s,top 1.2s",
            msTransition:"left 1.2s,top 1.2s",
            mozTransition:"left 1.2s,top 1.2s",
            left:"100px",
            top:"-413px"
        });
        $(".item3").css({
            transform: 'scale(1)',
            transition:"left 1.2s,top 1.2s",
            webkitTransition:"left 1.2s,top 1.2s",
            oTransition:"left 1.2s,top 1.2s",
            msTransition:"left 1.2s,top 1.2s",
            mozTransition:"left 1.2s,top 1.2s",
            left:"184px",
            top:"-369px"
        });
        $(".item4").css({
            transform: 'scale(1)',
            transition:"left 1.2s,top 1.2s",
            webkitTransition:"left 1.2s,top 1.2s",
            oTransition:"left 1.2s,top 1.2s",
            msTransition:"left 1.2s,top 1.2s",
            mozTransition:"left 1.2s,top 1.2s",
            left:"255px",
            top:"-292px"
        });
        $(".item5").css({
            transform: 'scale(1)',
            transition:"left 1.2s,top 1.2s",
            webkitTransition:"left 1.2s,top 1.2s",
            oTransition:"left 1.2s,top 1.2s",
            msTransition:"left 1.2s,top 1.2s",
            mozTransition:"left 1.2s,top 1.2s",
            left:"317px",
            top:"-204px"
        });
        $(".item6").css({
            transform: 'scale(1)',
            transition:"left 1.2s,top 1.2s",
            webkitTransition:"left 1.2s,top 1.2s",
            oTransition:"left 1.2s,top 1.2s",
            msTransition:"left 1.2s,top 1.2s",
            mozTransition:"left 1.2s,top 1.2s",
            left:"337px",
            top:"-104px"
        });
    }


    function show_Box_nxgl(){
        $(".leftBox_nxgl").css({
            transition:"left 1.2s",
            webkitTransition:"left 1.2s",
            oTransition:"left 1.2s",
            msTransition:"left 1.2s",
            mozTransition:"left 1.2s",
            left:"20px",
        });
 
    }
    function hide_Box_nxgl(){
        $(".leftBox_nxgl").css({
            transition:"left 1.2s",
            webkitTransition:"left 1.2s",
            oTransition:"left 1.2s",
            msTransition:"left 1.2s",
            mozTransition:"left 1.2s",
            left:"-370px",
        });
   
    }


    function show_Box_zygl(){
        $('.leftBox_zygl').css({
            transition:"left 1.2s",
            webkitTransition:"left 1.2s",
            oTransition:"left 1.2s",
            msTransition:"left 1.2s",
            mozTransition:"left 1.2s",
            left:"20px",
        })
    }
    function hide_Box_zygl(){
        $('.leftBox_zygl').css({
            transition:"left 1.2s",
            webkitTransition:"left 1.2s",
            oTransition:"left 1.2s",
            msTransition:"left 1.2s",
            mozTransition:"left 1.2s",
            left:"-370px",
        })
    }

    function show_Box_ywgl(){
        $('.leftBox_ywgl').css({
            transition:"left 1.2s",
            webkitTransition:"left 1.2s",
            oTransition:"left 1.2s",
            msTransition:"left 1.2s",
            mozTransition:"left 1.2s",
            left:"20px",
        })
   
    }
    function hide_Box_ywgl(){
        $('.leftBox_ywgl').css({
            transition:"left 1.2s",
            webkitTransition:"left 1.2s",
            oTransition:"left 1.2s",
            msTransition:"left 1.2s",
            mozTransition:"left 1.2s",
            left:"-370px",
        })
      
    }

    function show_Box_yyzl(){
        $('.leftBox_yyzl').css({
            transition:"left 1.2s",
            webkitTransition:"left 1.2s",
            oTransition:"left 1.2s",
            msTransition:"left 1.2s",
            mozTransition:"left 1.2s",
            left:"20px",
        })
        $('.rightBox_yyzl').css({
            transition:"right 1.2s",
            webkitTransition:"right 1.2s",
            oTransition:"right 1.2s",
            msTransition:"right 1.2s",
            mozTransition:"right 1.2s",
            right:"20px",
        })
    }
    function hide_Box_yyzl(){
        $('.leftBox_yyzl').css({
            transition:"left 1.2s",
            webkitTransition:"right 1.2s",
            oTransition:"left 1.2s",
            msTransition:"left 1.2s",
            mozTransition:"left 1.2s",
            left:"-370px",
        })
        $('.rightBox_yyzl').css({
            transition:"right 1.2s",
            webkitTransition:"right 1.2s",
            oTransition:"right 1.2s",
            msTransition:"right 1.2s",
            mozTransition:"right 1.2s",
            right:"-370px",
        })
    }

 
