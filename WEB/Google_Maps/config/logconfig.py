import sys

from loguru import logger

my_log_file_path = "test_log.log"


class MyLogger:
    def __init__(self, log_file_path=my_log_file_path):
        self.logger = logger
        # 清空所有设置
        self.logger.remove()

        self.logger.add(sys.stdout,
                        format="<green>{time:YYYY-MM-DD HH:mm:ss}</green> <red>|</red> "  # 颜色>时间
                               "{thread.id} <red>|</red> "  # 进程名
                               "<cyan>{module}</cyan>:<cyan>{function}</cyan>:<cyan>{line}</cyan> <red>|</red> "  # 模块名.方法名:行号
                               "<level>{level}</level>: "  # 等级
                               "<level>{message}</level>",  # 日志内容
                        )
        # 输出到文件的格式,注释下面的add',则关闭日志写入
        # self.logger.add(log_file_path, level='DEBUG',
        #                 format="<green>{time:YYYY-MM-DD HH:mm:ss}</green> <red>|</red> "  # 颜色>时间
        #                        "{thread.id} <red>|</red> "  # 进程名
        #                        "<cyan>{module}</cyan>:<cyan>{function}</cyan>:<cyan>{line}</cyan> <red>|</red> "  # 模块名.方法名:行号
        #                        "<level>{level}</level>: "  # 等级
        #                        "<level>{message}</level>",  # 日志内容
        #                 rotation="10 MB")

    def get_logger(self):
        return self.logger


my_logger = MyLogger().get_logger()


def abc():
    my_logger.info(2222222)
    my_logger.debug(2222222)
    my_logger.warning(2222222)
    my_logger.error(2222222)
    my_logger.success(2222222)

if __name__ == '__main__':
    abc()

