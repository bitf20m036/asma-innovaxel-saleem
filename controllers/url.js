const { nanoid } = require("nanoid");
const URL = require("../models/url");

async function handleGenerateShortUrl(req, res) {
    try {
        const { url } = req.body;
        if (!url) return res.status(400).json({ error: "URL is required" });

        let shortID;
        let existingUrl;
        
        // Generate a unique short code
        do {
            shortID = nanoid(8);
            existingUrl = await URL.findOne({ shortId: shortID });
        } while (existingUrl);
        
        const newUrl = await URL.create({
            shortId: shortID,
            redirectURL: url,
            visitHistory: [],
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        return res.status(201).json({
            id: newUrl._id,
            url: newUrl.redirectURL,
            shortCode: newUrl.shortId,
            createdAt: newUrl.createdAt,
            updatedAt: newUrl.updatedAt,
        });
    } catch (error) {
        return res.status(500).json({ error: "Server error", details: error.message });
    }
}

module.exports = {
    handleGenerateShortUrl,
};
