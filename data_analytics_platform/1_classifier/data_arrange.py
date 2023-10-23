#import data analytics package
import pandas as pd

# input- raw-data-dataframe
# create a dataframe as df. Used "data.csv" as a placeholder.
df = pd.read_csv("data.csv")
#peek into the resulting dataframe
print(df.head())

#should return a dataframe for the preprocessing layer.