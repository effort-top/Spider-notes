import execjs
import json

# 示例 JavaScript 代码
js_code = """
function get_a_bogus(data) {
    console.log("Data received in JavaScript:", data);
    return "mock_a_bogus"; // 返回一个示例值
}
"""

# 编译 JavaScript 代码
jsDrive = execjs.compile(js_code)

# 示例数据
data = {
    "channel_id": "3189398996",
    "min_behot_time": "1747068615",
    "offset": "0",
    "refresh_count": "2",
    "category": "pc_profile_channel",
    "client_extra_params": "{\"short_video_item\":\"filter\"}",
    "aid": "24",
    "app_name": "toutiao_web"
}

# 将数据转换为 JSON 字符串
data_json = json.dumps(data)

# 调用 JavaScript 函数
a_bogus = jsDrive.call('get_a_bogus', data_json)
print(a_bogus)