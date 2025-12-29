import psycopg2


def connection():
    try:
        conn = psycopg2.connect(
            host="localhost", database="postgres", user="postgres", password="postgres"
        )
        print("Connection successful")
        return conn

    except Exception as e:
        print(f"Failed to connect: {e}")
        return None