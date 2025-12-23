import pandas as pd 
import psycopg2

import {}
path_dataset = "dataset_account.xlsx"

df_source = pd.read_excel(path_dataset, sheet_name="data source")

df_product = pd.read_excel(path_dataset, sheet_name="product mapping")

df_branch  = pd.read_excel(path_dataset, sheet_name="branch mapping")

df_source[['code_banque', 'code_agence', 'compte', 'rib']] = df_source['noCompte'].str.split(' ', expand=True)

df_source['code_produit'] = df_source['compte'].str[0].astype(int)

df_source['num_compte'] = df_source['compte'].str[1:]

df_source["AccountStatus"] = (
    df_source["AccountStatus"]
    .astype(str)
    .str.strip()
    .str.lower()
)

df_source = df_source[df_source["AccountStatus"] == "active"].copy()

df_join_product = df_source.merge(
    df_product,
    left_on="code_produit",
    right_on="productCode",
    how="left"
)


df_join_product['code_agence'] = df_join_product['code_agence'].astype(int)
df_branch['CodeBranch'] = df_branch['CodeBranch'].astype(int)

df_join_branch = df_join_product.merge(
    df_branch, 
    left_on="code_agence", 
    right_on="CodeBranch", 
    how="left"
)

df_join_branch["OpeningDate"] = pd.to_datetime(df_join_branch["OpeningDate"], errors='coerce')

df_join_branch["Report_date_to"] = pd.to_datetime(df_join_branch["Report_date_to"], errors='coerce')

df_join_branch["AvailableBalance"] = pd.to_numeric(df_join_branch["AvailableBalance"], errors='coerce')

df_join_branch.drop(columns=["compte", "productCode", "CodeBranch"], inplace=True, errors="ignore")

colonnes_finales = [
    "Code", "noCompte", "code_banque", "code_agence", "Branch",
    "code_produit", "Product", "num_compte", "rib",
    "AvailableBalance", "OpeningDate", "Report_date_to",
    "gestionnaire de compte"
]

df_final = df_join_branch[colonnes_finales].copy()

agence_agg = df_final.groupby("code_agence").agg(
    total_balance=("AvailableBalance", "sum"),
    nombre_comptes=("num_compte", "count"),
).reset_index()

sodle_agence_agg = df_final.groupby("code_agence").agg(
    sodle=("AvailableBalance", "sum"),
).reset_index()

agence_produit_agg = df_final.groupby(["code_agence", "Product"]).agg(
    total_balance=("AvailableBalance", "sum"),
    compte_moyen=("AvailableBalance", "mean"),
    nb_comptes=("num_compte", "count")
).reset_index()

top_gestionaire = df_final.groupby(["Branch"]).agg(
    totale_solde =("AvailableBalance","sum")
).reset_index()

create_table_sql = """
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
"""
cursor.execute(create_table_sql)
conn.commit()


df_sql = df_final.rename(columns={
    "noCompte": "nocompte",
    "AvailableBalance": "available_balance",
    "OpeningDate": "opening_date",
    "Report_date_to": "report_date_to",
    "gestionnaire de compte": "gestionnaire"
})


insert_sql = """
INSERT INTO account_data (
    code, nocompte, code_banque, code_agence, branch,
    code_produit, product, num_compte, rib,
    available_balance, opening_date, report_date_to,
    gestionnaire
) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
"""


data_to_insert = df_sql[
    [
        "Code", "nocompte", "code_banque", "code_agence", "Branch",
        "code_produit", "Product", "num_compte", "rib",
        "available_balance", "opening_date", "report_date_to",
        "gestionnaire"
    ]
].values.tolist()

cursor.executemany(insert_sql, data_to_insert)
conn.commit()
