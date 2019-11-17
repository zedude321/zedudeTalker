const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let date = new Date();
console.log('Hello, and welcome to Zedude Talker. Where I like Zedude');
rl.question('What`s your name??: ', (acc) => {
    function zedudeTalker() {
        rl.question(`What can I do for you ?? ${acc}\n`, (ans) => {
            let an = ans.split(' ').map((letter) => letter.toLowerCase()).join(" ")
            switch (an) {
                case 'tell me a joke':
                    let joke = Math.floor(Math.random() * 14)
                    switch (joke) {
                        case 0: console.log('We all live in a bubble \n It`s unbelieBUBBLE.'); zedudeTalker(); break
                        case 1: console.log('What does the fox say? \n A ring a ding ding'); zedudeTalker(); break
                        case 2: console.log('Knock Knock \n Who`s there? \n Who \n Who Who? \n You sound like an owl'); zedudeTalker(); break
                        case 3: console.log('Unhruush duujlegdjee'); zedudeTalker(); break
                        case 4: console.log('Neg emee baitsaa tairj \n Tegeed neg emee hurj ireed Huue baitsaa tarij baina uu gehed \n Ugui ee baitsaa tairrjiin'); zedudeTalker(); break
                        case 5: console.log('nomin'); zedudeTalker(); break
                        case 6: console.log('Luugaar hiideg Puujing yu gedeg ve? \n Luujin'); zedudeTalker(); break
                        case 7: console.log('Women are often better teachers than TEA.'); zedudeTalker(); break
                        case 8: console.log('JOKE'); zedudeTalker(); break
                        case 9: console.log('Why are IT engineers good at spelling \n Because they`re PROgrammars'); zedudeTalker(); break
                        case 10: console.log('Why are IT engineers good at weighing things \n Because they`re PRO GRAMMers'); zedudeTalker(); break
                        case 11: console.log('What kinds of shorts do clouds wear?? \n Thunderwear'); zedudeTalker(); break
                        default: console.log('Neg huruu yvj baigaad uhjee'); zedudeTalker(); break

                    }
                    zedudeTalker(); break
                case 'stop': console.log('OK'); rl.close(); break;
                case 'start a timer': rl.question('For how long?? (in seconds) ', (answr) => {
                    setTimeout(function () {
                        console.log('DONE');
                        zedudeTalker();
                    }, Number(answr) * 1000)
                }); break
                case 'what is the time':
                    let time = date.getHours();
                    let minute = date.getMinutes();
                    console.log(`It's ${time} o'clock and ${minute} minute(s)`)
                    zedudeTalker(); break
                case 'what is the date':
                    let year = date.getFullYear();
                    let month = date.getMonth();
                    let day = date.getDate();
                    switch (month) {
                        case 1: month = 'January'; break
                        case 2: month = 'February'; break
                        case 3: month = 'March'; break
                        case 4: month = 'April'; break
                        case 5: month = 'May'; break
                        case 6: month = 'June'; break
                        case 7: month = 'July'; break
                        case 8: month = 'August'; break
                        case 9: month = 'September'; break
                        case 10: month = 'October'; break
                        case 11: month = 'November'; break
                        case 12: month = 'December'; break
                    }
                    switch (day) {
                        case 1: day = '1st'; break
                        case 2: day = '2nd'; break
                        case 3: day = '3rd'; break
                        case 4: day = '4th'; break
                        case 5: day = '5th'; break
                        case 6: day = '6th'; break
                        case 7: day = '7th'; break
                        case 8: day = '8th'; break
                        case 9: day = '9th'; break
                        case 10: day = '10th'; break
                        case 11: day = '11th'; break
                        case 12: day = '12th'; break
                        case 13: day = '13th'; break
                        case 14: day = '14th'; break
                        case 15: day = '15th'; break
                        case 16: day = '16th'; break
                        case 17: day = '17th'; break
                        case 18: day = '18th'; break
                        case 19: day = '19th'; break
                        case 20: day = '20th'; break
                        case 21: day = '21st'; break
                        case 22: day = '22nd'; break
                        case 23: day = '23rd'; break
                        case 24: day = '24th'; break
                        case 25: day = '25th'; break
                        case 26: day = '26th'; break
                        case 27: day = '27th'; break
                        case 28: day = '28th'; break
                        case 29: day = '29th'; break
                        case 30: day = '30th'; break
                        case 31: day = '31st'; break
                    }
                    console.log(`It's the year ${year} ${day} of ${month}`)
                    zedudeTalker(); break
                case 'how are you':
                    console.log('I`m fine thnks')
                    zedudeTalker(); break
                case 'what is':
                    rl.question('WHAT?? ', (quiz) => {
                        switch (quiz) {
                            case 'zedude': console.log('Zedude is a being who/which you can not see. But you can see his host body. It`s host body will do what Zedude tells him/her to do. Right now Zedude is in an aian boy called Tserenlkhagva.'); zedudeTalker(); break
                            case 'a keyboard':
                                console.log('Here`s the wiki mate: https://en.wikipedia.org/wiki/Computer_keyboard'); zedudeTalker(); break
                            case 'life':
                                console.log('42'); zedudeTalker(); break
                            case 'death':
                                console.log('Here`s the wiki dead: https://en.wikipedia.org/wiki/Death'); zedudeTalker(); break
                            case 'queen', 'a queen', 'the queen':
                                console.log('Here`s the wiki ma`am: https://en.wikipedia.org/wiki/Queen'); zedudeTalker(); break
                            case 'a lie', 'lies':
                                console.log('Here`s what I found JK: https://en.wikipedia.org/wiki/Lie'); zedudeTalker(); break
                            case 'a mug', 'mugs':
                                console.log('Here it is: https://en.wikipedia.org/wiki/Mug'); zedudeTalker(); break
                            case 'javascript', 'js':
                                console.log('Here ya go: https://en.wikipedia.org/wiki/JavaScript'); zedudeTalker(); break
                            case 'a program', 'programs':
                                console.log('Here it is: https://en.wikipedia.org/wiki/Program'); zedudeTalker(); break
                            case 'zedudeTalker':
                                console.log('It is this entire thing'); zedudeTalker(); break
                            case 'headphones', 'a headphone':
                                console.log('Here it is sir: https://en.wikipedia.org/wiki/Headphones'); zedudeTalker(); break
                            case 'a powerbank', 'powerbanks':
                                console.log('Here`s what I found: https://en.wikipedia.org/wiki/Battery_charger#Power_bank'); zedudeTalker(); break
                            case 'never mind':
                                console.log('OK'); zedudeTalker(); break
                            default: 
                                console.log('Sry I don`t know that. You can email `zedude321@gmail.com` to give some suggestions'); zedudeTalker(); break
                        }
                    }); zedudeTalker(); break
                case 'what do you like':
                    console.log('Well I like everything good, but the thing I like most is Zedude'); zedudeTalker(); break
                case 'hello': console.log(`Hello ${acc}`); zedudeTalker(); break
                case 'what can you do':
                    let a = Math.floor(Math.random() * 2)
                    switch (a) {
                        case 0: console.log('You can say `what is` and ask anything'); break
                        case 1: console.log('You can say `what is the time` or `what is the date`'); break
                    }; zedudeTalker(); break
                case `let's play a game`:
                    console.log('I`m not smart enough to play those, so here`s a link to some: https://www.npmjs.com/search?q=games'); zedudeTalker(); break
                case 'how can i':
                    rl.question('Do what ?: ', (hci) => {
                        switch (hci) {
                            case 'make money':
                                console.log('Well if you`re a student then ask your parents or get a day job, if you`re an adult get a job'); zedudeTalker(); break
                            case 'never mind': 
                                console.log('OK'); zedudeTalker(); break
                            default: 
                                console.log('Sry I don`t know, email `zedude321@gmail.com` to give some suggestions.'); zedudeTalker(); break
                        }
                    })
                default:
                    console.log('Sry IDK')
                    zedudeTalker();
            }
        })
    }
    zedudeTalker();
})