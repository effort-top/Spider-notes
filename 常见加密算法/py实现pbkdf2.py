import binascii
from Cryptodome.Hash import SHA1
from Cryptodome.Protocol.KDF import PBKDF2


text = 'I love Python!'
salt = b'43215678'
result = PBKDF2(text,  salt, count=10, hmac_hash_module=SHA1)
result = binascii.hexlify(result)
print(result)
# b'7fee6e8350cfe96314c76aaa6e853a50'