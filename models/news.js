const mongoose = require('mongoose')

const newsSchema = new mongoose.Schema({
    articles: {type: String, required: true},
        // source: {type: String, required: true},
        id: {type: String, required: true},
        name: {type: String, required: true},
        // author: {type: String, required: true},
        // title: {type: String, required: true}, 
        description: {type: String, required: true},
        url: {type: String, required: true},
        urlToImage: {type: String, required: true},
        publishedAt: {type: String, required: true}, 
        // content: {type: String, required: true}
        
},
{timestamps: true})

const News = mongoose.model('News', newsSchema)

module.exports = News