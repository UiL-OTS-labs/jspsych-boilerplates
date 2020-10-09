
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
                    type :          jsPsych.plugins.parameterType.KEYCODE,
                    pretty_name :   "Choices",
                    default :       jsPsych.ALL_KEYS,
                    description :   "The keys allowed to advance a word."
                },
                background_color : {
                    type : jsPsych.plugins.parameterType.STRING,
                    pretty_name : "Background color",
                    default : "rgb(230,230,230)",
                    description : "background_color r, g and b value as javascript ojbect such as: " +
                                   "\"rgb(230,230,230)\" or \"gray\""
                },
                font_color : {
                    type : jsPsych.plugins.parameterType.STRING,
                    pretty_name : "Font color",
                    default : 'rgb(0,0,0)',
                    description : "The rgb values in which the letters will be presented, such as: " +
                                   "rgb(0,0,0)"
                }
            }
        };

        // Reused names
        const SPR_CANVAS = "SprCanvas";

        // Reused regular expressions.
        //
        // \p{} is for a unicode property
        // \p{L} matches a "alfabetic" character throughout languages.
        // see https://javascript.info/regexp-unicode
        const CAP_WORD = '(\\p{L}+)';
        const NEWLINE = '\n';
        const INTERPUNCTION = "\\p{P}";

        const GLOBAL_UNICODE_RE_FLAGS = 'gu';

        const CAP_WORD_RE = RegExp(CAP_WORD, GLOBAL_UNICODE_RE_FLAGS);
        const NEW_LINE_RE = RegExp(NEWLINE, GLOBAL_UNICODE_RE_FLAGS);
        const INTERPUNCTION_RE = RegExp(INTERPUNCTION, GLOBAL_UNICODE_RE_FLAGS);

        function draw_stimulus(canvas, context, font_color, background_color) {
            // draw background
            context.fillStyle = background_color;
            context.fillRect(0, 0, canvas.width, canvas.height);

            // draw text
            context.fillStyle = font_color
            context.moveTo(canvas.width / 10.0, canvas.height / 10.0);
        }

        plugin.trial = function(display_element, trial) {
            // Try to make this a little more dynamic.
            display_element.innerHTML =
                `<canvas width=900 height=600 id="${SPR_CANVAS}">`;
            canvas = document.getElementById(SPR_CANVAS);
            var ctx = canvas.getContext(
                '2d',
                {alpha:false}
            );
            let stim = trial.stimulus;
            let lines = stim.split(NEW_LINE_RE);

            console.log(typeof (trial.stimulus) + " " + trial.stimulus) ;
            console.log(trial.stimulus.split(CAP_WORD_RE));
            draw_stimulus(
                canvas,
                ctx,
                trial.font_color,
                trial.background_color
                );
        }

        return plugin;
    }
)();
