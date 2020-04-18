#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2020.1.0),
    on Sat 18 Apr 2020 03:14:48 PM CEST
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
    monitor='AOC', color=[0.804,0.804,0.961], colorSpace='rgb',
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

# Initialize components for Routine "consent"
consentClock = core.Clock()

# Initialize components for Routine "lab_introduction"
lab_introductionClock = core.Clock()
lab_thanks = visual.TextStim(win=win, name='lab_thanks',
    text='Köszönjük, hogy hozzájárul kutatócsoportunk munkájához azzal, hogy részt vesz vizsgálatunkban!\n\n',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_resp = keyboard.Keyboard()

# Initialize components for Routine "start_encoding"
start_encodingClock = core.Clock()
setup_text = visual.TextStim(win=win, name='setup_text',
    text='default text',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
tables = [0]
selected = np.random.choice(tables)
selected = str(selected)
stimuli_table = 'stimuli_tables/encoding_trials_'+ selected + '.csv'


# Initialize components for Routine "enc_instructions_1"
enc_instructions_1Clock = core.Clock()
text = visual.TextStim(win=win, name='text',
    text='Ön ennek a modern képgalériának a kurátora. \n\nA legújabb kiállításra a vártnál több kép érkezett.\n\nKurátorként az Ön feladata lesz eldönteni, mely képeket válogatjuk be a kiállított darabok közé, és hogy a kép illeszkedik-e a galéria adott pontjára. \n\nAz Ön ideje nagyon drága a galériának, így a döntésre egy-egy képről csak 3 másodperce lesz.\n\nA folytatáshoz nyomja le a jobb nyilat.\n',
    font='Arial',
    pos=(-0.4, 0), height=0.04, wrapWidth=0.9, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
image = visual.ImageStim(
    win=win,
    name='image', units='pix', 
    image='stimuli/GalleryBuildingFromOutside.jpg', mask=None,
    ori=0, pos=(450, 0.0), size=(600, 450),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-1.0)
key_resp_3 = keyboard.Keyboard()

# Initialize components for Routine "enc_instructions_2"
enc_instructions_2Clock = core.Clock()
text_2 = visual.TextStim(win=win, name='text_2',
    text='Ez a galéria térképe felülről, nézze meg figyelmesen. \n\nA feladat során a képek a térképre vetítve jelennek meg, azon a helyen, ahol kiállításra kerülhetnek.\n\nDöntse el a képekről, hogy ki legyenek-e állítva a bemutatott helyen. \n\nMinden képet nézzen meg figyelmesen, és minden képre adjon választ. \n\nA folytatáshoz nyomja le a jobb nyilat.',
    font='Arial',
    pos=(-0.5, 0), height=0.04, wrapWidth=0.7, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
image_2 = visual.ImageStim(
    win=win,
    name='image_2', units='pix', 
    image='stimuli/GalleryInfo.jpg', mask=None,
    ori=0, pos=(425, 0), size=(1000,750),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-1.0)
key_resp_2 = keyboard.Keyboard()

# Initialize components for Routine "start_enc_run"
start_enc_runClock = core.Clock()
enc_run_start = visual.TextStim(win=win, name='enc_run_start',
    text='Kezdődik a feladat...',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);

# Initialize components for Routine "enc_fx"
enc_fxClock = core.Clock()
map_enc_fx = visual.ImageStim(
    win=win,
    name='map_enc_fx', units='pix', 
    image='stimuli/GalleryPlanInside.jpg', mask=None,
    ori=0, pos=(0, -25), size=(1040, 1000),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=0.0)
enc_fx_cross = visual.TextStim(win=win, name='enc_fx_cross',
    text='+',
    font='Arial',
    units='pix', pos=[0,0], height=50, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
enc_key_resp_fx = keyboard.Keyboard()

# Initialize components for Routine "enc_trial"
enc_trialClock = core.Clock()
map_enc_trial = visual.ImageStim(
    win=win,
    name='map_enc_trial', units='pix', 
    image='stimuli/GalleryPlanInside.jpg', mask=None,
    ori=0, pos=(0, -25), size=(1040, 1000),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=0.0)
enc_main_image = visual.ImageStim(
    win=win,
    name='enc_main_image', units='pix', 
    image='sin', mask=None,
    ori=0, pos=[0,0], size=(300, 300),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-1.0)
enc_key_resp_trial = keyboard.Keyboard()

# Initialize components for Routine "end_enc_run"
end_enc_runClock = core.Clock()
enc_run_end = visual.TextStim(win=win, name='enc_run_end',
    text='default text',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
enc_run_end_response = keyboard.Keyboard()

# Initialize components for Routine "inter_task_break"
inter_task_breakClock = core.Clock()

# Initialize components for Routine "start_recognition"
start_recognitionClock = core.Clock()
text_3 = visual.TextStim(win=win, name='text_3',
    text='Második feladat\nKépfelismerés',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);

# Initialize components for Routine "start_rec_run"
start_rec_runClock = core.Clock()
rec_run_start = visual.TextStim(win=win, name='rec_run_start',
    text='Kezdődik a feladat...',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);

# Initialize components for Routine "rec_fx"
rec_fxClock = core.Clock()
map_rec_fx = visual.ImageStim(
    win=win,
    name='map_rec_fx', units='pix', 
    image='stimuli/GalleryPlanInside.jpg', mask=None,
    ori=0, pos=(0,-25), size=(1040, 1000),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=0.0)
rec_fx_cross = visual.TextStim(win=win, name='rec_fx_cross',
    text='+',
    font='Arial',
    units='pix', pos=[0,0], height=50, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
rec_key_resp_fx = keyboard.Keyboard()

# Initialize components for Routine "rec_trial"
rec_trialClock = core.Clock()
map_rec_trial = visual.ImageStim(
    win=win,
    name='map_rec_trial', units='pix', 
    image='stimuli/GalleryPlanInside.jpg', mask=None,
    ori=0, pos=(0, -25), size=(1040, 1000),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=0.0)
main_image_rec = visual.ImageStim(
    win=win,
    name='main_image_rec', units='pix', 
    image='sin', mask=None,
    ori=0, pos=[0,0], size=(300,300),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-1.0)
rec_key_resp_trial = keyboard.Keyboard()

# Initialize components for Routine "end_rec_run"
end_rec_runClock = core.Clock()
rec_run_end = visual.TextStim(win=win, name='rec_run_end',
    text='default text',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
rec_run_end_response = keyboard.Keyboard()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "consent"-------
continueRoutine = True
# update component parameters for each repeat
# keep track of which components have finished
consentComponents = []
for thisComponent in consentComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
consentClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "consent"-------
while continueRoutine:
    # get current time
    t = consentClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=consentClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in consentComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "consent"-------
for thisComponent in consentComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "consent" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "lab_introduction"-------
continueRoutine = True
routineTimer.add(120.000000)
# update component parameters for each repeat
key_resp.keys = []
key_resp.rt = []
_key_resp_allKeys = []
# keep track of which components have finished
lab_introductionComponents = [lab_thanks, key_resp]
for thisComponent in lab_introductionComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
lab_introductionClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "lab_introduction"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = lab_introductionClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=lab_introductionClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *lab_thanks* updates
    if lab_thanks.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        lab_thanks.frameNStart = frameN  # exact frame index
        lab_thanks.tStart = t  # local t and not account for scr refresh
        lab_thanks.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(lab_thanks, 'tStartRefresh')  # time at next scr refresh
        lab_thanks.setAutoDraw(True)
    if lab_thanks.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > lab_thanks.tStartRefresh + 120.0-frameTolerance:
            # keep track of stop time/frame for later
            lab_thanks.tStop = t  # not accounting for scr refresh
            lab_thanks.frameNStop = frameN  # exact frame index
            win.timeOnFlip(lab_thanks, 'tStopRefresh')  # time at next scr refresh
            lab_thanks.setAutoDraw(False)
    
    # *key_resp* updates
    waitOnFlip = False
    if key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp.frameNStart = frameN  # exact frame index
        key_resp.tStart = t  # local t and not account for scr refresh
        key_resp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp, 'tStartRefresh')  # time at next scr refresh
        key_resp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > key_resp.tStartRefresh + 120-frameTolerance:
            # keep track of stop time/frame for later
            key_resp.tStop = t  # not accounting for scr refresh
            key_resp.frameNStop = frameN  # exact frame index
            win.timeOnFlip(key_resp, 'tStopRefresh')  # time at next scr refresh
            key_resp.status = FINISHED
    if key_resp.status == STARTED and not waitOnFlip:
        theseKeys = key_resp.getKeys(keyList=['right'], waitRelease=False)
        _key_resp_allKeys.extend(theseKeys)
        if len(_key_resp_allKeys):
            key_resp.keys = _key_resp_allKeys[-1].name  # just the last key pressed
            key_resp.rt = _key_resp_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in lab_introductionComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "lab_introduction"-------
for thisComponent in lab_introductionComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('lab_thanks.started', lab_thanks.tStartRefresh)
thisExp.addData('lab_thanks.stopped', lab_thanks.tStopRefresh)
# check responses
if key_resp.keys in ['', [], None]:  # No response was made
    key_resp.keys = None
thisExp.addData('key_resp.keys',key_resp.keys)
if key_resp.keys != None:  # we had a response
    thisExp.addData('key_resp.rt', key_resp.rt)
thisExp.addData('key_resp.started', key_resp.tStartRefresh)
thisExp.addData('key_resp.stopped', key_resp.tStopRefresh)
thisExp.nextEntry()

# ------Prepare to start Routine "start_encoding"-------
continueRoutine = True
routineTimer.add(1.500000)
# update component parameters for each repeat
setup_text.setText('Első feladat\nGaléria berendezés')
start = 0
end = 0
step = 1
n_runs = 3
run_counter = 0
# keep track of which components have finished
start_encodingComponents = [setup_text]
for thisComponent in start_encodingComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
start_encodingClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "start_encoding"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = start_encodingClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=start_encodingClock)
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
        if tThisFlipGlobal > setup_text.tStartRefresh + 1.5-frameTolerance:
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
    for thisComponent in start_encodingComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "start_encoding"-------
for thisComponent in start_encodingComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('setup_text.started', setup_text.tStartRefresh)
thisExp.addData('setup_text.stopped', setup_text.tStopRefresh)

# ------Prepare to start Routine "enc_instructions_1"-------
continueRoutine = True
routineTimer.add(300.000000)
# update component parameters for each repeat
key_resp_3.keys = []
key_resp_3.rt = []
_key_resp_3_allKeys = []
# keep track of which components have finished
enc_instructions_1Components = [text, image, key_resp_3]
for thisComponent in enc_instructions_1Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
enc_instructions_1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "enc_instructions_1"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = enc_instructions_1Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=enc_instructions_1Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text* updates
    if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text.frameNStart = frameN  # exact frame index
        text.tStart = t  # local t and not account for scr refresh
        text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
        text.setAutoDraw(True)
    if text.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > text.tStartRefresh + 300.0-frameTolerance:
            # keep track of stop time/frame for later
            text.tStop = t  # not accounting for scr refresh
            text.frameNStop = frameN  # exact frame index
            win.timeOnFlip(text, 'tStopRefresh')  # time at next scr refresh
            text.setAutoDraw(False)
    
    # *image* updates
    if image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image.frameNStart = frameN  # exact frame index
        image.tStart = t  # local t and not account for scr refresh
        image.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image, 'tStartRefresh')  # time at next scr refresh
        image.setAutoDraw(True)
    if image.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > image.tStartRefresh + 300.0-frameTolerance:
            # keep track of stop time/frame for later
            image.tStop = t  # not accounting for scr refresh
            image.frameNStop = frameN  # exact frame index
            win.timeOnFlip(image, 'tStopRefresh')  # time at next scr refresh
            image.setAutoDraw(False)
    
    # *key_resp_3* updates
    waitOnFlip = False
    if key_resp_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_3.frameNStart = frameN  # exact frame index
        key_resp_3.tStart = t  # local t and not account for scr refresh
        key_resp_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_3, 'tStartRefresh')  # time at next scr refresh
        key_resp_3.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_3.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_3.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_3.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > key_resp_3.tStartRefresh + 300.0-frameTolerance:
            # keep track of stop time/frame for later
            key_resp_3.tStop = t  # not accounting for scr refresh
            key_resp_3.frameNStop = frameN  # exact frame index
            win.timeOnFlip(key_resp_3, 'tStopRefresh')  # time at next scr refresh
            key_resp_3.status = FINISHED
    if key_resp_3.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_3.getKeys(keyList=['right'], waitRelease=False)
        _key_resp_3_allKeys.extend(theseKeys)
        if len(_key_resp_3_allKeys):
            key_resp_3.keys = _key_resp_3_allKeys[-1].name  # just the last key pressed
            key_resp_3.rt = _key_resp_3_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in enc_instructions_1Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "enc_instructions_1"-------
for thisComponent in enc_instructions_1Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text.started', text.tStartRefresh)
thisExp.addData('text.stopped', text.tStopRefresh)
thisExp.addData('image.started', image.tStartRefresh)
thisExp.addData('image.stopped', image.tStopRefresh)
# check responses
if key_resp_3.keys in ['', [], None]:  # No response was made
    key_resp_3.keys = None
thisExp.addData('key_resp_3.keys',key_resp_3.keys)
if key_resp_3.keys != None:  # we had a response
    thisExp.addData('key_resp_3.rt', key_resp_3.rt)
thisExp.addData('key_resp_3.started', key_resp_3.tStartRefresh)
thisExp.addData('key_resp_3.stopped', key_resp_3.tStopRefresh)
thisExp.nextEntry()

# ------Prepare to start Routine "enc_instructions_2"-------
continueRoutine = True
routineTimer.add(300.000000)
# update component parameters for each repeat
key_resp_2.keys = []
key_resp_2.rt = []
_key_resp_2_allKeys = []
# keep track of which components have finished
enc_instructions_2Components = [text_2, image_2, key_resp_2]
for thisComponent in enc_instructions_2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
enc_instructions_2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "enc_instructions_2"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = enc_instructions_2Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=enc_instructions_2Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_2* updates
    if text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_2.frameNStart = frameN  # exact frame index
        text_2.tStart = t  # local t and not account for scr refresh
        text_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
        text_2.setAutoDraw(True)
    if text_2.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > text_2.tStartRefresh + 300.0-frameTolerance:
            # keep track of stop time/frame for later
            text_2.tStop = t  # not accounting for scr refresh
            text_2.frameNStop = frameN  # exact frame index
            win.timeOnFlip(text_2, 'tStopRefresh')  # time at next scr refresh
            text_2.setAutoDraw(False)
    
    # *image_2* updates
    if image_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_2.frameNStart = frameN  # exact frame index
        image_2.tStart = t  # local t and not account for scr refresh
        image_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_2, 'tStartRefresh')  # time at next scr refresh
        image_2.setAutoDraw(True)
    if image_2.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > image_2.tStartRefresh + 300.0-frameTolerance:
            # keep track of stop time/frame for later
            image_2.tStop = t  # not accounting for scr refresh
            image_2.frameNStop = frameN  # exact frame index
            win.timeOnFlip(image_2, 'tStopRefresh')  # time at next scr refresh
            image_2.setAutoDraw(False)
    
    # *key_resp_2* updates
    waitOnFlip = False
    if key_resp_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_2.frameNStart = frameN  # exact frame index
        key_resp_2.tStart = t  # local t and not account for scr refresh
        key_resp_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_2, 'tStartRefresh')  # time at next scr refresh
        key_resp_2.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_2.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_2.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > key_resp_2.tStartRefresh + 300.0-frameTolerance:
            # keep track of stop time/frame for later
            key_resp_2.tStop = t  # not accounting for scr refresh
            key_resp_2.frameNStop = frameN  # exact frame index
            win.timeOnFlip(key_resp_2, 'tStopRefresh')  # time at next scr refresh
            key_resp_2.status = FINISHED
    if key_resp_2.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_2.getKeys(keyList=['right'], waitRelease=False)
        _key_resp_2_allKeys.extend(theseKeys)
        if len(_key_resp_2_allKeys):
            key_resp_2.keys = _key_resp_2_allKeys[-1].name  # just the last key pressed
            key_resp_2.rt = _key_resp_2_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in enc_instructions_2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "enc_instructions_2"-------
for thisComponent in enc_instructions_2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_2.started', text_2.tStartRefresh)
thisExp.addData('text_2.stopped', text_2.tStopRefresh)
thisExp.addData('image_2.started', image_2.tStartRefresh)
thisExp.addData('image_2.stopped', image_2.tStopRefresh)
# check responses
if key_resp_2.keys in ['', [], None]:  # No response was made
    key_resp_2.keys = None
thisExp.addData('key_resp_2.keys',key_resp_2.keys)
if key_resp_2.keys != None:  # we had a response
    thisExp.addData('key_resp_2.rt', key_resp_2.rt)
thisExp.addData('key_resp_2.started', key_resp_2.tStartRefresh)
thisExp.addData('key_resp_2.stopped', key_resp_2.tStopRefresh)
thisExp.nextEntry()

# set up handler to look after randomisation of conditions etc
enc_runs = data.TrialHandler(nReps=3, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='enc_runs')
thisExp.addLoop(enc_runs)  # add the loop to the experiment
thisEnc_run = enc_runs.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisEnc_run.rgb)
if thisEnc_run != None:
    for paramName in thisEnc_run:
        exec('{} = thisEnc_run[paramName]'.format(paramName))

for thisEnc_run in enc_runs:
    currentLoop = enc_runs
    # abbreviate parameter names if possible (e.g. rgb = thisEnc_run.rgb)
    if thisEnc_run != None:
        for paramName in thisEnc_run:
            exec('{} = thisEnc_run[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "start_enc_run"-------
    continueRoutine = True
    routineTimer.add(2.000000)
    # update component parameters for each repeat
    start = end
    end = start + 2
    selection = np.arange(start, end, step)
    
    run_counter = run_counter + 1
    end_run_text = 'Szünet\nA folytatáshoz nyomja le a jobb nyilat'
    
    if run_counter >= 3:
        end_run_text = 'Vége az első feladatnak'
    # keep track of which components have finished
    start_enc_runComponents = [enc_run_start]
    for thisComponent in start_enc_runComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    start_enc_runClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "start_enc_run"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = start_enc_runClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=start_enc_runClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *enc_run_start* updates
        if enc_run_start.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            enc_run_start.frameNStart = frameN  # exact frame index
            enc_run_start.tStart = t  # local t and not account for scr refresh
            enc_run_start.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(enc_run_start, 'tStartRefresh')  # time at next scr refresh
            enc_run_start.setAutoDraw(True)
        if enc_run_start.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > enc_run_start.tStartRefresh + 2.0-frameTolerance:
                # keep track of stop time/frame for later
                enc_run_start.tStop = t  # not accounting for scr refresh
                enc_run_start.frameNStop = frameN  # exact frame index
                win.timeOnFlip(enc_run_start, 'tStopRefresh')  # time at next scr refresh
                enc_run_start.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in start_enc_runComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "start_enc_run"-------
    for thisComponent in start_enc_runComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    enc_runs.addData('enc_run_start.started', enc_run_start.tStartRefresh)
    enc_runs.addData('enc_run_start.stopped', enc_run_start.tStopRefresh)
    
    # set up handler to look after randomisation of conditions etc
    enc_trials = data.TrialHandler(nReps=1, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions(stimuli_table, selection=selection),
        seed=None, name='enc_trials')
    thisExp.addLoop(enc_trials)  # add the loop to the experiment
    thisEnc_trial = enc_trials.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisEnc_trial.rgb)
    if thisEnc_trial != None:
        for paramName in thisEnc_trial:
            exec('{} = thisEnc_trial[paramName]'.format(paramName))
    
    for thisEnc_trial in enc_trials:
        currentLoop = enc_trials
        # abbreviate parameter names if possible (e.g. rgb = thisEnc_trial.rgb)
        if thisEnc_trial != None:
            for paramName in thisEnc_trial:
                exec('{} = thisEnc_trial[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "enc_fx"-------
        continueRoutine = True
        # update component parameters for each repeat
        enc_fx_cross.setPos((CurrentX, CurrentY))
        enc_key_resp_fx.keys = []
        enc_key_resp_fx.rt = []
        _enc_key_resp_fx_allKeys = []
        # keep track of which components have finished
        enc_fxComponents = [map_enc_fx, enc_fx_cross, enc_key_resp_fx]
        for thisComponent in enc_fxComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        enc_fxClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "enc_fx"-------
        while continueRoutine:
            # get current time
            t = enc_fxClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=enc_fxClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *map_enc_fx* updates
            if map_enc_fx.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                map_enc_fx.frameNStart = frameN  # exact frame index
                map_enc_fx.tStart = t  # local t and not account for scr refresh
                map_enc_fx.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(map_enc_fx, 'tStartRefresh')  # time at next scr refresh
                map_enc_fx.setAutoDraw(True)
            if map_enc_fx.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > map_enc_fx.tStartRefresh + Jitter/1000-frameTolerance:
                    # keep track of stop time/frame for later
                    map_enc_fx.tStop = t  # not accounting for scr refresh
                    map_enc_fx.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(map_enc_fx, 'tStopRefresh')  # time at next scr refresh
                    map_enc_fx.setAutoDraw(False)
            
            # *enc_fx_cross* updates
            if enc_fx_cross.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                enc_fx_cross.frameNStart = frameN  # exact frame index
                enc_fx_cross.tStart = t  # local t and not account for scr refresh
                enc_fx_cross.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(enc_fx_cross, 'tStartRefresh')  # time at next scr refresh
                enc_fx_cross.setAutoDraw(True)
            if enc_fx_cross.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > enc_fx_cross.tStartRefresh + Jitter/1000-frameTolerance:
                    # keep track of stop time/frame for later
                    enc_fx_cross.tStop = t  # not accounting for scr refresh
                    enc_fx_cross.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(enc_fx_cross, 'tStopRefresh')  # time at next scr refresh
                    enc_fx_cross.setAutoDraw(False)
            
            # *enc_key_resp_fx* updates
            waitOnFlip = False
            if enc_key_resp_fx.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                enc_key_resp_fx.frameNStart = frameN  # exact frame index
                enc_key_resp_fx.tStart = t  # local t and not account for scr refresh
                enc_key_resp_fx.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(enc_key_resp_fx, 'tStartRefresh')  # time at next scr refresh
                enc_key_resp_fx.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(enc_key_resp_fx.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(enc_key_resp_fx.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if enc_key_resp_fx.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > enc_key_resp_fx.tStartRefresh + Jitter/1000-frameTolerance:
                    # keep track of stop time/frame for later
                    enc_key_resp_fx.tStop = t  # not accounting for scr refresh
                    enc_key_resp_fx.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(enc_key_resp_fx, 'tStopRefresh')  # time at next scr refresh
                    enc_key_resp_fx.status = FINISHED
            if enc_key_resp_fx.status == STARTED and not waitOnFlip:
                theseKeys = enc_key_resp_fx.getKeys(keyList=['f', 'j'], waitRelease=False)
                _enc_key_resp_fx_allKeys.extend(theseKeys)
                if len(_enc_key_resp_fx_allKeys):
                    enc_key_resp_fx.keys = _enc_key_resp_fx_allKeys[-1].name  # just the last key pressed
                    enc_key_resp_fx.rt = _enc_key_resp_fx_allKeys[-1].rt
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in enc_fxComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "enc_fx"-------
        for thisComponent in enc_fxComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        enc_trials.addData('map_enc_fx.started', map_enc_fx.tStartRefresh)
        enc_trials.addData('map_enc_fx.stopped', map_enc_fx.tStopRefresh)
        enc_trials.addData('enc_fx_cross.started', enc_fx_cross.tStartRefresh)
        enc_trials.addData('enc_fx_cross.stopped', enc_fx_cross.tStopRefresh)
        # check responses
        if enc_key_resp_fx.keys in ['', [], None]:  # No response was made
            enc_key_resp_fx.keys = None
        enc_trials.addData('enc_key_resp_fx.keys',enc_key_resp_fx.keys)
        if enc_key_resp_fx.keys != None:  # we had a response
            enc_trials.addData('enc_key_resp_fx.rt', enc_key_resp_fx.rt)
        enc_trials.addData('enc_key_resp_fx.started', enc_key_resp_fx.tStartRefresh)
        enc_trials.addData('enc_key_resp_fx.stopped', enc_key_resp_fx.tStopRefresh)
        # the Routine "enc_fx" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # ------Prepare to start Routine "enc_trial"-------
        continueRoutine = True
        routineTimer.add(3.000000)
        # update component parameters for each repeat
        enc_main_image.setPos((CurrentX, CurrentY))
        enc_main_image.setImage(CurrentImage)
        enc_key_resp_trial.keys = []
        enc_key_resp_trial.rt = []
        _enc_key_resp_trial_allKeys = []
        # keep track of which components have finished
        enc_trialComponents = [map_enc_trial, enc_main_image, enc_key_resp_trial]
        for thisComponent in enc_trialComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        enc_trialClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "enc_trial"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = enc_trialClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=enc_trialClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *map_enc_trial* updates
            if map_enc_trial.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                map_enc_trial.frameNStart = frameN  # exact frame index
                map_enc_trial.tStart = t  # local t and not account for scr refresh
                map_enc_trial.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(map_enc_trial, 'tStartRefresh')  # time at next scr refresh
                map_enc_trial.setAutoDraw(True)
            if map_enc_trial.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > map_enc_trial.tStartRefresh + 3.0-frameTolerance:
                    # keep track of stop time/frame for later
                    map_enc_trial.tStop = t  # not accounting for scr refresh
                    map_enc_trial.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(map_enc_trial, 'tStopRefresh')  # time at next scr refresh
                    map_enc_trial.setAutoDraw(False)
            
            # *enc_main_image* updates
            if enc_main_image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                enc_main_image.frameNStart = frameN  # exact frame index
                enc_main_image.tStart = t  # local t and not account for scr refresh
                enc_main_image.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(enc_main_image, 'tStartRefresh')  # time at next scr refresh
                enc_main_image.setAutoDraw(True)
            if enc_main_image.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > enc_main_image.tStartRefresh + 3.0-frameTolerance:
                    # keep track of stop time/frame for later
                    enc_main_image.tStop = t  # not accounting for scr refresh
                    enc_main_image.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(enc_main_image, 'tStopRefresh')  # time at next scr refresh
                    enc_main_image.setAutoDraw(False)
            
            # *enc_key_resp_trial* updates
            waitOnFlip = False
            if enc_key_resp_trial.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                enc_key_resp_trial.frameNStart = frameN  # exact frame index
                enc_key_resp_trial.tStart = t  # local t and not account for scr refresh
                enc_key_resp_trial.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(enc_key_resp_trial, 'tStartRefresh')  # time at next scr refresh
                enc_key_resp_trial.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(enc_key_resp_trial.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(enc_key_resp_trial.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if enc_key_resp_trial.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > enc_key_resp_trial.tStartRefresh + 3.0-frameTolerance:
                    # keep track of stop time/frame for later
                    enc_key_resp_trial.tStop = t  # not accounting for scr refresh
                    enc_key_resp_trial.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(enc_key_resp_trial, 'tStopRefresh')  # time at next scr refresh
                    enc_key_resp_trial.status = FINISHED
            if enc_key_resp_trial.status == STARTED and not waitOnFlip:
                theseKeys = enc_key_resp_trial.getKeys(keyList=['f', 'j'], waitRelease=False)
                _enc_key_resp_trial_allKeys.extend(theseKeys)
                if len(_enc_key_resp_trial_allKeys):
                    enc_key_resp_trial.keys = _enc_key_resp_trial_allKeys[-1].name  # just the last key pressed
                    enc_key_resp_trial.rt = _enc_key_resp_trial_allKeys[-1].rt
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in enc_trialComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "enc_trial"-------
        for thisComponent in enc_trialComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        enc_trials.addData('map_enc_trial.started', map_enc_trial.tStartRefresh)
        enc_trials.addData('map_enc_trial.stopped', map_enc_trial.tStopRefresh)
        enc_trials.addData('enc_main_image.started', enc_main_image.tStartRefresh)
        enc_trials.addData('enc_main_image.stopped', enc_main_image.tStopRefresh)
        # check responses
        if enc_key_resp_trial.keys in ['', [], None]:  # No response was made
            enc_key_resp_trial.keys = None
        enc_trials.addData('enc_key_resp_trial.keys',enc_key_resp_trial.keys)
        if enc_key_resp_trial.keys != None:  # we had a response
            enc_trials.addData('enc_key_resp_trial.rt', enc_key_resp_trial.rt)
        enc_trials.addData('enc_key_resp_trial.started', enc_key_resp_trial.tStartRefresh)
        enc_trials.addData('enc_key_resp_trial.stopped', enc_key_resp_trial.tStopRefresh)
        thisExp.nextEntry()
        
    # completed 1 repeats of 'enc_trials'
    
    
    # ------Prepare to start Routine "end_enc_run"-------
    continueRoutine = True
    routineTimer.add(1200.000000)
    # update component parameters for each repeat
    enc_run_end.setText(end_run_text)
    enc_run_end_response.keys = []
    enc_run_end_response.rt = []
    _enc_run_end_response_allKeys = []
    # keep track of which components have finished
    end_enc_runComponents = [enc_run_end, enc_run_end_response]
    for thisComponent in end_enc_runComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    end_enc_runClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "end_enc_run"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = end_enc_runClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=end_enc_runClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *enc_run_end* updates
        if enc_run_end.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            enc_run_end.frameNStart = frameN  # exact frame index
            enc_run_end.tStart = t  # local t and not account for scr refresh
            enc_run_end.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(enc_run_end, 'tStartRefresh')  # time at next scr refresh
            enc_run_end.setAutoDraw(True)
        if enc_run_end.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > enc_run_end.tStartRefresh + 1200-frameTolerance:
                # keep track of stop time/frame for later
                enc_run_end.tStop = t  # not accounting for scr refresh
                enc_run_end.frameNStop = frameN  # exact frame index
                win.timeOnFlip(enc_run_end, 'tStopRefresh')  # time at next scr refresh
                enc_run_end.setAutoDraw(False)
        
        # *enc_run_end_response* updates
        waitOnFlip = False
        if enc_run_end_response.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            enc_run_end_response.frameNStart = frameN  # exact frame index
            enc_run_end_response.tStart = t  # local t and not account for scr refresh
            enc_run_end_response.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(enc_run_end_response, 'tStartRefresh')  # time at next scr refresh
            enc_run_end_response.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(enc_run_end_response.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(enc_run_end_response.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if enc_run_end_response.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > enc_run_end_response.tStartRefresh + 1200-frameTolerance:
                # keep track of stop time/frame for later
                enc_run_end_response.tStop = t  # not accounting for scr refresh
                enc_run_end_response.frameNStop = frameN  # exact frame index
                win.timeOnFlip(enc_run_end_response, 'tStopRefresh')  # time at next scr refresh
                enc_run_end_response.status = FINISHED
        if enc_run_end_response.status == STARTED and not waitOnFlip:
            theseKeys = enc_run_end_response.getKeys(keyList=['right'], waitRelease=False)
            _enc_run_end_response_allKeys.extend(theseKeys)
            if len(_enc_run_end_response_allKeys):
                enc_run_end_response.keys = _enc_run_end_response_allKeys[-1].name  # just the last key pressed
                enc_run_end_response.rt = _enc_run_end_response_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in end_enc_runComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "end_enc_run"-------
    for thisComponent in end_enc_runComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    enc_runs.addData('enc_run_end.started', enc_run_end.tStartRefresh)
    enc_runs.addData('enc_run_end.stopped', enc_run_end.tStopRefresh)
    # check responses
    if enc_run_end_response.keys in ['', [], None]:  # No response was made
        enc_run_end_response.keys = None
    enc_runs.addData('enc_run_end_response.keys',enc_run_end_response.keys)
    if enc_run_end_response.keys != None:  # we had a response
        enc_runs.addData('enc_run_end_response.rt', enc_run_end_response.rt)
    enc_runs.addData('enc_run_end_response.started', enc_run_end_response.tStartRefresh)
    enc_runs.addData('enc_run_end_response.stopped', enc_run_end_response.tStopRefresh)
    thisExp.nextEntry()
    
# completed 3 repeats of 'enc_runs'


# ------Prepare to start Routine "inter_task_break"-------
continueRoutine = True
# update component parameters for each repeat
# keep track of which components have finished
inter_task_breakComponents = []
for thisComponent in inter_task_breakComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
inter_task_breakClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "inter_task_break"-------
while continueRoutine:
    # get current time
    t = inter_task_breakClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=inter_task_breakClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in inter_task_breakComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "inter_task_break"-------
for thisComponent in inter_task_breakComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "inter_task_break" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "start_recognition"-------
continueRoutine = True
routineTimer.add(2.000000)
# update component parameters for each repeat
start = 0
end = 0
step = 1
n_runs = 3
run_counter = 0
stimuli_table = 'stimuli_tables/recognition_trials_'+ selected + '.csv'
# keep track of which components have finished
start_recognitionComponents = [text_3]
for thisComponent in start_recognitionComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
start_recognitionClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "start_recognition"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = start_recognitionClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=start_recognitionClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_3* updates
    if text_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_3.frameNStart = frameN  # exact frame index
        text_3.tStart = t  # local t and not account for scr refresh
        text_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_3, 'tStartRefresh')  # time at next scr refresh
        text_3.setAutoDraw(True)
    if text_3.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > text_3.tStartRefresh + 2.0-frameTolerance:
            # keep track of stop time/frame for later
            text_3.tStop = t  # not accounting for scr refresh
            text_3.frameNStop = frameN  # exact frame index
            win.timeOnFlip(text_3, 'tStopRefresh')  # time at next scr refresh
            text_3.setAutoDraw(False)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in start_recognitionComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "start_recognition"-------
for thisComponent in start_recognitionComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_3.started', text_3.tStartRefresh)
thisExp.addData('text_3.stopped', text_3.tStopRefresh)

# set up handler to look after randomisation of conditions etc
rec_runs = data.TrialHandler(nReps=3, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='rec_runs')
thisExp.addLoop(rec_runs)  # add the loop to the experiment
thisRec_run = rec_runs.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisRec_run.rgb)
if thisRec_run != None:
    for paramName in thisRec_run:
        exec('{} = thisRec_run[paramName]'.format(paramName))

for thisRec_run in rec_runs:
    currentLoop = rec_runs
    # abbreviate parameter names if possible (e.g. rgb = thisRec_run.rgb)
    if thisRec_run != None:
        for paramName in thisRec_run:
            exec('{} = thisRec_run[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "start_rec_run"-------
    continueRoutine = True
    routineTimer.add(1.000000)
    # update component parameters for each repeat
    start = end
    end = start + 3
    selection = np.arange(start, end, step)
    run_counter = run_counter + 1
    end_run_text = 'Szünet\nA folytatáshoz nyomja le a jobb nyilat'
    
    if run_counter >= 3:
        end_run_text = 'Vége a második feladatnak'
    # keep track of which components have finished
    start_rec_runComponents = [rec_run_start]
    for thisComponent in start_rec_runComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    start_rec_runClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "start_rec_run"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = start_rec_runClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=start_rec_runClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *rec_run_start* updates
        if rec_run_start.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            rec_run_start.frameNStart = frameN  # exact frame index
            rec_run_start.tStart = t  # local t and not account for scr refresh
            rec_run_start.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(rec_run_start, 'tStartRefresh')  # time at next scr refresh
            rec_run_start.setAutoDraw(True)
        if rec_run_start.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > rec_run_start.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                rec_run_start.tStop = t  # not accounting for scr refresh
                rec_run_start.frameNStop = frameN  # exact frame index
                win.timeOnFlip(rec_run_start, 'tStopRefresh')  # time at next scr refresh
                rec_run_start.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in start_rec_runComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "start_rec_run"-------
    for thisComponent in start_rec_runComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    rec_runs.addData('rec_run_start.started', rec_run_start.tStartRefresh)
    rec_runs.addData('rec_run_start.stopped', rec_run_start.tStopRefresh)
    
    # set up handler to look after randomisation of conditions etc
    rec_trials = data.TrialHandler(nReps=1, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions(stimuli_table, selection=selection),
        seed=None, name='rec_trials')
    thisExp.addLoop(rec_trials)  # add the loop to the experiment
    thisRec_trial = rec_trials.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisRec_trial.rgb)
    if thisRec_trial != None:
        for paramName in thisRec_trial:
            exec('{} = thisRec_trial[paramName]'.format(paramName))
    
    for thisRec_trial in rec_trials:
        currentLoop = rec_trials
        # abbreviate parameter names if possible (e.g. rgb = thisRec_trial.rgb)
        if thisRec_trial != None:
            for paramName in thisRec_trial:
                exec('{} = thisRec_trial[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "rec_fx"-------
        continueRoutine = True
        # update component parameters for each repeat
        rec_fx_cross.setPos((CurrentX, CurrentY))
        rec_key_resp_fx.keys = []
        rec_key_resp_fx.rt = []
        _rec_key_resp_fx_allKeys = []
        # keep track of which components have finished
        rec_fxComponents = [map_rec_fx, rec_fx_cross, rec_key_resp_fx]
        for thisComponent in rec_fxComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        rec_fxClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "rec_fx"-------
        while continueRoutine:
            # get current time
            t = rec_fxClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=rec_fxClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *map_rec_fx* updates
            if map_rec_fx.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                map_rec_fx.frameNStart = frameN  # exact frame index
                map_rec_fx.tStart = t  # local t and not account for scr refresh
                map_rec_fx.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(map_rec_fx, 'tStartRefresh')  # time at next scr refresh
                map_rec_fx.setAutoDraw(True)
            if map_rec_fx.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > map_rec_fx.tStartRefresh + Jitter/1000-frameTolerance:
                    # keep track of stop time/frame for later
                    map_rec_fx.tStop = t  # not accounting for scr refresh
                    map_rec_fx.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(map_rec_fx, 'tStopRefresh')  # time at next scr refresh
                    map_rec_fx.setAutoDraw(False)
            
            # *rec_fx_cross* updates
            if rec_fx_cross.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                rec_fx_cross.frameNStart = frameN  # exact frame index
                rec_fx_cross.tStart = t  # local t and not account for scr refresh
                rec_fx_cross.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(rec_fx_cross, 'tStartRefresh')  # time at next scr refresh
                rec_fx_cross.setAutoDraw(True)
            if rec_fx_cross.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > rec_fx_cross.tStartRefresh + Jitter/1000-frameTolerance:
                    # keep track of stop time/frame for later
                    rec_fx_cross.tStop = t  # not accounting for scr refresh
                    rec_fx_cross.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(rec_fx_cross, 'tStopRefresh')  # time at next scr refresh
                    rec_fx_cross.setAutoDraw(False)
            
            # *rec_key_resp_fx* updates
            waitOnFlip = False
            if rec_key_resp_fx.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                rec_key_resp_fx.frameNStart = frameN  # exact frame index
                rec_key_resp_fx.tStart = t  # local t and not account for scr refresh
                rec_key_resp_fx.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(rec_key_resp_fx, 'tStartRefresh')  # time at next scr refresh
                rec_key_resp_fx.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(rec_key_resp_fx.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(rec_key_resp_fx.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if rec_key_resp_fx.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > rec_key_resp_fx.tStartRefresh + Jitter/1000-frameTolerance:
                    # keep track of stop time/frame for later
                    rec_key_resp_fx.tStop = t  # not accounting for scr refresh
                    rec_key_resp_fx.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(rec_key_resp_fx, 'tStopRefresh')  # time at next scr refresh
                    rec_key_resp_fx.status = FINISHED
            if rec_key_resp_fx.status == STARTED and not waitOnFlip:
                theseKeys = rec_key_resp_fx.getKeys(keyList=['f', 'j', 'k'], waitRelease=False)
                _rec_key_resp_fx_allKeys.extend(theseKeys)
                if len(_rec_key_resp_fx_allKeys):
                    rec_key_resp_fx.keys = _rec_key_resp_fx_allKeys[-1].name  # just the last key pressed
                    rec_key_resp_fx.rt = _rec_key_resp_fx_allKeys[-1].rt
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in rec_fxComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "rec_fx"-------
        for thisComponent in rec_fxComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        rec_trials.addData('map_rec_fx.started', map_rec_fx.tStartRefresh)
        rec_trials.addData('map_rec_fx.stopped', map_rec_fx.tStopRefresh)
        rec_trials.addData('rec_fx_cross.started', rec_fx_cross.tStartRefresh)
        rec_trials.addData('rec_fx_cross.stopped', rec_fx_cross.tStopRefresh)
        # check responses
        if rec_key_resp_fx.keys in ['', [], None]:  # No response was made
            rec_key_resp_fx.keys = None
        rec_trials.addData('rec_key_resp_fx.keys',rec_key_resp_fx.keys)
        if rec_key_resp_fx.keys != None:  # we had a response
            rec_trials.addData('rec_key_resp_fx.rt', rec_key_resp_fx.rt)
        rec_trials.addData('rec_key_resp_fx.started', rec_key_resp_fx.tStartRefresh)
        rec_trials.addData('rec_key_resp_fx.stopped', rec_key_resp_fx.tStopRefresh)
        # the Routine "rec_fx" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # ------Prepare to start Routine "rec_trial"-------
        continueRoutine = True
        routineTimer.add(3.000000)
        # update component parameters for each repeat
        main_image_rec.setPos((CurrentX, CurrentY))
        main_image_rec.setImage(CurrentImage)
        rec_key_resp_trial.keys = []
        rec_key_resp_trial.rt = []
        _rec_key_resp_trial_allKeys = []
        # keep track of which components have finished
        rec_trialComponents = [map_rec_trial, main_image_rec, rec_key_resp_trial]
        for thisComponent in rec_trialComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        rec_trialClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "rec_trial"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = rec_trialClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=rec_trialClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *map_rec_trial* updates
            if map_rec_trial.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                map_rec_trial.frameNStart = frameN  # exact frame index
                map_rec_trial.tStart = t  # local t and not account for scr refresh
                map_rec_trial.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(map_rec_trial, 'tStartRefresh')  # time at next scr refresh
                map_rec_trial.setAutoDraw(True)
            if map_rec_trial.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > map_rec_trial.tStartRefresh + 3.0-frameTolerance:
                    # keep track of stop time/frame for later
                    map_rec_trial.tStop = t  # not accounting for scr refresh
                    map_rec_trial.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(map_rec_trial, 'tStopRefresh')  # time at next scr refresh
                    map_rec_trial.setAutoDraw(False)
            
            # *main_image_rec* updates
            if main_image_rec.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                main_image_rec.frameNStart = frameN  # exact frame index
                main_image_rec.tStart = t  # local t and not account for scr refresh
                main_image_rec.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(main_image_rec, 'tStartRefresh')  # time at next scr refresh
                main_image_rec.setAutoDraw(True)
            if main_image_rec.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > main_image_rec.tStartRefresh + 3.0-frameTolerance:
                    # keep track of stop time/frame for later
                    main_image_rec.tStop = t  # not accounting for scr refresh
                    main_image_rec.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(main_image_rec, 'tStopRefresh')  # time at next scr refresh
                    main_image_rec.setAutoDraw(False)
            
            # *rec_key_resp_trial* updates
            waitOnFlip = False
            if rec_key_resp_trial.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                rec_key_resp_trial.frameNStart = frameN  # exact frame index
                rec_key_resp_trial.tStart = t  # local t and not account for scr refresh
                rec_key_resp_trial.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(rec_key_resp_trial, 'tStartRefresh')  # time at next scr refresh
                rec_key_resp_trial.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(rec_key_resp_trial.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(rec_key_resp_trial.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if rec_key_resp_trial.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > rec_key_resp_trial.tStartRefresh + 3.0-frameTolerance:
                    # keep track of stop time/frame for later
                    rec_key_resp_trial.tStop = t  # not accounting for scr refresh
                    rec_key_resp_trial.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(rec_key_resp_trial, 'tStopRefresh')  # time at next scr refresh
                    rec_key_resp_trial.status = FINISHED
            if rec_key_resp_trial.status == STARTED and not waitOnFlip:
                theseKeys = rec_key_resp_trial.getKeys(keyList=['f', 'j', 'k'], waitRelease=False)
                _rec_key_resp_trial_allKeys.extend(theseKeys)
                if len(_rec_key_resp_trial_allKeys):
                    rec_key_resp_trial.keys = _rec_key_resp_trial_allKeys[-1].name  # just the last key pressed
                    rec_key_resp_trial.rt = _rec_key_resp_trial_allKeys[-1].rt
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in rec_trialComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "rec_trial"-------
        for thisComponent in rec_trialComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        rec_trials.addData('map_rec_trial.started', map_rec_trial.tStartRefresh)
        rec_trials.addData('map_rec_trial.stopped', map_rec_trial.tStopRefresh)
        rec_trials.addData('main_image_rec.started', main_image_rec.tStartRefresh)
        rec_trials.addData('main_image_rec.stopped', main_image_rec.tStopRefresh)
        # check responses
        if rec_key_resp_trial.keys in ['', [], None]:  # No response was made
            rec_key_resp_trial.keys = None
        rec_trials.addData('rec_key_resp_trial.keys',rec_key_resp_trial.keys)
        if rec_key_resp_trial.keys != None:  # we had a response
            rec_trials.addData('rec_key_resp_trial.rt', rec_key_resp_trial.rt)
        rec_trials.addData('rec_key_resp_trial.started', rec_key_resp_trial.tStartRefresh)
        rec_trials.addData('rec_key_resp_trial.stopped', rec_key_resp_trial.tStopRefresh)
        thisExp.nextEntry()
        
    # completed 1 repeats of 'rec_trials'
    
    
    # ------Prepare to start Routine "end_rec_run"-------
    continueRoutine = True
    routineTimer.add(300.000000)
    # update component parameters for each repeat
    rec_run_end.setText(end_run_text)
    rec_run_end_response.keys = []
    rec_run_end_response.rt = []
    _rec_run_end_response_allKeys = []
    # keep track of which components have finished
    end_rec_runComponents = [rec_run_end, rec_run_end_response]
    for thisComponent in end_rec_runComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    end_rec_runClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "end_rec_run"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = end_rec_runClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=end_rec_runClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *rec_run_end* updates
        if rec_run_end.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            rec_run_end.frameNStart = frameN  # exact frame index
            rec_run_end.tStart = t  # local t and not account for scr refresh
            rec_run_end.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(rec_run_end, 'tStartRefresh')  # time at next scr refresh
            rec_run_end.setAutoDraw(True)
        if rec_run_end.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > rec_run_end.tStartRefresh + 300.0-frameTolerance:
                # keep track of stop time/frame for later
                rec_run_end.tStop = t  # not accounting for scr refresh
                rec_run_end.frameNStop = frameN  # exact frame index
                win.timeOnFlip(rec_run_end, 'tStopRefresh')  # time at next scr refresh
                rec_run_end.setAutoDraw(False)
        
        # *rec_run_end_response* updates
        waitOnFlip = False
        if rec_run_end_response.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            rec_run_end_response.frameNStart = frameN  # exact frame index
            rec_run_end_response.tStart = t  # local t and not account for scr refresh
            rec_run_end_response.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(rec_run_end_response, 'tStartRefresh')  # time at next scr refresh
            rec_run_end_response.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(rec_run_end_response.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(rec_run_end_response.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if rec_run_end_response.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > rec_run_end_response.tStartRefresh + 300-frameTolerance:
                # keep track of stop time/frame for later
                rec_run_end_response.tStop = t  # not accounting for scr refresh
                rec_run_end_response.frameNStop = frameN  # exact frame index
                win.timeOnFlip(rec_run_end_response, 'tStopRefresh')  # time at next scr refresh
                rec_run_end_response.status = FINISHED
        if rec_run_end_response.status == STARTED and not waitOnFlip:
            theseKeys = rec_run_end_response.getKeys(keyList=['right'], waitRelease=False)
            _rec_run_end_response_allKeys.extend(theseKeys)
            if len(_rec_run_end_response_allKeys):
                rec_run_end_response.keys = _rec_run_end_response_allKeys[-1].name  # just the last key pressed
                rec_run_end_response.rt = _rec_run_end_response_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in end_rec_runComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "end_rec_run"-------
    for thisComponent in end_rec_runComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    rec_runs.addData('rec_run_end.started', rec_run_end.tStartRefresh)
    rec_runs.addData('rec_run_end.stopped', rec_run_end.tStopRefresh)
    # check responses
    if rec_run_end_response.keys in ['', [], None]:  # No response was made
        rec_run_end_response.keys = None
    rec_runs.addData('rec_run_end_response.keys',rec_run_end_response.keys)
    if rec_run_end_response.keys != None:  # we had a response
        rec_runs.addData('rec_run_end_response.rt', rec_run_end_response.rt)
    rec_runs.addData('rec_run_end_response.started', rec_run_end_response.tStartRefresh)
    rec_runs.addData('rec_run_end_response.stopped', rec_run_end_response.tStopRefresh)
    thisExp.nextEntry()
    
# completed 3 repeats of 'rec_runs'


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
