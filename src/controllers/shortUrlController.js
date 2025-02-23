const ShortUrl = require('../models/ShortUrl');
const {nanoid} = require("nanoid")

createNewShortUrl = async (req, res) => {
    try{
        const {originalUrl } = req.body;
        console.log(req.user?.id);
        if (!originalUrl) {
            return res.status(400).json({ message: "Original URL is required" });
        }

        const generatedNanoid = nanoid(8);
        const newShortUrl = `${process.env.SHORT_URL_DOMAIN}/${generatedNanoid}`;

        const newShortUrlData = new ShortUrl({
            originalUrl,
            generatedUrl : newShortUrl,
            user : undefined,
        })

        await newShortUrlData.save();
        return res.status(201).json({message : "Short URL created successfully", newShortUrlData});
    }catch(err){
        console.error(err);
        res.status(500).json({message : "Server error"});
    }
}

module.exports = {createNewShortUrl}