import json
import pandas as pd


sheet_url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQx03xDuIP9Uljg8EUZtIrboBxfp_gxMsGcv0Du0KWSmmJoss-pPFEONISKbw1qOnoDMf-rvXVmB02S/pub?gid=838061765&single=true&output=csv"


def fetch_books(sheet_url):
    df = pd.read_csv(sheet_url)

    list_columns = ["genre", "awards", "images"]
    for col in list_columns:
        df[col] = df[col].fillna("").str.split(",")
        df[col] = df[col].apply(
            lambda x: (
                [item.strip() for item in x if item.strip()]
                if isinstance(x, list)
                else []
            )
        )

    books = json.loads(df.to_json(orient="records"))

    with open("books.json", "w+") as f:
        json.dump(books, f, indent=2)


fetch_books(sheet_url)
