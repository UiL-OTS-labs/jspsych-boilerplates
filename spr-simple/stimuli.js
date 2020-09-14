export {
    append_trials,
    get_practice_items,
    get_test_items,
    load_stimuli
};

import {get_query_string_variable} from "./utils.js" 

var PRAC_STIM_URI = "prac_items.json"
var TEST_STIM_URI = "test_items.json"

var prac_status = {finish : false};
var test_status = {finish : false};
var prac_items = [];
var test_items = [];
var question_answers = ["true", "false"];

let FIX_DUR = 1000;
let ISI     = 1000;

// This function issues a warning. However, its not wise to
// continue without loading the stimuli.
function load_file(output, finish_status, url) {
    var request = new XMLHttpRequest();
    request.onload = function () {
        if (request.status == 200) {
            let stimarray = JSON.parse(request.responseText);
            stimarray.forEach(stimulus => output.push(stimulus));
            finish_status.finish = true;
            console.log("finish_status = " + JSON.stringify(finish_status) +
                        "\tprac_status = " + JSON.stringify(prac_status) +
                        "\ttest_status = " + JSON.stringify(test_status)
            );
        }
        else {
            console.log("Unable to load: " + url);
        }
    }
    request.open("GET", url, false);
    request.send();
}

function append_trials(timeline, trials) {
    trials.forEach( (jt) => {
            let words = jt.segments.split(/\s+/);

            let fix = {
                type : 'html-keyboard-response',
                stimulus : '<div style="font-size:60px;">+</div>',
                choices : jsPsych.NO_KEYS,
                stimulus_duration : FIX_DUR,
                trial_duration : FIX_DUR + ISI
            }
            timeline.push(fix);

            let trial = {
                type : 'html-keyboard-response',
                choices : [' '],
                timeline : []
            };
            words.forEach(word => trial.timeline.push({stimulus : word}));
            timeline.push(trial);
            if (jt.question) {
                let answer = (jt.qanswer == "1" || jt.qanswer == 1 || jt.qanswer == true);
                let question = {
                    type : 'html-button-response',
                    choices : question_answers,
                    stimulus: "</p>" + jt.question + "</p>"
                }
                timeline.push(question);
            }
        }
    );
    return trials;
}

function get_practice_items() {
    return prac_items;
}

function get_test_items() {
    return test_items;
}

function load_stimuli()
{
    load_file(prac_items, prac_status, PRAC_STIM_URI);
    load_file(test_items, test_status, TEST_STIM_URI);
    let group = get_query_string_variable("group");
    test_items = test_items.filter(function (trial) {return trial.group == group;});
}
