
const SPR_MW_PLUGIN_NAME = 'spr-moving-window';

jsPsych.plugins[SPR_MW_PLUGIN_NAME] = (
    function() {
        var plugin = {};

        plugin.info = {
            name: SPR_MW_PLUGIN_NAME,
            parameters : {
                stimulus : {
                    type :          jsPsych.plugins.parameterType.STRING,
                    pretty_name :   'Stimulus',
                    default :       undefined,
                    description :   'The string to be displayed in' +
                                    'Self paced reading moving window style'
                },
                choices : {
                    type :          jsPsych.plugin.parameterType.KEYCODE,
                    pretty_name :   "Choices",
                    default :       jsPsych.ALL_KEYS,
                    description :   "The keys allowed to advance a word."
                }
            }
        };

        var SPR_DIV = "spr_div";
        var SPR_CANVAS = "spr_canvas";

        plugin.trial = function(display_element, trial) {

            display_element.innerHTML = `<div id="$SPR_DIV"></div>`;
            var div = display_element.getElementById(SPR_DIV);
            console.log("width = " + div.clientWidth + "\theight" + div.clienHeight);
            canvas = document.createElement("canvas");
            div.appendChild(canvas);
            canvas.setAttribute("id", SPR_CANVAS);
        }

        return plugin;
    }
)();
