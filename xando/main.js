var probilities=[[1,2,3],[4,5,6],[7,8,9],[1,5,7],[2,5,8],[3,6,9],[9,5,1],[3,5,7],[1,4,7]]
var probilitieslength=probilities.length-1;
var gamex=[]
var game0=[]
var outx=0;
var out0=0;

var turn=2;


function functionOxando(boxno,push)
{
    document.getElementById(boxno).addEventListener("click", myFunction1);
    function myFunction1()
    {
        if(turn%2==0)
        {
            gamex.push(push);
            var length=gamex.length-1
            turn+=1;
            document.getElementById(boxno).innerHTML='X' ;
            console.log(gamex)
            if(gamex.length>=3)
            {
                for(let i=0;i<=probilitieslength; i++)
                {
                    function loopingFunction(size)
                    {
                        for(let j=0; j<=length; j++)
                    {
                        
                        if(gamex[size]==probilities[i][j])
                        {
                            outx+=1
                
                        }
                        else
                        {
                            outx+=0
                        }
                    }
                    }
                    for(let k = 0; k<=length; k++)
                    {
                        loopingFunction(k)
                    }
                    if(outx==3)
                    { 
                        break; 
                    }
                    outx=0;
                }    
                console.log(outx) 
                if(outx==3)
                {
                  document.getElementById("gameresult").classList.add("gameover");
                  document.getElementById("gametext").innerHTML="Game-over : player X  won the game"
                }   
                if(gamex.length==5 && outx==0)
                {
                  document.getElementById("gameresult").classList.add("gameover");
                  document.getElementById("gametext").innerHTML="Game-over : Draw"
                }             
            }
        }
        else
        {
            game0.push(push)
            var length0=game0.length-1
            document.getElementById(boxno).innerHTML='O' ;
            turn+=1

            if(game0.length>=3)
            {
                for(let i=0;i<=probilitieslength; i++)
                {
                    function loopingFunction(size)
                    {
                        for(let j=0; j<=length0; j++)
                    {
                        
                        if(game0[size]==probilities[i][j])
                        {
                            out0+=1
                
                        }
                        else
                        {
                            out0+=0
                        }
                    }
                    }
                    for(let k = 0; k<=length0; k++)
                    {
                        loopingFunction(k)
                    }
                    if(out0==3)
                    { 
                        break; 
                    }
                    out0=0;
                }    
                console.log(out0)
                if(out0==3)
                {
                  document.getElementById("gameresult").classList.add("gameover");
                  document.getElementById("gametext").innerHTML="Game-over : player O won the game"
                }                  
            }

        }
    }
    
}

for(let l=1;l<=9;l++)
{
  functionOxando(l,l)
}