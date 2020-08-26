
// constants
let PRAC        = "PRAC";
let TEST        = "TEST";
let GRAMM       = "GRAM";
let UNGRAMM     = "UNGRAM";
let FILLER      = "FILLER";

let answers = ["True", "False"];

var practice_trials = [
    {
        id: 1,
        type : PRAC,
        stimulus :
            "In het tuincentrum konden Martine en Marije "  +
            "genoeg van hun gading vinden. Martine zocht "  +
            "een  zes appelbomen van een ziektebestendig "  +
            "ras uit, en Marije twaalf bessenstruiken. "    +
            "Gelukkig was het prima weer om hun nieuwe "    +
            "aanwinsten meteen te planten.",
        question : null,
        answers : null,
        answer : null
    }, 
    {
        id: 2,
        type=PRAC,
        stimulus : 
            "Godelieve en Vincent waren net verhuisd "      +
            "en waren aan het klussen op zolder. Godelieve "+
            "zaagde een boekenplank van MDF, terwijl "      +
            "Vincent de kozijnen verfde. Na een dag "       +
            "hard werken gingen ze tevreden slapen "        +
            "in hun nieuwe huis.",
        question : "Vincent verfde de kozijnen.",
        answers : answers,
        answer : true
    }
];

var test_trials = [
    {
        group : 0,
        id : 1, 
        type : UNGR,
        stimulus :
                "Jan en Marie zaten na een lange "                              +
                "werkdag samen te wachten in de "                               +
                "stationsrestauratie in Amsterdam. "                            +
                "Jan at een broodje met ham, "                                  +
                "#en #Marie #een #koffie #met #veel #melk. #De #stemming"       +
                "#was #niet #best, #omdat #de #trein meer dan "                 +
                "30 minuten vertraging had.",
        question : "Jan at een broodje.",
        answers : answers,
        answer : true,
    },
    {
        group : 1,
        id : 1,
        type : GRAMM,
                "Jan en Marie zaten na een lange "                              +
                "werkdag samen te wachten in de "                               +
                "stationsrestauratie in Amsterdam. "                            +
                "Jan vroeg een broodje met ham, "                               +
                "#en #Marie #een #koffie #met #veel #melk. #De #stemming "      +
                "#was #niet #best, #omdat #de #trein meer dan "                 +
                "30 minuten vertraging had.";
        question : "Jan at een broodje.",
        answer : answers,
        answer : true
    },
    {
        group : 1,
        id : 2,
        type: UNGR,
        stimulus :
            "Roos en Lisa hadden aangeboden het huis "              +
            "van oma eens flink op te knappen en schoon te "        +
            "maken. Roos schuurde het houtwerk in de gang, "        +
            "#en #Lisa #het #tapijt #in #de #kamer. #Oma #wist "    +
            "#niet #wat #ze #zag #en #bedankte de dames met "       +
            "een bos bloemen.",
        question : null,
        answers : null,
        answer : null,
    },
    {
        group : 0,
        id : 2,
        type : GRAMM,
        stimulus : 
            "Roos en Lisa hadden aangeboden het huis "              +
            "van oma eens flink op te knappen en schoon te "        +
            "maken. Roos schrobde het houtwerk in de gang, "        +
            "#en #Lisa #het #tapijt #in #de #kamer. #Oma #wist "    +
            "#niet #wat #ze #zag #en #bedankte de dames met "       +
            "een bos bloemen.";
        question : null,
        answers : null,
        answer: null
    },
    {
        group : 0,
        id : 3,
        type : FILLER,
        stimulus : 
           "Op het introductiekamp van hun nieuwe studie "     +
           "misten Suzy en Jochem hun partner meer dan ooit. " +
           "Suzy zocht een brief van haar vriend, en Jochem "  +
           "een foto van zijn vriendin. Gelukkig duurde het "  +
           "kamp maar vijf dagen."
        question : "Suzy zocht een foto.",
        answers : answers,
        answer : false
    },
    {
        group : 0,
        id : 4,
        type : FILLER,
        stimulus :
            "Martijn en Jessica verwachtten samen hun " +
            "eerste kindje en vonden het leuk zelf  "   +
            "babyspulletjes te maken. Martijn zaagde "  +
            "een bedje van hout, terwijl Jessica een "  +
            "dekentje van zachte wol breide. "          +
            "Het resultaat was een prachtige wieg.",
        question : null,
        answers : null,
        answer : null,
    }
    {
        group : 1,
        id : 3,
        type : FILLER,
        stimulus :
            "Op het introductiekamp van hun nieuwe studie "     +
            "misten Suzy en Jochem hun partner meer dan ooit. " +
            "Suzy zocht een brief van haar vriend, en Jochem "  +
            "een foto van zijn vriendin. Gelukkig duurde het "  +
            "kamp maar vijf dagen.",
        question : "Suzy zocht een foto.",
        answers : answers,
        answer : false
    }
    {
        group : 1,
        id : 4,
        type : FILLER,
        stimulus :
            "Martijn en Jessica verwachtten samen hun " +
            "eerste kindje en vonden het leuk zelf "    +
            "babyspulletjes te maken. Martijn zaagde "  +
            "een bedje van hout, terwijl Jessica een "  +
            "dekentje van zachte wol breide. ",
            "Het resultaat was een prachtige wieg.";
        question : null,
        answers : null,
        answer
    }
];

function add_prac_times(array) {
}

function add_test_times(array) {
}
