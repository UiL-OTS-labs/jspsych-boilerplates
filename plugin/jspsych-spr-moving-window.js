
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
                },
                width : {
                    type : jsPsych.plugins.parameterType.INT,
                    pretty_name : "width",
                    default : 900,
                    description : "The width of the canvas in which the spr moving window is presented"
                },
                height : {
                    type : jsPsych.plugins.INT,
                    pretty_name : "height",
                    default : 600,
                    description : "The height of the canvas in which the spr moving window is presented"
                }
            }
        };

        /**
         * Class to represent the position of a word on a 2d canvas
         */
        class WordPos {

            /**
             * @param {number} x the x position of a word
             * @param {number} y the y position of a word
             */
            constructor(x, y) {
                this.x = x;
                this.y = y;
            }
        };
        
        /**
         * Class to contain some data about a word, on how to present it
         * on a canvas.
         */
        class WordInfo {
            /**
             * @param
             */
            constructor (word, position, linesegment, record = false) {
                this.word = word;
                this.pos = position;
                this.record = record;
            }
        }

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

        // private variables
        
        // the nth_word that should be presented.
        let word_index = 0;
        let lines = [];

        function clear_variables() {
            word_index = 0;
            lines = [];
        }

        /**
         * Draws the stimulus on the canvas.
         * 
         * @param {HTMLCanvasElement} canvas 
         * @param {CanvasRenderingContext2D} context 
         * @param {String} font_color 
         * @param {String} background_color 
         * @param {String} stimulus 
         */
        function draw_stimulus(canvas, context, font_color, background_color, stimulus) {
            // draw background
            context.fillStyle = background_color;
            context.fillRect(0, 0, canvas.width, canvas.height);

            // draw text
            context.fillStyle = font_color
            context.moveTo(canvas.width / 10.0, canvas.height / 10.0);

            let lines = stimulus.split(newline_re)
        }

        /**
         * Setup the canvas for use with this plugin
         * 
         * @param {HTMLElement} display_element 
         * @param {Object} trial Object with trial information
         * @return {string} The innerHTML of the display_element in order to
         *                  return the old state.
         */
        function create_canvas(display_element, trial) {
            old_html = display_element.innerHTML;
            display_element.innerHTML = `<canvas width="${trial.width}" ` +
                                        `height="${trial.height}" `       +
                                        `id="${SPR_CANVAS}">`             +
                                        `</canvas>`;

            return old_html;
        }

        function after_response(info) {
            console.log("rt = " + info.rt + "ms\tkey = " + info.key);
        }

        plugin.trial = function(display_element, trial) {

            clear_variables();

            old_html = create_canvas(display_element, trial);
            canvas = document.getElementById(SPR_CANVAS);
            var ctx = canvas.getContext(
                '2d',
                {alpha:false}
            );
            let stim = trial.stimulus;
            let lines = stim.split(newline_re);

            console.log(typeof (trial.stimulus) + " " + trial.stimulus) ;
            console.log(trial.stimulus.split(captured_word_re));

            let finished = false;
            while (! finished) {

                draw_stimulus(
                    canvas,
                    ctx,
                    trial.font_color,
                    trial.background_color,
                    stim
                    );


                jsPsych.pluginAPI.getKeyboardResponse (
                    {
                        callback_function : after_response,
                        valid_response : trial.choices,
                        rt_method : 'performance',
                        presist : true
                    }
                );
            }

            //display_element.innerHTML = old_html;
        }

        return plugin;
    }
)();
