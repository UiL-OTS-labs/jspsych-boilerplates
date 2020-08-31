
// constants
var PRAC        = "PRAC";
var TEST        = "TEST";
var GRAMM       = "GRAM";
var UNGRAMM     = "UNGRAM";
var FILLER      = "FILLER";

var answers = ["True", "False"];

var PRAC_STIM_URI = "prac_items.json"
var TEST_STIM_URI = "test_items.json"

var prac_finish, test_finish;
var prac_items;
var test_items;

function load_file(output, finish_bool, filepath) {
    var request = new XMLHttpRequest();
    request.onload = function () {
        if (request.status == 200) {
            output = JSON.parse(request.responseText);
            finish_bool = true;
        }
        else {
            console.log("Unable to load: " + filepath);
        }
    }
    request.open("GET", filepath, true);
    request.send();
}


function add_prac_times(array) {
}

function add_test_times(array) {
}

function load_stimuli()
{
    prac_json = load_file(prac_items, prac_finish, PRAC_STIM_URI);
    test_json = load_file(test_items, test_finish, TEST_STIM_URI);
    prac_array = JSON.parse(prac_json);
    test_array = JSON.parse(test_json);
}

