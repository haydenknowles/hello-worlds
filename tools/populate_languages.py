import psycopg2
import os
import sys
import urlparse

urlparse.uses_netloc.append("postgres")
url = urlparse.urlparse(os.environ["DATABASE_URL"])

conn = psycopg2.connect(
    database=url.path[1:],
    user=url.username,
    password=url.password,
    host=url.hostname,
    port=url.port
)
cur = conn.cursor()

for root, dirs, files in os.walk('.'):
    for file in files:
        if file == "populate_languages.py": continue
        language = file.split('.')[0]
        abs_filename = os.path.join(root, file)
        #print abs_filename
        code = None
        with open(abs_filename, 'rb') as f:
            code = f.read()
        try:
            cur.execute('insert into languages("language", "code") values(%s, %s);', (language, code))
            cur.execute('commit;')
        except Exception as e:
            pass
