const express = require('express');
const {handleGenerateShortUrl,handleDeleteShortUrl,handleUpdateShortUrl,handleGetShortUrl,handleGetShortUrlStats}= require("../controllers/url");

const router = express.Router();

router.post('/',handleGenerateShortUrl);
router.get('/:shortId',handleGetShortUrl);
router.put('/:shortId',handleUpdateShortUrl);
router.delete('/:shortId',handleDeleteShortUrl);
router.get('/:shortId/stats',handleGetShortUrlStats);
module.exports=router;