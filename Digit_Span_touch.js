/************************* 
 * Digit_Span_Touch *
 *************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.1.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'Digit_Span_touch';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: false,
  color: new util.Color([1.0, 1.0, 1.0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'fill',
});
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
const Instruct_LoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(Instruct_LoopLoopBegin(Instruct_LoopLoopScheduler));
flowScheduler.add(Instruct_LoopLoopScheduler);
flowScheduler.add(Instruct_LoopLoopEnd);


const blocksLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blocksLoopBegin(blocksLoopScheduler));
flowScheduler.add(blocksLoopScheduler);
flowScheduler.add(blocksLoopEnd);












flowScheduler.add(EndRoutineBegin());
flowScheduler.add(EndRoutineEachFrame());
flowScheduler.add(EndRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'spreadsheets/choose_digitSpan.xlsx', 'path': 'spreadsheets/choose_digitSpan.xlsx'},
    {'name': 'stimuli/redesign/iphone_back.png', 'path': 'stimuli/redesign/iphone_back.png'},
    {'name': 'stimuli/backButtonImage.png', 'path': 'stimuli/backButtonImage.png'},
    {'name': 'stimuli/nextButtonImage.png', 'path': 'stimuli/nextButtonImage.png'},
    {'name': 'stimuli/startButtonImage.png', 'path': 'stimuli/startButtonImage.png'},
    {'name': 'stimuli/redesign/plain.png', 'path': 'stimuli/redesign/plain.png'},
    {'name': 'stimuli/redesign/digit0.png', 'path': 'stimuli/redesign/digit0.png'},
    {'name': 'stimuli/redesign/digit1.png', 'path': 'stimuli/redesign/digit1.png'},
    {'name': 'stimuli/redesign/digit2.png', 'path': 'stimuli/redesign/digit2.png'},
    {'name': 'stimuli/redesign/digit3.png', 'path': 'stimuli/redesign/digit3.png'},
    {'name': 'stimuli/redesign/digit4.png', 'path': 'stimuli/redesign/digit4.png'},
    {'name': 'stimuli/redesign/digit5.png', 'path': 'stimuli/redesign/digit5.png'},
    {'name': 'stimuli/redesign/digit6.png', 'path': 'stimuli/redesign/digit6.png'},
    {'name': 'stimuli/redesign/digit7.png', 'path': 'stimuli/redesign/digit7.png'},
    {'name': 'stimuli/redesign/digit8.png', 'path': 'stimuli/redesign/digit8.png'},
    {'name': 'stimuli/redesign/digit9.png', 'path': 'stimuli/redesign/digit9.png'},
    {'name': 'stimuli/redesign/continue_button.png', 'path': 'stimuli/redesign/continue_button.png'},
    {'name': 'stimuli/redesign/clear.png', 'path': 'stimuli/redesign/clear.png'},
    {'name': 'stimuli/redesign/end_experiment.png', 'path': 'stimuli/redesign/end_experiment.png'},
    {'name': 'stimuli/redesign/digitspan_background.png', 'path': 'stimuli/redesign/digitspan_background.png'},
    {'name': 'stimuli/redesign/i1.png', 'path': 'stimuli/redesign/i1.png'},
    {'name': 'stimuli/redesign/i2.png', 'path': 'stimuli/redesign/i2.png'},
    {'name': 'stimuli/redesign/i3.png', 'path': 'stimuli/redesign/i3.png'},
    {'name': 'stimuli/redesign/plain.png', 'path': 'stimuli/redesign/plain.png'},
    {'name': 'spreadsheets/choose_digitSpan.xlsx', 'path': 'spreadsheets/choose_digitSpan.xlsx'},
    {'name': 'spreadsheets/conditions.xlsx', 'path': 'spreadsheets/conditions.xlsx'},
    {'name': 'spreadsheets/eight.xlsx', 'path': 'spreadsheets/eight.xlsx'},
    {'name': 'spreadsheets/eleven.xlsx', 'path': 'spreadsheets/eleven.xlsx'},
    {'name': 'spreadsheets/five.xlsx', 'path': 'spreadsheets/five.xlsx'},
    {'name': 'spreadsheets/four.xlsx', 'path': 'spreadsheets/four.xlsx'},
    {'name': 'spreadsheets/nine.xlsx', 'path': 'spreadsheets/nine.xlsx'},
    {'name': 'spreadsheets/seven.xlsx', 'path': 'spreadsheets/seven.xlsx'},
    {'name': 'spreadsheets/six.xlsx', 'path': 'spreadsheets/six.xlsx'},
    {'name': 'spreadsheets/ten.xlsx', 'path': 'spreadsheets/ten.xlsx'},
    {'name': 'spreadsheets/three.xlsx', 'path': 'spreadsheets/three.xlsx'},
    {'name': 'spreadsheets/twelve.xlsx', 'path': 'spreadsheets/twelve.xlsx'},
    {'name': 'stimuli/backButtonImage.png', 'path': 'stimuli/backButtonImage.png'},
    {'name': 'stimuli/continue_button.png', 'path': 'stimuli/continue_button.png'},
    {'name': 'stimuli/nextButtonImage.png', 'path': 'stimuli/nextButtonImage.png'},
    {'name': 'stimuli/startButtonImage.png', 'path': 'stimuli/startButtonImage.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.WARNING);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.1.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var Instruction2Clock;
var slideN;
var instruct_txt;
var maxSlideN;
var minSlideN;
var backimg_2;
var i2_txt;
var pgnum;
var key_resp_2;
var backButton_2;
var nextButton_2;
var start_2;
var mouse_3;
var reset_correctClock;
var Digit_PresentationClock;
var backimg_3;
var image;
var Fixation;
var pres_text;
var reset_RecallClock;
var Recall_touchClock;
var size;
var top;
var middle;
var bottom;
var bottomzero;
var digit_buttons;
var waittime;
var backimg;
var recall_touch;
var recall_txt_2;
var digit0;
var digit1;
var digit2;
var digit3;
var digit4;
var digit5;
var digit6;
var digit7;
var digit8;
var digit9;
var Response_Textbox;
var continue_button_2;
var clear_button;
var FeedbackClock;
var backimg_5;
var feedback_txt;
var EndClock;
var backimg_6;
var Thank_you;
var endImg;
var mouse_2;
var endKey;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Instruction2"
  Instruction2Clock = new util.Clock();
  // Run 'Begin Experiment' code from code_5
  slideN = 1;
  instruct_txt = "\u5728\u9019\u500b\u5be6\u9a57\u4e2d\uff0c\n\n\u4f60\u9700\u8981\u5617\u8a66\u8a18\u4f4f\u87a2\u5e55\u4e0a\u986f\u793a\u7684\u6578\u5b57\u3002\n\n\u6240\u6709\u6578\u5b57\u90fd\u57280\u52309\u4e4b\u9593\u3002\n\n\u4f60\u6703\u770b\u5230\u4e00\u4e32\u6578\u5b57\uff0c\u4f9d\u5e8f\u986f\u793a\n\n\u8acb\u8a18\u4f4f\u6574\u4e32\u6578\u5b57";
  maxSlideN = 2;
  minSlideN = 1;
  
  backimg_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'backimg_2', units : undefined, 
    image : 'stimuli/redesign/iphone_back.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.75, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  i2_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'i2_txt',
    text: '',
    font: 'Microsoft JhengHei',
    units: undefined, 
    pos: [0, 0.055], height: 0.045,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 0.6157), (- 0.6706), (- 0.0196)]),  opacity: undefined,
    depth: -2.0 
  });
  
  pgnum = new visual.TextStim({
    win: psychoJS.window,
    name: 'pgnum',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 0.6157), (- 0.6706), (- 0.0196)]),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  backButton_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'backButton_2', units : undefined, 
    image : 'stimuli/backButtonImage.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.25), (- 0.3)], size : [0.185, 0.06],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  nextButton_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'nextButton_2', units : undefined, 
    image : 'stimuli/nextButtonImage.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.25, (- 0.3)], size : [0.185, 0.06],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  start_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'start_2', units : undefined, 
    image : 'stimuli/startButtonImage.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, (- 0.375)], size : [0.185, 0.06],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  mouse_3 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_3.mouseClock = new util.Clock();
  // Initialize components for Routine "reset_correct"
  reset_correctClock = new util.Clock();
  // Initialize components for Routine "Digit_Presentation"
  Digit_PresentationClock = new util.Clock();
  backimg_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'backimg_3', units : undefined, 
    image : 'stimuli/redesign/iphone_back.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.75, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : 'stimuli/redesign/plain.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  Fixation = new visual.TextStim({
    win: psychoJS.window,
    name: 'Fixation',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  pres_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'pres_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.005], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 0.6078), (- 0.6706), (- 0.0118)]),  opacity: 1.0,
    depth: -3.0 
  });
  
  // Initialize components for Routine "reset_Recall"
  reset_RecallClock = new util.Clock();
  // Initialize components for Routine "Recall_touch"
  Recall_touchClock = new util.Clock();
  // Run 'Begin Experiment' code from code
  size = [0.1, 0.1];
  top = 0.225;
  middle = 0.1;
  bottom = (- 0.025);
  bottomzero = (- 0.15);
  digit_buttons = ["digit0", "digit1", "digit2", "digit3", "digit4", "digit5", "digit6", "digit7", "digit8", "digit9"];
  waittime = 0.2;
  
  backimg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'backimg', units : undefined, 
    image : 'stimuli/redesign/iphone_back.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.75, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  recall_touch = new core.Mouse({
    win: psychoJS.window,
  });
  recall_touch.mouseClock = new util.Clock();
  recall_txt_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'recall_txt_2',
    text: '請試著回想剛剛出現的數字',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.35], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 0.6157), (- 0.6706), (- 0.0196)]),  opacity: undefined,
    depth: -3.0 
  });
  
  digit0 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'digit0', units : undefined, 
    image : 'stimuli/redesign/digit0.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, bottomzero], size : size,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  digit1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'digit1', units : undefined, 
    image : 'stimuli/redesign/digit1.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.15), top], size : size,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  digit2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'digit2', units : undefined, 
    image : 'stimuli/redesign/digit2.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, top], size : size,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  digit3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'digit3', units : undefined, 
    image : 'stimuli/redesign/digit3.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.15, top], size : size,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  digit4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'digit4', units : undefined, 
    image : 'stimuli/redesign/digit4.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.15), middle], size : size,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -8.0 
  });
  digit5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'digit5', units : undefined, 
    image : 'stimuli/redesign/digit5.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, middle], size : size,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -9.0 
  });
  digit6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'digit6', units : undefined, 
    image : 'stimuli/redesign/digit6.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.15, middle], size : size,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -10.0 
  });
  digit7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'digit7', units : undefined, 
    image : 'stimuli/redesign/digit7.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.15), bottom], size : size,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -11.0 
  });
  digit8 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'digit8', units : undefined, 
    image : 'stimuli/redesign/digit8.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, bottom], size : size,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -12.0 
  });
  digit9 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'digit9', units : undefined, 
    image : 'stimuli/redesign/digit9.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.15, bottom], size : size,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -13.0 
  });
  Response_Textbox = new visual.TextBox({
    win: psychoJS.window,
    name: 'Response_Textbox',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, (- 0.3)], 
    letterHeight: 0.1,
    lineSpacing: 1.0,
    size: [1, 0.15],  units: undefined, 
    color: [(- 0.6078), (- 0.6706), (- 0.0118)], colorSpace: 'rgb',
    fillColor: undefined, borderColor: [(- 1.0), (- 1.0), (- 1.0)],
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -14.0 
  });
  
  continue_button_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'continue_button_2', units : undefined, 
    image : 'stimuli/redesign/continue_button.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.2, (- 0.4)], size : [0.276, 0.074],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -15.0 
  });
  clear_button = new visual.ImageStim({
    win : psychoJS.window,
    name : 'clear_button', units : undefined, 
    image : 'stimuli/redesign/clear.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.2), (- 0.4)], size : [0.276, 0.074],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -16.0 
  });
  // Initialize components for Routine "Feedback"
  FeedbackClock = new util.Clock();
  backimg_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'backimg_5', units : undefined, 
    image : 'stimuli/redesign/iphone_back.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.75, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  feedback_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_txt',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 0.6157), (- 0.6706), (- 0.0196)]),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "End"
  EndClock = new util.Clock();
  backimg_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'backimg_6', units : undefined, 
    image : 'stimuli/redesign/iphone_back.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.75, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  Thank_you = new visual.TextStim({
    win: psychoJS.window,
    name: 'Thank_you',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 0.6078), (- 0.6706), (- 0.0118)]),  opacity: undefined,
    depth: -1.0 
  });
  
  endImg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'endImg', units : undefined, 
    image : 'stimuli/redesign/end_experiment.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, (- 0.2)], size : [0.315, 0.074],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  mouse_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_2.mouseClock = new util.Clock();
  endKey = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var Instruct_Loop;
function Instruct_LoopLoopBegin(Instruct_LoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    Instruct_Loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 500, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'Instruct_Loop'
    });
    psychoJS.experiment.addLoop(Instruct_Loop); // add the loop to the experiment
    currentLoop = Instruct_Loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisInstruct_Loop of Instruct_Loop) {
      snapshot = Instruct_Loop.getSnapshot();
      Instruct_LoopLoopScheduler.add(importConditions(snapshot));
      Instruct_LoopLoopScheduler.add(Instruction2RoutineBegin(snapshot));
      Instruct_LoopLoopScheduler.add(Instruction2RoutineEachFrame());
      Instruct_LoopLoopScheduler.add(Instruction2RoutineEnd(snapshot));
      Instruct_LoopLoopScheduler.add(Instruct_LoopLoopEndIteration(Instruct_LoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function Instruct_LoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(Instruct_Loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function Instruct_LoopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var blocks;
function blocksLoopBegin(blocksLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    blocks = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 5, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'spreadsheets/choose_digitSpan.xlsx',
      seed: undefined, name: 'blocks'
    });
    psychoJS.experiment.addLoop(blocks); // add the loop to the experiment
    currentLoop = blocks;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisBlock of blocks) {
      snapshot = blocks.getSnapshot();
      blocksLoopScheduler.add(importConditions(snapshot));
      blocksLoopScheduler.add(reset_correctRoutineBegin(snapshot));
      blocksLoopScheduler.add(reset_correctRoutineEachFrame());
      blocksLoopScheduler.add(reset_correctRoutineEnd(snapshot));
      const trialsLoopScheduler = new Scheduler(psychoJS);
      blocksLoopScheduler.add(trialsLoopBegin(trialsLoopScheduler, snapshot));
      blocksLoopScheduler.add(trialsLoopScheduler);
      blocksLoopScheduler.add(trialsLoopEnd);
      blocksLoopScheduler.add(blocksLoopEndIteration(blocksLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: ("spreadsheets/" + condition_file),
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      const digitLoopLoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(digitLoopLoopBegin(digitLoopLoopScheduler, snapshot));
      trialsLoopScheduler.add(digitLoopLoopScheduler);
      trialsLoopScheduler.add(digitLoopLoopEnd);
      trialsLoopScheduler.add(reset_RecallRoutineBegin(snapshot));
      trialsLoopScheduler.add(reset_RecallRoutineEachFrame());
      trialsLoopScheduler.add(reset_RecallRoutineEnd(snapshot));
      const responseLoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(responseLoopBegin(responseLoopScheduler, snapshot));
      trialsLoopScheduler.add(responseLoopScheduler);
      trialsLoopScheduler.add(responseLoopEnd);
      trialsLoopScheduler.add(FeedbackRoutineBegin(snapshot));
      trialsLoopScheduler.add(FeedbackRoutineEachFrame());
      trialsLoopScheduler.add(FeedbackRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var digitLoop;
function digitLoopLoopBegin(digitLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    digitLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: digitSpan, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'digitLoop'
    });
    psychoJS.experiment.addLoop(digitLoop); // add the loop to the experiment
    currentLoop = digitLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisDigitLoop of digitLoop) {
      snapshot = digitLoop.getSnapshot();
      digitLoopLoopScheduler.add(importConditions(snapshot));
      digitLoopLoopScheduler.add(Digit_PresentationRoutineBegin(snapshot));
      digitLoopLoopScheduler.add(Digit_PresentationRoutineEachFrame());
      digitLoopLoopScheduler.add(Digit_PresentationRoutineEnd(snapshot));
      digitLoopLoopScheduler.add(digitLoopLoopEndIteration(digitLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function digitLoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(digitLoop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function digitLoopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var response;
function responseLoopBegin(responseLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    response = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1000, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'response'
    });
    psychoJS.experiment.addLoop(response); // add the loop to the experiment
    currentLoop = response;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisResponse of response) {
      snapshot = response.getSnapshot();
      responseLoopScheduler.add(importConditions(snapshot));
      responseLoopScheduler.add(Recall_touchRoutineBegin(snapshot));
      responseLoopScheduler.add(Recall_touchRoutineEachFrame());
      responseLoopScheduler.add(Recall_touchRoutineEnd(snapshot));
      responseLoopScheduler.add(responseLoopEndIteration(responseLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function responseLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(response);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function responseLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function blocksLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(blocks);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function blocksLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var t;
var frameN;
var continueRoutine;
var _key_resp_2_allKeys;
var gotValidClick;
var Instruction2Components;
function Instruction2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instruction2' ---
    t = 0;
    Instruction2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Instruction2.started', globalClock.getTime());
    i2_txt.setText(instruct_txt);
    pgnum.setText(((slideN.toString() + "/") + maxSlideN.toString()));
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // setup some python lists for storing info about the mouse_3
    // current position of the mouse:
    mouse_3.x = [];
    mouse_3.y = [];
    mouse_3.leftButton = [];
    mouse_3.midButton = [];
    mouse_3.rightButton = [];
    mouse_3.time = [];
    mouse_3.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    Instruction2Components = [];
    Instruction2Components.push(backimg_2);
    Instruction2Components.push(i2_txt);
    Instruction2Components.push(pgnum);
    Instruction2Components.push(key_resp_2);
    Instruction2Components.push(backButton_2);
    Instruction2Components.push(nextButton_2);
    Instruction2Components.push(start_2);
    Instruction2Components.push(mouse_3);
    
    for (const thisComponent of Instruction2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function Instruction2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instruction2' ---
    // get current time
    t = Instruction2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *backimg_2* updates
    if (t >= 0.0 && backimg_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      backimg_2.tStart = t;  // (not accounting for frame time here)
      backimg_2.frameNStart = frameN;  // exact frame index
      
      backimg_2.setAutoDraw(true);
    }
    
    
    // *i2_txt* updates
    if (t >= 0.0 && i2_txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      i2_txt.tStart = t;  // (not accounting for frame time here)
      i2_txt.frameNStart = frameN;  // exact frame index
      
      i2_txt.setAutoDraw(true);
    }
    
    
    // *pgnum* updates
    if (t >= 0.0 && pgnum.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pgnum.tStart = t;  // (not accounting for frame time here)
      pgnum.frameNStart = frameN;  // exact frame index
      
      pgnum.setAutoDraw(true);
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
    
    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['left', 'right', 'space'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *backButton_2* updates
    if (t >= 0.0 && backButton_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      backButton_2.tStart = t;  // (not accounting for frame time here)
      backButton_2.frameNStart = frameN;  // exact frame index
      
      backButton_2.setAutoDraw(true);
    }
    
    
    // *nextButton_2* updates
    if (t >= 0.0 && nextButton_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextButton_2.tStart = t;  // (not accounting for frame time here)
      nextButton_2.frameNStart = frameN;  // exact frame index
      
      nextButton_2.setAutoDraw(true);
    }
    
    
    // *start_2* updates
    if (t >= 0.0 && start_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_2.tStart = t;  // (not accounting for frame time here)
      start_2.frameNStart = frameN;  // exact frame index
      
      start_2.setAutoDraw(true);
    }
    
    // *mouse_3* updates
    if (t >= 0.0 && mouse_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_3.tStart = t;  // (not accounting for frame time here)
      mouse_3.frameNStart = frameN;  // exact frame index
      
      mouse_3.status = PsychoJS.Status.STARTED;
      mouse_3.mouseClock.reset();
      prevButtonState = mouse_3.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_3.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_3.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [backButton_2,nextButton_2,start_2]) {
            if (obj.contains(mouse_3)) {
              gotValidClick = true;
              mouse_3.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse_3.getPos();
          mouse_3.x.push(_mouseXYs[0]);
          mouse_3.y.push(_mouseXYs[1]);
          mouse_3.leftButton.push(_mouseButtons[0]);
          mouse_3.midButton.push(_mouseButtons[1]);
          mouse_3.rightButton.push(_mouseButtons[2]);
          mouse_3.time.push(mouse_3.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
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
    for (const thisComponent of Instruction2Components)
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


var _pj;
function Instruction2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instruction2' ---
    for (const thisComponent of Instruction2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instruction2.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_5
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if (_pj.in_es6("backButton_2", mouse_3.clicked_name)) {
        slideN -= 1;
    } else {
        if (_pj.in_es6("nextButton_2", mouse_3.clicked_name)) {
            slideN += 1;
        } else {
            if (_pj.in_es6("start_2", mouse_3.clicked_name)) {
                Instruct_Loop.finished = true;
            }
        }
    }
    if ((slideN < minSlideN)) {
        slideN = minSlideN;
    } else {
        if ((slideN > maxSlideN)) {
            slideN = maxSlideN;
        }
    }
    if ((slideN === 1)) {
        instruct_txt = "\u5728\u9019\u500b\u5be6\u9a57\u4e2d\uff0c\n\n\u4f60\u9700\u8981\u5617\u8a66\u8a18\u4f4f\u87a2\u5e55\u4e0a\u986f\u793a\u7684\u6578\u5b57\u3002\n\n\u6240\u6709\u6578\u5b57\u90fd\u57280\u52309\u4e4b\u9593\u3002\n\n\u4f60\u6703\u770b\u5230\u4e00\u4e32\u6578\u5b57\uff0c\u4f9d\u5e8f\u986f\u793a\n\n\u8acb\u8a18\u4f4f\u6574\u4e32\u6578\u5b57";
    } else {
        if ((slideN === 2)) {
            instruct_txt = "\u4e00\u65e6\u4f60\u8a18\u4f4f\u9019\u4e9b\u6578\u5b57\u5f8c\uff0c \n\n \u4f60\u9700\u8981\u91cd\u8ff0\u5b83\u5011\u3002\n\n\u5728\u65b9\u584a\u4e2d\u8f38\u5165\u525b\u525b\u986f\u793a\u904e\u7684\u6578\u5b57 \n\n \u5b8c\u6210\u5f8c\u8acb\u6309 \u9001\u51fa\u7b54\u6848";
        }
    }
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_3.x) {  psychoJS.experiment.addData('mouse_3.x', mouse_3.x[0])};
    if (mouse_3.y) {  psychoJS.experiment.addData('mouse_3.y', mouse_3.y[0])};
    if (mouse_3.leftButton) {  psychoJS.experiment.addData('mouse_3.leftButton', mouse_3.leftButton[0])};
    if (mouse_3.midButton) {  psychoJS.experiment.addData('mouse_3.midButton', mouse_3.midButton[0])};
    if (mouse_3.rightButton) {  psychoJS.experiment.addData('mouse_3.rightButton', mouse_3.rightButton[0])};
    if (mouse_3.time) {  psychoJS.experiment.addData('mouse_3.time', mouse_3.time[0])};
    if (mouse_3.clicked_name) {  psychoJS.experiment.addData('mouse_3.clicked_name', mouse_3.clicked_name[0])};
    
    // the Routine "Instruction2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var correct_at_this_level;
var reset_correctComponents;
function reset_correctRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'reset_correct' ---
    t = 0;
    reset_correctClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('reset_correct.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_4
    correct_at_this_level = 0;
    
    // keep track of which components have finished
    reset_correctComponents = [];
    
    for (const thisComponent of reset_correctComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function reset_correctRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'reset_correct' ---
    // get current time
    t = reset_correctClock.getTime();
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
    for (const thisComponent of reset_correctComponents)
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


function reset_correctRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'reset_correct' ---
    for (const thisComponent of reset_correctComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('reset_correct.stopped', globalClock.getTime());
    // the Routine "reset_correct" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Digit_PresentationComponents;
function Digit_PresentationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Digit_Presentation' ---
    t = 0;
    Digit_PresentationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('Digit_Presentation.started', globalClock.getTime());
    pres_text.setText(digits.toString()[digitLoop.thisN]);
    // keep track of which components have finished
    Digit_PresentationComponents = [];
    Digit_PresentationComponents.push(backimg_3);
    Digit_PresentationComponents.push(image);
    Digit_PresentationComponents.push(Fixation);
    Digit_PresentationComponents.push(pres_text);
    
    for (const thisComponent of Digit_PresentationComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function Digit_PresentationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Digit_Presentation' ---
    // get current time
    t = Digit_PresentationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *backimg_3* updates
    if (t >= 0.0 && backimg_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      backimg_3.tStart = t;  // (not accounting for frame time here)
      backimg_3.frameNStart = frameN;  // exact frame index
      
      backimg_3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (backimg_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      backimg_3.setAutoDraw(false);
    }
    
    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image.setAutoDraw(false);
    }
    
    
    // *Fixation* updates
    if (t >= 0.0 && Fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Fixation.tStart = t;  // (not accounting for frame time here)
      Fixation.frameNStart = frameN;  // exact frame index
      
      Fixation.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Fixation.setAutoDraw(false);
    }
    
    
    // *pres_text* updates
    if (t >= 1.0 && pres_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pres_text.tStart = t;  // (not accounting for frame time here)
      pres_text.frameNStart = frameN;  // exact frame index
      
      pres_text.setAutoDraw(true);
    }
    
    frameRemains = 1.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pres_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pres_text.setAutoDraw(false);
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
    for (const thisComponent of Digit_PresentationComponents)
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


function Digit_PresentationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Digit_Presentation' ---
    for (const thisComponent of Digit_PresentationComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Digit_Presentation.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var entered_text;
var enter_pressed;
var reset_RecallComponents;
function reset_RecallRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'reset_Recall' ---
    t = 0;
    reset_RecallClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('reset_Recall.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_3
    entered_text = "";
    enter_pressed = false;
    Response_Textbox.setText("");
    psychoJS.eventManager.clearEvents();
    
    // keep track of which components have finished
    reset_RecallComponents = [];
    
    for (const thisComponent of reset_RecallComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function reset_RecallRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'reset_Recall' ---
    // get current time
    t = reset_RecallClock.getTime();
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
    for (const thisComponent of reset_RecallComponents)
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


function reset_RecallRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'reset_Recall' ---
    for (const thisComponent of reset_RecallComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('reset_Recall.stopped', globalClock.getTime());
    // the Routine "reset_Recall" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Recall_touchComponents;
function Recall_touchRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Recall_touch' ---
    t = 0;
    Recall_touchClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Recall_touch.started', globalClock.getTime());
    // setup some python lists for storing info about the recall_touch
    // current position of the mouse:
    recall_touch.x = [];
    recall_touch.y = [];
    recall_touch.leftButton = [];
    recall_touch.midButton = [];
    recall_touch.rightButton = [];
    recall_touch.time = [];
    recall_touch.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    Recall_touchComponents = [];
    Recall_touchComponents.push(backimg);
    Recall_touchComponents.push(recall_touch);
    Recall_touchComponents.push(recall_txt_2);
    Recall_touchComponents.push(digit0);
    Recall_touchComponents.push(digit1);
    Recall_touchComponents.push(digit2);
    Recall_touchComponents.push(digit3);
    Recall_touchComponents.push(digit4);
    Recall_touchComponents.push(digit5);
    Recall_touchComponents.push(digit6);
    Recall_touchComponents.push(digit7);
    Recall_touchComponents.push(digit8);
    Recall_touchComponents.push(digit9);
    Recall_touchComponents.push(Response_Textbox);
    Recall_touchComponents.push(continue_button_2);
    Recall_touchComponents.push(clear_button);
    
    for (const thisComponent of Recall_touchComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Recall_touchRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Recall_touch' ---
    // get current time
    t = Recall_touchClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *backimg* updates
    if (t >= 0.0 && backimg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      backimg.tStart = t;  // (not accounting for frame time here)
      backimg.frameNStart = frameN;  // exact frame index
      
      backimg.setAutoDraw(true);
    }
    
    // *recall_touch* updates
    if (t >= 0.0 && recall_touch.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      recall_touch.tStart = t;  // (not accounting for frame time here)
      recall_touch.frameNStart = frameN;  // exact frame index
      
      recall_touch.status = PsychoJS.Status.STARTED;
      recall_touch.mouseClock.reset();
      prevButtonState = recall_touch.getPressed();  // if button is down already this ISN'T a new click
      }
    if (recall_touch.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = recall_touch.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [digit0,digit1,digit2,digit3,digit4,digit5,digit6,digit7,digit8,digit9,continue_button_2,clear_button]) {
            if (obj.contains(recall_touch)) {
              gotValidClick = true;
              recall_touch.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { 
            _mouseXYs = recall_touch.getPos();
            recall_touch.x.push(_mouseXYs[0]);
            recall_touch.y.push(_mouseXYs[1]);
            recall_touch.leftButton.push(_mouseButtons[0]);
            recall_touch.midButton.push(_mouseButtons[1]);
            recall_touch.rightButton.push(_mouseButtons[2]);
            recall_touch.time.push(recall_touch.mouseClock.getTime());
          }
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *recall_txt_2* updates
    if (t >= 0.0 && recall_txt_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      recall_txt_2.tStart = t;  // (not accounting for frame time here)
      recall_txt_2.frameNStart = frameN;  // exact frame index
      
      recall_txt_2.setAutoDraw(true);
    }
    
    
    // *digit0* updates
    if (t >= 0.0 && digit0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      digit0.tStart = t;  // (not accounting for frame time here)
      digit0.frameNStart = frameN;  // exact frame index
      
      digit0.setAutoDraw(true);
    }
    
    
    // *digit1* updates
    if (t >= 0.0 && digit1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      digit1.tStart = t;  // (not accounting for frame time here)
      digit1.frameNStart = frameN;  // exact frame index
      
      digit1.setAutoDraw(true);
    }
    
    
    // *digit2* updates
    if (t >= 0.0 && digit2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      digit2.tStart = t;  // (not accounting for frame time here)
      digit2.frameNStart = frameN;  // exact frame index
      
      digit2.setAutoDraw(true);
    }
    
    
    // *digit3* updates
    if (t >= 0.0 && digit3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      digit3.tStart = t;  // (not accounting for frame time here)
      digit3.frameNStart = frameN;  // exact frame index
      
      digit3.setAutoDraw(true);
    }
    
    
    // *digit4* updates
    if (t >= 0.0 && digit4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      digit4.tStart = t;  // (not accounting for frame time here)
      digit4.frameNStart = frameN;  // exact frame index
      
      digit4.setAutoDraw(true);
    }
    
    
    // *digit5* updates
    if (t >= 0.0 && digit5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      digit5.tStart = t;  // (not accounting for frame time here)
      digit5.frameNStart = frameN;  // exact frame index
      
      digit5.setAutoDraw(true);
    }
    
    
    // *digit6* updates
    if (t >= 0.0 && digit6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      digit6.tStart = t;  // (not accounting for frame time here)
      digit6.frameNStart = frameN;  // exact frame index
      
      digit6.setAutoDraw(true);
    }
    
    
    // *digit7* updates
    if (t >= 0.0 && digit7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      digit7.tStart = t;  // (not accounting for frame time here)
      digit7.frameNStart = frameN;  // exact frame index
      
      digit7.setAutoDraw(true);
    }
    
    
    // *digit8* updates
    if (t >= 0.0 && digit8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      digit8.tStart = t;  // (not accounting for frame time here)
      digit8.frameNStart = frameN;  // exact frame index
      
      digit8.setAutoDraw(true);
    }
    
    
    // *digit9* updates
    if (t >= 0.0 && digit9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      digit9.tStart = t;  // (not accounting for frame time here)
      digit9.frameNStart = frameN;  // exact frame index
      
      digit9.setAutoDraw(true);
    }
    
    
    // *Response_Textbox* updates
    if (t >= 0.0 && Response_Textbox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Response_Textbox.tStart = t;  // (not accounting for frame time here)
      Response_Textbox.frameNStart = frameN;  // exact frame index
      
      Response_Textbox.setAutoDraw(true);
    }
    
    
    // *continue_button_2* updates
    if (t >= 0.0 && continue_button_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_button_2.tStart = t;  // (not accounting for frame time here)
      continue_button_2.frameNStart = frameN;  // exact frame index
      
      continue_button_2.setAutoDraw(true);
    }
    
    
    // *clear_button* updates
    if (t >= 0.0 && clear_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      clear_button.tStart = t;  // (not accounting for frame time here)
      clear_button.frameNStart = frameN;  // exact frame index
      
      clear_button.setAutoDraw(true);
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
    for (const thisComponent of Recall_touchComponents)
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


function Recall_touchRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Recall_touch' ---
    for (const thisComponent of Recall_touchComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Recall_touch.stopped', globalClock.getTime());
    // Run 'End Routine' code from code
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if (_pj.in_es6("digit0", recall_touch.clicked_name)) {
        entered_text += "0";
    } else {
        if (_pj.in_es6("digit1", recall_touch.clicked_name)) {
            entered_text += "1";
        } else {
            if (_pj.in_es6("digit2", recall_touch.clicked_name)) {
                entered_text += "2";
            } else {
                if (_pj.in_es6("digit3", recall_touch.clicked_name)) {
                    entered_text += "3";
                } else {
                    if (_pj.in_es6("digit4", recall_touch.clicked_name)) {
                        entered_text += "4";
                    } else {
                        if (_pj.in_es6("digit5", recall_touch.clicked_name)) {
                            entered_text += "5";
                        } else {
                            if (_pj.in_es6("digit6", recall_touch.clicked_name)) {
                                entered_text += "6";
                            } else {
                                if (_pj.in_es6("digit7", recall_touch.clicked_name)) {
                                    entered_text += "7";
                                } else {
                                    if (_pj.in_es6("digit8", recall_touch.clicked_name)) {
                                        entered_text += "8";
                                    } else {
                                        if (_pj.in_es6("digit9", recall_touch.clicked_name)) {
                                            entered_text += "9";
                                        } else {
                                            if (_pj.in_es6("continue_button_2", recall_touch.clicked_name)) {
                                                continueRoutine = false;
                                                response.finished = true;
                                            } else {
                                                if (_pj.in_es6("clear_button", recall_touch.clicked_name)) {
                                                    entered_text = "";
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    Response_Textbox.setText(entered_text);
    
    // store data for psychoJS.experiment (ExperimentHandler)
    if (recall_touch.x) {  psychoJS.experiment.addData('recall_touch.x', recall_touch.x[0])};
    if (recall_touch.y) {  psychoJS.experiment.addData('recall_touch.y', recall_touch.y[0])};
    if (recall_touch.leftButton) {  psychoJS.experiment.addData('recall_touch.leftButton', recall_touch.leftButton[0])};
    if (recall_touch.midButton) {  psychoJS.experiment.addData('recall_touch.midButton', recall_touch.midButton[0])};
    if (recall_touch.rightButton) {  psychoJS.experiment.addData('recall_touch.rightButton', recall_touch.rightButton[0])};
    if (recall_touch.time) {  psychoJS.experiment.addData('recall_touch.time', recall_touch.time[0])};
    if (recall_touch.clicked_name) {  psychoJS.experiment.addData('recall_touch.clicked_name', recall_touch.clicked_name[0])};
    
    // the Routine "Recall_touch" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var correct;
var fbTxt;
var last_level;
var FeedbackComponents;
function FeedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Feedback' ---
    t = 0;
    FeedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('Feedback.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_6
    if ((Response_Textbox.text === digits.toString())) {
        correct = 1;
        trials.finished = true;
        fbTxt = "\u7b54\u5c0d\u4e86!";
    } else {
        correct = 0;
        fbTxt = "\u7b54\u932f\u4e86!";
    }
    psychoJS.experiment.addData("correct", correct);
    correct_at_this_level += correct;
    if ((((trials.thisN + 1) === trials.nTotal) && (correct_at_this_level !== trials.nTotal))) {
        last_level = level;
        trials.finished = true;
        blocks.finished = true;
    }
    psychoJS.experiment.addData("Response", entered_text);
    
    feedback_txt.setText(fbTxt);
    // keep track of which components have finished
    FeedbackComponents = [];
    FeedbackComponents.push(backimg_5);
    FeedbackComponents.push(feedback_txt);
    
    for (const thisComponent of FeedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function FeedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Feedback' ---
    // get current time
    t = FeedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *backimg_5* updates
    if (t >= 0.0 && backimg_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      backimg_5.tStart = t;  // (not accounting for frame time here)
      backimg_5.frameNStart = frameN;  // exact frame index
      
      backimg_5.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (backimg_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      backimg_5.setAutoDraw(false);
    }
    
    
    // *feedback_txt* updates
    if (t >= 0.0 && feedback_txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_txt.tStart = t;  // (not accounting for frame time here)
      feedback_txt.frameNStart = frameN;  // exact frame index
      
      feedback_txt.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_txt.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_txt.setAutoDraw(false);
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
    for (const thisComponent of FeedbackComponents)
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


function FeedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Feedback' ---
    for (const thisComponent of FeedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Feedback.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _endKey_allKeys;
var EndComponents;
function EndRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'End' ---
    t = 0;
    EndClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('End.started', globalClock.getTime());
    Thank_you.setText((("\u60a8\u80fd\u5920\u8a18\u4f4f\u7684\u6578\u5217\u5171\u6709 " + (last_level - 1).toString()) + "\u500b"));
    // setup some python lists for storing info about the mouse_2
    // current position of the mouse:
    mouse_2.x = [];
    mouse_2.y = [];
    mouse_2.leftButton = [];
    mouse_2.midButton = [];
    mouse_2.rightButton = [];
    mouse_2.time = [];
    mouse_2.clicked_name = [];
    gotValidClick = false; // until a click is received
    endKey.keys = undefined;
    endKey.rt = undefined;
    _endKey_allKeys = [];
    // keep track of which components have finished
    EndComponents = [];
    EndComponents.push(backimg_6);
    EndComponents.push(Thank_you);
    EndComponents.push(endImg);
    EndComponents.push(mouse_2);
    EndComponents.push(endKey);
    
    for (const thisComponent of EndComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function EndRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'End' ---
    // get current time
    t = EndClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *backimg_6* updates
    if (t >= 0.0 && backimg_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      backimg_6.tStart = t;  // (not accounting for frame time here)
      backimg_6.frameNStart = frameN;  // exact frame index
      
      backimg_6.setAutoDraw(true);
    }
    
    
    // *Thank_you* updates
    if (t >= 0.0 && Thank_you.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Thank_you.tStart = t;  // (not accounting for frame time here)
      Thank_you.frameNStart = frameN;  // exact frame index
      
      Thank_you.setAutoDraw(true);
    }
    
    
    // *endImg* updates
    if (t >= 0.0 && endImg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      endImg.tStart = t;  // (not accounting for frame time here)
      endImg.frameNStart = frameN;  // exact frame index
      
      endImg.setAutoDraw(true);
    }
    
    // *mouse_2* updates
    if (t >= 0.0 && mouse_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_2.tStart = t;  // (not accounting for frame time here)
      mouse_2.frameNStart = frameN;  // exact frame index
      
      mouse_2.status = PsychoJS.Status.STARTED;
      mouse_2.mouseClock.reset();
      prevButtonState = mouse_2.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [endImg]) {
            if (obj.contains(mouse_2)) {
              gotValidClick = true;
              mouse_2.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse_2.getPos();
          mouse_2.x.push(_mouseXYs[0]);
          mouse_2.y.push(_mouseXYs[1]);
          mouse_2.leftButton.push(_mouseButtons[0]);
          mouse_2.midButton.push(_mouseButtons[1]);
          mouse_2.rightButton.push(_mouseButtons[2]);
          mouse_2.time.push(mouse_2.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *endKey* updates
    if (t >= 0.0 && endKey.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      endKey.tStart = t;  // (not accounting for frame time here)
      endKey.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { endKey.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { endKey.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { endKey.clearEvents(); });
    }
    
    if (endKey.status === PsychoJS.Status.STARTED) {
      let theseKeys = endKey.getKeys({keyList: ['space', 'return', 'escape'], waitRelease: false});
      _endKey_allKeys = _endKey_allKeys.concat(theseKeys);
      if (_endKey_allKeys.length > 0) {
        endKey.keys = _endKey_allKeys[_endKey_allKeys.length - 1].name;  // just the last key pressed
        endKey.rt = _endKey_allKeys[_endKey_allKeys.length - 1].rt;
        endKey.duration = _endKey_allKeys[_endKey_allKeys.length - 1].duration;
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
    for (const thisComponent of EndComponents)
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


function EndRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'End' ---
    for (const thisComponent of EndComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('End.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_2.x) {  psychoJS.experiment.addData('mouse_2.x', mouse_2.x[0])};
    if (mouse_2.y) {  psychoJS.experiment.addData('mouse_2.y', mouse_2.y[0])};
    if (mouse_2.leftButton) {  psychoJS.experiment.addData('mouse_2.leftButton', mouse_2.leftButton[0])};
    if (mouse_2.midButton) {  psychoJS.experiment.addData('mouse_2.midButton', mouse_2.midButton[0])};
    if (mouse_2.rightButton) {  psychoJS.experiment.addData('mouse_2.rightButton', mouse_2.rightButton[0])};
    if (mouse_2.time) {  psychoJS.experiment.addData('mouse_2.time', mouse_2.time[0])};
    if (mouse_2.clicked_name) {  psychoJS.experiment.addData('mouse_2.clicked_name', mouse_2.clicked_name[0])};
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(endKey.corr, level);
    }
    psychoJS.experiment.addData('endKey.keys', endKey.keys);
    if (typeof endKey.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('endKey.rt', endKey.rt);
        psychoJS.experiment.addData('endKey.duration', endKey.duration);
        routineTimer.reset();
        }
    
    endKey.stop();
    // the Routine "End" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
