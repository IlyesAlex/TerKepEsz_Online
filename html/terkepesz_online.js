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
flowScheduler.add(enc_instructions_3RoutineBegin());
flowScheduler.add(enc_instructions_3RoutineEachFrame());
flowScheduler.add(enc_instructions_3RoutineEnd());
flowScheduler.add(start_practiceRoutineBegin());
flowScheduler.add(start_practiceRoutineEachFrame());
flowScheduler.add(start_practiceRoutineEnd());
const enc_practice_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(enc_practice_trialsLoopBegin, enc_practice_trialsLoopScheduler);
flowScheduler.add(enc_practice_trialsLoopScheduler);
flowScheduler.add(enc_practice_trialsLoopEnd);
flowScheduler.add(end_practiceRoutineBegin());
flowScheduler.add(end_practiceRoutineEachFrame());
flowScheduler.add(end_practiceRoutineEnd());
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
flowScheduler.add(rec_instructions_1RoutineBegin());
flowScheduler.add(rec_instructions_1RoutineEachFrame());
flowScheduler.add(rec_instructions_1RoutineEnd());
flowScheduler.add(rec_instructions_2RoutineBegin());
flowScheduler.add(rec_instructions_2RoutineEachFrame());
flowScheduler.add(rec_instructions_2RoutineEnd());
flowScheduler.add(rec_instructions_3RoutineBegin());
flowScheduler.add(rec_instructions_3RoutineEachFrame());
flowScheduler.add(rec_instructions_3RoutineEnd());
flowScheduler.add(rec_instructions_4RoutineBegin());
flowScheduler.add(rec_instructions_4RoutineEachFrame());
flowScheduler.add(rec_instructions_4RoutineEnd());
const demo_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(demo_trialsLoopBegin, demo_trialsLoopScheduler);
flowScheduler.add(demo_trialsLoopScheduler);
flowScheduler.add(demo_trialsLoopEnd);
flowScheduler.add(demo_endRoutineBegin());
flowScheduler.add(demo_endRoutineEachFrame());
flowScheduler.add(demo_endRoutineEnd());
flowScheduler.add(start_practiceRoutineBegin());
flowScheduler.add(start_practiceRoutineEachFrame());
flowScheduler.add(start_practiceRoutineEnd());
const rec_practice_blocksLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(rec_practice_blocksLoopBegin, rec_practice_blocksLoopScheduler);
flowScheduler.add(rec_practice_blocksLoopScheduler);
flowScheduler.add(rec_practice_blocksLoopEnd);
flowScheduler.add(end_practiceRoutineBegin());
flowScheduler.add(end_practiceRoutineEachFrame());
flowScheduler.add(end_practiceRoutineEnd());
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
var lab_key;
var start_encodingClock;
var start_encoding_text;
var tables;
var selected;
var stimuli_table;
var enc_instructions_1Clock;
var enc_instructions_1_text;
var enc_instructions_1_image;
var enc_instructions_1_key;
var enc_instructions_2Clock;
var enc_instructions_2_text;
var enc_instructions_2_image;
var enc_instructions_2_key;
var enc_instructions_3Clock;
var enc_instructions_3_text;
var enc_instructions_3_key;
var start_practiceClock;
var start_practice_text;
var enc_fxClock;
var enc_fx_map;
var enc_fx_cross;
var enc_fx_key;
var enc_trialClock;
var enc_trial_map;
var enc_trial_main_image;
var enc_trial_key;
var enc_practice_feedbackClock;
var enc_practice_feedback_map;
var enc_practice_feedback_image;
var enc_practice_feedback_text;
var end_practiceClock;
var end_practice_text;
var end_practice_key;
var start_enc_runClock;
var start_enc_run_text;
var end_enc_runClock;
var end_enc_run_text;
var enc_run_end_key;
var inter_task_breakClock;
var start_recognitionClock;
var start_recognition_text;
var rec_instructions_1Clock;
var rec_instructions_1_text;
var rec_instructions_1_key;
var rec_instructions_2Clock;
var rec_instructions2_text;
var rec_instructions_2_key;
var rec_instructions_3Clock;
var rec_instrauction_3_text;
var rec_instructions_3_key;
var rec_instructions_4Clock;
var rec_instructions_4_text;
var rec_instructions_4_key;
var demoClock;
var demo_map;
var demo_text;
var demo_key;
var demo_endClock;
var demo_end_text;
var demo_end_key;
var start_rec_practice_blockClock;
var rec_practice_block;
var block_name;
var block_counter;
var rec_practice_block_text;
var rec_fxClock;
var rec_fx_map;
var rec_fx_cross;
var rec_fx_key;
var rec_fx_text_block;
var rec_fx_instructions_text;
var rec_trialClock;
var rec_trial_map;
var rec_trial_main_image;
var rec_trial_key;
var rec_trial_text_block;
var rec_trial_instructions_text;
var rec_practice_feedbackClock;
var rec_practice_feedback_text;
var start_rec_runClock;
var start_rec_run_text;
var start_rec_blockClock;
var start_rec_block_text;
var end_rec_runClock;
var end_rec_run_text;
var end_rec_run_key;
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
  
  lab_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "start_encoding"
  start_encodingClock = new util.Clock();
  start_encoding_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'start_encoding_text',
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
  enc_instructions_1_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'enc_instructions_1_text',
    text: 'Ön ennek a modern képgalériának a kurátora. \n\nA legújabb kiállításra a vártnál több kép érkezett.\n\nKurátorként az Ön feladata lesz eldönteni, mely képeket válogatjuk be a kiállított darabok közé, és hogy a kép illeszkedik-e a galéria adott pontjára. \n\nAz Ön ideje nagyon drága a galériának, így a döntésre egy-egy képről csak 3 másodperce lesz.\n\nA folytatáshoz nyomja le a jobb nyilat.\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.4), 0], height: 0.04,  wrapWidth: 0.9, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  enc_instructions_1_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'enc_instructions_1_image', units : 'pix', 
    image : 'stimuli/GalleryBuildingFromOutside.jpg', mask : undefined,
    ori : 0, pos : [450, 0.0], size : [600, 450],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  enc_instructions_1_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "enc_instructions_2"
  enc_instructions_2Clock = new util.Clock();
  enc_instructions_2_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'enc_instructions_2_text',
    text: 'Ez a galéria térképe felülről, nézze meg figyelmesen. \n\nA feladat során a képek a térképre vetítve jelennek meg, azon a helyen, ahol kiállításra kerülhetnek.\n\nDöntse el a képekről, hogy ki legyenek-e állítva a bemutatott helyen. \n\nMinden képet nézzen meg figyelmesen, és minden képre adjon választ. \n\nA folytatáshoz nyomja le a jobb nyilat.',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.5), 0], height: 0.04,  wrapWidth: 0.7, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  enc_instructions_2_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'enc_instructions_2_image', units : 'pix', 
    image : 'stimuli/GalleryInfo.jpg', mask : undefined,
    ori : 0, pos : [425, 0], size : [1000, 750],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  enc_instructions_2_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "enc_instructions_3"
  enc_instructions_3Clock = new util.Clock();
  enc_instructions_3_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'enc_instructions_3_text',
    text: "A 'J' billentyűvel jelölje azokat a képeket, amelyek maradhatnak a galériában, a bemutatott helyen.\n\nAz 'F' billentyűvel jelölje a képeket, amelyek nem maradnak kiállítva a bemutatott helyen. \n\nMost a gyakorló feladat következik. \nHa készen áll a gyakorlásra, nyomja le a jobb nyilat.",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  enc_instructions_3_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "start_practice"
  start_practiceClock = new util.Clock();
  start_practice_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'start_practice_text',
    text: 'Kezdődik a gyakorlás...',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "enc_fx"
  enc_fxClock = new util.Clock();
  enc_fx_map = new visual.ImageStim({
    win : psychoJS.window,
    name : 'enc_fx_map', units : 'pix', 
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
  
  enc_fx_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "enc_trial"
  enc_trialClock = new util.Clock();
  enc_trial_map = new visual.ImageStim({
    win : psychoJS.window,
    name : 'enc_trial_map', units : 'pix', 
    image : 'stimuli/GalleryPlanInside.jpg', mask : undefined,
    ori : 0, pos : [0, (- 25)], size : [1040, 1000],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  enc_trial_main_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'enc_trial_main_image', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [300, 300],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  enc_trial_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "enc_practice_feedback"
  enc_practice_feedbackClock = new util.Clock();
  enc_practice_feedback_map = new visual.ImageStim({
    win : psychoJS.window,
    name : 'enc_practice_feedback_map', units : 'pix', 
    image : 'stimuli/GalleryPlanInside.jpg', mask : undefined,
    ori : 0, pos : [0, (- 25)], size : [1040, 1000],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  enc_practice_feedback_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'enc_practice_feedback_image', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [300, 300],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  enc_practice_feedback_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'enc_practice_feedback_text',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -3.0 
  });
  
  // Initialize components for Routine "end_practice"
  end_practiceClock = new util.Clock();
  end_practice_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_practice_text',
    text: 'Ez volt a gyakorlás. A feladat következik. \n\nA feladat elkezdéséhez nyomja le a jobb nyilat.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: 0.8, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  end_practice_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "start_enc_run"
  start_enc_runClock = new util.Clock();
  start_enc_run_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'start_enc_run_text',
    text: 'Kezdődik a feladat...',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "enc_fx"
  enc_fxClock = new util.Clock();
  enc_fx_map = new visual.ImageStim({
    win : psychoJS.window,
    name : 'enc_fx_map', units : 'pix', 
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
  
  enc_fx_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "enc_trial"
  enc_trialClock = new util.Clock();
  enc_trial_map = new visual.ImageStim({
    win : psychoJS.window,
    name : 'enc_trial_map', units : 'pix', 
    image : 'stimuli/GalleryPlanInside.jpg', mask : undefined,
    ori : 0, pos : [0, (- 25)], size : [1040, 1000],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  enc_trial_main_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'enc_trial_main_image', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [300, 300],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  enc_trial_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "end_enc_run"
  end_enc_runClock = new util.Clock();
  end_enc_run_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_enc_run_text',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.06,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  enc_run_end_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "inter_task_break"
  inter_task_breakClock = new util.Clock();
  // Initialize components for Routine "start_recognition"
  start_recognitionClock = new util.Clock();
  start_recognition_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'start_recognition_text',
    text: 'Második feladat\nKépfelismerés',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "rec_instructions_1"
  rec_instructions_1Clock = new util.Clock();
  rec_instructions_1_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'rec_instructions_1_text',
    text: 'A következő feladatban ismét absztrakt képeket fog látni, és ezekről kell eldöntenie, látta-e őket az első, műalkotás válogató feladataban, és hogy ugyanott látta-e őket.\n\nA feladatot két alfeladatra bontottuk. Az egyikben a képekről, a másikban a képek pozíciójáról kell döntenie.\n\nA folytatáshoz nyomja le a jobb nyilat.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  rec_instructions_1_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "rec_instructions_2"
  rec_instructions_2Clock = new util.Clock();
  rec_instructions2_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'rec_instructions2_text',
    text: 'A Kép nevű alfeladatban azt kell eldöntenie, látta-e már ezeket a képeket az első, műalkotás válogató feladataban.\n\nHárom csoportba oszthatóak a megjelenő képek:\n - Régi: Ezek a képek pontosan megegyeznek majd az első feladatban látott képek egyikével.\n - Hasonló: Ezek a képek nagyon hasonlítanak az első feladatban látott képek egyikéhez.\n - Új: Teljesen új képek, amelyek nem jelentek meg az első feladatban.\n\nAz Ön feladata, hogy eldöntse, melyik kép ugyanaz, mint az első feladatban, melyik hasonló, és melyik új. \nMinden képet nézzen meg figyelmesen, és minden képre adjon választ, akkor is, ha a döntés nehéz.\n\nRégi - F\nHasonló - J\nÚj - K\n\nA folytatáshoz nyomja le a jobb nyilat',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: 1, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  rec_instructions_2_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "rec_instructions_3"
  rec_instructions_3Clock = new util.Clock();
  rec_instrauction_3_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'rec_instrauction_3_text',
    text: 'A Hely nevű alfeladatban azt kell eldöntenie, a képek ugyanott jelennek-e meg, mint az első, műalkotás válogató feladataban.\nEbben az alfeladatban minden kép pontos mása annak, amit az első feladatban látott. \n\nA helyek azonban három csoportba oszthatóak:\n - Régi: Pontosan ugyanitt jelent meg ez a kép az első feladatban.\n - Hasonló: Egy hasonló helyen jelent meg ez a kép az első feladatban.\n - Új: Egy teljesen másik helyen jelent meg ez a kép az első feladatban.\n\nAz Ön feladata, hogy eldöntse, melyik kép jelent meg ugyanott, hasonló, és teljesen új helyen.\nMinden képet nézzen meg figyelmesen, és minden képre adjon választ, akkor is, ha a döntés nehéz.\n\nA döntését így jelölje:\nRégi - F\nHasonló - J\nÚj - K\n\nA folytatáshoz nyomja le a jobb nyilat.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: 1, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  rec_instructions_3_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "rec_instructions_4"
  rec_instructions_4Clock = new util.Clock();
  rec_instructions_4_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'rec_instructions_4_text',
    text: 'A következőkben bemutatjuk Önnek, milyenek a hasonló, régi és új, képek/helyek. \n\nA bemutató alatt jobb nyillal tud továbblépni.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  rec_instructions_4_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "demo"
  demoClock = new util.Clock();
  demo_map = new visual.ImageStim({
    win : psychoJS.window,
    name : 'demo_map', units : 'pix', 
    image : 'stimuli/GalleryPlanInside.jpg', mask : undefined,
    ori : 0, pos : [0, (- 25)], size : [1040, 1000],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  demo_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'demo_text',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.45], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  demo_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "demo_end"
  demo_endClock = new util.Clock();
  demo_end_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'demo_end_text',
    text: 'Ez volt a bemutató. Most a gyakorlás következik.\n\nHa készen áll a gyakorlásra, nyomja le a jobb nyilat.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  demo_end_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "start_practice"
  start_practiceClock = new util.Clock();
  start_practice_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'start_practice_text',
    text: 'Kezdődik a gyakorlás...',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "start_rec_practice_block"
  start_rec_practice_blockClock = new util.Clock();
  rec_practice_block = [0, 1, 2];
  block_name = "K\u00e9p";
  block_counter = 0;
  
  rec_practice_block_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'rec_practice_block_text',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "rec_fx"
  rec_fxClock = new util.Clock();
  rec_fx_map = new visual.ImageStim({
    win : psychoJS.window,
    name : 'rec_fx_map', units : 'pix', 
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
  
  rec_fx_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  rec_fx_text_block = new visual.TextStim({
    win: psychoJS.window,
    name: 'rec_fx_text_block',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.45], height: 0.045,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -3.0 
  });
  
  rec_fx_instructions_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'rec_fx_instructions_text',
    text: '[F - Régi]      [J - Hasonló]     [K - Új]',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.045)], height: 0.045,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  // Initialize components for Routine "rec_trial"
  rec_trialClock = new util.Clock();
  rec_trial_map = new visual.ImageStim({
    win : psychoJS.window,
    name : 'rec_trial_map', units : 'pix', 
    image : 'stimuli/GalleryPlanInside.jpg', mask : undefined,
    ori : 0, pos : [0, (- 25)], size : [1040, 1000],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  rec_trial_main_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'rec_trial_main_image', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [300, 300],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  rec_trial_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  rec_trial_text_block = new visual.TextStim({
    win: psychoJS.window,
    name: 'rec_trial_text_block',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.45], height: 0.045,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -3.0 
  });
  
  rec_trial_instructions_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'rec_trial_instructions_text',
    text: '[F - Régi]      [J - Hasonló]     [K - Új]',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.45)], height: 0.045,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -4.0 
  });
  
  // Initialize components for Routine "rec_practice_feedback"
  rec_practice_feedbackClock = new util.Clock();
  rec_practice_feedback_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'rec_practice_feedback_text',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "end_practice"
  end_practiceClock = new util.Clock();
  end_practice_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_practice_text',
    text: 'Ez volt a gyakorlás. A feladat következik. \n\nA feladat elkezdéséhez nyomja le a jobb nyilat.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: 0.8, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  end_practice_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "start_rec_run"
  start_rec_runClock = new util.Clock();
  start_rec_run_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'start_rec_run_text',
    text: 'Kezdődik a feladat...',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "start_rec_block"
  start_rec_blockClock = new util.Clock();
  start_rec_block_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'start_rec_block_text',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "rec_fx"
  rec_fxClock = new util.Clock();
  rec_fx_map = new visual.ImageStim({
    win : psychoJS.window,
    name : 'rec_fx_map', units : 'pix', 
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
  
  rec_fx_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  rec_fx_text_block = new visual.TextStim({
    win: psychoJS.window,
    name: 'rec_fx_text_block',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.45], height: 0.045,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -3.0 
  });
  
  rec_fx_instructions_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'rec_fx_instructions_text',
    text: '[F - Régi]      [J - Hasonló]     [K - Új]',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.045)], height: 0.045,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  // Initialize components for Routine "rec_trial"
  rec_trialClock = new util.Clock();
  rec_trial_map = new visual.ImageStim({
    win : psychoJS.window,
    name : 'rec_trial_map', units : 'pix', 
    image : 'stimuli/GalleryPlanInside.jpg', mask : undefined,
    ori : 0, pos : [0, (- 25)], size : [1040, 1000],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  rec_trial_main_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'rec_trial_main_image', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [300, 300],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  rec_trial_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  rec_trial_text_block = new visual.TextStim({
    win: psychoJS.window,
    name: 'rec_trial_text_block',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.45], height: 0.045,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -3.0 
  });
  
  rec_trial_instructions_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'rec_trial_instructions_text',
    text: '[F - Régi]      [J - Hasonló]     [K - Új]',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.45)], height: 0.045,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -4.0 
  });
  
  // Initialize components for Routine "end_rec_run"
  end_rec_runClock = new util.Clock();
  end_rec_run_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_rec_run_text',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  end_rec_run_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
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
    
    for (const thisComponent of consentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
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
    for (const thisComponent of consentComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of consentComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "consent" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _lab_key_allKeys;
var lab_introductionComponents;
function lab_introductionRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'lab_introduction'-------
    t = 0;
    lab_introductionClock.reset(); // clock
    frameN = -1;
    routineTimer.add(120.000000);
    // update component parameters for each repeat
    lab_key.keys = undefined;
    lab_key.rt = undefined;
    _lab_key_allKeys = [];
    // keep track of which components have finished
    lab_introductionComponents = [];
    lab_introductionComponents.push(lab_thanks);
    lab_introductionComponents.push(lab_key);
    
    for (const thisComponent of lab_introductionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
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
    
    // *lab_key* updates
    if (t >= 0.0 && lab_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      lab_key.tStart = t;  // (not accounting for frame time here)
      lab_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { lab_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { lab_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { lab_key.clearEvents(); });
    }

    frameRemains = 0.0 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (lab_key.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      lab_key.status = PsychoJS.Status.FINISHED;
  }

    if (lab_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = lab_key.getKeys({keyList: ['right'], waitRelease: false});
      _lab_key_allKeys = _lab_key_allKeys.concat(theseKeys);
      if (_lab_key_allKeys.length > 0) {
        lab_key.keys = _lab_key_allKeys[_lab_key_allKeys.length - 1].name;  // just the last key pressed
        lab_key.rt = _lab_key_allKeys[_lab_key_allKeys.length - 1].rt;
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
    for (const thisComponent of lab_introductionComponents)
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


function lab_introductionRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'lab_introduction'-------
    for (const thisComponent of lab_introductionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('lab_key.keys', lab_key.keys);
    if (typeof lab_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('lab_key.rt', lab_key.rt);
        routineTimer.reset();
        }
    
    lab_key.stop();
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
    start_encoding_text.setText('Első feladat\nGaléria berendezés');
    start = 0;
    end = 0;
    step = 1;
    n_runs = 3;
    run_counter = 0;
    
    // keep track of which components have finished
    start_encodingComponents = [];
    start_encodingComponents.push(start_encoding_text);
    
    for (const thisComponent of start_encodingComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
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
    
    // *start_encoding_text* updates
    if (t >= 0.0 && start_encoding_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_encoding_text.tStart = t;  // (not accounting for frame time here)
      start_encoding_text.frameNStart = frameN;  // exact frame index
      
      start_encoding_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (start_encoding_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      start_encoding_text.setAutoDraw(false);
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
    for (const thisComponent of start_encodingComponents)
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


function start_encodingRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'start_encoding'-------
    for (const thisComponent of start_encodingComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var _enc_instructions_1_key_allKeys;
var enc_instructions_1Components;
function enc_instructions_1RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'enc_instructions_1'-------
    t = 0;
    enc_instructions_1Clock.reset(); // clock
    frameN = -1;
    routineTimer.add(300.000000);
    // update component parameters for each repeat
    enc_instructions_1_key.keys = undefined;
    enc_instructions_1_key.rt = undefined;
    _enc_instructions_1_key_allKeys = [];
    // keep track of which components have finished
    enc_instructions_1Components = [];
    enc_instructions_1Components.push(enc_instructions_1_text);
    enc_instructions_1Components.push(enc_instructions_1_image);
    enc_instructions_1Components.push(enc_instructions_1_key);
    
    for (const thisComponent of enc_instructions_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
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
    
    // *enc_instructions_1_text* updates
    if (t >= 0.0 && enc_instructions_1_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      enc_instructions_1_text.tStart = t;  // (not accounting for frame time here)
      enc_instructions_1_text.frameNStart = frameN;  // exact frame index
      
      enc_instructions_1_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 300.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (enc_instructions_1_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      enc_instructions_1_text.setAutoDraw(false);
    }
    
    // *enc_instructions_1_image* updates
    if (t >= 0.0 && enc_instructions_1_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      enc_instructions_1_image.tStart = t;  // (not accounting for frame time here)
      enc_instructions_1_image.frameNStart = frameN;  // exact frame index
      
      enc_instructions_1_image.setAutoDraw(true);
    }

    frameRemains = 0.0 + 300.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (enc_instructions_1_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      enc_instructions_1_image.setAutoDraw(false);
    }
    
    // *enc_instructions_1_key* updates
    if (t >= 0.0 && enc_instructions_1_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      enc_instructions_1_key.tStart = t;  // (not accounting for frame time here)
      enc_instructions_1_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { enc_instructions_1_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { enc_instructions_1_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { enc_instructions_1_key.clearEvents(); });
    }

    frameRemains = 0.0 + 300.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (enc_instructions_1_key.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      enc_instructions_1_key.status = PsychoJS.Status.FINISHED;
  }

    if (enc_instructions_1_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = enc_instructions_1_key.getKeys({keyList: ['right'], waitRelease: false});
      _enc_instructions_1_key_allKeys = _enc_instructions_1_key_allKeys.concat(theseKeys);
      if (_enc_instructions_1_key_allKeys.length > 0) {
        enc_instructions_1_key.keys = _enc_instructions_1_key_allKeys[_enc_instructions_1_key_allKeys.length - 1].name;  // just the last key pressed
        enc_instructions_1_key.rt = _enc_instructions_1_key_allKeys[_enc_instructions_1_key_allKeys.length - 1].rt;
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
    for (const thisComponent of enc_instructions_1Components)
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


function enc_instructions_1RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'enc_instructions_1'-------
    for (const thisComponent of enc_instructions_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('enc_instructions_1_key.keys', enc_instructions_1_key.keys);
    if (typeof enc_instructions_1_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('enc_instructions_1_key.rt', enc_instructions_1_key.rt);
        routineTimer.reset();
        }
    
    enc_instructions_1_key.stop();
    return Scheduler.Event.NEXT;
  };
}


var _enc_instructions_2_key_allKeys;
var enc_instructions_2Components;
function enc_instructions_2RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'enc_instructions_2'-------
    t = 0;
    enc_instructions_2Clock.reset(); // clock
    frameN = -1;
    routineTimer.add(300.000000);
    // update component parameters for each repeat
    enc_instructions_2_key.keys = undefined;
    enc_instructions_2_key.rt = undefined;
    _enc_instructions_2_key_allKeys = [];
    // keep track of which components have finished
    enc_instructions_2Components = [];
    enc_instructions_2Components.push(enc_instructions_2_text);
    enc_instructions_2Components.push(enc_instructions_2_image);
    enc_instructions_2Components.push(enc_instructions_2_key);
    
    for (const thisComponent of enc_instructions_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
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
    
    // *enc_instructions_2_text* updates
    if (t >= 0.0 && enc_instructions_2_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      enc_instructions_2_text.tStart = t;  // (not accounting for frame time here)
      enc_instructions_2_text.frameNStart = frameN;  // exact frame index
      
      enc_instructions_2_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 300.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (enc_instructions_2_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      enc_instructions_2_text.setAutoDraw(false);
    }
    
    // *enc_instructions_2_image* updates
    if (t >= 0.0 && enc_instructions_2_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      enc_instructions_2_image.tStart = t;  // (not accounting for frame time here)
      enc_instructions_2_image.frameNStart = frameN;  // exact frame index
      
      enc_instructions_2_image.setAutoDraw(true);
    }

    frameRemains = 0.0 + 300.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (enc_instructions_2_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      enc_instructions_2_image.setAutoDraw(false);
    }
    
    // *enc_instructions_2_key* updates
    if (t >= 0.0 && enc_instructions_2_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      enc_instructions_2_key.tStart = t;  // (not accounting for frame time here)
      enc_instructions_2_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { enc_instructions_2_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { enc_instructions_2_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { enc_instructions_2_key.clearEvents(); });
    }

    frameRemains = 0.0 + 300.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (enc_instructions_2_key.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      enc_instructions_2_key.status = PsychoJS.Status.FINISHED;
  }

    if (enc_instructions_2_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = enc_instructions_2_key.getKeys({keyList: ['right'], waitRelease: false});
      _enc_instructions_2_key_allKeys = _enc_instructions_2_key_allKeys.concat(theseKeys);
      if (_enc_instructions_2_key_allKeys.length > 0) {
        enc_instructions_2_key.keys = _enc_instructions_2_key_allKeys[_enc_instructions_2_key_allKeys.length - 1].name;  // just the last key pressed
        enc_instructions_2_key.rt = _enc_instructions_2_key_allKeys[_enc_instructions_2_key_allKeys.length - 1].rt;
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
    for (const thisComponent of enc_instructions_2Components)
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


function enc_instructions_2RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'enc_instructions_2'-------
    for (const thisComponent of enc_instructions_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('enc_instructions_2_key.keys', enc_instructions_2_key.keys);
    if (typeof enc_instructions_2_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('enc_instructions_2_key.rt', enc_instructions_2_key.rt);
        routineTimer.reset();
        }
    
    enc_instructions_2_key.stop();
    return Scheduler.Event.NEXT;
  };
}


var _enc_instructions_3_key_allKeys;
var enc_instructions_3Components;
function enc_instructions_3RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'enc_instructions_3'-------
    t = 0;
    enc_instructions_3Clock.reset(); // clock
    frameN = -1;
    routineTimer.add(300.000000);
    // update component parameters for each repeat
    enc_instructions_3_key.keys = undefined;
    enc_instructions_3_key.rt = undefined;
    _enc_instructions_3_key_allKeys = [];
    // keep track of which components have finished
    enc_instructions_3Components = [];
    enc_instructions_3Components.push(enc_instructions_3_text);
    enc_instructions_3Components.push(enc_instructions_3_key);
    
    for (const thisComponent of enc_instructions_3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function enc_instructions_3RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'enc_instructions_3'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = enc_instructions_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *enc_instructions_3_text* updates
    if (t >= 0.0 && enc_instructions_3_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      enc_instructions_3_text.tStart = t;  // (not accounting for frame time here)
      enc_instructions_3_text.frameNStart = frameN;  // exact frame index
      
      enc_instructions_3_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 300 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (enc_instructions_3_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      enc_instructions_3_text.setAutoDraw(false);
    }
    
    // *enc_instructions_3_key* updates
    if (t >= 0.0 && enc_instructions_3_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      enc_instructions_3_key.tStart = t;  // (not accounting for frame time here)
      enc_instructions_3_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { enc_instructions_3_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { enc_instructions_3_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { enc_instructions_3_key.clearEvents(); });
    }

    frameRemains = 0.0 + 300 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (enc_instructions_3_key.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      enc_instructions_3_key.status = PsychoJS.Status.FINISHED;
  }

    if (enc_instructions_3_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = enc_instructions_3_key.getKeys({keyList: ['right'], waitRelease: false});
      _enc_instructions_3_key_allKeys = _enc_instructions_3_key_allKeys.concat(theseKeys);
      if (_enc_instructions_3_key_allKeys.length > 0) {
        enc_instructions_3_key.keys = _enc_instructions_3_key_allKeys[_enc_instructions_3_key_allKeys.length - 1].name;  // just the last key pressed
        enc_instructions_3_key.rt = _enc_instructions_3_key_allKeys[_enc_instructions_3_key_allKeys.length - 1].rt;
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
    for (const thisComponent of enc_instructions_3Components)
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


function enc_instructions_3RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'enc_instructions_3'-------
    for (const thisComponent of enc_instructions_3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('enc_instructions_3_key.keys', enc_instructions_3_key.keys);
    if (typeof enc_instructions_3_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('enc_instructions_3_key.rt', enc_instructions_3_key.rt);
        routineTimer.reset();
        }
    
    enc_instructions_3_key.stop();
    return Scheduler.Event.NEXT;
  };
}


var start_practiceComponents;
function start_practiceRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'start_practice'-------
    t = 0;
    start_practiceClock.reset(); // clock
    frameN = -1;
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    start_practiceComponents = [];
    start_practiceComponents.push(start_practice_text);
    
    for (const thisComponent of start_practiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function start_practiceRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'start_practice'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = start_practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *start_practice_text* updates
    if (t >= 0.0 && start_practice_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_practice_text.tStart = t;  // (not accounting for frame time here)
      start_practice_text.frameNStart = frameN;  // exact frame index
      
      start_practice_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (start_practice_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      start_practice_text.setAutoDraw(false);
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
    for (const thisComponent of start_practiceComponents)
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


function start_practiceRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'start_practice'-------
    for (const thisComponent of start_practiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var enc_practice_trials;
var currentLoop;
function enc_practice_trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  enc_practice_trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'encoding_practice_trials.csv',
    seed: undefined, name: 'enc_practice_trials'
  });
  psychoJS.experiment.addLoop(enc_practice_trials); // add the loop to the experiment
  currentLoop = enc_practice_trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisEnc_practice_trial of enc_practice_trials) {
    const snapshot = enc_practice_trials.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(enc_fxRoutineBegin(snapshot));
    thisScheduler.add(enc_fxRoutineEachFrame(snapshot));
    thisScheduler.add(enc_fxRoutineEnd(snapshot));
    thisScheduler.add(enc_trialRoutineBegin(snapshot));
    thisScheduler.add(enc_trialRoutineEachFrame(snapshot));
    thisScheduler.add(enc_trialRoutineEnd(snapshot));
    thisScheduler.add(enc_practice_feedbackRoutineBegin(snapshot));
    thisScheduler.add(enc_practice_feedbackRoutineEachFrame(snapshot));
    thisScheduler.add(enc_practice_feedbackRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function enc_practice_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(enc_practice_trials);

  return Scheduler.Event.NEXT;
}


var enc_runs;
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
  for (const thisEnc_run of enc_runs) {
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
  }

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
  for (const thisEnc_trial of enc_trials) {
    const snapshot = enc_trials.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(enc_fxRoutineBegin(snapshot));
    thisScheduler.add(enc_fxRoutineEachFrame(snapshot));
    thisScheduler.add(enc_fxRoutineEnd(snapshot));
    thisScheduler.add(enc_trialRoutineBegin(snapshot));
    thisScheduler.add(enc_trialRoutineEachFrame(snapshot));
    thisScheduler.add(enc_trialRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

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


var demo_trials;
function demo_trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  demo_trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'stimuli_demo.csv',
    seed: undefined, name: 'demo_trials'
  });
  psychoJS.experiment.addLoop(demo_trials); // add the loop to the experiment
  currentLoop = demo_trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisDemo_trial of demo_trials) {
    const snapshot = demo_trials.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(demoRoutineBegin(snapshot));
    thisScheduler.add(demoRoutineEachFrame(snapshot));
    thisScheduler.add(demoRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function demo_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(demo_trials);

  return Scheduler.Event.NEXT;
}


var rec_practice_blocks;
function rec_practice_blocksLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  rec_practice_blocks = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 2, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'rec_practice_blocks'
  });
  psychoJS.experiment.addLoop(rec_practice_blocks); // add the loop to the experiment
  currentLoop = rec_practice_blocks;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisRec_practice_block of rec_practice_blocks) {
    const snapshot = rec_practice_blocks.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(start_rec_practice_blockRoutineBegin(snapshot));
    thisScheduler.add(start_rec_practice_blockRoutineEachFrame(snapshot));
    thisScheduler.add(start_rec_practice_blockRoutineEnd(snapshot));
    const rec_practice_trialsLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(rec_practice_trialsLoopBegin, rec_practice_trialsLoopScheduler);
    thisScheduler.add(rec_practice_trialsLoopScheduler);
    thisScheduler.add(rec_practice_trialsLoopEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var rec_practice_trials;
function rec_practice_trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  rec_practice_trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, 'recognition_practice_trials.csv', rec_practice_block),
    seed: undefined, name: 'rec_practice_trials'
  });
  psychoJS.experiment.addLoop(rec_practice_trials); // add the loop to the experiment
  currentLoop = rec_practice_trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisRec_practice_trial of rec_practice_trials) {
    const snapshot = rec_practice_trials.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(rec_fxRoutineBegin(snapshot));
    thisScheduler.add(rec_fxRoutineEachFrame(snapshot));
    thisScheduler.add(rec_fxRoutineEnd(snapshot));
    thisScheduler.add(rec_trialRoutineBegin(snapshot));
    thisScheduler.add(rec_trialRoutineEachFrame(snapshot));
    thisScheduler.add(rec_trialRoutineEnd(snapshot));
    thisScheduler.add(rec_practice_feedbackRoutineBegin(snapshot));
    thisScheduler.add(rec_practice_feedbackRoutineEachFrame(snapshot));
    thisScheduler.add(rec_practice_feedbackRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function rec_practice_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(rec_practice_trials);

  return Scheduler.Event.NEXT;
}


function rec_practice_blocksLoopEnd() {
  psychoJS.experiment.removeLoop(rec_practice_blocks);

  return Scheduler.Event.NEXT;
}


var rec_runs;
function rec_runsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  rec_runs = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 3, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'rec_runs'
  });
  psychoJS.experiment.addLoop(rec_runs); // add the loop to the experiment
  currentLoop = rec_runs;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisRec_run of rec_runs) {
    const snapshot = rec_runs.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(start_rec_runRoutineBegin(snapshot));
    thisScheduler.add(start_rec_runRoutineEachFrame(snapshot));
    thisScheduler.add(start_rec_runRoutineEnd(snapshot));
    const rec_blocksLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(rec_blocksLoopBegin, rec_blocksLoopScheduler);
    thisScheduler.add(rec_blocksLoopScheduler);
    thisScheduler.add(rec_blocksLoopEnd);
    thisScheduler.add(end_rec_runRoutineBegin(snapshot));
    thisScheduler.add(end_rec_runRoutineEachFrame(snapshot));
    thisScheduler.add(end_rec_runRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var rec_blocks;
function rec_blocksLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  rec_blocks = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 2, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'rec_blocks'
  });
  psychoJS.experiment.addLoop(rec_blocks); // add the loop to the experiment
  currentLoop = rec_blocks;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisRec_block of rec_blocks) {
    const snapshot = rec_blocks.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(start_rec_blockRoutineBegin(snapshot));
    thisScheduler.add(start_rec_blockRoutineEachFrame(snapshot));
    thisScheduler.add(start_rec_blockRoutineEnd(snapshot));
    const rec_trialsLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(rec_trialsLoopBegin, rec_trialsLoopScheduler);
    thisScheduler.add(rec_trialsLoopScheduler);
    thisScheduler.add(rec_trialsLoopEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

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
  for (const thisRec_trial of rec_trials) {
    const snapshot = rec_trials.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(rec_fxRoutineBegin(snapshot));
    thisScheduler.add(rec_fxRoutineEachFrame(snapshot));
    thisScheduler.add(rec_fxRoutineEnd(snapshot));
    thisScheduler.add(rec_trialRoutineBegin(snapshot));
    thisScheduler.add(rec_trialRoutineEachFrame(snapshot));
    thisScheduler.add(rec_trialRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function rec_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(rec_trials);

  return Scheduler.Event.NEXT;
}


function rec_blocksLoopEnd() {
  psychoJS.experiment.removeLoop(rec_blocks);

  return Scheduler.Event.NEXT;
}


function rec_runsLoopEnd() {
  psychoJS.experiment.removeLoop(rec_runs);

  return Scheduler.Event.NEXT;
}


var _enc_fx_key_allKeys;
var enc_fxComponents;
function enc_fxRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'enc_fx'-------
    t = 0;
    enc_fxClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    enc_fx_cross.setPos([CurrentX, CurrentY]);
    enc_fx_key.keys = undefined;
    enc_fx_key.rt = undefined;
    _enc_fx_key_allKeys = [];
    // keep track of which components have finished
    enc_fxComponents = [];
    enc_fxComponents.push(enc_fx_map);
    enc_fxComponents.push(enc_fx_cross);
    enc_fxComponents.push(enc_fx_key);
    
    for (const thisComponent of enc_fxComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
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
    
    // *enc_fx_map* updates
    if (t >= 0.0 && enc_fx_map.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      enc_fx_map.tStart = t;  // (not accounting for frame time here)
      enc_fx_map.frameNStart = frameN;  // exact frame index
      
      enc_fx_map.setAutoDraw(true);
    }

    frameRemains = 0.0 + (Jitter / 1000) - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (enc_fx_map.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      enc_fx_map.setAutoDraw(false);
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
    
    // *enc_fx_key* updates
    if (t >= 0.0 && enc_fx_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      enc_fx_key.tStart = t;  // (not accounting for frame time here)
      enc_fx_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { enc_fx_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { enc_fx_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { enc_fx_key.clearEvents(); });
    }

    frameRemains = 0.0 + (Jitter / 1000) - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (enc_fx_key.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      enc_fx_key.status = PsychoJS.Status.FINISHED;
  }

    if (enc_fx_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = enc_fx_key.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _enc_fx_key_allKeys = _enc_fx_key_allKeys.concat(theseKeys);
      if (_enc_fx_key_allKeys.length > 0) {
        enc_fx_key.keys = _enc_fx_key_allKeys[_enc_fx_key_allKeys.length - 1].name;  // just the last key pressed
        enc_fx_key.rt = _enc_fx_key_allKeys[_enc_fx_key_allKeys.length - 1].rt;
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
    for (const thisComponent of enc_fxComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of enc_fxComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('enc_fx_key.keys', enc_fx_key.keys);
    if (typeof enc_fx_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('enc_fx_key.rt', enc_fx_key.rt);
        }
    
    enc_fx_key.stop();
    // the Routine "enc_fx" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _enc_trial_key_allKeys;
var enc_trialComponents;
function enc_trialRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'enc_trial'-------
    t = 0;
    enc_trialClock.reset(); // clock
    frameN = -1;
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    enc_trial_main_image.setPos([CurrentX, CurrentY]);
    enc_trial_main_image.setImage(CurrentImage);
    enc_trial_key.keys = undefined;
    enc_trial_key.rt = undefined;
    _enc_trial_key_allKeys = [];
    // keep track of which components have finished
    enc_trialComponents = [];
    enc_trialComponents.push(enc_trial_map);
    enc_trialComponents.push(enc_trial_main_image);
    enc_trialComponents.push(enc_trial_key);
    
    for (const thisComponent of enc_trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
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
    
    // *enc_trial_map* updates
    if (t >= 0.0 && enc_trial_map.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      enc_trial_map.tStart = t;  // (not accounting for frame time here)
      enc_trial_map.frameNStart = frameN;  // exact frame index
      
      enc_trial_map.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (enc_trial_map.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      enc_trial_map.setAutoDraw(false);
    }
    
    // *enc_trial_main_image* updates
    if (t >= 0.0 && enc_trial_main_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      enc_trial_main_image.tStart = t;  // (not accounting for frame time here)
      enc_trial_main_image.frameNStart = frameN;  // exact frame index
      
      enc_trial_main_image.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (enc_trial_main_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      enc_trial_main_image.setAutoDraw(false);
    }
    
    // *enc_trial_key* updates
    if (t >= 0.0 && enc_trial_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      enc_trial_key.tStart = t;  // (not accounting for frame time here)
      enc_trial_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { enc_trial_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { enc_trial_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { enc_trial_key.clearEvents(); });
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (enc_trial_key.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      enc_trial_key.status = PsychoJS.Status.FINISHED;
  }

    if (enc_trial_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = enc_trial_key.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _enc_trial_key_allKeys = _enc_trial_key_allKeys.concat(theseKeys);
      if (_enc_trial_key_allKeys.length > 0) {
        enc_trial_key.keys = _enc_trial_key_allKeys[_enc_trial_key_allKeys.length - 1].name;  // just the last key pressed
        enc_trial_key.rt = _enc_trial_key_allKeys[_enc_trial_key_allKeys.length - 1].rt;
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
    for (const thisComponent of enc_trialComponents)
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


function enc_trialRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'enc_trial'-------
    for (const thisComponent of enc_trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('enc_trial_key.keys', enc_trial_key.keys);
    if (typeof enc_trial_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('enc_trial_key.rt', enc_trial_key.rt);
        }
    
    enc_trial_key.stop();
    return Scheduler.Event.NEXT;
  };
}


var response;
var feedback_text;
var enc_practice_feedbackComponents;
function enc_practice_feedbackRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'enc_practice_feedback'-------
    t = 0;
    enc_practice_feedbackClock.reset(); // clock
    frameN = -1;
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    response = enc_trial_key.keys;
    feedback_text = "";
    if ((response === "f")) {
        feedback_text = "Az \u00d6n v\u00e1lasza:\nA k\u00e9p nem marad.";
    } else {
        if ((response === "j")) {
            feedback_text = "Az \u00d6n v\u00e1lasza:\nA k\u00e9p marad.";
        } else {
            feedback_text = "Nem adott v\u00e1laszt.";
        }
    }
    
    enc_practice_feedback_image.setPos([CurrentX, CurrentY]);
    enc_practice_feedback_image.setImage(CurrentImage);
    enc_practice_feedback_text.setText(feedback_text);
    // keep track of which components have finished
    enc_practice_feedbackComponents = [];
    enc_practice_feedbackComponents.push(enc_practice_feedback_map);
    enc_practice_feedbackComponents.push(enc_practice_feedback_image);
    enc_practice_feedbackComponents.push(enc_practice_feedback_text);
    
    for (const thisComponent of enc_practice_feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function enc_practice_feedbackRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'enc_practice_feedback'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = enc_practice_feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *enc_practice_feedback_map* updates
    if (t >= 0.0 && enc_practice_feedback_map.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      enc_practice_feedback_map.tStart = t;  // (not accounting for frame time here)
      enc_practice_feedback_map.frameNStart = frameN;  // exact frame index
      
      enc_practice_feedback_map.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (enc_practice_feedback_map.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      enc_practice_feedback_map.setAutoDraw(false);
    }
    
    // *enc_practice_feedback_image* updates
    if (t >= 0.0 && enc_practice_feedback_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      enc_practice_feedback_image.tStart = t;  // (not accounting for frame time here)
      enc_practice_feedback_image.frameNStart = frameN;  // exact frame index
      
      enc_practice_feedback_image.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (enc_practice_feedback_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      enc_practice_feedback_image.setAutoDraw(false);
    }
    
    // *enc_practice_feedback_text* updates
    if (t >= 0.0 && enc_practice_feedback_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      enc_practice_feedback_text.tStart = t;  // (not accounting for frame time here)
      enc_practice_feedback_text.frameNStart = frameN;  // exact frame index
      
      enc_practice_feedback_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (enc_practice_feedback_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      enc_practice_feedback_text.setAutoDraw(false);
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
    for (const thisComponent of enc_practice_feedbackComponents)
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


function enc_practice_feedbackRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'enc_practice_feedback'-------
    for (const thisComponent of enc_practice_feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var _end_practice_key_allKeys;
var end_practiceComponents;
function end_practiceRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'end_practice'-------
    t = 0;
    end_practiceClock.reset(); // clock
    frameN = -1;
    routineTimer.add(300.000000);
    // update component parameters for each repeat
    end_practice_key.keys = undefined;
    end_practice_key.rt = undefined;
    _end_practice_key_allKeys = [];
    block_counter = 0;
    
    // keep track of which components have finished
    end_practiceComponents = [];
    end_practiceComponents.push(end_practice_text);
    end_practiceComponents.push(end_practice_key);
    
    for (const thisComponent of end_practiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function end_practiceRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'end_practice'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = end_practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *end_practice_text* updates
    if (t >= 0.0 && end_practice_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_practice_text.tStart = t;  // (not accounting for frame time here)
      end_practice_text.frameNStart = frameN;  // exact frame index
      
      end_practice_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 300.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (end_practice_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      end_practice_text.setAutoDraw(false);
    }
    
    // *end_practice_key* updates
    if (t >= 0.0 && end_practice_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_practice_key.tStart = t;  // (not accounting for frame time here)
      end_practice_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_practice_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_practice_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_practice_key.clearEvents(); });
    }

    frameRemains = 0.0 + 300.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (end_practice_key.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      end_practice_key.status = PsychoJS.Status.FINISHED;
  }

    if (end_practice_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_practice_key.getKeys({keyList: ['right', 'left'], waitRelease: false});
      _end_practice_key_allKeys = _end_practice_key_allKeys.concat(theseKeys);
      if (_end_practice_key_allKeys.length > 0) {
        end_practice_key.keys = _end_practice_key_allKeys[_end_practice_key_allKeys.length - 1].name;  // just the last key pressed
        end_practice_key.rt = _end_practice_key_allKeys[_end_practice_key_allKeys.length - 1].rt;
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
    for (const thisComponent of end_practiceComponents)
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


function end_practiceRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'end_practice'-------
    for (const thisComponent of end_practiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('end_practice_key.keys', end_practice_key.keys);
    if (typeof end_practice_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('end_practice_key.rt', end_practice_key.rt);
        routineTimer.reset();
        }
    
    end_practice_key.stop();
    return Scheduler.Event.NEXT;
  };
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
    start_enc_runComponents.push(start_enc_run_text);
    
    for (const thisComponent of start_enc_runComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
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
    
    // *start_enc_run_text* updates
    if (t >= 0.0 && start_enc_run_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_enc_run_text.tStart = t;  // (not accounting for frame time here)
      start_enc_run_text.frameNStart = frameN;  // exact frame index
      
      start_enc_run_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (start_enc_run_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      start_enc_run_text.setAutoDraw(false);
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
    for (const thisComponent of start_enc_runComponents)
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


function start_enc_runRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'start_enc_run'-------
    for (const thisComponent of start_enc_runComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var _enc_run_end_key_allKeys;
var end_enc_runComponents;
function end_enc_runRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'end_enc_run'-------
    t = 0;
    end_enc_runClock.reset(); // clock
    frameN = -1;
    routineTimer.add(1200.000000);
    // update component parameters for each repeat
    end_enc_run_text.setText(end_run_text);
    enc_run_end_key.keys = undefined;
    enc_run_end_key.rt = undefined;
    _enc_run_end_key_allKeys = [];
    // keep track of which components have finished
    end_enc_runComponents = [];
    end_enc_runComponents.push(end_enc_run_text);
    end_enc_runComponents.push(enc_run_end_key);
    
    for (const thisComponent of end_enc_runComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
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
    
    // *end_enc_run_text* updates
    if (t >= 0.0 && end_enc_run_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_enc_run_text.tStart = t;  // (not accounting for frame time here)
      end_enc_run_text.frameNStart = frameN;  // exact frame index
      
      end_enc_run_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1200 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (end_enc_run_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      end_enc_run_text.setAutoDraw(false);
    }
    
    // *enc_run_end_key* updates
    if (t >= 0.0 && enc_run_end_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      enc_run_end_key.tStart = t;  // (not accounting for frame time here)
      enc_run_end_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { enc_run_end_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { enc_run_end_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { enc_run_end_key.clearEvents(); });
    }

    frameRemains = 0.0 + 1200 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (enc_run_end_key.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      enc_run_end_key.status = PsychoJS.Status.FINISHED;
  }

    if (enc_run_end_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = enc_run_end_key.getKeys({keyList: ['right'], waitRelease: false});
      _enc_run_end_key_allKeys = _enc_run_end_key_allKeys.concat(theseKeys);
      if (_enc_run_end_key_allKeys.length > 0) {
        enc_run_end_key.keys = _enc_run_end_key_allKeys[_enc_run_end_key_allKeys.length - 1].name;  // just the last key pressed
        enc_run_end_key.rt = _enc_run_end_key_allKeys[_enc_run_end_key_allKeys.length - 1].rt;
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
    for (const thisComponent of end_enc_runComponents)
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


function end_enc_runRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'end_enc_run'-------
    for (const thisComponent of end_enc_runComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('enc_run_end_key.keys', enc_run_end_key.keys);
    if (typeof enc_run_end_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('enc_run_end_key.rt', enc_run_end_key.rt);
        routineTimer.reset();
        }
    
    enc_run_end_key.stop();
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
    
    for (const thisComponent of inter_task_breakComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
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
    for (const thisComponent of inter_task_breakComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of inter_task_breakComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
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
    start_recognitionComponents.push(start_recognition_text);
    
    for (const thisComponent of start_recognitionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
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
    
    // *start_recognition_text* updates
    if (t >= 0.0 && start_recognition_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_recognition_text.tStart = t;  // (not accounting for frame time here)
      start_recognition_text.frameNStart = frameN;  // exact frame index
      
      start_recognition_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (start_recognition_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      start_recognition_text.setAutoDraw(false);
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
    for (const thisComponent of start_recognitionComponents)
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


function start_recognitionRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'start_recognition'-------
    for (const thisComponent of start_recognitionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var _rec_instructions_1_key_allKeys;
var rec_instructions_1Components;
function rec_instructions_1RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'rec_instructions_1'-------
    t = 0;
    rec_instructions_1Clock.reset(); // clock
    frameN = -1;
    routineTimer.add(120.000000);
    // update component parameters for each repeat
    rec_instructions_1_key.keys = undefined;
    rec_instructions_1_key.rt = undefined;
    _rec_instructions_1_key_allKeys = [];
    // keep track of which components have finished
    rec_instructions_1Components = [];
    rec_instructions_1Components.push(rec_instructions_1_text);
    rec_instructions_1Components.push(rec_instructions_1_key);
    
    for (const thisComponent of rec_instructions_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function rec_instructions_1RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'rec_instructions_1'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = rec_instructions_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *rec_instructions_1_text* updates
    if (t >= 0.0 && rec_instructions_1_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rec_instructions_1_text.tStart = t;  // (not accounting for frame time here)
      rec_instructions_1_text.frameNStart = frameN;  // exact frame index
      
      rec_instructions_1_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 120.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (rec_instructions_1_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      rec_instructions_1_text.setAutoDraw(false);
    }
    
    // *rec_instructions_1_key* updates
    if (t >= 0.0 && rec_instructions_1_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rec_instructions_1_key.tStart = t;  // (not accounting for frame time here)
      rec_instructions_1_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { rec_instructions_1_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { rec_instructions_1_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { rec_instructions_1_key.clearEvents(); });
    }

    frameRemains = 0.0 + 120.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (rec_instructions_1_key.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      rec_instructions_1_key.status = PsychoJS.Status.FINISHED;
  }

    if (rec_instructions_1_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = rec_instructions_1_key.getKeys({keyList: ['right'], waitRelease: false});
      _rec_instructions_1_key_allKeys = _rec_instructions_1_key_allKeys.concat(theseKeys);
      if (_rec_instructions_1_key_allKeys.length > 0) {
        rec_instructions_1_key.keys = _rec_instructions_1_key_allKeys[_rec_instructions_1_key_allKeys.length - 1].name;  // just the last key pressed
        rec_instructions_1_key.rt = _rec_instructions_1_key_allKeys[_rec_instructions_1_key_allKeys.length - 1].rt;
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
    for (const thisComponent of rec_instructions_1Components)
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


function rec_instructions_1RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'rec_instructions_1'-------
    for (const thisComponent of rec_instructions_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('rec_instructions_1_key.keys', rec_instructions_1_key.keys);
    if (typeof rec_instructions_1_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('rec_instructions_1_key.rt', rec_instructions_1_key.rt);
        routineTimer.reset();
        }
    
    rec_instructions_1_key.stop();
    return Scheduler.Event.NEXT;
  };
}


var _rec_instructions_2_key_allKeys;
var rec_instructions_2Components;
function rec_instructions_2RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'rec_instructions_2'-------
    t = 0;
    rec_instructions_2Clock.reset(); // clock
    frameN = -1;
    routineTimer.add(300.000000);
    // update component parameters for each repeat
    rec_instructions_2_key.keys = undefined;
    rec_instructions_2_key.rt = undefined;
    _rec_instructions_2_key_allKeys = [];
    // keep track of which components have finished
    rec_instructions_2Components = [];
    rec_instructions_2Components.push(rec_instructions2_text);
    rec_instructions_2Components.push(rec_instructions_2_key);
    
    for (const thisComponent of rec_instructions_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function rec_instructions_2RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'rec_instructions_2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = rec_instructions_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *rec_instructions2_text* updates
    if (t >= 0.0 && rec_instructions2_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rec_instructions2_text.tStart = t;  // (not accounting for frame time here)
      rec_instructions2_text.frameNStart = frameN;  // exact frame index
      
      rec_instructions2_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 300.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (rec_instructions2_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      rec_instructions2_text.setAutoDraw(false);
    }
    
    // *rec_instructions_2_key* updates
    if (t >= 0.0 && rec_instructions_2_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rec_instructions_2_key.tStart = t;  // (not accounting for frame time here)
      rec_instructions_2_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { rec_instructions_2_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { rec_instructions_2_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { rec_instructions_2_key.clearEvents(); });
    }

    frameRemains = 0.0 + 300.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (rec_instructions_2_key.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      rec_instructions_2_key.status = PsychoJS.Status.FINISHED;
  }

    if (rec_instructions_2_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = rec_instructions_2_key.getKeys({keyList: ['right'], waitRelease: false});
      _rec_instructions_2_key_allKeys = _rec_instructions_2_key_allKeys.concat(theseKeys);
      if (_rec_instructions_2_key_allKeys.length > 0) {
        rec_instructions_2_key.keys = _rec_instructions_2_key_allKeys[_rec_instructions_2_key_allKeys.length - 1].name;  // just the last key pressed
        rec_instructions_2_key.rt = _rec_instructions_2_key_allKeys[_rec_instructions_2_key_allKeys.length - 1].rt;
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
    for (const thisComponent of rec_instructions_2Components)
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


function rec_instructions_2RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'rec_instructions_2'-------
    for (const thisComponent of rec_instructions_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('rec_instructions_2_key.keys', rec_instructions_2_key.keys);
    if (typeof rec_instructions_2_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('rec_instructions_2_key.rt', rec_instructions_2_key.rt);
        routineTimer.reset();
        }
    
    rec_instructions_2_key.stop();
    return Scheduler.Event.NEXT;
  };
}


var _rec_instructions_3_key_allKeys;
var rec_instructions_3Components;
function rec_instructions_3RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'rec_instructions_3'-------
    t = 0;
    rec_instructions_3Clock.reset(); // clock
    frameN = -1;
    routineTimer.add(300.000000);
    // update component parameters for each repeat
    rec_instructions_3_key.keys = undefined;
    rec_instructions_3_key.rt = undefined;
    _rec_instructions_3_key_allKeys = [];
    // keep track of which components have finished
    rec_instructions_3Components = [];
    rec_instructions_3Components.push(rec_instrauction_3_text);
    rec_instructions_3Components.push(rec_instructions_3_key);
    
    for (const thisComponent of rec_instructions_3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function rec_instructions_3RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'rec_instructions_3'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = rec_instructions_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *rec_instrauction_3_text* updates
    if (t >= 0.0 && rec_instrauction_3_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rec_instrauction_3_text.tStart = t;  // (not accounting for frame time here)
      rec_instrauction_3_text.frameNStart = frameN;  // exact frame index
      
      rec_instrauction_3_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 300.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (rec_instrauction_3_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      rec_instrauction_3_text.setAutoDraw(false);
    }
    
    // *rec_instructions_3_key* updates
    if (t >= 0 && rec_instructions_3_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rec_instructions_3_key.tStart = t;  // (not accounting for frame time here)
      rec_instructions_3_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { rec_instructions_3_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { rec_instructions_3_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { rec_instructions_3_key.clearEvents(); });
    }

    frameRemains = 0 + 300 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (rec_instructions_3_key.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      rec_instructions_3_key.status = PsychoJS.Status.FINISHED;
  }

    if (rec_instructions_3_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = rec_instructions_3_key.getKeys({keyList: ['right'], waitRelease: false});
      _rec_instructions_3_key_allKeys = _rec_instructions_3_key_allKeys.concat(theseKeys);
      if (_rec_instructions_3_key_allKeys.length > 0) {
        rec_instructions_3_key.keys = _rec_instructions_3_key_allKeys[_rec_instructions_3_key_allKeys.length - 1].name;  // just the last key pressed
        rec_instructions_3_key.rt = _rec_instructions_3_key_allKeys[_rec_instructions_3_key_allKeys.length - 1].rt;
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
    for (const thisComponent of rec_instructions_3Components)
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


function rec_instructions_3RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'rec_instructions_3'-------
    for (const thisComponent of rec_instructions_3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('rec_instructions_3_key.keys', rec_instructions_3_key.keys);
    if (typeof rec_instructions_3_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('rec_instructions_3_key.rt', rec_instructions_3_key.rt);
        routineTimer.reset();
        }
    
    rec_instructions_3_key.stop();
    return Scheduler.Event.NEXT;
  };
}


var _rec_instructions_4_key_allKeys;
var rec_instructions_4Components;
function rec_instructions_4RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'rec_instructions_4'-------
    t = 0;
    rec_instructions_4Clock.reset(); // clock
    frameN = -1;
    routineTimer.add(300.000000);
    // update component parameters for each repeat
    rec_instructions_4_key.keys = undefined;
    rec_instructions_4_key.rt = undefined;
    _rec_instructions_4_key_allKeys = [];
    // keep track of which components have finished
    rec_instructions_4Components = [];
    rec_instructions_4Components.push(rec_instructions_4_text);
    rec_instructions_4Components.push(rec_instructions_4_key);
    
    for (const thisComponent of rec_instructions_4Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function rec_instructions_4RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'rec_instructions_4'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = rec_instructions_4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *rec_instructions_4_text* updates
    if (t >= 0.0 && rec_instructions_4_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rec_instructions_4_text.tStart = t;  // (not accounting for frame time here)
      rec_instructions_4_text.frameNStart = frameN;  // exact frame index
      
      rec_instructions_4_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 300.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (rec_instructions_4_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      rec_instructions_4_text.setAutoDraw(false);
    }
    
    // *rec_instructions_4_key* updates
    if (t >= 0.0 && rec_instructions_4_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rec_instructions_4_key.tStart = t;  // (not accounting for frame time here)
      rec_instructions_4_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { rec_instructions_4_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { rec_instructions_4_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { rec_instructions_4_key.clearEvents(); });
    }

    frameRemains = 0.0 + 300.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (rec_instructions_4_key.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      rec_instructions_4_key.status = PsychoJS.Status.FINISHED;
  }

    if (rec_instructions_4_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = rec_instructions_4_key.getKeys({keyList: ['right'], waitRelease: false});
      _rec_instructions_4_key_allKeys = _rec_instructions_4_key_allKeys.concat(theseKeys);
      if (_rec_instructions_4_key_allKeys.length > 0) {
        rec_instructions_4_key.keys = _rec_instructions_4_key_allKeys[_rec_instructions_4_key_allKeys.length - 1].name;  // just the last key pressed
        rec_instructions_4_key.rt = _rec_instructions_4_key_allKeys[_rec_instructions_4_key_allKeys.length - 1].rt;
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
    for (const thisComponent of rec_instructions_4Components)
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


function rec_instructions_4RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'rec_instructions_4'-------
    for (const thisComponent of rec_instructions_4Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('rec_instructions_4_key.keys', rec_instructions_4_key.keys);
    if (typeof rec_instructions_4_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('rec_instructions_4_key.rt', rec_instructions_4_key.rt);
        routineTimer.reset();
        }
    
    rec_instructions_4_key.stop();
    return Scheduler.Event.NEXT;
  };
}


var _demo_key_allKeys;
var demoComponents;
function demoRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'demo'-------
    t = 0;
    demoClock.reset(); // clock
    frameN = -1;
    routineTimer.add(300.000000);
    // update component parameters for each repeat
    demo_text.setText(DemoText);
    demo_key.keys = undefined;
    demo_key.rt = undefined;
    _demo_key_allKeys = [];
    // keep track of which components have finished
    demoComponents = [];
    demoComponents.push(demo_map);
    demoComponents.push(demo_text);
    demoComponents.push(demo_key);
    
    for (const thisComponent of demoComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function demoRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'demo'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = demoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *demo_map* updates
    if (t >= 0.0 && demo_map.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      demo_map.tStart = t;  // (not accounting for frame time here)
      demo_map.frameNStart = frameN;  // exact frame index
      
      demo_map.setAutoDraw(true);
    }

    frameRemains = 0.0 + 300.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (demo_map.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      demo_map.setAutoDraw(false);
    }
    
    // *demo_text* updates
    if (t >= 0.0 && demo_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      demo_text.tStart = t;  // (not accounting for frame time here)
      demo_text.frameNStart = frameN;  // exact frame index
      
      demo_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 300.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (demo_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      demo_text.setAutoDraw(false);
    }
    
    // *demo_key* updates
    if (t >= 2.0 && demo_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      demo_key.tStart = t;  // (not accounting for frame time here)
      demo_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { demo_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { demo_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { demo_key.clearEvents(); });
    }

    frameRemains = 2.0 + 298 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (demo_key.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      demo_key.status = PsychoJS.Status.FINISHED;
  }

    if (demo_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = demo_key.getKeys({keyList: ['right'], waitRelease: false});
      _demo_key_allKeys = _demo_key_allKeys.concat(theseKeys);
      if (_demo_key_allKeys.length > 0) {
        demo_key.keys = _demo_key_allKeys[_demo_key_allKeys.length - 1].name;  // just the last key pressed
        demo_key.rt = _demo_key_allKeys[_demo_key_allKeys.length - 1].rt;
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
    for (const thisComponent of demoComponents)
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


function demoRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'demo'-------
    for (const thisComponent of demoComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('demo_key.keys', demo_key.keys);
    if (typeof demo_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('demo_key.rt', demo_key.rt);
        routineTimer.reset();
        }
    
    demo_key.stop();
    return Scheduler.Event.NEXT;
  };
}


var _demo_end_key_allKeys;
var demo_endComponents;
function demo_endRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'demo_end'-------
    t = 0;
    demo_endClock.reset(); // clock
    frameN = -1;
    routineTimer.add(120.000000);
    // update component parameters for each repeat
    demo_end_key.keys = undefined;
    demo_end_key.rt = undefined;
    _demo_end_key_allKeys = [];
    // keep track of which components have finished
    demo_endComponents = [];
    demo_endComponents.push(demo_end_text);
    demo_endComponents.push(demo_end_key);
    
    for (const thisComponent of demo_endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function demo_endRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'demo_end'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = demo_endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *demo_end_text* updates
    if (t >= 0.0 && demo_end_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      demo_end_text.tStart = t;  // (not accounting for frame time here)
      demo_end_text.frameNStart = frameN;  // exact frame index
      
      demo_end_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 120.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (demo_end_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      demo_end_text.setAutoDraw(false);
    }
    
    // *demo_end_key* updates
    if (t >= 5.0 && demo_end_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      demo_end_key.tStart = t;  // (not accounting for frame time here)
      demo_end_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { demo_end_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { demo_end_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { demo_end_key.clearEvents(); });
    }

    frameRemains = 5.0 + 115.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (demo_end_key.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      demo_end_key.status = PsychoJS.Status.FINISHED;
  }

    if (demo_end_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = demo_end_key.getKeys({keyList: ['right'], waitRelease: false});
      _demo_end_key_allKeys = _demo_end_key_allKeys.concat(theseKeys);
      if (_demo_end_key_allKeys.length > 0) {
        demo_end_key.keys = _demo_end_key_allKeys[_demo_end_key_allKeys.length - 1].name;  // just the last key pressed
        demo_end_key.rt = _demo_end_key_allKeys[_demo_end_key_allKeys.length - 1].rt;
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
    for (const thisComponent of demo_endComponents)
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


function demo_endRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'demo_end'-------
    for (const thisComponent of demo_endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('demo_end_key.keys', demo_end_key.keys);
    if (typeof demo_end_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('demo_end_key.rt', demo_end_key.rt);
        routineTimer.reset();
        }
    
    demo_end_key.stop();
    return Scheduler.Event.NEXT;
  };
}


var start_rec_practice_blockComponents;
function start_rec_practice_blockRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'start_rec_practice_block'-------
    t = 0;
    start_rec_practice_blockClock.reset(); // clock
    frameN = -1;
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    block_counter = (block_counter + 1);
    if ((block_counter >= 2)) {
        rec_practice_block = [3, 4, 5];
        block_name = "Hely";
    }
    
    rec_practice_block_text.setText(block_name);
    // keep track of which components have finished
    start_rec_practice_blockComponents = [];
    start_rec_practice_blockComponents.push(rec_practice_block_text);
    
    for (const thisComponent of start_rec_practice_blockComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function start_rec_practice_blockRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'start_rec_practice_block'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = start_rec_practice_blockClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *rec_practice_block_text* updates
    if (t >= 0.0 && rec_practice_block_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rec_practice_block_text.tStart = t;  // (not accounting for frame time here)
      rec_practice_block_text.frameNStart = frameN;  // exact frame index
      
      rec_practice_block_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (rec_practice_block_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      rec_practice_block_text.setAutoDraw(false);
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
    for (const thisComponent of start_rec_practice_blockComponents)
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


function start_rec_practice_blockRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'start_rec_practice_block'-------
    for (const thisComponent of start_rec_practice_blockComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var _rec_fx_key_allKeys;
var rec_fxComponents;
function rec_fxRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'rec_fx'-------
    t = 0;
    rec_fxClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    rec_fx_cross.setPos([CurrentX, CurrentY]);
    rec_fx_key.keys = undefined;
    rec_fx_key.rt = undefined;
    _rec_fx_key_allKeys = [];
    rec_fx_text_block.setText(block_name);
    // keep track of which components have finished
    rec_fxComponents = [];
    rec_fxComponents.push(rec_fx_map);
    rec_fxComponents.push(rec_fx_cross);
    rec_fxComponents.push(rec_fx_key);
    rec_fxComponents.push(rec_fx_text_block);
    rec_fxComponents.push(rec_fx_instructions_text);
    
    for (const thisComponent of rec_fxComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
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
    
    // *rec_fx_map* updates
    if (t >= 0.0 && rec_fx_map.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rec_fx_map.tStart = t;  // (not accounting for frame time here)
      rec_fx_map.frameNStart = frameN;  // exact frame index
      
      rec_fx_map.setAutoDraw(true);
    }

    frameRemains = 0.0 + (Jitter / 1000) - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (rec_fx_map.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      rec_fx_map.setAutoDraw(false);
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
    
    // *rec_fx_key* updates
    if (t >= 0.0 && rec_fx_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rec_fx_key.tStart = t;  // (not accounting for frame time here)
      rec_fx_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { rec_fx_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { rec_fx_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { rec_fx_key.clearEvents(); });
    }

    frameRemains = 0.0 + (Jitter / 1000) - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (rec_fx_key.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      rec_fx_key.status = PsychoJS.Status.FINISHED;
  }

    if (rec_fx_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = rec_fx_key.getKeys({keyList: ['f', 'j', 'k'], waitRelease: false});
      _rec_fx_key_allKeys = _rec_fx_key_allKeys.concat(theseKeys);
      if (_rec_fx_key_allKeys.length > 0) {
        rec_fx_key.keys = _rec_fx_key_allKeys[_rec_fx_key_allKeys.length - 1].name;  // just the last key pressed
        rec_fx_key.rt = _rec_fx_key_allKeys[_rec_fx_key_allKeys.length - 1].rt;
      }
    }
    
    
    // *rec_fx_text_block* updates
    if (t >= 0.0 && rec_fx_text_block.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rec_fx_text_block.tStart = t;  // (not accounting for frame time here)
      rec_fx_text_block.frameNStart = frameN;  // exact frame index
      
      rec_fx_text_block.setAutoDraw(true);
    }

    frameRemains = 0.0 + (Jitter / 1000) - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (rec_fx_text_block.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      rec_fx_text_block.setAutoDraw(false);
    }
    
    // *rec_fx_instructions_text* updates
    if (t >= 0.0 && rec_fx_instructions_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rec_fx_instructions_text.tStart = t;  // (not accounting for frame time here)
      rec_fx_instructions_text.frameNStart = frameN;  // exact frame index
      
      rec_fx_instructions_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + (Jitter / 1000) - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (rec_fx_instructions_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      rec_fx_instructions_text.setAutoDraw(false);
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
    for (const thisComponent of rec_fxComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of rec_fxComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('rec_fx_key.keys', rec_fx_key.keys);
    if (typeof rec_fx_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('rec_fx_key.rt', rec_fx_key.rt);
        }
    
    rec_fx_key.stop();
    // the Routine "rec_fx" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _rec_trial_key_allKeys;
var rec_trialComponents;
function rec_trialRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'rec_trial'-------
    t = 0;
    rec_trialClock.reset(); // clock
    frameN = -1;
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    rec_trial_main_image.setPos([CurrentX, CurrentY]);
    rec_trial_main_image.setImage(CurrentImage);
    rec_trial_key.keys = undefined;
    rec_trial_key.rt = undefined;
    _rec_trial_key_allKeys = [];
    rec_trial_text_block.setText(block_name);
    // keep track of which components have finished
    rec_trialComponents = [];
    rec_trialComponents.push(rec_trial_map);
    rec_trialComponents.push(rec_trial_main_image);
    rec_trialComponents.push(rec_trial_key);
    rec_trialComponents.push(rec_trial_text_block);
    rec_trialComponents.push(rec_trial_instructions_text);
    
    for (const thisComponent of rec_trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
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
    
    // *rec_trial_map* updates
    if (t >= 0.0 && rec_trial_map.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rec_trial_map.tStart = t;  // (not accounting for frame time here)
      rec_trial_map.frameNStart = frameN;  // exact frame index
      
      rec_trial_map.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (rec_trial_map.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      rec_trial_map.setAutoDraw(false);
    }
    
    // *rec_trial_main_image* updates
    if (t >= 0.0 && rec_trial_main_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rec_trial_main_image.tStart = t;  // (not accounting for frame time here)
      rec_trial_main_image.frameNStart = frameN;  // exact frame index
      
      rec_trial_main_image.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (rec_trial_main_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      rec_trial_main_image.setAutoDraw(false);
    }
    
    // *rec_trial_key* updates
    if (t >= 0.0 && rec_trial_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rec_trial_key.tStart = t;  // (not accounting for frame time here)
      rec_trial_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { rec_trial_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { rec_trial_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { rec_trial_key.clearEvents(); });
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (rec_trial_key.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      rec_trial_key.status = PsychoJS.Status.FINISHED;
  }

    if (rec_trial_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = rec_trial_key.getKeys({keyList: ['f', 'j', 'k'], waitRelease: false});
      _rec_trial_key_allKeys = _rec_trial_key_allKeys.concat(theseKeys);
      if (_rec_trial_key_allKeys.length > 0) {
        rec_trial_key.keys = _rec_trial_key_allKeys[_rec_trial_key_allKeys.length - 1].name;  // just the last key pressed
        rec_trial_key.rt = _rec_trial_key_allKeys[_rec_trial_key_allKeys.length - 1].rt;
      }
    }
    
    
    // *rec_trial_text_block* updates
    if (t >= 0.0 && rec_trial_text_block.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rec_trial_text_block.tStart = t;  // (not accounting for frame time here)
      rec_trial_text_block.frameNStart = frameN;  // exact frame index
      
      rec_trial_text_block.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (rec_trial_text_block.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      rec_trial_text_block.setAutoDraw(false);
    }
    
    // *rec_trial_instructions_text* updates
    if (t >= 0.0 && rec_trial_instructions_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rec_trial_instructions_text.tStart = t;  // (not accounting for frame time here)
      rec_trial_instructions_text.frameNStart = frameN;  // exact frame index
      
      rec_trial_instructions_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (rec_trial_instructions_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      rec_trial_instructions_text.setAutoDraw(false);
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
    for (const thisComponent of rec_trialComponents)
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


function rec_trialRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'rec_trial'-------
    for (const thisComponent of rec_trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('rec_trial_key.keys', rec_trial_key.keys);
    if (typeof rec_trial_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('rec_trial_key.rt', rec_trial_key.rt);
        }
    
    rec_trial_key.stop();
    return Scheduler.Event.NEXT;
  };
}


var correct_response;
var rec_practice_feedbackComponents;
function rec_practice_feedbackRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'rec_practice_feedback'-------
    t = 0;
    rec_practice_feedbackClock.reset(); // clock
    frameN = -1;
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    correct_response = "";
    if ((StimType === "FOIL")) {
        correct_response = "A helyes v\u00e1lasz: \u00daj";
    } else {
        if ((StimType === "LURE")) {
            correct_response = "A helyes v\u00e1lasz: Hasonl\u00f3";
        } else {
            if ((StimType === "TARGET")) {
                correct_response = "A helyes v\u00e1lasz: R\u00e9gi";
            }
        }
    }
    response = "";
    if ((rec_trial_key.keys === "f")) {
        response = "Az \u00d6n v\u00e1lasza: R\u00e9gi";
    } else {
        if ((rec_trial_key.keys === "j")) {
            response = "Az \u00d6n v\u00e1lasza: Hasonl\u00f3";
        } else {
            if ((rec_trial_key.keys === "k")) {
                response = "Az \u00d6n v\u00e1lasza: \u00daj";
            }
        }
    }
    feedback_text = ((correct_response + "\n") + response);
    
    rec_practice_feedback_text.setText(feedback_text);
    // keep track of which components have finished
    rec_practice_feedbackComponents = [];
    rec_practice_feedbackComponents.push(rec_practice_feedback_text);
    
    for (const thisComponent of rec_practice_feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function rec_practice_feedbackRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'rec_practice_feedback'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = rec_practice_feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *rec_practice_feedback_text* updates
    if (t >= 0.0 && rec_practice_feedback_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rec_practice_feedback_text.tStart = t;  // (not accounting for frame time here)
      rec_practice_feedback_text.frameNStart = frameN;  // exact frame index
      
      rec_practice_feedback_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (rec_practice_feedback_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      rec_practice_feedback_text.setAutoDraw(false);
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
    for (const thisComponent of rec_practice_feedbackComponents)
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


function rec_practice_feedbackRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'rec_practice_feedback'-------
    for (const thisComponent of rec_practice_feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
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
    run_counter = (run_counter + 1);
    end_run_text = "Sz\u00fcnet\nA folytat\u00e1shoz nyomja le a jobb nyilat";
    if ((run_counter >= n_runs)) {
        end_run_text = "V\u00e9ge a m\u00e1sodik feladatnak";
    }
    
    // keep track of which components have finished
    start_rec_runComponents = [];
    start_rec_runComponents.push(start_rec_run_text);
    
    for (const thisComponent of start_rec_runComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
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
    
    // *start_rec_run_text* updates
    if (t >= 0.0 && start_rec_run_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_rec_run_text.tStart = t;  // (not accounting for frame time here)
      start_rec_run_text.frameNStart = frameN;  // exact frame index
      
      start_rec_run_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (start_rec_run_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      start_rec_run_text.setAutoDraw(false);
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
    for (const thisComponent of start_rec_runComponents)
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


function start_rec_runRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'start_rec_run'-------
    for (const thisComponent of start_rec_runComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var start_rec_blockComponents;
function start_rec_blockRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'start_rec_block'-------
    t = 0;
    start_rec_blockClock.reset(); // clock
    frameN = -1;
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    start = end;
    end = (start + 3);
    selection = np.arange(start, end, step);
    if ((block_counter === 0)) {
        block_name = "K\u00e9p";
    } else {
        if ((TrialType === "LOC")) {
            block_name = "Hely";
        } else {
            block_name = "K\u00e9p";
        }
    }
    
    start_rec_block_text.setText(block_name);
    // keep track of which components have finished
    start_rec_blockComponents = [];
    start_rec_blockComponents.push(start_rec_block_text);
    
    for (const thisComponent of start_rec_blockComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function start_rec_blockRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'start_rec_block'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = start_rec_blockClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *start_rec_block_text* updates
    if (t >= 0.0 && start_rec_block_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_rec_block_text.tStart = t;  // (not accounting for frame time here)
      start_rec_block_text.frameNStart = frameN;  // exact frame index
      
      start_rec_block_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (start_rec_block_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      start_rec_block_text.setAutoDraw(false);
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
    for (const thisComponent of start_rec_blockComponents)
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


function start_rec_blockRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'start_rec_block'-------
    for (const thisComponent of start_rec_blockComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var _end_rec_run_key_allKeys;
var end_rec_runComponents;
function end_rec_runRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'end_rec_run'-------
    t = 0;
    end_rec_runClock.reset(); // clock
    frameN = -1;
    routineTimer.add(300.000000);
    // update component parameters for each repeat
    end_rec_run_text.setText(end_run_text);
    end_rec_run_key.keys = undefined;
    end_rec_run_key.rt = undefined;
    _end_rec_run_key_allKeys = [];
    // keep track of which components have finished
    end_rec_runComponents = [];
    end_rec_runComponents.push(end_rec_run_text);
    end_rec_runComponents.push(end_rec_run_key);
    
    for (const thisComponent of end_rec_runComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
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
    
    // *end_rec_run_text* updates
    if (t >= 0.0 && end_rec_run_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_rec_run_text.tStart = t;  // (not accounting for frame time here)
      end_rec_run_text.frameNStart = frameN;  // exact frame index
      
      end_rec_run_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 300.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (end_rec_run_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      end_rec_run_text.setAutoDraw(false);
    }
    
    // *end_rec_run_key* updates
    if (t >= 0.0 && end_rec_run_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_rec_run_key.tStart = t;  // (not accounting for frame time here)
      end_rec_run_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_rec_run_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_rec_run_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_rec_run_key.clearEvents(); });
    }

    frameRemains = 0.0 + 300 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (end_rec_run_key.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      end_rec_run_key.status = PsychoJS.Status.FINISHED;
  }

    if (end_rec_run_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_rec_run_key.getKeys({keyList: ['right'], waitRelease: false});
      _end_rec_run_key_allKeys = _end_rec_run_key_allKeys.concat(theseKeys);
      if (_end_rec_run_key_allKeys.length > 0) {
        end_rec_run_key.keys = _end_rec_run_key_allKeys[_end_rec_run_key_allKeys.length - 1].name;  // just the last key pressed
        end_rec_run_key.rt = _end_rec_run_key_allKeys[_end_rec_run_key_allKeys.length - 1].rt;
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
    for (const thisComponent of end_rec_runComponents)
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


function end_rec_runRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'end_rec_run'-------
    for (const thisComponent of end_rec_runComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('end_rec_run_key.keys', end_rec_run_key.keys);
    if (typeof end_rec_run_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('end_rec_run_key.rt', end_rec_run_key.rt);
        routineTimer.reset();
        }
    
    end_rec_run_key.stop();
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
