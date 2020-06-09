const express = require('express');
const router = express.Router();
const QRLogo = require('qrcodeforlogo');
const fs = require("fs");

/**
 *
 */
router.get('/createQrCode', (req, res, next) => {
  let {token, text} = req.query;
  if(!token || token !== "jinhuikeji"){
    return res.status(500).json({
      msg: "身份认证失败",
    });
  }
  const opts = {
    errorCorrectionLevel:'H',
    rendererOpts: { quality: 0.3 }
  };
  QRLogo.generateQRWithLogo(text, "pay_logo.png", opts, "Base64", "pay_" + new Date().getMilliseconds()+ ".png", (b64) => {
    const buffer = new Buffer(b64, 'base64');
    res.send(
        buffer
    );
  }).catch(err =>{
    res.status(500).json({
      msg: "二维码生成异常",
    });
  });
});

router.post('/createQrCode', (req, res, next) => {
  let {token, text} = req.body;
  if(!token || token !== "jinhuikeji"){
    return res.status(500).json({
      msg: "身份认证失败",
    });
  }
  const opts = {
    errorCorrectionLevel:'H',
    rendererOpts: { quality: 0.3 }
  };
  QRLogo.generateQRWithLogo(text, "pay_logo.png", opts, "Base64", "pay_" + new Date().getMilliseconds()+ ".png", (b64) => {
    const buffer = new Buffer(b64, 'base64');
    res.send(
        buffer
    );
  }).catch(err =>{
    res.status(500).json({
      msg: "二维码生成异常",
    });
  });
});

module.exports = router;



