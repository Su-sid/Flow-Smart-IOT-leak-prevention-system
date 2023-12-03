
# receives a data frame for preprocessing and centering 
def centering(df)
    #center the values in each column of the DataFrame
    df_centered = df.apply(lambda x: x-x.mean())

    #return centered DataFrame as output
    return df_centered
 # output- centered-data-dataframe as  df_centered