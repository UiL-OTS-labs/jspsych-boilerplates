/*
 * Example plugin template
 */

jsPsych.plugins["template"] = (function() {

  var plugin = {};

  plugin.info = {
    name: "template",
    parameters: {
      parameter_name: {
        type: jsPsych.plugins.parameterType.INT, // BOOL, STRING, INT, FLOAT, FUNCTION, KEYCODE, SELECT, HTML_STRING, IMAGE, AUDIO, VIDEO, OBJECT, COMPLEX
        default: undefined
      },
    }
  }

  plugin.trial = function(display_element, trial) {

    // data saving
    var trial_data = {
      parameter_name: 'parameter value'
    };

    // end trial
    jsPsych.finishTrial(trial_data);
  };

  return plugin;
})();
