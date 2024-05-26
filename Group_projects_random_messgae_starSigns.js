const generateRandomNumber = (num) => {  //Gets a random number from the range 0 to (num - 1) const 
    return Math.floor(Math.random() * num) ;
}

const starSignInfo = { //Object with the 3 array values/data
   starSign: ['Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'],
    starDate: ['21/03-19/04','20/04-20/05','21/05-20/06','21/06-22/07', '23/07-22/08','23/08-22/09','23/09-22/10','23/10-21/11','22/11-21/12','22/12-19/01','20/01-18/02','19/02-20/03'],
    starSymbol: ['The Ram','The Bull','The Twins','The Crab','The Lion','The Virgin or Maiden','The Scales','The Scorpion','The Archer','The Goat','The Water Bearer','The Fish']
}

let information = []; //Puts the values from the 3 objects in this new array

for(let star in starSignInfo) { // creates the 3 message options, pulling randominglu form the starSignInfo
    let starIndex = generateRandomNumber(starSignInfo[star].length)

    switch(star) {
        case 'starSign':
            information.push(` Your star sign is ${starSignInfo[star][starIndex]}.`)
            break
        case 'starDate':
            information.push(`Your star date is ${starSignInfo[star][starIndex]}.`)
            break
        case 'starSymbol':
            information.push(`Your star symbol is ${starSignInfo[star][starIndex]}.`)
            break
        default:
            information.push('Not enough information')
    }
}

function randomStarSign() {

    const formattedText = information.join('\n')
    console.log(formattedText)
}

randomStarSign();