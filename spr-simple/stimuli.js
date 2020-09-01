export {get_practice_items, get_test_items, load_stimuli};
   
var PRAC_STIM_URI = "prac_items.json"
var TEST_STIM_URI = "test_items.json"

var prac_status = {finish : false};
var test_status = {finish : false};
let prac_items = [];
let test_items = [];

// This function issues a warning. However, its not wise to
// continue without loading the stimuli.
function load_file(output, finish_status, url) {
    var request = new XMLHttpRequest();
    request.onload = function () {
        if (request.status == 200) {
            stimarray = JSON.parse(request.responseText);
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

function get_practice_items() {
    return prac_items;
}

function get_test_items() {
    return prac_items;
}

function load_stimuli()
{
    load_file(prac_items, prac_status, PRAC_STIM_URI);
    load_file(test_items, test_status, TEST_STIM_URI);
    let group = get_query_string_variable("group");
    test_items.filter(function (trial) {return trial.group == group;});
}
