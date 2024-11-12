let nameHero = "Batman"
let experience = 10001
let experienceLevel = ""

if(experience <= 1000){
    experienceLevel = "Ferro"
    console.log(`O Herói de nome ${nameHero} está no nível de ${experienceLevel}.`)
}else if(experience >= 1001 && experience <= 2000){
    experienceLevel = "Bronze"
    console.log(`O Herói de nome ${nameHero} está no nível de ${experienceLevel}.`)
}else if(experience >= 2001 && experience <= 5000){
    experienceLevel = "Prata"
    console.log(`O Herói de nome ${nameHero} está no nível de ${experienceLevel}.`)
}else if(experience >= 5001 && experience <= 6000){
    experienceLevel = "Ouro"
    console.log(`O Herói de nome ${nameHero} está no nível de ${experienceLevel}.`)
}else if(experience >= 6001 && experience <= 8000){
    experienceLevel = "Platina Diamante"
    console.log(`O Herói de nome ${nameHero} está no nível de ${experienceLevel}.`)
}else if(experience >= 8001 && experience <= 9000){
    experienceLevel = "Ascendente"
    console.log(`O Herói de nome ${nameHero} está no nível de ${experienceLevel}.`)
}else if(experience >= 9001 && experience <= 10000){
    experienceLevel = "Imortal"
    console.log(`O Herói de nome ${nameHero} está no nível de ${experienceLevel}.`)
}else {
    experienceLevel = "Radiante"
    console.log(`O Herói de nome ${nameHero} está no níviel de ${experienceLevel}.`)
}
