import psycopg2
import os
import sys

conn = psycopg2.connect(dbname="haydenknowles")

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
            cur.execute('insert into "public"."Languages"("language", "code", "image") values(%s, %s, %s);', (language, code, 'true'))
            cur.execute('commit;')
        except Exception, e:
            if 'invalid byte sequence for encoding "UTF8":' in str(e):
                cur.execute('insert into "public"."Languages"("language", "code", "image") values(%s, %s, %s);', (language, psycopg2.Binary(code), 'false'))
                cur.execute('commit;')
                print "Inserting image {}".format(file)
            print e
