import requests
from ScrapeCenter.config.logconfig import MyLogger

logger = MyLogger().get_logger()

headers = {
    "Referer": "https://spa3.scrape.center/",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
}
url = "https://spa3.scrape.center/api/movie/"
for page in range(1, 11):
    offset = (page - 1) * 10

    params = {
        "limit": "10",
        "offset": str(offset)
    }
    response = requests.get(url, headers=headers, params=params)

    data_json = response.json()
    results = data_json["results"]

    for result in results:
        id = result["id"]
        name = result["name"]
        data = {}
        data["id"] = id
        data["name"] = name
        logger.info(data)
