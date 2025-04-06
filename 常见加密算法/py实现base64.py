import base64


def base64_encode(text):
    encode_data = base64.b64encode(text.encode())
    return encode_data


def base64_decode(encode_data):
    decode_data = base64.b64decode(encode_data)
    return decode_data


if __name__ == '__main__':
    text = 'CbUD618tNYvbXs7yLndfo1jp6420AtKhFrPnLFP7XQJmMnyP0Yo6Vytu5NDcoT63h5mY7S5vcCkLvgtI8RjrJpAdyRNs7SCDmIHGw4Jp52buigZkNnZQrEwN1LHMU852qp4V4IwZJTBdNWvpp41zzcqilAv+OoLhP71libktBD8jQlLA4r6aHFcVFiBwNJK9ZhcwEizhoxyhckbdT3IweB1Yr+gRWH2aaPxdnEVl4/YpjzsJZf2X4bC/fz/s6lp7FnJc0++yIKZNo146ufy3pQ=='
    encode_data = base64_encode(text)
    decode_data = base64_decode(encode_data)
    print('Base64 编码：', encode_data)
    print('Base64 解码：', decode_data)

# Base64 编码：b'SSBsb3ZlIFB5dGhvbiE='
# Base64 解码：b'I love Python!'