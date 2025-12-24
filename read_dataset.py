import pandas as pd
from config import DATASET_PATH

def load_datasets():
    df_source = pd.read_excel(DATASET_PATH, sheet_name="data source")
    df_product = pd.read_excel(DATASET_PATH, sheet_name="product mapping")
    df_branch = pd.read_excel(DATASET_PATH, sheet_name="branch mapping")
    return df_source, df_product, df_branch
