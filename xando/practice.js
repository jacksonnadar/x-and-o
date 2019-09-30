/*var array=[[1,2,5],[2,7,1],[1,2,3]]
var arraylength=array.length-1;
var outcome=[3,2,7,1,7]
var out=0;
var length=outcome.length-1

for(let i=0;i<=arraylength; i++)
{
    function loopingFunction(size)
    {
        for(let j=0; j<=length; j++)
    {
        
        if(outcome[size]==array[i][j])
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

var probilities=[[1,2,3],[4,5,6],[7,8,9],[1,5,7],[2,5,8],[3,6,9],[9,5,1],[3,5,7]]
var probilitieslength=probilities.length-1;
var gamex=[1,5,9]
var game0=[]
var outx=0;
var out0=0;
var lengthx=gamex.length-1
var length0=game0.length-1
var turn=2;

    for(let i=0;i<=probilitieslength; i++)
    {
        function loopingFunction(size)
        {
            for(let j=0; j<=3; j++)
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
        for(let k = 0; k<=lengthx; k++)
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




