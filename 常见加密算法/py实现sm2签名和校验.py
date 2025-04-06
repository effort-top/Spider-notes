from gmssl import sm2, func

# 16 进制的公钥和私钥
private_key = '00B9AB0B828FF68872F21A837FC303668428DEA11DCD1B24429D0C99E24EED83D5'
public_key = 'B9C9A6E04E9C91F7BA880429273747D7EF5DDEB0BB2FF6317EB00BEF331A83081A6994B8993F3F5D6EADDDB81872266C87C018FB4162F5AF347B483E24620207'
sm2_crypt = sm2.CryptSM2(public_key=public_key, private_key=private_key)

# 待签名数据为 bytes 类型
data = b"this is the data to be signed"
random_hex_str = func.random_hex(sm2_crypt.para_len)

#  16 进制
sign = sm2_crypt.sign(data, random_hex_str)
verify = sm2_crypt.verify(sign, data)

print('sign: ', sign)
print('verify: ', verify)

# sign:  45cfe5306b1a87cf5d0034ef6712babdd1d98547e75bcf89a17f3bcb617150a3f111ab05597601bab8c41e2b980754b74ebe9a169a59db37d549569910ae273a

# verify:  True