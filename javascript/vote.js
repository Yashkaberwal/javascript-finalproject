            var vote1=localStorage.getItem('key1');
            var vote2=localStorage.getItem('key2')
            var vote3=localStorage.getItem('key3')
            function vote(){
                if(selector.value == 1)
                    {   
                        vote1++;
                        alert("You have voted for Song 1");
                    }
                else if(selector.value == 2){
                    vote2++;
                    alert("You have voted for Song 2");
                }
                else{
                    vote3++;
                    alert("You have voted for Song 3");
                }
            }
            
            function result(){
                alert("Song 1:"+ vote1 +"\nSong 2:"+ vote2 +"\nSong 3:"+ vote3);
                voteCounter();
            }
//   =============Local Storage==========
           function voteCounter(){
               localStorage.setItem("key1", vote1);
               localStorage.setItem("key2", vote2);
               localStorage.setItem("key3", vote3);
               document.getElementById("result1").innerHTML = "song 1:" + vote1;
               document.getElementById("result2").innerHTML = "song 2:" + vote2; 
               document.getElementById("result3").innerHTML = "song 3:" + vote3; 
            }
            
            
            