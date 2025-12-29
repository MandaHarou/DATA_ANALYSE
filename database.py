import psycopg2

from config import DB_CONFIG


def get_connection():
    return psycopg2.connect(**DB_CONFIG)


def create_table(cursor):
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS account_data (
        code TEXT,
        nocompte TEXT,
        code_banque TEXT,
        code_agence INTEGER,
        branch TEXT,
        code_produit INTEGER,
        product TEXT,
        num_compte TEXT,
        rib TEXT,
        available_balance NUMERIC,
        opening_date DATE,
        report_date_to DATE,
        gestionnaire TEXT
    );
    """)


def insert_data(cursor, df):
    insert_sql = """
    INSERT INTO account_data (
        code, nocompte, code_banque, code_agence, branch,
        code_produit, product, num_compte, rib,
        available_balance, opening_date, report_date_to,
        gestionnaire
    ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
    """

    data = df[
        [
            "Code",
            "noCompte",
            "code_banque",
            "code_agence",
            "Branch",
            "code_produit",
            "Product",
            "num_compte",
            "rib",
            "AvailableBalance",
            "OpeningDate",
            "Report_date_to",
            "gestionnaire de compte",
        ]
    ].values.tolist()

    cursor.executemany(insert_sql, data)
