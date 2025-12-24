def compute_aggregates(df):
    agence_agg = df.groupby("code_agence").agg(
        total_balance=("AvailableBalance","sum"),
        nombre_comptes=("num_compte","count")
    ).reset_index()

    agence_produit_agg = df.groupby(
        ["code_agence","Product"]
    ).agg(
        total_balance=("AvailableBalance","sum"),
        compte_moyen=("AvailableBalance","mean"),
        nb_comptes=("num_compte","count")
    ).reset_index()

    return agence_agg, agence_produit_agg
