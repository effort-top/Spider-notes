import csv
import json
import re
from pymongo import MongoClient

# MongoDB 配置
MONGO_URI = "mongodb://localhost:27017/"
DB_NAME = "google"
COLLECTION_NAME = "fidData_3"

# 连接到 MongoDB
client = MongoClient(MONGO_URI)
db = client[DB_NAME]
collection = db[COLLECTION_NAME]

# 读取CSV文件并写入MongoDB
def insert_from_csv(file_path):
    with open(file_path, mode='r', encoding='utf-8') as file:
        reader = csv.reader(file)
        for row in reader:
            # 假设CSV文件只有一个字段fid
            fid = row[0]
            # 创建文档并设置状态为unfinished
            document = {
                'fid': fid,
                'status': 'unfinished'
            }
            # 插入文档到集合
            collection.insert_one(document)
            print(f"Inserted: {document}")

# CSV文件路径
csv_file_path = r'C:\Users\user\Downloads\fid_2_5.csv'

# 调用函数
insert_from_csv(csv_file_path)

# 关闭MongoDB连接
client.close()
