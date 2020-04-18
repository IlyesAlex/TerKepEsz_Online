/************************* 
 * Terkepesz_Online Test *
 *************************/

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0.804, 0.804, 0.961]),
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
flowScheduler.add(consentRoutineBegin());
flowScheduler.add(consentRoutineEachFrame());
flowScheduler.add(consentRoutineEnd());
flowScheduler.add(lab_introductionRoutineBegin());
flowScheduler.add(lab_introductionRoutineEachFrame());
flowScheduler.add(lab_introductionRoutineEnd());
flowScheduler.add(start_encodingRoutineBegin());
flowScheduler.add(start_encodingRoutineEachFrame());
flowScheduler.add(start_encodingRoutineEnd());
flowScheduler.add(enc_instructions_1RoutineBegin());
flowScheduler.add(enc_instructions_1RoutineEachFrame());
flowScheduler.add(enc_instructions_1RoutineEnd());
flowScheduler.add(enc_instructions_2RoutineBegin());
flowScheduler.add(enc_instructions_2RoutineEachFrame());
flowScheduler.add(enc_instructions_2RoutineEnd());
const enc_runsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(enc_runsLoopBegin, enc_runsLoopScheduler);
flowScheduler.add(enc_runsLoopScheduler);
flowScheduler.add(enc_runsLoopEnd);
flowScheduler.add(inter_task_breakRoutineBegin());
flowScheduler.add(inter_task_breakRoutineEachFrame());
flowScheduler.add(inter_task_breakRoutineEnd());
flowScheduler.add(start_recognitionRoutineBegin());
flowScheduler.add(start_recognitionRoutineEachFrame());
flowScheduler.add(start_recognitionRoutineEnd());
const rec_runsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(rec_runsLoopBegin, rec_runsLoopScheduler);
flowScheduler.add(rec_runsLoopScheduler);
flowScheduler.add(rec_runsLoopEnd);
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
  expInfo['psychopyVersion'] = '2020.1.0';
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


var consentClock;
var lab_introductionClock;
var lab_thanks;
var key_resp;
var start_encodingClock;
var setup_text;
var tables;
var selected;
var stimuli_table;
var enc_instructions_1Clock;
var text;
var image;
var key_resp_3;
var enc_instructions_2Clock;
var text_2;
var image_2;
var key_resp_2;
var start_enc_runClock;
var enc_run_start;
var enc_fxClock;
var map_enc_fx;
var enc_fx_cross;
var enc_key_resp_fx;
var enc_trialClock;
var map_enc_trial;
var enc_main_image;
var enc_key_resp_trial;
var end_enc_runClock;
var enc_run_end;
var enc_run_end_response;
var inter_task_breakClock;
var start_recognitionClock;
var text_3;
var start_rec_runClock;
var rec_run_start;
var rec_fxClock;
var map_rec_fx;
var rec_fx_cross;
var rec_key_resp_fx;
var rec_trialClock;
var map_rec_trial;
var main_image_rec;
var rec_key_resp_trial;
var end_rec_runClock;
var rec_run_end;
var rec_run_end_response;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "consent"
  consentClock = new util.Clock();
  // Initialize components for Routine "lab_introduction"
  lab_introductionClock = new util.Clock();
  lab_thanks = new visual.TextStim({
    win: psychoJS.window,
    name: 'lab_thanks',
    text: 'Köszönjük, hogy hozzájárul kutatócsoportunk munkájához azzal, hogy részt vesz vizsgálatunkban!\n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "start_encoding"
  start_encodingClock = new util.Clock();
  setup_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'setup_text',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  tables = [0];
  selected = tables[Math.floor(Math.random() * tables.length)];
  selected = selected.toString();
  stimuli_table = (("stimuli_tables/encoding_trials_" + selected) + ".csv");
  
  // Initialize components for Routine "enc_instructions_1"
  enc_instructions_1Clock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Ön ennek a modern képgalériának a kurátora. \n\nA legújabb kiállításra a vártnál több kép érkezett.\n\nKurátorként az Ön feladata lesz eldönteni, mely képeket válogatjuk be a kiállított darabok közé, és hogy a kép illeszkedik-e a galéria adott pontjára. \n\nAz Ön ideje nagyon drága a galériának, így a döntésre egy-egy képről csak 3 másodperce lesz.\n\nA folytatáshoz nyomja le a jobb nyilat.\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.4), 0], height: 0.04,  wrapWidth: 0.9, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : 'pix', 
    image : 'stimuli/GalleryBuildingFromOutside.jpg', mask : undefined,
    ori : 0, pos : [450, 0.0], size : [600, 450],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "enc_instructions_2"
  enc_instructions_2Clock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Ez a galéria térképe felülről, nézze meg figyelmesen. \n\nA feladat során a képek a térképre vetítve jelennek meg, azon a helyen, ahol kiállításra kerülhetnek.\n\nDöntse el a képekről, hogy ki legyenek-e állítva a bemutatott helyen. \n\nMinden képet nézzen meg figyelmesen, és minden képre adjon választ. \n\nA folytatáshoz nyomja le a jobb nyilat.',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.5), 0], height: 0.04,  wrapWidth: 0.7, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : 'pix', 
    image : 'stimuli/GalleryInfo.jpg', mask : undefined,
    ori : 0, pos : [425, 0], size : [1000, 750],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "start_enc_run"
  start_enc_runClock = new util.Clock();
  enc_run_start = new visual.TextStim({
    win: psychoJS.window,
    name: 'enc_run_start',
    text: 'Kezdődik a feladat...',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "enc_fx"
  enc_fxClock = new util.Clock();
  map_enc_fx = new visual.ImageStim({
    win : psychoJS.window,
    name : 'map_enc_fx', units : 'pix', 
    image : 'stimuli/GalleryPlanInside.jpg', mask : undefined,
    ori : 0, pos : [0, (- 25)], size : [1040, 1000],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  enc_fx_cross = new visual.TextStim({
    win: psychoJS.window,
    name: 'enc_fx_cross',
    text: '+',
    font: 'Arial',
    units: 'pix', 
    pos: [0, 0], height: 50,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  enc_key_resp_fx = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "enc_trial"
  enc_trialClock = new util.Clock();
  map_enc_trial = new visual.ImageStim({
    win : psychoJS.window,
    name : 'map_enc_trial', units : 'pix', 
    image : 'stimuli/GalleryPlanInside.jpg', mask : undefined,
    ori : 0, pos : [0, (- 25)], size : [1040, 1000],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  enc_main_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'enc_main_image', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [300, 300],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  enc_key_resp_trial = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "end_enc_run"
  end_enc_runClock = new util.Clock();
  enc_run_end = new visual.TextStim({
    win: psychoJS.window,
    name: 'enc_run_end',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  enc_run_end_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "inter_task_break"
  inter_task_breakClock = new util.Clock();
  // Initialize components for Routine "start_recognition"
  start_recognitionClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'Második feladat\nKépfelismerés',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "start_rec_run"
  start_rec_runClock = new util.Clock();
  rec_run_start = new visual.TextStim({
    win: psychoJS.window,
    name: 'rec_run_start',
    text: 'Kezdődik a feladat...',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "rec_fx"
  rec_fxClock = new util.Clock();
  map_rec_fx = new visual.ImageStim({
    win : psychoJS.window,
    name : 'map_rec_fx', units : 'pix', 
    image : 'stimuli/GalleryPlanInside.jpg', mask : undefined,
    ori : 0, pos : [0, (- 25)], size : [1040, 1000],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  rec_fx_cross = new visual.TextStim({
    win: psychoJS.window,
    name: 'rec_fx_cross',
    text: '+',
    font: 'Arial',
    units: 'pix', 
    pos: [0, 0], height: 50,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  rec_key_resp_fx = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "rec_trial"
  rec_trialClock = new util.Clock();
  map_rec_trial = new visual.ImageStim({
    win : psychoJS.window,
    name : 'map_rec_trial', units : 'pix', 
    image : 'stimuli/GalleryPlanInside.jpg', mask : undefined,
    ori : 0, pos : [0, (- 25)], size : [1040, 1000],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  main_image_rec = new visual.ImageStim({
    win : psychoJS.window,
    name : 'main_image_rec', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [300, 300],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  rec_key_resp_trial = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "end_rec_run"
  end_rec_runClock = new util.Clock();
  rec_run_end = new visual.TextStim({
    win: psychoJS.window,
    name: 'rec_run_end',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  rec_run_end_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var consentComponents;
function consentRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'consent'-------
    t = 0;
    consentClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // keep track of which components have finished
    consentComponents = [];
    
    consentComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


var continueRoutine;
function consentRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'consent'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = consentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    consentComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function consentRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'consent'-------
    consentComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "consent" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_allKeys;
var lab_introductionComponents;
function lab_introductionRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'lab_introduction'-------
    t = 0;
    lab_introductionClock.reset(); // clock
    frameN = -1;
    routineTimer.add(120.000000);
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    lab_introductionComponents = [];
    lab_introductionComponents.push(lab_thanks);
    lab_introductionComponents.push(key_resp);
    
    lab_introductionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


var frameRemains;
function lab_introductionRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'lab_introduction'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = lab_introductionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *lab_thanks* updates
    if (t >= 0.0 && lab_thanks.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      lab_thanks.tStart = t;  // (not accounting for frame time here)
      lab_thanks.frameNStart = frameN;  // exact frame index
      
      lab_thanks.setAutoDraw(true);
    }

    frameRemains = 0.0 + 120.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (lab_thanks.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      lab_thanks.setAutoDraw(false);
    }
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    frameRemains = 0.0 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['right'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
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
    lab_introductionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function lab_introductionRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'lab_introduction'-------
    lab_introductionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    return Scheduler.Event.NEXT;
  };
}


var start;
var end;
var step;
var n_runs;
var run_counter;
var start_encodingComponents;
function start_encodingRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'start_encoding'-------
    t = 0;
    start_encodingClock.reset(); // clock
    frameN = -1;
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    setup_text.setText('Első feladat\nGaléria berendezés');
    start = 0;
    end = 0;
    step = 1;
    n_runs = 3;
    run_counter = 0;
    
    // keep track of which components have finished
    start_encodingComponents = [];
    start_encodingComponents.push(setup_text);
    
    start_encodingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function start_encodingRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'start_encoding'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = start_encodingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *setup_text* updates
    if (t >= 0.0 && setup_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      setup_text.tStart = t;  // (not accounting for frame time here)
      setup_text.frameNStart = frameN;  // exact frame index
      
      setup_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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
    start_encodingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function start_encodingRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'start_encoding'-------
    start_encodingComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_3_allKeys;
var enc_instructions_1Components;
function enc_instructions_1RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'enc_instructions_1'-------
    t = 0;
    enc_instructions_1Clock.reset(); // clock
    frameN = -1;
    routineTimer.add(300.000000);
    // update component parameters for each repeat
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    enc_instructions_1Components = [];
    enc_instructions_1Components.push(text);
    enc_instructions_1Components.push(image);
    enc_instructions_1Components.push(key_resp_3);
    
    enc_instructions_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function enc_instructions_1RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'enc_instructions_1'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = enc_instructions_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 300.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text.setAutoDraw(false);
    }
    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }

    frameRemains = 0.0 + 300.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image.setAutoDraw(false);
    }
    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }

    frameRemains = 0.0 + 300.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_3.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['right'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
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
    enc_instructions_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function enc_instructions_1RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'enc_instructions_1'-------
    enc_instructions_1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_2_allKeys;
var enc_instructions_2Components;
function enc_instructions_2RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'enc_instructions_2'-------
    t = 0;
    enc_instructions_2Clock.reset(); // clock
    frameN = -1;
    routineTimer.add(300.000000);
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    enc_instructions_2Components = [];
    enc_instructions_2Components.push(text_2);
    enc_instructions_2Components.push(image_2);
    enc_instructions_2Components.push(key_resp_2);
    
    enc_instructions_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function enc_instructions_2RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'enc_instructions_2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = enc_instructions_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 300.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_2.setAutoDraw(false);
    }
    
    // *image_2* updates
    if (t >= 0.0 && image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2.tStart = t;  // (not accounting for frame time here)
      image_2.frameNStart = frameN;  // exact frame index
      
      image_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 300.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_2.setAutoDraw(false);
    }
    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    frameRemains = 0.0 + 300.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_2.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['right'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
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
    enc_instructions_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function enc_instructions_2RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'enc_instructions_2'-------
    enc_instructions_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    return Scheduler.Event.NEXT;
  };
}


var enc_runs;
var currentLoop;
function enc_runsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  enc_runs = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 3, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'enc_runs'
  });
  psychoJS.experiment.addLoop(enc_runs); // add the loop to the experiment
  currentLoop = enc_runs;  // we're now the current loop

  // Schedule all the trials in the trialList:
  enc_runs.forEach(function() {
    const snapshot = enc_runs.getSnapshot();

    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(start_enc_runRoutineBegin(snapshot));
    thisScheduler.add(start_enc_runRoutineEachFrame(snapshot));
    thisScheduler.add(start_enc_runRoutineEnd(snapshot));
    const enc_trialsLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(enc_trialsLoopBegin, enc_trialsLoopScheduler);
    thisScheduler.add(enc_trialsLoopScheduler);
    thisScheduler.add(enc_trialsLoopEnd);
    thisScheduler.add(end_enc_runRoutineBegin(snapshot));
    thisScheduler.add(end_enc_runRoutineEachFrame(snapshot));
    thisScheduler.add(end_enc_runRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


var enc_trials;
function enc_trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  enc_trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, stimuli_table, selection),
    seed: undefined, name: 'enc_trials'
  });
  psychoJS.experiment.addLoop(enc_trials); // add the loop to the experiment
  currentLoop = enc_trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  enc_trials.forEach(function() {
    const snapshot = enc_trials.getSnapshot();

    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(enc_fxRoutineBegin(snapshot));
    thisScheduler.add(enc_fxRoutineEachFrame(snapshot));
    thisScheduler.add(enc_fxRoutineEnd(snapshot));
    thisScheduler.add(enc_trialRoutineBegin(snapshot));
    thisScheduler.add(enc_trialRoutineEachFrame(snapshot));
    thisScheduler.add(enc_trialRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function enc_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(enc_trials);

  return Scheduler.Event.NEXT;
}


function enc_runsLoopEnd() {
  psychoJS.experiment.removeLoop(enc_runs);

  return Scheduler.Event.NEXT;
}


var rec_runs;
function rec_runsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  rec_runs = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 3, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'rec_runs'
  });
  psychoJS.experiment.addLoop(rec_runs); // add the loop to the experiment
  currentLoop = rec_runs;  // we're now the current loop

  // Schedule all the trials in the trialList:
  rec_runs.forEach(function() {
    const snapshot = rec_runs.getSnapshot();

    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(start_rec_runRoutineBegin(snapshot));
    thisScheduler.add(start_rec_runRoutineEachFrame(snapshot));
    thisScheduler.add(start_rec_runRoutineEnd(snapshot));
    const rec_trialsLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(rec_trialsLoopBegin, rec_trialsLoopScheduler);
    thisScheduler.add(rec_trialsLoopScheduler);
    thisScheduler.add(rec_trialsLoopEnd);
    thisScheduler.add(end_rec_runRoutineBegin(snapshot));
    thisScheduler.add(end_rec_runRoutineEachFrame(snapshot));
    thisScheduler.add(end_rec_runRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


var rec_trials;
function rec_trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  rec_trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, stimuli_table, selection),
    seed: undefined, name: 'rec_trials'
  });
  psychoJS.experiment.addLoop(rec_trials); // add the loop to the experiment
  currentLoop = rec_trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  rec_trials.forEach(function() {
    const snapshot = rec_trials.getSnapshot();

    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(rec_fxRoutineBegin(snapshot));
    thisScheduler.add(rec_fxRoutineEachFrame(snapshot));
    thisScheduler.add(rec_fxRoutineEnd(snapshot));
    thisScheduler.add(rec_trialRoutineBegin(snapshot));
    thisScheduler.add(rec_trialRoutineEachFrame(snapshot));
    thisScheduler.add(rec_trialRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function rec_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(rec_trials);

  return Scheduler.Event.NEXT;
}


function rec_runsLoopEnd() {
  psychoJS.experiment.removeLoop(rec_runs);

  return Scheduler.Event.NEXT;
}


var selection;
var end_run_text;
var start_enc_runComponents;
function start_enc_runRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'start_enc_run'-------
    t = 0;
    start_enc_runClock.reset(); // clock
    frameN = -1;
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    start = end;
    end = (start + 2);
    selection = Array.from({length: end - start}, (_, index) => index + start)
    run_counter = (run_counter + 1);
    end_run_text = "Sz\u00fcnet\nA folytat\u00e1shoz nyomja le a jobb nyilat";
    if ((run_counter >= 3)) {
        end_run_text = "V\u00e9ge az els\u0151 feladatnak";
    }
    
    // keep track of which components have finished
    start_enc_runComponents = [];
    start_enc_runComponents.push(enc_run_start);
    
    start_enc_runComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function start_enc_runRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'start_enc_run'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = start_enc_runClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *enc_run_start* updates
    if (t >= 0.0 && enc_run_start.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      enc_run_start.tStart = t;  // (not accounting for frame time here)
      enc_run_start.frameNStart = frameN;  // exact frame index
      
      enc_run_start.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (enc_run_start.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      enc_run_start.setAutoDraw(false);
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
    start_enc_runComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function start_enc_runRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'start_enc_run'-------
    start_enc_runComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _enc_key_resp_fx_allKeys;
var enc_fxComponents;
function enc_fxRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'enc_fx'-------
    t = 0;
    enc_fxClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    enc_fx_cross.setPos([CurrentX, CurrentY]);
    enc_key_resp_fx.keys = undefined;
    enc_key_resp_fx.rt = undefined;
    _enc_key_resp_fx_allKeys = [];
    // keep track of which components have finished
    enc_fxComponents = [];
    enc_fxComponents.push(map_enc_fx);
    enc_fxComponents.push(enc_fx_cross);
    enc_fxComponents.push(enc_key_resp_fx);
    
    enc_fxComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function enc_fxRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'enc_fx'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = enc_fxClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *map_enc_fx* updates
    if (t >= 0.0 && map_enc_fx.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      map_enc_fx.tStart = t;  // (not accounting for frame time here)
      map_enc_fx.frameNStart = frameN;  // exact frame index
      
      map_enc_fx.setAutoDraw(true);
    }

    frameRemains = 0.0 + (Jitter / 1000) - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (map_enc_fx.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      map_enc_fx.setAutoDraw(false);
    }
    
    // *enc_fx_cross* updates
    if (t >= 0.0 && enc_fx_cross.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      enc_fx_cross.tStart = t;  // (not accounting for frame time here)
      enc_fx_cross.frameNStart = frameN;  // exact frame index
      
      enc_fx_cross.setAutoDraw(true);
    }

    frameRemains = 0.0 + (Jitter / 1000) - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (enc_fx_cross.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      enc_fx_cross.setAutoDraw(false);
    }
    
    // *enc_key_resp_fx* updates
    if (t >= 0.0 && enc_key_resp_fx.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      enc_key_resp_fx.tStart = t;  // (not accounting for frame time here)
      enc_key_resp_fx.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { enc_key_resp_fx.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { enc_key_resp_fx.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { enc_key_resp_fx.clearEvents(); });
    }

    frameRemains = 0.0 + (Jitter / 1000) - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (enc_key_resp_fx.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      enc_key_resp_fx.status = PsychoJS.Status.FINISHED;
  }

    if (enc_key_resp_fx.status === PsychoJS.Status.STARTED) {
      let theseKeys = enc_key_resp_fx.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _enc_key_resp_fx_allKeys = _enc_key_resp_fx_allKeys.concat(theseKeys);
      if (_enc_key_resp_fx_allKeys.length > 0) {
        enc_key_resp_fx.keys = _enc_key_resp_fx_allKeys[_enc_key_resp_fx_allKeys.length - 1].name;  // just the last key pressed
        enc_key_resp_fx.rt = _enc_key_resp_fx_allKeys[_enc_key_resp_fx_allKeys.length - 1].rt;
      }
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
    enc_fxComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function enc_fxRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'enc_fx'-------
    enc_fxComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('enc_key_resp_fx.keys', enc_key_resp_fx.keys);
    if (typeof enc_key_resp_fx.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('enc_key_resp_fx.rt', enc_key_resp_fx.rt);
        }
    
    enc_key_resp_fx.stop();
    // the Routine "enc_fx" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _enc_key_resp_trial_allKeys;
var enc_trialComponents;
function enc_trialRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'enc_trial'-------
    t = 0;
    enc_trialClock.reset(); // clock
    frameN = -1;
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    enc_main_image.setPos([CurrentX, CurrentY]);
    enc_main_image.setImage(CurrentImage);
    enc_key_resp_trial.keys = undefined;
    enc_key_resp_trial.rt = undefined;
    _enc_key_resp_trial_allKeys = [];
    // keep track of which components have finished
    enc_trialComponents = [];
    enc_trialComponents.push(map_enc_trial);
    enc_trialComponents.push(enc_main_image);
    enc_trialComponents.push(enc_key_resp_trial);
    
    enc_trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function enc_trialRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'enc_trial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = enc_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *map_enc_trial* updates
    if (t >= 0.0 && map_enc_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      map_enc_trial.tStart = t;  // (not accounting for frame time here)
      map_enc_trial.frameNStart = frameN;  // exact frame index
      
      map_enc_trial.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (map_enc_trial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      map_enc_trial.setAutoDraw(false);
    }
    
    // *enc_main_image* updates
    if (t >= 0.0 && enc_main_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      enc_main_image.tStart = t;  // (not accounting for frame time here)
      enc_main_image.frameNStart = frameN;  // exact frame index
      
      enc_main_image.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (enc_main_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      enc_main_image.setAutoDraw(false);
    }
    
    // *enc_key_resp_trial* updates
    if (t >= 0.0 && enc_key_resp_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      enc_key_resp_trial.tStart = t;  // (not accounting for frame time here)
      enc_key_resp_trial.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { enc_key_resp_trial.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { enc_key_resp_trial.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { enc_key_resp_trial.clearEvents(); });
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (enc_key_resp_trial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      enc_key_resp_trial.status = PsychoJS.Status.FINISHED;
  }

    if (enc_key_resp_trial.status === PsychoJS.Status.STARTED) {
      let theseKeys = enc_key_resp_trial.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _enc_key_resp_trial_allKeys = _enc_key_resp_trial_allKeys.concat(theseKeys);
      if (_enc_key_resp_trial_allKeys.length > 0) {
        enc_key_resp_trial.keys = _enc_key_resp_trial_allKeys[_enc_key_resp_trial_allKeys.length - 1].name;  // just the last key pressed
        enc_key_resp_trial.rt = _enc_key_resp_trial_allKeys[_enc_key_resp_trial_allKeys.length - 1].rt;
      }
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
    enc_trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function enc_trialRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'enc_trial'-------
    enc_trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('enc_key_resp_trial.keys', enc_key_resp_trial.keys);
    if (typeof enc_key_resp_trial.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('enc_key_resp_trial.rt', enc_key_resp_trial.rt);
        }
    
    enc_key_resp_trial.stop();
    return Scheduler.Event.NEXT;
  };
}


var _enc_run_end_response_allKeys;
var end_enc_runComponents;
function end_enc_runRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'end_enc_run'-------
    t = 0;
    end_enc_runClock.reset(); // clock
    frameN = -1;
    routineTimer.add(1200.000000);
    // update component parameters for each repeat
    enc_run_end.setText(end_run_text);
    enc_run_end_response.keys = undefined;
    enc_run_end_response.rt = undefined;
    _enc_run_end_response_allKeys = [];
    // keep track of which components have finished
    end_enc_runComponents = [];
    end_enc_runComponents.push(enc_run_end);
    end_enc_runComponents.push(enc_run_end_response);
    
    end_enc_runComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function end_enc_runRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'end_enc_run'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = end_enc_runClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *enc_run_end* updates
    if (t >= 0.0 && enc_run_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      enc_run_end.tStart = t;  // (not accounting for frame time here)
      enc_run_end.frameNStart = frameN;  // exact frame index
      
      enc_run_end.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1200 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (enc_run_end.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      enc_run_end.setAutoDraw(false);
    }
    
    // *enc_run_end_response* updates
    if (t >= 0.0 && enc_run_end_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      enc_run_end_response.tStart = t;  // (not accounting for frame time here)
      enc_run_end_response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { enc_run_end_response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { enc_run_end_response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { enc_run_end_response.clearEvents(); });
    }

    frameRemains = 0.0 + 1200 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (enc_run_end_response.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      enc_run_end_response.status = PsychoJS.Status.FINISHED;
  }

    if (enc_run_end_response.status === PsychoJS.Status.STARTED) {
      let theseKeys = enc_run_end_response.getKeys({keyList: ['right'], waitRelease: false});
      _enc_run_end_response_allKeys = _enc_run_end_response_allKeys.concat(theseKeys);
      if (_enc_run_end_response_allKeys.length > 0) {
        enc_run_end_response.keys = _enc_run_end_response_allKeys[_enc_run_end_response_allKeys.length - 1].name;  // just the last key pressed
        enc_run_end_response.rt = _enc_run_end_response_allKeys[_enc_run_end_response_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
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
    end_enc_runComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function end_enc_runRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'end_enc_run'-------
    end_enc_runComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('enc_run_end_response.keys', enc_run_end_response.keys);
    if (typeof enc_run_end_response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('enc_run_end_response.rt', enc_run_end_response.rt);
        routineTimer.reset();
        }
    
    enc_run_end_response.stop();
    return Scheduler.Event.NEXT;
  };
}


var inter_task_breakComponents;
function inter_task_breakRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'inter_task_break'-------
    t = 0;
    inter_task_breakClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // keep track of which components have finished
    inter_task_breakComponents = [];
    
    inter_task_breakComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function inter_task_breakRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'inter_task_break'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = inter_task_breakClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    inter_task_breakComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function inter_task_breakRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'inter_task_break'-------
    inter_task_breakComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "inter_task_break" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var start_recognitionComponents;
function start_recognitionRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'start_recognition'-------
    t = 0;
    start_recognitionClock.reset(); // clock
    frameN = -1;
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    start = 0;
    end = 0;
    step = 1;
    n_runs = 3;
    run_counter = 0;
    
    stimuli_table = (("stimuli_tables/recognition_trials_" + selected) + ".csv");
    
    // keep track of which components have finished
    start_recognitionComponents = [];
    start_recognitionComponents.push(text_3);
    
    start_recognitionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function start_recognitionRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'start_recognition'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = start_recognitionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_3.setAutoDraw(false);
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
    start_recognitionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function start_recognitionRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'start_recognition'-------
    start_recognitionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var start_rec_runComponents;
function start_rec_runRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'start_rec_run'-------
    t = 0;
    start_rec_runClock.reset(); // clock
    frameN = -1;
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    start = end;
    end = (start + 3);
    selection = Array.from({length: end - start}, (_, index) => index + start)
    run_counter = (run_counter + 1);
    end_run_text = "Sz\u00fcnet\nA folytat\u00e1shoz nyomja le a jobb nyilat";
    if ((run_counter >= 3)) {
        end_run_text = "V\u00e9ge a m\u00e1sodik feladatnak";
    }
    
    // keep track of which components have finished
    start_rec_runComponents = [];
    start_rec_runComponents.push(rec_run_start);
    
    start_rec_runComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function start_rec_runRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'start_rec_run'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = start_rec_runClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *rec_run_start* updates
    if (t >= 0.0 && rec_run_start.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rec_run_start.tStart = t;  // (not accounting for frame time here)
      rec_run_start.frameNStart = frameN;  // exact frame index
      
      rec_run_start.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (rec_run_start.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      rec_run_start.setAutoDraw(false);
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
    start_rec_runComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function start_rec_runRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'start_rec_run'-------
    start_rec_runComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _rec_key_resp_fx_allKeys;
var rec_fxComponents;
function rec_fxRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'rec_fx'-------
    t = 0;
    rec_fxClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    rec_fx_cross.setPos([CurrentX, CurrentY]);
    rec_key_resp_fx.keys = undefined;
    rec_key_resp_fx.rt = undefined;
    _rec_key_resp_fx_allKeys = [];
    // keep track of which components have finished
    rec_fxComponents = [];
    rec_fxComponents.push(map_rec_fx);
    rec_fxComponents.push(rec_fx_cross);
    rec_fxComponents.push(rec_key_resp_fx);
    
    rec_fxComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function rec_fxRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'rec_fx'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = rec_fxClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *map_rec_fx* updates
    if (t >= 0.0 && map_rec_fx.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      map_rec_fx.tStart = t;  // (not accounting for frame time here)
      map_rec_fx.frameNStart = frameN;  // exact frame index
      
      map_rec_fx.setAutoDraw(true);
    }

    frameRemains = 0.0 + (Jitter / 1000) - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (map_rec_fx.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      map_rec_fx.setAutoDraw(false);
    }
    
    // *rec_fx_cross* updates
    if (t >= 0.0 && rec_fx_cross.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rec_fx_cross.tStart = t;  // (not accounting for frame time here)
      rec_fx_cross.frameNStart = frameN;  // exact frame index
      
      rec_fx_cross.setAutoDraw(true);
    }

    frameRemains = 0.0 + (Jitter / 1000) - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (rec_fx_cross.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      rec_fx_cross.setAutoDraw(false);
    }
    
    // *rec_key_resp_fx* updates
    if (t >= 0.0 && rec_key_resp_fx.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rec_key_resp_fx.tStart = t;  // (not accounting for frame time here)
      rec_key_resp_fx.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { rec_key_resp_fx.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { rec_key_resp_fx.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { rec_key_resp_fx.clearEvents(); });
    }

    frameRemains = 0.0 + (Jitter / 1000) - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (rec_key_resp_fx.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      rec_key_resp_fx.status = PsychoJS.Status.FINISHED;
  }

    if (rec_key_resp_fx.status === PsychoJS.Status.STARTED) {
      let theseKeys = rec_key_resp_fx.getKeys({keyList: ['f', 'j', 'k'], waitRelease: false});
      _rec_key_resp_fx_allKeys = _rec_key_resp_fx_allKeys.concat(theseKeys);
      if (_rec_key_resp_fx_allKeys.length > 0) {
        rec_key_resp_fx.keys = _rec_key_resp_fx_allKeys[_rec_key_resp_fx_allKeys.length - 1].name;  // just the last key pressed
        rec_key_resp_fx.rt = _rec_key_resp_fx_allKeys[_rec_key_resp_fx_allKeys.length - 1].rt;
      }
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
    rec_fxComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function rec_fxRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'rec_fx'-------
    rec_fxComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('rec_key_resp_fx.keys', rec_key_resp_fx.keys);
    if (typeof rec_key_resp_fx.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('rec_key_resp_fx.rt', rec_key_resp_fx.rt);
        }
    
    rec_key_resp_fx.stop();
    // the Routine "rec_fx" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _rec_key_resp_trial_allKeys;
var rec_trialComponents;
function rec_trialRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'rec_trial'-------
    t = 0;
    rec_trialClock.reset(); // clock
    frameN = -1;
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    main_image_rec.setPos([CurrentX, CurrentY]);
    main_image_rec.setImage(CurrentImage);
    rec_key_resp_trial.keys = undefined;
    rec_key_resp_trial.rt = undefined;
    _rec_key_resp_trial_allKeys = [];
    // keep track of which components have finished
    rec_trialComponents = [];
    rec_trialComponents.push(map_rec_trial);
    rec_trialComponents.push(main_image_rec);
    rec_trialComponents.push(rec_key_resp_trial);
    
    rec_trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function rec_trialRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'rec_trial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = rec_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *map_rec_trial* updates
    if (t >= 0.0 && map_rec_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      map_rec_trial.tStart = t;  // (not accounting for frame time here)
      map_rec_trial.frameNStart = frameN;  // exact frame index
      
      map_rec_trial.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (map_rec_trial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      map_rec_trial.setAutoDraw(false);
    }
    
    // *main_image_rec* updates
    if (t >= 0.0 && main_image_rec.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      main_image_rec.tStart = t;  // (not accounting for frame time here)
      main_image_rec.frameNStart = frameN;  // exact frame index
      
      main_image_rec.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (main_image_rec.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      main_image_rec.setAutoDraw(false);
    }
    
    // *rec_key_resp_trial* updates
    if (t >= 0.0 && rec_key_resp_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rec_key_resp_trial.tStart = t;  // (not accounting for frame time here)
      rec_key_resp_trial.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { rec_key_resp_trial.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { rec_key_resp_trial.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { rec_key_resp_trial.clearEvents(); });
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (rec_key_resp_trial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      rec_key_resp_trial.status = PsychoJS.Status.FINISHED;
  }

    if (rec_key_resp_trial.status === PsychoJS.Status.STARTED) {
      let theseKeys = rec_key_resp_trial.getKeys({keyList: ['f', 'j', 'k'], waitRelease: false});
      _rec_key_resp_trial_allKeys = _rec_key_resp_trial_allKeys.concat(theseKeys);
      if (_rec_key_resp_trial_allKeys.length > 0) {
        rec_key_resp_trial.keys = _rec_key_resp_trial_allKeys[_rec_key_resp_trial_allKeys.length - 1].name;  // just the last key pressed
        rec_key_resp_trial.rt = _rec_key_resp_trial_allKeys[_rec_key_resp_trial_allKeys.length - 1].rt;
      }
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
    rec_trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function rec_trialRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'rec_trial'-------
    rec_trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('rec_key_resp_trial.keys', rec_key_resp_trial.keys);
    if (typeof rec_key_resp_trial.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('rec_key_resp_trial.rt', rec_key_resp_trial.rt);
        }
    
    rec_key_resp_trial.stop();
    return Scheduler.Event.NEXT;
  };
}


var _rec_run_end_response_allKeys;
var end_rec_runComponents;
function end_rec_runRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'end_rec_run'-------
    t = 0;
    end_rec_runClock.reset(); // clock
    frameN = -1;
    routineTimer.add(300.000000);
    // update component parameters for each repeat
    rec_run_end.setText(end_run_text);
    rec_run_end_response.keys = undefined;
    rec_run_end_response.rt = undefined;
    _rec_run_end_response_allKeys = [];
    // keep track of which components have finished
    end_rec_runComponents = [];
    end_rec_runComponents.push(rec_run_end);
    end_rec_runComponents.push(rec_run_end_response);
    
    end_rec_runComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function end_rec_runRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'end_rec_run'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = end_rec_runClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *rec_run_end* updates
    if (t >= 0.0 && rec_run_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rec_run_end.tStart = t;  // (not accounting for frame time here)
      rec_run_end.frameNStart = frameN;  // exact frame index
      
      rec_run_end.setAutoDraw(true);
    }

    frameRemains = 0.0 + 300.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (rec_run_end.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      rec_run_end.setAutoDraw(false);
    }
    
    // *rec_run_end_response* updates
    if (t >= 0.0 && rec_run_end_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rec_run_end_response.tStart = t;  // (not accounting for frame time here)
      rec_run_end_response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { rec_run_end_response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { rec_run_end_response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { rec_run_end_response.clearEvents(); });
    }

    frameRemains = 0.0 + 300 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (rec_run_end_response.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      rec_run_end_response.status = PsychoJS.Status.FINISHED;
  }

    if (rec_run_end_response.status === PsychoJS.Status.STARTED) {
      let theseKeys = rec_run_end_response.getKeys({keyList: ['right'], waitRelease: false});
      _rec_run_end_response_allKeys = _rec_run_end_response_allKeys.concat(theseKeys);
      if (_rec_run_end_response_allKeys.length > 0) {
        rec_run_end_response.keys = _rec_run_end_response_allKeys[_rec_run_end_response_allKeys.length - 1].name;  // just the last key pressed
        rec_run_end_response.rt = _rec_run_end_response_allKeys[_rec_run_end_response_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
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
    end_rec_runComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function end_rec_runRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'end_rec_run'-------
    end_rec_runComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('rec_run_end_response.keys', rec_run_end_response.keys);
    if (typeof rec_run_end_response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('rec_run_end_response.rt', rec_run_end_response.rt);
        routineTimer.reset();
        }
    
    rec_run_end_response.stop();
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
