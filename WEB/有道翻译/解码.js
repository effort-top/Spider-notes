var crypto = require('crypto');

function _(e) {
    var md5 = crypto.createHash('md5');
    return md5.update(e.toString()).digest("hex")
}
function get_sign(time){
    e = 'fsdsogkndfokasodnaso'
    const d = "fanyideskweb", u = "webfanyi"
    return _(`client=${d}&mysticTime=${time}&product=${u}&key=${e}`)
}

e = 'asdjnjfenknafdfsdfsd'
const time = (new Date).getTime();
console.log(get_sign(time))

function T(e) {
    var md5 = crypto.createHash('md5');
    return md5.update(e).digest()
}
function get_data(e){
    t = "ydsecret://query/key/B*RGygVywfNBwpmBaZg*WT7SIOUP2T0C9WHMZN39j^DAdaZhAnxvGcCY6VYFwnHl"
    a = "ydsecret://query/iv/C@lZe2YzHtZ2CYgaXKSVfsb7Y4QWHjITPPZ0nQp87fBeJ!Iv6v^6fvi2WN@bYpJ4"
    const o = Buffer.alloc(16, T(t))
      , n = Buffer.alloc(16, T(a))
      , r = crypto.createDecipheriv("aes-128-cbc", o, n);
    let s = r.update(e, "base64", "utf-8");
    return s += r.final("utf-8"),
    s
}


e = 'Z21kD9ZK1ke6ugku2ccWu4n6eLnvoDT0YgGi0y3g-v0B9sYqg8L9D6UERNozYOHqrbVYNk5pwtdhh3yIc3tS30sEZcTOZi8HmR5f8oaDXWjjIYBBePME_XHFcTr8Xr3YAOZ6INnjT8YEvi61hXWJwZ7bChRDkZIWhf_b1w_qiEgLdtZMbGljL6Gxs7b8TSvJYTdJ8YLtNdVv9pMBua2XnBEfQPdNy2TWcdxaUiu3QWYWLmcb5GfMjSmFsjoEHbXx6NCKTPGt2GysZZ_W_PDHhocvQLHqdEoaV0pmvpSDOJnBCFHms9CDFXYBW6Ja59NbqaArCAs4a9eBPKuDJBzD_jBA-GQROf2dsaoG7OsEVVW5eC9bZKOK90yOIGcsJULxLSgy3pf8sKT6TNNP8xVyrjlx3WL9WqNBq2QruEoiyoLZiClPkE_Tc-q18WWqBtm4ytyWF9UuRN48-eSd68ewiPqAZKKwvrGW_zUnBdRzcHYwxgLbwiZh-_QNzMTmev_BiZzvUOlS-XvbChFLMKeW_fL6cLdRUSu9GEhmXG3uLRJamubDdnsNeZcmGfDvBXYGz2P5QXfd6yLhNFKAfcRXviwHRWuZC9QcuFgBT1Cw-iagZbXfK1_VWJ7GHRBftt-TqbEn8gmxyVBNY-Dz2KSrIdVCs-fFmEdBU4-kt7AHcD1-UtDFCxzBAuHWUVXhhOdUGfS4GRWpl0qHVEGT0qjRVrRc4Ej90MxCDQNXO8hDxA9b6kL0GQNUGIfQ98fg6lpYgAqtvIZsIOlg1msvYcQGOz3g5dFhPJgFlGmbMH1Z7njL-wGvgB6OZr3dnwr80Rqf5aLuubmrYeKccip4NiwTVmRyAIlf3RdSZhORUA_XIV572CwhvXFqaDWMe6EHAn_KfZyieBmQNKoxX50BUfvrD5zmItNFTJLq1Va72CNqO7yQdTH8yw394lJ_zDUhrsR-XUAtiAnMVy05YS1zeekzozwHDnCZ3FfBF70t6R7C7DY8np0gsmMXr-H95hMhnR81DKxCNIXkilG44Erh17MdtLTIfoAXswY9-zGV8QJIoQ57rSmli5gHhcps9xJPbH09lpkqWnzIpP3jfj6lGWL-pHS4llTPCaz48vkJ7lMeMZGlauvb7iIz3FksKq90Yw3wf_CW7Sby-wWDgJb5tHuo2BatYhgfj-mUIGbM6lpG7J1LUIKfL0NqothEfLSZtEne7uB6kG0Jhp9jenmAh4c0u-0tkjkcOhdw_kQRCye9eHv3o9jZ_w9sy4NuWG6tFyPWZvCOU8eAWkAzitYoE-C7qswwraxMB6vQlGNxaZwDYPw-iSP5kRaxZcTD9PWupcOTWyRw1Zs4cpz5AT2yoo0aZBzzpiZPHzgjc_yKKJ1jjeNiE2EU1cYFIfhcQQFaeDElvKSPeiPJGfwn20RqKk9uDWIlxrt56on2iy7dbD5iCjTRhy34LTtORvaUmbMUdU4FjgdNNqipfa1JWHWnwkFXp2JvwIT46btluK--sR45rfcdkYB1EO-OPYUREAdRJtgQgZou-LAdbl-REwYtcBIRgTAPoYeq1xUFd5_VQdq57ZpMUBqFyFRhF1vVSWG_F-0Wu4tLGTgOz79zEIP8DK0Wwhr2S7oqM_PIYDAB6oKzRJR2E_XigFUEcFzeA3pWekZDel9KzQr5kgvD_fie9ntGtkKaS3gV58cdE3X-V1v7Sq8IeKbWFcemsusH_bx-GsRFRG3BxYoOzm0cNWJE4Afs19KieRIZdTvd4QmV2Ah0EeMnUn-fMDUEEUgEDg_95qWLCr3ipwVtT2Pq7CDgpU4JgRS9bKdfEXLEIu1rk4P6KDYJTeVArpR_LQ8e8Xb-PqZiGj655mj50ch8htJdpQRKfxwBaKc_91cu5sj6PwCDqibcPXc0kVxnVbTBsT3K6Ax-eDsSA5FcutBWes0vG8uUrDS_uPkaSgFCC1zsIjUw2MXOxvxwpJRaee0v54IDC2XuDrAP-BlZiYWIbP-e1utAa-v0GUQvuiz9fzUQoe6rStBlFd0fK1cdjHKo8WNv2aL9KH7mZuITY9l34laVjpI9ab6eoN5uAFtfOnMiWk0DJl48ZguVNtT3mfGfiqh6SfLq_ncGcf4W2iRNTOAtuDSZtpl0iiFVrM_iKIqXSHxLLoJdpT1vkzmyTj3M0x8oUm04nFsgh0SOMHvpxPYGhYkdtnTOaQ0Gs9fNp_Z_foGEIKaKtnRXcg21uxQXv03nvwjfhECJWExOnsxB1CZivyH5_Uo1m8tng0_a972jcgK49b8R_oOME0aM62EFSHjQJVrFZFi_386kyiCYZ199PpWXTda_edv8QiMcASeIqIlLuzOS3__QVm86zsHvjPyTNX-_MOP02PTSms4FXvO_CC1Gz4-OYP1lYiLg6Kfs02l79v5jRtZcldeeOoo-pCwcu_c8U9cIB7cjcay7XQSu9OXcbSse_dkQjBz7Gj9BNVpCQ586xfsASiRaPsYzwq5wHk9RbM62zghuJaYAlwbECPn2fzO_WCCLhSypwWHEEGfWfVo6btb2kxn5EQ7fV5FoJhxHzx0g3y9XTpxT7IX-05zF7g=='

console.log(get_data(e))