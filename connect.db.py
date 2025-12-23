import psycopg2
def connection():
        conn = psycopg2.connect(
        host="localhost",
        database="postgres",
        user="postgres",
        password="postgres"
       )
cursor = conn.cursor()
