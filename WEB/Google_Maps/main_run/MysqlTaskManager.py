import json
import traceback

import pymysql
from pymysql.cursors import DictCursor
from config.logconfig import MyLogger
logger = MyLogger().get_logger()


class MySQLTaskManager:
    db_config = {
        "host": "localhost",
        "user": "root",
        "password": "root",
        "database": "test",  # 数据库名称
        "charset": "utf8mb4",
        "cursorclass": DictCursor
    }

    table_name = "tmp_coordinate_table_1km_bak20241115"  # 表名称

    def __init__(self):
        try:
            self.connection = pymysql.connect(**self.db_config)
            self.cursor = self.connection.cursor()
            logger.info("MySQL 连接成功")
        except pymysql.MySQLError as e:
            logger.error(f"MySQL 连接失败: {e}")
            raise

    def __del__(self):
        if hasattr(self, "connection") and self.connection:
            self.cursor.close()
            self.connection.close()
            logger.info("MySQL 连接关闭")

    # 获取 n 个任务
    def take_many_tasks(self, task_status: int, n: int = 1):
        """
        从数据库中获取指定状态的任务。
        :param task_status: 任务状态 (int)
        :param n: 要获取的任务数量
        :return: 任务列表
        """
        query = f"SELECT * FROM {self.table_name} WHERE status = %s LIMIT %s"
        try:
            self.cursor.execute(query, (task_status, n))
            tasks = self.cursor.fetchall()
            return tasks
        except pymysql.MySQLError as e:
            logger.error(f"查询任务失败: {e}")
            return []

    def get_data_by_id(self, id):
        """
        根据 ID 获取数据
        :param id: 数据表中的唯一标识符
        :return: 查询结果
        """
        query = f"SELECT * FROM {self.table_name} WHERE id = %s"
        try:
            # 执行 SQL 查询
            self.cursor.execute(query, (id,))
            result = self.cursor.fetchone()  # 获取单条记录
            return result
        except pymysql.MySQLError as e:
            logger.error(f"查询失败，ID: {id}，错误: {e}")
            return None

    # 更新任务状态
    def update_status_field(self, _id: int, new_status: int):
        """
        更新任务的状态。
        :param _id: 任务的 ID
        :param new_status: 新状态 (int)
        """
        query = f"UPDATE {self.table_name} SET status = %s WHERE id = %s"
        try:
            self.cursor.execute(query, (new_status, _id))
            self.connection.commit()
            if self.cursor.rowcount > 0:
                logger.success(f"修改任务状态成功，任务 ID: {_id} status:{new_status}")
            else:
                logger.warning(f"未找到需要更新的任务，任务 ID: {_id}")
        except pymysql.MySQLError as e:
            logger.error(f"更新任务状态失败: {e}")
            self.connection.rollback()

    # 插入数据到表 map_detail
    def insert_into_detail_table(self, db_data: dict):
        """
        插入数据到表 map_detail。
        :param db_data: 包含需要插入的数据的字典
        """
        query = """
            INSERT INTO map_detail 
            (id, city, city_en, cityid, yxj, fid, url_detail,keyword,km, status) 
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
        """
        try:
            # 提取需要插入的字段
            data = (
                db_data.get('id'),  # 确保 db_data 提供此字段
                db_data.get('city', ''),  # 如果缺失，设置为默认值
                db_data.get('city_en', ''),
                db_data.get('cityid'),
                db_data.get('yxj', ''),
                db_data.get('fid'),
                db_data.get('url_detail', ''),  # 确保 url_detail 存在
                db_data.get('keyword', ''),
                db_data.get('km', ''),
                0  # 插入初始状态为 0
            )

            # logger.debug(f"即将执行插入语句: {query}")
            # logger.debug(f"插入数据: {data}")

            self.cursor.execute(query, data)
            self.connection.commit()
            logger.success(f"数据插入成功，ID: {db_data['id']}，Keyword: {db_data['keyword']},fid: {db_data['fid']}")

        except KeyError as e:
            logger.error(f"数据插入失败，缺少关键字段: {e}")
        except pymysql.MySQLError as e:
            # logger.warning(e)
            self.connection.rollback()

        # 获取 map_detail 表中的任务
    def take_detail_tasks(self, task_status: int, n: int = 1):
        """
        从表 map_detail 中获取指定状态的任务。
        :param task_status: 任务状态 (int)
        :param n: 要获取的任务数量
        :return: 任务列表
        """
        query = f"SELECT * FROM map_detail WHERE status = %s ORDER BY RAND() LIMIT %s"
        try:
            self.cursor.execute(query, (task_status, n))
            tasks = self.cursor.fetchall()
            return tasks
        except pymysql.MySQLError as e:
            logger.error(f"查询任务失败，状态: {task_status}，错误: {e}")
            return []

    def update_db_data(self, db_data):
        """
        更新数据到表 map_detail，通过 id、keyword、fid 确认唯一记录。
        """
        query = """
            UPDATE map_detail
            SET 
                title = %s,
                address = %s,
                phone = %s,
                open_hours = %s,
                category = %s,
                tags = %s,
                rating = %s,
                reviews_cnt = %s,
                latitude = %s,
                longitude = %s,
                map_id = %s,
                map_id_encoded = %s,
                map_link = %s,
                original_image = %s,
                image = %s,
                image_url = %s,
                thumbnail = %s,
                link = %s,
                pics = %s,
                display_link = %s,
                icon = %s,
                claimed = %s,
                categorys = %s,
                services = %s,
                ex = %s,
                city = %s,
                city_en = %s,
                cityid = %s,
                km = %s,
                distance = %s,
                ava = %s,
                yssj = %s
            WHERE id = %s AND keyword = %s AND fid = %s
        """
        try:
            # 按顺序构造参数列表
            params = (
                db_data['title'],
                db_data['address'],
                db_data['phone'],
                json.dumps(db_data['open_hours'], ensure_ascii=False) if db_data.get('open_hours') else None,
                db_data['category'],
                db_data['tags'],
                db_data['rating'],
                db_data['reviews_cnt'],
                db_data['latitude'],
                db_data['longitude'],
                db_data['map_id'],
                db_data['map_id_encoded'],
                db_data['map_link'],
                db_data['original_image'],
                db_data['image'],
                db_data['image_url'],
                db_data['thumbnail'],
                db_data['link'],
                db_data.get('pics',''),
                db_data['display_link'],
                db_data['icon'],
                db_data['claimed'],
                db_data['categorys'],
                db_data['services'],
                db_data['ex'],
                db_data['city'],
                db_data['city_en'],
                db_data['cityid'],
                db_data['km'],
                db_data['distance'],
                db_data.get('ava',0),
                db_data['yssj'],
                db_data['id'],
                db_data['keyword'],
                db_data['fid']
            )

            # 执行更新操作
            self.cursor.execute(query, params)
            self.connection.commit()

            if self.cursor.rowcount > 0:
                logger.success(f"数据更新成功，ID: {db_data['id']}, Keyword: {db_data['keyword']}, FID: {db_data['fid']}")

            else:
                logger.warning(f"未找到需要更新的记录，ID: {db_data['id']}, Keyword: {db_data['keyword']}, FID: {db_data['fid']}")
            return self.cursor.rowcount
        except pymysql.MySQLError as e:
            traceback.print_exc()
            logger.error(f"更新数据失败，ID: {db_data.get('id')}，错误: {e}")
            self.connection.rollback()
            return 0

    def update_status_detail(self, _id: int, new_status: int,db_data):
        """
        更新任务的状态。
        :param _id: 任务的 ID
        :param new_status: 新状态 (int)
        """
        query = f"UPDATE map_detail SET status = %s WHERE id = %s AND keyword = %s AND fid = %s"
        try:
            self.cursor.execute(query, (new_status, db_data['id'], db_data['keyword'], db_data['fid']))
            self.connection.commit()
            if self.cursor.rowcount > 0:
                logger.success(f"修改任务状态成功 | 任务 ID: {_id} keyword: {db_data['keyword']}, FID: {db_data['fid']}")
            else:
                logger.warning(f"未找到需要更新的任务 | 任务 ID: {_id} keyword: {db_data['keyword']}, FID: {db_data['fid']}")
        except pymysql.MySQLError as e:
            logger.error(f"更新任务状态失败: {e}")
            self.connection.rollback()


# 示例使用
if __name__ == "__main__":
    mysql_manager = MySQLTaskManager()

    # 获取 20 个未完成的任务（状态 0 表示未完成）
    docs = mysql_manager.take_many_tasks(0, 20)
    print(docs)

    # 更新任务状态为已完成（状态 1 表示已完成）
    # if docs:
    #     task_id = docs[0]['id']  # 假设任务的主键字段为 'id'
    #     mysql_manager.update_status_field(task_id, 1)
