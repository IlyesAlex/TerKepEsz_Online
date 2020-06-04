### Packages
import pandas as pd
import random as r

### Class
class Trial ():

    def __init__(self, num, trialtype, stimtype):
        self.trialnum = num #the number of the trial
        self.trialtype = trialtype
        self.stimtype = stimtype
        self.target_x = r.randint(1,6) #Trial() takes a list as arguement that give it the two target coordinates, x and y
        self.target_y = r.randint(1,4)
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


## Code
base = 25
grid_len = 150


stim_practice_enc = pd.read_csv("encoding_practice_template.csv")
stim_practice_rec = pd.read_csv("recognition_practice_template.csv")
print(stim_practice_enc)


enc_trials = []
for trial in stim_practice_enc.index:
    trial_curr = Trial(trial, stim_practice_enc.at[trial, "TrialType"], stim_practice_enc.at[trial, "StimType"])
    enc_trials.append(trial_curr)

    stim_practice_enc.at[trial, "CurrentX"] = coordinate_maker (base, grid_len, trial_curr.target_x, "x")
    stim_practice_enc.at[trial, "CurrentY"] = coordinate_maker (base, grid_len, trial_curr.target_y, "y")

for enc in enc_trials:
    print(enc.stimtype, enc.trialtype)

for trial in stim_practice_rec.index:
    trial_type_rec = stim_practice_rec.at[trial, "TrialType"]
    stim_type_rec = stim_practice_rec.at[trial, "StimType"]
    print("nyomtatok", stim_type_rec, trial_type_rec)
    enc_pair = next((x for x in enc_trials if x.trialtype == trial_type_rec and x.stimtype == stim_type_rec), None)

    lure_coord_x, lure_coord_y = enc_pair.destination_maker(enc_pair.lures)
    foil_coord_x, foil_coord_y = enc_pair.destination_maker(enc_pair.foils)


    if trial_type_rec == "OBJ" or stim_type_rec == "TARGET":
        stim_practice_rec.at[trial, "CurrentX"] = coordinate_maker (base, grid_len, enc_pair.target_x, "x")
        stim_practice_rec.at[trial, "CurrentY"] = coordinate_maker (base, grid_len, enc_pair.target_y, "y")
    elif trial_type_rec == "LOC" and stim_type_rec == "LURE":
        stim_practice_rec.at[trial, "CurrentX"] = coordinate_maker (base, grid_len, lure_coord_x, "x")
        stim_practice_rec.at[trial, "CurrentY"] = coordinate_maker (base, grid_len, lure_coord_y, "y")
    elif trial_type_rec == "LOC" and stim_type_rec == "FOIL":
        stim_practice_rec.at[trial, "CurrentX"] = coordinate_maker (base, grid_len, foil_coord_x, "x")
        stim_practice_rec.at[trial, "CurrentY"] = coordinate_maker (base, grid_len, foil_coord_y, "y")

#export to csv
stim_practice_enc.to_csv(r"stimuli_tables/encoding_practice_trials.csv", index = False)
stim_practice_rec.to_csv(r"stimuli_tables/recognition_practice_trials.csv", index = False)
