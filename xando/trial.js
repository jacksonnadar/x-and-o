var probilities=[[1,2,3],[4,5,6],[7,8,9],[1,5,7],[2,5,8],[3,6,9],[9,5,1],[3,5,7]]
var probilitieslength=probilities.length-1;
var gamex=[]
var game0=[]
var out=0;
var length=gamex.length-1
var turn=2;


function functionOxando(boxno,push)
{
    document.getElementById(boxno).addEventListener("click", myFunction1);
    function myFunction1()
    {
        if(turn%2==0)
        {
            gamex.push(push);
            turn+=1;
            document.getElementById(boxno).innerHTML='X' ;
            console.log(gamex)
            console.log(gamex.length)
            if(gamex.length>=3)
            {
                for(let i=0;i<=8; i++)
                {
                    function loopingFunction(size)
                    {
                        for(let j=0; j<=length; j++)
                    {
                        
                        if(gamex[size]==probilities[i][j])
                        {
                            out+=1
                            console.log(out)
                
                        }
                        else
                        {
                            out+=0
                        }
                    }
                    }
                    for(let k = 0; k<=length; k++)
                    {
                        loopingFunction(k)
                        console.log(out)
                    }
                    if(out==3)
                    { 
                        break; 
                    }
                    out=0;
                }    
                console.log(out)                 
            }
        }
        else
        {
            game0.push(push)
            document.getElementById(boxno).innerHTML='O' ;
            turn+=1

        }
    }
}
functionOxando("box1",1)
functionOxando("box2",2)
functionOxando("box3",3)
functionOxando("box4",4)
functionOxando("box5",5)
functionOxando("box6",6)
functionOxando("box7",7)
functionOxando("box8",8)
functionOxando("box9",9)






/*for(let i=0;i<=2; i++)
{
    function loopingFunction(size)
    {
        for(let j=0; j<=length; j++)
    {
        
        if(gamex[size]==probilities[i][j])
        {
            out+=1

        }
        else
        {
            out+=0
        }
    }
    }
    for(let k = 0; k<length; k++)
    {
        loopingFunction(k)
    }
    
    if(out==3)
    {
        
        break;
        
    }
    out=0;
}
console.log(out)*/