from gmssl import sm2

# 16 进制的公钥和私钥
private_key = '00B9AB0B828FF68872F21A837FC303668428DEA11DCD1B24429D0C99E24EED83D5'
public_key = 'B9C9A6E04E9C91F7BA880429273747D7EF5DDEB0BB2FF6317EB00BEF331A83081A6994B8993F3F5D6EADDDB81872266C87C018FB4162F5AF347B483E24620207'
sm2_crypt = sm2.CryptSM2(public_key=public_key, private_key=private_key)

# 待加密数据和加密后数据为 bytes 类型
data = b"this is the data to be encrypted"
enc_data = sm2_crypt.encrypt(data)
dec_data = sm2_crypt.decrypt(enc_data)

print('enc_data: ', enc_data.hex())
print('dec_data: ', dec_data)

# enc_data:  3cb96dd2e0b6c24df8e22a5da3951d061a6ee6ce99f46a446426feca83e501073288b1553ca8d91fad79054e26696a27c982492466dafb5ed06a573fb09947f2aed8dfae243b095ab88115c584bb6f0814efe2f338a00de42b244c99698e81c7913c1d82b7609557677a36681dd10b646229350ad0261b51ca5ed6030d660947

# dec_data:  b'this is the data to be encrypted'