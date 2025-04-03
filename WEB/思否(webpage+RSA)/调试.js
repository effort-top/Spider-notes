require('./模块.js')
require('./加载器.js')

var e7 = '-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAkof1rwl+U32URzw5lqqy\nz4E+aKwu+f+A6/aSNvnSe62m6r/rjyb9WiRs7E1jfibgU196GNFX1+XxRaATFkTI\n9Mzapr8qn+yR3b/xWAECU7PCR366ovhHSJlIozmmkkb1kwjdR6okUWKIHg7heq9v\nz9cExuvN+whHjDjSKAQX9/1Sqv3py/Yo9+MkRC8Q5KhupYBBmgLAUtqL6ghU3HS6\nNnwx2CA13RyonLDB+Dh59l+j11Rf85ANL4XrD7dxCDsCFvjTBGIYm41F3qHne0fu\nXPKTsamLHjkiMV3NPxVAlMQXUF71ZoSEO4cITaZZCpI5H9GSh16ZebBtSC6RSvek\npQIDAQAB\n-----END PUBLIC KEY-----'

function sign(m) {
    let _ = e$()['pki']['publicKeyFromPem'](e7)
      , C = _['encrypt'](e$()['util']['encodeUtf8'](m));
    return e$()['util']['encode64'](C)
}


data = '{"page":"4","query":"newest","size":"30","timestamp":1735112368}'
let D = JSON[eK(425)](B)
, L = sign(D);
