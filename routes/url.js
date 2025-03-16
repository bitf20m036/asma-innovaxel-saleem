const express = require('express');
const {handleGenerateShortUrl,handleGetShortUrl,handleUpdateShortUrl}= require("../controllers/url");

const router = express.Router();

router.post('/',handleGenerateShortUrl);
router.get('/:shortId',handleGetShortUrl);
router.put('/:shortId',handleUpdateShortUrl);
module.exports=router;