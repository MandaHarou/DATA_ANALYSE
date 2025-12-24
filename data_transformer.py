import pandas as pd

def transform_data(df_source, df_product, df_branch):
    df_source[['code_banque','code_agence','compte','rib']] = \
        df_source['noCompte'].str.split(' ', expand=True)

    df_source['code_produit'] = df_source['compte'].str[0].astype(int)
    df_source['num_compte'] = df_source['compte'].str[1:]

    df_source["AccountStatus"] = (
        df_source["AccountStatus"]
        .astype(str).str.strip().str.lower()
    )

    df_source = df_source[df_source["AccountStatus"] == "active"]

    df = df_source.merge(
        df_product,
        left_on="code_produit",
        right_on="productCode",
        how="left"
    )

    df['code_agence'] = df['code_agence'].astype(int)
    df_branch['CodeBranch'] = df_branch['CodeBranch'].astype(int)

    df = df.merge(
        df_branch,
        left_on="code_agence",
        right_on="CodeBranch",
        how="left"
    )

    df["OpeningDate"] = pd.to_datetime(df["OpeningDate"], errors="coerce")
    df["Report_date_to"] = pd.to_datetime(df["Report_date_to"], errors="coerce")
    df["AvailableBalance"] = pd.to_numeric(df["AvailableBalance"], errors="coerce")

    return df
