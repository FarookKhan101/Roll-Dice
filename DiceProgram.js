function rollDice()
{
    const numOfDice=parseInt( document.getElementById("numOfDice").value);
    const diceResult=document.getElementById("diceResult");
    const diceImages=document.getElementById("diceImages");
    const values=[];
    const images=[];
    if(numOfDice <=0 || numOfDice>6)
    {
        diceResult.textContent="enter only from(1-6) dice only";
    }
    else{
    for(let i=0;i<numOfDice;i++)
    {
        const value=Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="dice_image/${value}.png" alt="Dice ${value}">`);


    }
}
diceResult.textContent=`dice : ${values.join(', ')}`;
diceImages.innerHTML = images.join('');


}