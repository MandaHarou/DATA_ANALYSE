from data_aggregator import compute_aggregates
from data_transformer import transform_data
from database import create_table, get_connection, insert_data
from read_dataset import load_datasets


def main():
    try:
        # 1️⃣ Load datasets
        df_source, df_product, df_branch = load_datasets()

        # 2️⃣ Transform
        df_final = transform_data(df_source, df_product, df_branch)

        # 3️⃣ Aggregations
        agence_agg, agence_produit_agg = compute_aggregates(df_final)

        # 4️⃣ DB connection
        conn = get_connection()
        if conn is None:
            raise Exception("Database connection returned None")

        cursor = conn.cursor()
        print("✅ Database connection OK")

        # 5️⃣ Create table
        create_table(cursor)

        # 6️⃣ Insert data
        insert_data(cursor, df_final)

        # 7️⃣ Commit
        conn.commit()
        print("✅ Data successfully inserted")

    except Exception as e:
        print(f"❌ ETL FAILED: {e}")

    finally:
        # 8️⃣ Clean close
        try:
            if cursor:
                cursor.close()
            if conn:
                conn.close()
            print("🔒 Database connection closed")
        except:
            pass


if __name__ == "__main__":
    main()
