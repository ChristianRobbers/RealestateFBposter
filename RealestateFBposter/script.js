const generateNyhed = () => {

    const adresseInput = document.querySelector('#adresse')
    const telefonInput = document.querySelector('#telefonnummer')
    const linkInput = document.querySelector('#link')

    const text = {
    1 : `🚨NYHED🚨

Vi har netop fået denne ejendom på ${adresseInput.value} til salg 🎉

Ring og bestil en fremvisning før din nabo! Du kan fange os på ${telefonInput.value} ☎

Se mere om ejendommen her: ${linkInput.value ? linkInput.value : 'danbolig.dk' } 🌎`,
    2 : `‼NYHED‼
    
Åsmarkegade 26, 4941 Bandholm 🏠

Spændende ejendom som skal opleves!

Ring og bestil en fremvisning på ${telefonInput.value} ☎

Se mere om huset på vores hjemmeside: 👉 ${linkInput.value} 🌎`
    }

    const keys = Object.keys(text)
    const randomIndex = keys[Math.floor(Math.random() * keys.length)];

    const output = document.querySelector('.output-div')

    output.textContent = text[randomIndex]
}

const generateSolgt = () => {

    const adresseInput = document.querySelector('#adresse')
    const telefonInput = document.querySelector('#telefonnummer')

    const text = {
    1 : `🥳SOOOLGT🥳

${adresseInput.value} er netop blevet solgt 🤩
        
Hvis du også vil sælge så ring på ${telefonInput.value} ☎ og bestil en gratis og uforpligtende salgsvurdering 🏠`,
    2 : `🚨SOOOOLGT🚨

Vi har netop solgt ${adresseInput.value} 💥

Stort tillykke med handlen til køber og sælger 🎉

Går du også med salgstanker 💭 så ring til os på ${telefonInput.value} ☎ for en uforpligtende snak om salg af din bolig 🏡`,
3: `SOOLGT 3`,
4: `SOOOLGT4`

    }

    const keys = Object.keys(text)
    const randomIndex = keys[Math.floor(Math.random() * keys.length)];

    const output = document.querySelector('.output-div')

    output.textContent = text[randomIndex]
}

const copy = () => {
    const textContainer = document.querySelector('.output-div')

    const textArea = document.createElement('textarea')
    textArea.id = 'temp-element'
    textArea.style.height = 0
    document.body.appendChild(textArea)

    textArea.value = textContainer.textContent

    const selector = document.querySelector('#temp-element')
    selector.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
}