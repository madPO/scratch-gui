const separator = '<sep gap="45"/>';

const top = ``; /* `
    <category name="Top" colour="#FFFFFF" secondaryColour="#CCCCCC">
        <block type="event_whenflagclicked"/>
        <block type="event_whenthisspriteclicked"/>
        <block type="motion_movesteps">
            <value name="STEPS">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
        <block type="motion_turnright">
            <value name="DEGREES">
                <shadow type="math_number">
                    <field name="NUM">15</field>
                </shadow>
            </value>
        </block>
        <block type="motion_ifonedgebounce"/>
        <block type="sound_playuntildone">
            <value name="SOUND_MENU">
                <shadow type="sound_sounds_menu"/>
            </value>
        </block>
        <block type="looks_sayforsecs">
            <value name="MESSAGE">
                <shadow type="text">
                    <field name="TEXT">Hello!</field>
                </shadow>
            </value>
            <value name="SECS">
                <shadow type="math_number">
                    <field name="NUM">2</field>
                </shadow>
            </value>
        </block>
        <block type="looks_changeeffectby">
            <value name="CHANGE">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
        <block type="control_repeat">
            <value name="TIMES">
                <shadow type="math_whole_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
        <block type="control_wait">
            <value name="DURATION">
                <shadow type="math_positive_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
        </block>
        <block type="operator_random">
            <value name="FROM">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="TO">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
    </category>
`; */

const motion =`
    <category name="Motion" colour="#4C97FF" secondaryColour="#3373CC">
        <block type="motion_start">
        </block>
        <block type="motion_commit">
        </block>
        <block type="motion_go">
        </block>
        <block type="motion_set">
        </block>
        <block type="motion_move">
        </block>
    </category>
`;

const sound =``;/*  `
    <category name="Sound" colour="#D65CD6" secondaryColour="#BD42BD">
        <block type="sound_play">
            <value name="SOUND_MENU">
                <shadow type="sound_sounds_menu"/>
            </value>
        </block>
        <block type="sound_playuntildone">
            <value name="SOUND_MENU">
                <shadow type="sound_sounds_menu"/>
            </value>
        </block>
        <block type="sound_stopallsounds"/>
        <block type="sound_playdrumforbeats">
            <value name="DRUM">
                <shadow type="sound_drums_menu"/>
            </value>
            <value name="BEATS">
                <shadow type="math_number">
                    <field name="NUM">0.25</field>
                </shadow>
            </value>
        </block>
        <block type="sound_restforbeats">
            <value name="BEATS">
                <shadow type="math_number">
                    <field name="NUM">0.25</field>
                </shadow>
            </value>
        </block>
        <block type="sound_playnoteforbeats">
            <value name="NOTE">
                <shadow type="math_number">
                    <field name="NUM">60</field>
                </shadow>
            </value>
            <value name="BEATS">
                <shadow type="math_number">
                    <field name="NUM">0.5</field>
                </shadow>
            </value>
        </block>
        <block type="sound_setinstrumentto">
            <value name="INSTRUMENT">
                <shadow type="sound_instruments_menu"/>
            </value>
        </block>
        <block type="sound_changeeffectby">
            <value name="VALUE">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
        <block type="sound_seteffectto">
            <value name="VALUE">
                <shadow type="math_number">
                    <field name="NUM">100</field>
                </shadow>
            </value>
        </block>
        <block type="sound_cleareffects"/>
        <block type="sound_changevolumeby">
            <value name="VOLUME">
                <shadow type="math_number">
                    <field name="NUM">-10</field>
                </shadow>
            </value>
        </block>
        <block type="sound_setvolumeto">
            <value name="VOLUME">
                <shadow type="math_number">
                    <field name="NUM">100</field>
                </shadow>
            </value>
        </block>
        <block type="sound_volume"/>
        <block type="sound_changetempoby">
            <value name="TEMPO">
                <shadow type="math_number">
                    <field name="NUM">20</field>
                </shadow>
            </value>
        </block>
        <block type="sound_settempotobpm">
            <value name="TEMPO">
                <shadow type="math_number">
                    <field name="NUM">60</field>
                </shadow>
            </value>
        </block>
        <block type="sound_tempo"/>
    </category>
`; */

const events = `
    <category name="Events" colour="#FFD500" secondaryColour="#CC9900">
        <block type="event_whenflagclicked"/>
        <!--<block type="event_whenkeypressed">
        </block>-->
        <block type="event_whengreaterthan">
            <value name="VALUE">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
        <block type="event_whenbroadcastreceived">
        </block>
        <block type="event_broadcast">
            <value name="BROADCAST_OPTION">
                <shadow type="event_broadcast_menu"/>
            </value>
        </block>
        <block type="event_broadcastandwait">
            <value name="BROADCAST_OPTION">
                <shadow type="event_broadcast_menu"/>
            </value>
        </block>
    </category>
`;

const control = `
    <category name="Control" colour="#FFAB19" secondaryColour="#CF8B17">
        <block type="control_wait">
            <value name="DURATION">
                <shadow type="math_positive_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
        </block>
        <block type="control_repeat">
            <value name="TIMES">
                <shadow type="math_whole_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
        <block type="control_forever"/>
        <block type="control_if"/>
        <block type="control_if_else"/>
        <block type="control_wait_until"/>
        <block type="control_repeat_until"/>
        <block type="control_stop"/>
        <block type="control_start_as_clone"/>
        <block type="control_create_clone_of">
            <value name="CLONE_OPTION">
                <shadow type="control_create_clone_of_menu"/>
            </value>
        </block>
        <block type="control_delete_this_clone"/>
    </category>
`;

const sensing =  `
    <category name="Sensing" colour="#4CBFE6" secondaryColour="#2E8EB8">
        <block type="sensing_sensors">
        </block>
        <block type="sensing_ultrasound">
        </block>
    </category>
`;

const operators = `
    <category name="Operators" colour="#40BF4A" secondaryColour="#389438">
        <block type="operator_add">
            <value name="NUM1">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
            <value name="NUM2">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
        </block>
        <block type="operator_subtract">
            <value name="NUM1">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
            <value name="NUM2">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
        </block>
        <block type="operator_multiply">
            <value name="NUM1">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
            <value name="NUM2">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
        </block>
        <block type="operator_divide">
            <value name="NUM1">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
            <value name="NUM2">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
        </block>
        <block type="operator_random">
            <value name="FROM">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="TO">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
        <block type="operator_lt">
            <value name="OPERAND1">
                <shadow type="text">
                    <field name="TEXT"/>
                </shadow>
            </value>
            <value name="OPERAND2">
                <shadow type="text">
                    <field name="TEXT"/>
                </shadow>
            </value>
        </block>
        <block type="operator_equals">
            <value name="OPERAND1">
                <shadow type="text">
                    <field name="TEXT"/>
                </shadow>
            </value>
            <value name="OPERAND2">
                <shadow type="text">
                    <field name="TEXT"/>
                </shadow>
            </value>
        </block>
        <block type="operator_gt">
            <value name="OPERAND1">
                <shadow type="text">
                    <field name="TEXT"/>
                </shadow>
            </value>
            <value name="OPERAND2">
                <shadow type="text">
                    <field name="TEXT"/>
                </shadow>
            </value>
        </block>
        <block type="operator_and"/>
        <block type="operator_or"/>
        <block type="operator_not"/>
        <block type="operator_join">
            <value name="STRING1">
                <shadow type="text">
                    <field name="TEXT">hello</field>
                </shadow>
            </value>
            <value name="STRING2">
                <shadow type="text">
                    <field name="TEXT">world</field>
                </shadow>
            </value>
        </block>
        <block type="operator_letter_of">
            <value name="LETTER">
                <shadow type="math_whole_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="STRING">
                <shadow type="text">
                    <field name="TEXT">world</field>
                </shadow>
            </value>
        </block>
        <block type="operator_length">
            <value name="STRING">
                <shadow type="text">
                    <field name="TEXT">world</field>
                </shadow>
            </value>
        </block>
        <block type="operator_mod">
            <value name="NUM1">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
            <value name="NUM2">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
        </block>
        <block type="operator_round">
            <value name="NUM">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
        </block>
        <block type="operator_mathop">
            <value name="NUM">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
        </block>
    </category>
`;

const services = `
<category name="Service" colour="#9966FF" secondaryColour="#774DCB">
    <block type="services_hello">
    </block>
</category>
`;

const data = `
    <category name="Data" colour="#FF8C1A" secondaryColour="#DB6E00" custom="VARIABLE">
    </category>
`;

const xmlOpen = '<xml style="display: none">';
const xmlClose = '</xml>';

/**
 * @param {string?} categoriesXML - null for default toolbox, or an XML string with <category> elements.
 * @returns {string} - a ScratchBlocks-style XML document for the contents of the toolbox.
 */
const makeToolboxXML = function (categoriesXML) {
    const gap = [separator];

    const everything = [
        xmlOpen,
        top, gap,
        motion, gap,
        sound, gap,
        events, gap,
        control, gap,
        sensing, gap,
        operators, gap,
        services, gap,
        data
    ];

    if (categoriesXML) {
        everything.push(gap, categoriesXML);
    }

    everything.push(xmlClose);

    return everything.join('\n');
};

export default makeToolboxXML;
