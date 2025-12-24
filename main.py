from read_dataset import load_datasets
from data_transformer import transform_data
from data_aggregator import compute_aggregates
from database import get_connection, create_table, insert_data

df_source, df_product, df_branch = load_datasets()
df_final = transform_data(df_source, df_product, df_branch)

agence_agg, agence_produit_agg = compute_aggregates(df_final)

conn = get_connection()
cursor = conn.cursor()
create_table(cursor)
insert_data(cursor, df_final)
conn.commit()
