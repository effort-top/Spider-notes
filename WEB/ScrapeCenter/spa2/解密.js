const n = require("crypto-js")

function gettoken(offset, timestamp) {
    r = [
        "/api/movie",
        offset,
        timestamp
    ]
    var o = n.SHA1(r.join(",")).toString(n.enc.Hex)
      , c = n.enc.Base64.stringify(n.enc.Utf8.parse([o, timestamp].join(",")));
    return c
}