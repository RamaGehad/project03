let count = 0;
const increment =document.getElementById("increment")
const decrement =document.getElementById("decrement")
const reset =document.getElementById("reset")
const result =document.getElementById("result")

increment.addEventListener('click',function()
{
    count +=1;
    result.textContent=count;
    if (count > 0)
    {
    result.style.color="green";
    }
    else if(count === 0)
    {
    result.style.color = "black";
    }
})
decrement.addEventListener('click',function()
{
    count -=1;
    result.textContent=count;
    if(count < 0)
    {
    result.style.color="red";
    }
    else if(count === 0)
    {
    result.style.color = "black";
    }
})
reset.addEventListener('click',function()
{
    count =0;
    result.textContent=count;
    if(count === 0)
    {
        result.style.color = "black";
    }
})
