const express = require('express');
const {handleGenerateShortUrl,handleGetShortUrl,handleUpdateShortUrl,handleDeleteShortUrl}= require("../controllers/url");

const router = express.Router();

router.post('/',handleGenerateShortUrl);
router.get('/:shortId',handleGetShortUrl);
router.put('/:shortId',handleUpdateShortUrl);
router.delete('/:shortId',handleDeleteShortUrl);
module.exports=router;