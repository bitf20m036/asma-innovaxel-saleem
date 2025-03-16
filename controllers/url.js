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
    return res
      .status(500)
      .json({ error: "Server error", details: error.message });
  }
}

async function handleGetShortUrl(req, res) {
  try {
    const { shortId } = req.params;
    const entry = await URL.findOneAndUpdate(
      { shortId },
      { $push: { visitHistory: { timestamp: new Date() } } },
      { new: true },
    );

    if (!entry || !entry.redirectURL) {
      return res.status(404).json({ error: "Short URL not found" });
    }

    return res.status(200).json({
      id: entry._id,
      url: entry.redirectURL,
      shortCode: entry.shortId,
      createdAt: entry.createdAt,
      updatedAt: entry.updatedAt,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Server error", details: error.message });
  }
}

async function handleUpdateShortUrl(req, res) {
  try {
    const { shortId } = req.params;
    const { url } = req.body;

    if (!url) return res.status(400).json({ error: "URL is required" });

    const updatedEntry = await URL.findOneAndUpdate(
      { shortId },
      { redirectURL: url, updatedAt: new Date() },
      { new: true },
    );

    if (!updatedEntry) {
      return res.status(404).json({ error: "Short URL not found" });
    }

    return res.status(200).json({
      id: updatedEntry._id,
      url: updatedEntry.redirectURL,
      shortCode: updatedEntry.shortId,
      createdAt: updatedEntry.createdAt,
      updatedAt: updatedEntry.updatedAt,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Server error", details: error.message });
  }
}

async function handleDeleteShortUrl(req, res) {
  try {
    const { shortId } = req.params;
    const deletedEntry = await URL.findOneAndDelete({ shortId });

    if (!deletedEntry) {
      return res.status(404).json({ error: "Short URL not found" });
    }

    return res.status(204).send();
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Server error", details: error.message });
  }
}

async function handleGetShortUrlStats(req, res) {
  try {
    const { shortId } = req.params;
    const entry = await URL.findOne({ shortId });

    if (!entry) {
      return res.status(404).json({ error: "Short URL not found" });
    }

    return res.status(200).json({
      id: entry._id,
      url: entry.redirectURL,
      shortCode: entry.shortId,
      createdAt: entry.createdAt,
      updatedAt: entry.updatedAt,
      accessCount: entry.visitHistory ? entry.visitHistory.length : 0,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Server error", details: error.message });
  }
}

module.exports = {
  handleGenerateShortUrl,
  handleDeleteShortUrl,
  handleUpdateShortUrl,
  handleGetShortUrl,
  handleGetShortUrlStats,
};
