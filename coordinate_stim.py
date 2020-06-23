### Packages
import pandas as pd
import random as r

### Class, function
class Trial ():

    def __init__(self, num, combo):
        self.trialnum = num #the number of the trial
        self.target_x = combo[0] #Trial() takes a list as arguement that give it the two target coordinates, x and y
        self.target_y = combo[1]
        self.lures = [1] #you can specify the distances a lure can get
        self.foils = self.foil_calc() #it calculates possible foil distances based on target x and y

    #destination_maker selects an x and a y coordinate based on a distance randomly chosen from the possible distances (lures or foils)
    def destination_maker (self, destinations):
        direction_matrix = [[1,-1], [-1,1], [1,1], [-1,-1]] #these are the possible combinations of "directions" -> minus goes left/up; plus goes right/down
        destination = r.choice(destinations) #randomly chosen distance
        permutation_matrix = Trial.permutation_maker(destination) #it makes all the possible permutations of distances (e.g. 6 can be 1,5 or 3,3, etc...)

        #it then combines the direction possibilities with the distance permutations and gets every location that is &destination away from target
        sum_versions = []
        for direction_type in direction_matrix:
            sum_version = [permutation*direction for permutations in permutation_matrix for permutation, direction in zip(permutations, direction_type)]
            sum_version = [sum_version[x:x+2] for x in range(0, len(sum_version),2)]
            for sum_ele in sum_version:
                sum_versions.append(sum_ele)

        #it then randomly chooses a location, that is in bound, and returns the x and y coordinates
        while len(sum_versions) > 0:
            chosen_version = sum_versions.pop(r.randrange(len(sum_versions)))
            new_x = self.target_x + chosen_version[0]
            new_y = self.target_y + chosen_version[1]
            if new_x > 6 or new_x < 1 or new_y > 4 or new_y < 1:
                continue
            else:
                break

        return new_x, new_y

    #makes permutations for a single distance value in two coordinate values. (E.g.: 6 could be 1,5 or 2,4, or 3,3, etc..)
    @staticmethod
    def permutation_maker (step_num):
        permutations = []
        for n in range(step_num):
            permutation = [n, step_num-n]
            permutation_reverse = [step_num-n, n]
            if permutation not in permutations:
                permutations.append(permutation)
            if permutation_reverse not in permutations:
                permutations.append(permutation_reverse)

        return permutations

    #calculates possible foil distance based on target x and target y. (E.g.: 3,3 can only have a foild of 5 distance, while 1,1 could have one 8 steps away)
    def foil_calc (self):
        possibilities = [5]
        if (self.target_x == 3 or self.target_x == 4) and (self.target_y == 4 or self.target_y == 1):
                possibilities.append(6)

        if self.target_x == 2 or self.target_x == 5:
            possibilities.append(6)
            if self.target_y == 4 or self.target_y == 1:
                possibilities.append(7)

        if self.target_x == 1 or self.target_x == 6:
            possibilities.append(6)
            possibilities.append(7)
            if self.target_y == 4 or self.target_y == 1:
                possibilities.append(8)

        return possibilities

#makes pixel-wise coordinate from a value that signifies the location in the grid
def coordinate_maker (base, grid_len, coord, coord_type):
    coordinate = base + coord*grid_len

    if coord_type == "x":
        coordinate -= 550
    elif coord_type == "y":
        coordinate -= 400

    return coordinate


### Code
#Pixel-values:
base = 25
grid_len = 150

#preparing stimulus list
stim_fname = "StimuliTable-Encoding_3-runs_40-pairs_8-discrete-loc_12345-delays.xlsx"
stim_table = pd.read_excel(stim_fname)

#making a dictionary of possible x-y coordinate combinations
combo_dicts = {}
i = 0
for x in range(1,7):
    for y in range(1,5):
        combo_dicts[i] = [x,y]
        i +=1

#making evenly distributed list with 0-23 values, for choosing combinations from dict
random_combos = list(range(0,24))*6
r.shuffle(random_combos) #shuffle to randomize

#make new coordinates for each trial pairs
for trial in stim_table.index:
    #Skip where the order is second, as they are manipulated locations
    if int(stim_table.at[trial, "Order"]) == 2:
        continue

    #get the delay value for placing the same coordinates to delays
    delay_val = int(stim_table.at[trial,"Delay"]) + 1
    #choosing a random combination of x and y coordinates
    random_combo = random_combos.pop(r.randint(0,len(random_combos)-1))
    combo = combo_dicts[random_combo]
    #making a Trial type object
    trial_curr = Trial(trial, combo)
    #choosing target coordinates
    stim_table.at[trial, "Xcoordinate"] = coordinate_maker(base, grid_len, trial_curr.target_x, "x")
    stim_table.at[trial, "Ycoordinate"] = coordinate_maker(base, grid_len, trial_curr.target_y, "y")
    # making lures and foils
    lure1_coord_x, lure1_coord_y =  trial_curr.destination_maker(trial_curr.lures)
    lure2_coord_x, lure2_coord_y = trial_curr.destination_maker(trial_curr.lures)
    while lure1_coord_x == lure2_coord_x and lure1_coord_y == lure2_coord_y:
        lure2_coord_x, lure2_coord_y = trial_curr.destination_maker(trial_curr.lures)
    foil_coord_x, foil_coord_y = trial_curr.destination_maker(trial_curr.foils)

    #assigning them to table
    stim_table.at[trial, "Xcoordinate_lure1"] = coordinate_maker(base, grid_len, lure1_coord_x, "x")
    stim_table.at[trial, "Ycoordinate_lure1"] = coordinate_maker(base, grid_len, lure1_coord_y, "y")
    stim_table.at[trial, "Xcoordinate_lure2"] = coordinate_maker(base, grid_len, lure2_coord_x, "x")
    stim_table.at[trial, "Ycoordinate_lure2"] = coordinate_maker(base, grid_len, lure2_coord_y, "y")
    stim_table.at[trial, "Xcoordinate_foil"] = coordinate_maker(base, grid_len, foil_coord_x, "x")
    stim_table.at[trial, "Ycoordinate_foil"] = coordinate_maker(base, grid_len, foil_coord_y, "y")

    #assigning to delayed pairs
    stim_table.at[trial + delay_val, "Xcoordinate"] = coordinate_maker(base, grid_len, trial_curr.target_x, "x")
    stim_table.at[trial + delay_val, "Ycoordinate"] = coordinate_maker(base, grid_len, trial_curr.target_y, "y")
    stim_table.at[trial + delay_val, "Xcoordinate_lure1"] = coordinate_maker(base, grid_len, lure1_coord_x, "x")
    stim_table.at[trial + delay_val, "Ycoordinate_lure1"] = coordinate_maker(base, grid_len, lure1_coord_y, "y")
    stim_table.at[trial + delay_val, "Xcoordinate_lure2"] = coordinate_maker(base, grid_len, lure2_coord_x, "x")
    stim_table.at[trial + delay_val, "Ycoordinate_lure2"] = coordinate_maker(base, grid_len, lure2_coord_y, "y")
    stim_table.at[trial + delay_val, "Xcoordinate_foil"] = coordinate_maker(base, grid_len, foil_coord_x, "x")
    stim_table.at[trial + delay_val, "Ycoordinate_foil"] = coordinate_maker(base, grid_len, foil_coord_y, "y")


#print for fun
with pd.option_context('display.max_rows', None, 'display.max_columns', None):
    print(stim_table)

#export to excel
stim_new_filename = stim_fname.split(".")[0] + "_new." + stim_fname.split(".")[1]
stim_table.to_excel(stim_new_filename, sheet_name='Stimuli')


