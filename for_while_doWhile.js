//for loop
let number=1;

for(number; number<=12; number++)
{
    if(number==11)
    {
        break;
    }

    if(number%2 !=0)
    {
        continue;
    }
    else
    {
        console.log(number);
    }
}

//while loop
let digit=1;

while(true)
{
    if(digit%2 ===0)
    {
        digit++;
        continue;
    }
    else
    {
        console.log(digit);
    }

    if(digit===11)
    {
        break;
    }
    digit++;
}

//do while loop

let nmbr=1;

do {
    if (nmbr % 2 !== 0) {
        console.log(nmbr);
    }

    if (nmbr === 11) {
        break;
    }

    nmbr++;
} while (true);
