from datetime import datetime

# 获取当前时间的时间戳（毫秒）
timestamp = int(datetime.now().timestamp() * 1000)

# 打印结果
print("当前高精度时间戳是：", timestamp)

# 1726740862288
# 1726740878714