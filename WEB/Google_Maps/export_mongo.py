import json

from pymongo import MongoClient
from config.logconfig import MyLogger

logger = MyLogger().get_logger()

MONGO_URI = "mongodb://localhost:27017/"
DB_NAME = "google"  # 替换为你自己的数据库名称
COLLECTION_NAME = "fidData_all"  # 替换为你自己的集合名称

client = MongoClient(MONGO_URI)
db = client[DB_NAME]
collection = db[COLLECTION_NAME]

# 查询状态为"finished"的文档，限制为300个
cursor = collection.find({"status": "finished"}).limit(300)

# 将查询结果转换为列表
data_list = list(cursor)

# 将数据转换为JSON格式
json_data = json.dumps(data_list, default=str)  # 使用default=str处理日期等特殊类型

# 打印或保存JSON数据
# print(json_data)

# 如果需要保存到文件
with open('output_300.json', 'w') as f:
    f.write(json_data)
logger.success("导出成功")
# 关闭MongoDB连接
client.close()
