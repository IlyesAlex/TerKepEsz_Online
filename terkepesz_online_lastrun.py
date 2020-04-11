#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2020.1.0),
    on Sat 11 Apr 2020 05:05:32 PM CEST
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2020.1.0'
expName = 'trk-encoding'  # from the Builder filename that created this script
expInfo = {'participant': '', 'session': '001'}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='/home/zsuzsanna/Documents/TRK/experiment/terkepesz_online/terkepesz_online_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run before the window creation

# Setup the Window
win = visual.Window(
    size=[1920, 1080], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='AOC', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "select_stimuli_table"
select_stimuli_tableClock = core.Clock()
setup_text = visual.TextStim(win=win, name='setup_text',
    text='default text',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
tables = [0,1]
selected = np.random.choice(tables)
selected = str(selected)
stimuli_table = 'stimuli_tables/encoding_trials_'+ selected + '.csv'
selection = [0,1,2,3]

# Initialize components for Routine "trials_run_1"
trials_run_1Clock = core.Clock()
main_image = visual.ImageStim(
    win=win,
    name='main_image', units='pix', 
    image='sin', mask=None,
    ori=0, pos=[0,0], size=(300, 300),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=0.0)

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "select_stimuli_table"-------
continueRoutine = True
routineTimer.add(1.000000)
# update component parameters for each repeat
setup_text.setText(stimuli_table)
# keep track of which components have finished
select_stimuli_tableComponents = [setup_text]
for thisComponent in select_stimuli_tableComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
select_stimuli_tableClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "select_stimuli_table"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = select_stimuli_tableClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=select_stimuli_tableClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *setup_text* updates
    if setup_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        setup_text.frameNStart = frameN  # exact frame index
        setup_text.tStart = t  # local t and not account for scr refresh
        setup_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(setup_text, 'tStartRefresh')  # time at next scr refresh
        setup_text.setAutoDraw(True)
    if setup_text.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > setup_text.tStartRefresh + 1.0-frameTolerance:
            # keep track of stop time/frame for later
            setup_text.tStop = t  # not accounting for scr refresh
            setup_text.frameNStop = frameN  # exact frame index
            win.timeOnFlip(setup_text, 'tStopRefresh')  # time at next scr refresh
            setup_text.setAutoDraw(False)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in select_stimuli_tableComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "select_stimuli_table"-------
for thisComponent in select_stimuli_tableComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('setup_text.started', setup_text.tStartRefresh)
thisExp.addData('setup_text.stopped', setup_text.tStopRefresh)

# set up handler to look after randomisation of conditions etc
run_1 = data.TrialHandler(nReps=1, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions(stimuli_table, selection=selection),
    seed=None, name='run_1')
thisExp.addLoop(run_1)  # add the loop to the experiment
thisRun_1 = run_1.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisRun_1.rgb)
if thisRun_1 != None:
    for paramName in thisRun_1:
        exec('{} = thisRun_1[paramName]'.format(paramName))

for thisRun_1 in run_1:
    currentLoop = run_1
    # abbreviate parameter names if possible (e.g. rgb = thisRun_1.rgb)
    if thisRun_1 != None:
        for paramName in thisRun_1:
            exec('{} = thisRun_1[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "trials_run_1"-------
    continueRoutine = True
    routineTimer.add(1.000000)
    # update component parameters for each repeat
    main_image.setPos((Xcoordinate,Ycoordinate))
    main_image.setImage(TripletMemberA)
    # keep track of which components have finished
    trials_run_1Components = [main_image]
    for thisComponent in trials_run_1Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    trials_run_1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "trials_run_1"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = trials_run_1Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=trials_run_1Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *main_image* updates
        if main_image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            main_image.frameNStart = frameN  # exact frame index
            main_image.tStart = t  # local t and not account for scr refresh
            main_image.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(main_image, 'tStartRefresh')  # time at next scr refresh
            main_image.setAutoDraw(True)
        if main_image.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > main_image.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                main_image.tStop = t  # not accounting for scr refresh
                main_image.frameNStop = frameN  # exact frame index
                win.timeOnFlip(main_image, 'tStopRefresh')  # time at next scr refresh
                main_image.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trials_run_1Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "trials_run_1"-------
    for thisComponent in trials_run_1Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    run_1.addData('main_image.started', main_image.tStartRefresh)
    run_1.addData('main_image.stopped', main_image.tStopRefresh)
    thisExp.nextEntry()
    
# completed 1 repeats of 'run_1'


# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
