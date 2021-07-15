var Scraper = require('images-scraper')

const google = new Scraper({
    puppeteer: {
        headless: true
    }
})

module.exports = {
    name: 'image',
    description: 'Envia uma imagem do google de acordo com a pesquisa',
    async execute(message, args){
        const image_query = args.join(' ');
        if(!image_query) return message.channel.send('Digite o que deseja pesquisar.')

        const image_result = await google.scrape(image_query, 2);
        message.channel.send(image_result[0].url)
    }
}