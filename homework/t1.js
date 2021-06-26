var elem=document.getElementsByClassName("le");
            var n = 0;
            var b=document.getElementsByClassName("m");
            var a = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            function mover(){
                var a=19;
                for(var i=0;i<9;i++){
                    if(n===a)
                    return;
                    a+=20;
                }
                elem[n].innerHTML="";
                n++;
                elem[n].innerHTML="H";
                check();
                win();
            }
            function movel(){
                var a=0;
                for(var i=0;i<9;i++){
                    if(n===a)
                    return;
                    a+=20;
                }
                elem[n].innerHTML="";
                n--;
                elem[n].innerHTML="H";
                check();
                win();
            }
            function moved(){
                var a=160;
                for(var i=0;i<20;i++){
                    if(n===a)
                    return;
                    a++;
                }
                elem[n].innerHTML="";
                n+=20;
                elem[n].innerHTML="H";
                check();
                win();
            }
            function moveu(){
                var a=0;
                for(var i=0;i<20;i++){
                    if(n===a)
                    return;
                    a++;
                }
                elem[n].innerHTML="";
                n-=20;
                elem[n].innerHTML="H";
                check();
                win();
            }
            function win(){
                if(n===179){
                    alert("You get to the exit!")
                for(var i=0;i<4;i++)
                    b[i].style.visibility="hidden";
                b[4].style.visibility="visible";
                }
            }
            function easy(){
                elem[2].style.background="red";
                elem[3].style.background="red";
                elem[4].style.background="red";
                elem[6].style.background="red";
                elem[10].style.background="red";
                elem[14].style.background="red";
                elem[21].style.background="red";
                elem[26].style.background="red";
                elem[28].style.background="red";
                elem[30].style.background="red";
                elem[32].style.background="red";
                elem[34].style.background="red";
                elem[36].style.background="red";
                elem[37].style.background="red";
                elem[38].style.background="red";
                elem[43].style.background="red";
                elem[44].style.background="red";
                elem[47].style.background="red";
                elem[48].style.background="red";
                elem[50].style.background="red";
                elem[52].style.background="red";
                elem[53].style.background="red";
                elem[54].style.background="red";
                elem[56].style.background="red";
                elem[57].style.background="red";
                elem[58].style.background="red";
                elem[59].style.background="red";
                elem[61].style.background="red";
                elem[62].style.background="red";
                elem[63].style.background="red";
                elem[65].style.background="red";
                elem[70].style.background="red";
                elem[76].style.background="red";
                elem[81].style.background="red";
                elem[86].style.background="red";
                elem[89].style.background="red";
                elem[92].style.background="red";
                elem[93].style.background="red";
                elem[95].style.background="red";
                elem[96].style.background="red";
                elem[98].style.background="red";
                elem[103].style.background="red";
                elem[104].style.background="red";
                elem[108].style.background="red";
                elem[111].style.background="red";
                elem[118].style.background="red";
                elem[121].style.background="red";
                elem[122].style.background="red";
                elem[123].style.background="red";
                elem[125].style.background="red";
                elem[127].style.background="red";
                elem[130].style.background="red";
                elem[133].style.background="red";
                elem[134].style.background="red";
                elem[137].style.background="red";
                elem[145].style.background="red";
                elem[146].style.background="red";
                elem[149].style.background="red";
                elem[152].style.background="red";
                elem[153].style.background="red";
                elem[155].style.background="red";
                elem[158].style.background="red";
                elem[161].style.background="red";
                elem[176].style.background="red";
                elem[178].style.background="red";
            }
            function check(){
                if(n===2||n===3||n===4||n===6||n===10||n===14||n===21||n===26||n===28||n===30||n===32||n===34||n===36||n===37||n===38||n===43||n===44||n===47||n===48||n===50||n===52||n===53||n===54||n===56||n===57||n===58||n===59||n===61||n===612||n===63||n===65||n===70||n===76||n===81||n===86||n===89||n===92||n===93||n===95||n===96||n===98||n===103||n===104||n===108||n===111||n===118||n===121||n===122||n===123||n===125||n===127||n===130||n===133||n===134||n===137||n===145||n===146||n===149||n===152||n===153||n===155||n===158||n===161||n===176||n===178){
                    alert("You hit the block!");
                    for(var i=0;i<4;i++)
                        b[i].style.visibility="hidden";
                    b[4].style.visibility="visible";
                }
            }