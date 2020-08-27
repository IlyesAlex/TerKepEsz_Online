import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.cm as cm

fname = 'stimuli_tables/encoding_trials_0.csv'
stim_table = pd.read_csv(fname, sep='\,', lineterminator='\n')

# for i in range(len(stim_table)):
plt.plot(stim_table['Xcoordinate'], stim_table['Ycoordinate'])
plt.show()
colors = cm.rainbow(np.linspace(0, 1, len(stim_table)))
for i, c in zip(range(len(stim_table)), colors):
    plt.scatter(stim_table['Xcoordinate'][i], stim_table['Ycoordinate'][i], marker = 'd', color=c)
plt.show()

for i in range(12):
    plt.scatter(stim_table['Xcoordinate'][i], stim_table['Ycoordinate'][i])
    plt.scatter(stim_table['Xcoordinate_lure1'][i], stim_table['Ycoordinate_lure1'][i], marker = 'x')
    plt.scatter(stim_table['Xcoordinate_foil'][i], stim_table['Ycoordinate_foil'][i], marker = 'd')
    plt.plot([stim_table['Xcoordinate'][i], stim_table['Xcoordinate_lure1'][i], stim_table['Xcoordinate_foil'][i]], [stim_table['Ycoordinate'][i], stim_table['Ycoordinate_lure1'][i], stim_table['Ycoordinate_foil'][i]], linestyle='--')

plt.grid()
plt.show()