#package
import pandas as pd

#function
def pix_to_norm_func (coord, xy):
    if xy == "x":
        coord_new = coord / (screen_len // 2)
    else:
        coord_new = coord / (screen_height // 2)

    return coord_new

#base
screen_len = 1920
screen_height = 1080

#code
filestr = "encoding_practice_trials.csv"
pix_file = pd.read_csv(filestr)
for trial in pix_file.index:
    new_x = pix_to_norm_func(pix_file.at[trial, "CurrentX"], "x")
    new_y = pix_to_norm_func(pix_file.at[trial, "CurrentY"], "y")
    pix_file.at[trial, "CurrentX"] = "{:.4f}".format(new_x)
    pix_file.at[trial, "CurrentY"] = "{:.4f}".format(new_y)

pix_file.to_csv("2_" + filestr)
