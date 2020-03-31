/************************* 
 * Terkepesz_Online Test *
 *************************/

import { PsychoJS } from './lib/core-2020.1.js';
import * as core from './lib/core-2020.1.js';
import { TrialHandler } from './lib/data-2020.1.js';
import { Scheduler } from './lib/util-2020.1.js';
import * as util from './lib/util-2020.1.js';
import * as visual from './lib/visual-2020.1.js';
import * as sound from './lib/sound-2020.1.js';

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'terkepesz_online';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(select_stimuli_tableRoutineBegin());
flowScheduler.add(select_stimuli_tableRoutineEachFrame());
flowScheduler.add(select_stimuli_tableRoutineEnd());
const run_1LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(run_1LoopBegin, run_1LoopScheduler);
flowScheduler.add(run_1LoopScheduler);
flowScheduler.add(run_1LoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.1.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var select_stimuli_tableClock;
var setup_text;
var stimuli_table;
var trials_run_1Clock;
var main_image;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "select_stimuli_table"
  select_stimuli_tableClock = new util.Clock();
  setup_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'setup_text',
    text: 'A vizsgálati változók beállítása...',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  stimuli_table = "encoding_table.csv";
  
  // Initialize components for Routine "trials_run_1"
  trials_run_1Clock = new util.Clock();
  main_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'main_image', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [300, 300],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var select_stimuli_tableComponents;
function select_stimuli_tableRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'select_stimuli_table'-------
    t = 0;
    select_stimuli_tableClock.reset(); // clock
    frameN = -1;
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    select_stimuli_tableComponents = [];
    select_stimuli_tableComponents.push(setup_text);
    
    for (const thisComponent of select_stimuli_tableComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var frameRemains;
var continueRoutine;
function select_stimuli_tableRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'select_stimuli_table'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = select_stimuli_tableClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *setup_text* updates
    if (t >= 0.0 && setup_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      setup_text.tStart = t;  // (not accounting for frame time here)
      setup_text.frameNStart = frameN;  // exact frame index
      
      setup_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (setup_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      setup_text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of select_stimuli_tableComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function select_stimuli_tableRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'select_stimuli_table'-------
    for (const thisComponent of select_stimuli_tableComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var run_1;
var currentLoop;
function run_1LoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  run_1 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, stimuli_table, '0:83'),
    seed: undefined, name: 'run_1'
  });
  psychoJS.experiment.addLoop(run_1); // add the loop to the experiment
  currentLoop = run_1;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisRun_1 of run_1) {
    const snapshot = run_1.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(trials_run_1RoutineBegin(snapshot));
    thisScheduler.add(trials_run_1RoutineEachFrame(snapshot));
    thisScheduler.add(trials_run_1RoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function run_1LoopEnd() {
  psychoJS.experiment.removeLoop(run_1);

  return Scheduler.Event.NEXT;
}


var trials_run_1Components;
function trials_run_1RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'trials_run_1'-------
    t = 0;
    trials_run_1Clock.reset(); // clock
    frameN = -1;
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    main_image.setPos([Xcoordinate, Ycoordinate]);
    main_image.setImage(TripletMemberA);
    // keep track of which components have finished
    trials_run_1Components = [];
    trials_run_1Components.push(main_image);
    
    for (const thisComponent of trials_run_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function trials_run_1RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'trials_run_1'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trials_run_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *main_image* updates
    if (t >= 0.0 && main_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      main_image.tStart = t;  // (not accounting for frame time here)
      main_image.frameNStart = frameN;  // exact frame index
      
      main_image.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (main_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      main_image.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trials_run_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trials_run_1RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'trials_run_1'-------
    for (const thisComponent of trials_run_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(thisScheduler, loop) {
  // ------Prepare for next entry------
  return function () {
    if (typeof loop !== 'undefined') {
      // ------Check if user ended loop early------
      if (loop.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(loop);
        }
      thisScheduler.stop();
      } else {
        const thisTrial = loop.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(loop);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(trials) {
  return function () {
    psychoJS.importAttributes(trials.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
