var sum = 0;
for (var i=0; i< 1000; i++)
{
    if(i % 3 === 0 || i % 5 === 0)
    {
        sum = sum + 1
    }
}
document.write(sum)