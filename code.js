// The database of options for the UI elements
var XEqueryBuilderDB = {"type":{"operators":["=","!=","IN"],"constants":["TYPE_DAMAGE","TYPE_MISS","TYPE_HEAL","TYPE_AURA","TYPE_DEATH","TYPE_CAST","TYPE_DISPEL","TYPE_GAIN","TYPE_ENCHANT","TYPE_DURABILITY","TYPE_SUMMON","TYPE_OTHER"],"description":"Event type"},"fullType":{"operators":["=","!=","IN"],"constants":["SWING_DAMAGE","RANGE_DAMAGE","SPELL_DAMAGE","SPELL_PERIODIC_DAMAGE","DAMAGE_SPLIT","DAMAGE_SHIELD","ENVIRONMENTAL_DAMAGE","SPELL_BUILDING_DAMAGE","SWING_MISSED","RANGE_MISSED","SPELL_MISSED","SPELL_PERIODIC_MISSED","DAMAGE_SHIELD_MISSED","SPELL_HEAL","SPELL_PERIODIC_HEAL","SPELL_BUILDING_HEAL","SPELL_AURA_APPLIED","SPELL_AURA_APPLIED_DOSE","SPELL_AURA_REMOVED","SPELL_AURA_REMOVED_DOSE","SPELL_EXTRA_ATTACKS","SPELL_AURA_REFRESH","PARTY_KILL","UNIT_DIED","UNIT_DESTROYED","SPELL_INSTAKILL","SPELL_CAST_START","SPELL_CAST_SUCCESS","SPELL_CAST_FAILED","SPELL_INTERRUPT","SPELL_DISPEL","SPELL_DISPEL_FAILED","SPELL_STOLEN","SPELL_AURA_BROKEN","SPELL_AURA_BROKEN_SPELL","SPELL_ENERGIZE","SPELL_DRAIN","SPELL_LEECH","SPELL_PERIODIC_ENERGIZE","SPELL_PERIODIC_DRAIN","SPELL_PERIODIC_LEECH","ENCHANT_APPLIED","ENCHANT_REMOVED","SPELL_DURABILITY_DAMAGE","SPELL_DURABILITY_DAMAGE_ALL","SPELL_SUMMON","SPELL_CREATE","SPELL_RESURRECT"],"description":"Full event type"},"missType":{"operators":["=","!=","IN"],"constants":["MISS_ABSORB","MISS_BLOCK","MISS_DEFLECT","MISS_DODGE","MISS_EVADE","MISS_IMMUNE","MISS_MISS","MISS_PARRY","MISS_RESIST","MISS_REFLECT"],"description":"Event (TYPE_MISS) miss type"},"powerType":{"operators":["=","!=","IN"],"constants":["POWER_HEALTH","POWER_MANA","POWER_RAGE","POWER_FOCUS","POWER_ENERGY","POWER_HAPPINESS","POWER_RUNES","POWER_RUNIC_POWER","POWER_SOUL_SHARDS","POWER_POWER_ECLIPSE","POWER_HOLY_POWER"],"description":"Event (TYPE_ENERGIZE / DRAIN / LEECH) power type"},"school":{"operators":["=","!=","IN"],"constants":["PHYSICAL","HOLY","FIRE","NATURE","FROST","SHADOW","ARCANE"],"description":"Spell school"},"sourceType":{"operators":["=","!=","IN"],"constants":["'Player'","'Creature'","'Pet'","'Vehicle'","'Unknown'"],"description":"Source actor type"},"targetType":{"operators":["=","!=","IN"],"constants":["'Player'","'Creature'","'Pet'","'Vehicle'","'Unknown'"],"description":"Target actor type"},"sourceReaction":{"operators":["=","!=","IN"],"constants":["REACTION_FRIENDLY","REACTION_NEUTRAL","REACTION_HOSTILE"],"description":"Source actor reaction"},"targetReaction":{"operators":["=","!=","IN"],"constants":["REACTION_FRIENDLY","REACTION_NEUTRAL","REACTION_HOSTILE"],"description":"Target actor reaction"},"sourceIcon":{"operators":["=","!=","IN"],"constants":["ICON_STAR","ICON_CIRCLE","ICON_DIAMOND","ICON_TRIANGLE","ICON_MOON","ICON_SQUARE","ICON_CROSS","ICON_SKULL"],"description":"Source actor raid icon"},"targetIcon":{"operators":["=","!=","IN"],"constants":["ICON_STAR","ICON_CIRCLE","ICON_DIAMOND","ICON_TRIANGLE","ICON_MOON","ICON_SQUARE","ICON_CROSS","ICON_SKULL"],"description":"Target actor raid icon"},"isCritical":{"operators":["=","!="],"constants":["TRUE","FALSE"],"description":"Event is critical"},"isCrushing":{"operators":["=","!="],"constants":["TRUE","FALSE"],"description":"Event is crushing"},"isGlancing":{"operators":["=","!="],"constants":["TRUE","FALSE"],"description":"Event is glancing"},"spell":{"operators":["=","!=","IN"],"inputType":"string","description":"Spell name"},"spellID":{"operators":["=","!=","IN"],"inputType":"number","description":"Spell ID"},"extraSpell":{"operators":["=","!=","IN"],"inputType":"string","description":"Extra spell"},"extraSpellID":{"operators":["=","!=","IN"],"inputType":"number","description":"Extra spell ID"},"amount":{"operators":["=","!=","IN",">","<",">=","<="],"inputType":"number","description":"Event amount"},"absorbed":{"operators":["=","!=","IN",">","<",">=","<="],"inputType":"number","description":"Event amount absorbed"},"blocked":{"operators":["=","!=","IN",">","<",">=","<="],"inputType":"number","description":"Event amount blocked"},"resisted":{"operators":["=","!=","IN",">","<",">=","<="],"inputType":"number","description":"Event amount resisted"},"missAmount":{"operators":["=","!=","IN",">","<",">=","<="],"inputType":"number","description":"Event amount missed"},"overheal":{"operators":["=","!=","IN",">","<",">=","<="],"inputType":"number","description":"Event amount overheal"},"overkill":{"operators":["=","!=","IN",">","<",">=","<="],"inputType":"number","description":"Event amount overkill"},"healingDone":{"operators":["=","!=","IN",">","<",">=","<="],"inputType":"number","description":"WoL healing done amount (amount - overheal + absorbed)"},"damageTaken":{"operators":["=","!=","IN",">","<",">=","<="],"inputType":"number","description":"WoL damage taken amount"},"sourceID":{"operators":["=","!=","IN"],"inputType":"number","description":"WoL source actor ID"},"sourceUID":{"operators":["=","!=","IN"],"inputType":"number","description":"WoL merged source actor ID"},"masterSourceUID":{"operators":["=","!=","IN"],"inputType":"number","description":"WoL merged actor ID of source's master"},"sourceMobID":{"operators":["=","!=","IN"],"inputType":"number","description":"Source actor mob (WoW) ID"},"sourceName":{"operators":["=","!=","IN"],"inputType":"string","description":"Source actor name"},"targetID":{"operators":["=","!=","IN"],"inputType":"number","description":"WoL target actor ID"},"targetUID":{"operators":["=","!=","IN"],"inputType":"number","description":"WoL merged target actor ID"},"mastertargetUID":{"operators":["=","!=","IN"],"inputType":"number","description":"WoL merged actor ID of target's master"},"targetMobID":{"operators":["=","!=","IN"],"inputType":"number","description":"Target actor mob (WoW) ID"},"targetName":{"operators":["=","!=","IN"],"inputType":"string","description":"Target actor name"},"healID":{"operators":["=","!=","IN"],"inputType":"number","description":"WoL source actor ID (Shield support)"},"healUID":{"operators":["=","!=","IN"],"inputType":"number","description":"WoL merged source actor ID (Shield support)"},"masterhealUID":{"operators":["=","!=","IN"],"inputType":"number","description":"WoL merged actor ID of source's master (Shield support)"},"healSpell":{"operators":["=","!=","IN"],"inputType":"string","description":"Spell (Shield support)"},"healSpellID":{"operators":["=","!=","IN"],"inputType":"number","description":"Spell ID (Shield support)"}};

// Inserts the base UI building blocks
function insertQueryBuilderUI () {
    // Add the tab to the interface
    $('#logRoot').tabs('add', '#tab-XEQueryBuilderUI', 'Query Builder');
    // Build the base UI in the <div> created automatically above
    $('#tab-XEQueryBuilderUI').append('<div id="queryElementContainer"></div>' +
        '<div>' +
			'<input id="addElement" type="button" value="Add element" /> with ' +
			'<select id="joinTypeSelect">' +
				'<option value="AND">AND</option>' +
				'<option value="OR">OR</option>' +
				//'<option value="(">)</option>' +
				//'<option value=")">)</option>' +
			'</select>' +
			' as a joiner.' +
		'</div>' +
		'<span id="queryPreview"></span>');
        
        // Bind the click() event on the addElement button
        $("#addElement").click(function () {
            $("#queryElementContainer").append(generateElementHTML($("#joinTypeSelect").val()));
            $("#joinTypeSelect").val("AND");
            fillIdentifierList();
        });
        
        // Trigger the click() event to add the initial element.
        $("#addElement").click();
} // End of insertQueryBuilderUI

// Fills in the identifier list and all subsequent elements
function fillIdentifierList() {
	var listHtml = "", identifier, currentElement = $("#queryElementContainer div:last-child");
	
	// Clean up the first element
	$("#tab-XEQueryBuilderUI div").eq(1).find(".removeElement").hide();
	$("#tab-XEQueryBuilderUI div").eq(1).find(".joinClause").hide();
	
	// Generate the HTML for the identifier options
	for (identifier in XEqueryBuilderDB) {
		if (XEqueryBuilderDB.hasOwnProperty(identifier)) {
			listHtml += "<option value=\"" + identifier + "\" title=\"" + XEqueryBuilderDB[identifier].description + "\">" + identifier + "</option>";
		}
	}
	
	// Insert the <option> tags into the identifier list
	currentElement.find(".identifierSelect").html(listHtml);
	
	// Bind to the change event of the identifier
	currentElement.find(".identifierSelect").change(function () {
		var listHtml = "", currentIdentifier = XEqueryBuilderDB[currentElement.find(".identifierSelect").val()], operator;
		// Fill in the operators for the currently selected identifier.
		for (operator in currentIdentifier.operators) {
			if (currentIdentifier.operators.hasOwnProperty(operator)) {
				listHtml += "<option value=\"" + currentIdentifier.operators[operator] + "\">" + currentIdentifier.operators[operator] + "</option>";
			}
		}
		currentElement.find(".operatorSelect").html(listHtml);
		
		// Unbind any previous change event listener
		currentElement.find(".operatorSelect").unbind("change");
		// Bind to the change event of the operator
		currentElement.find(".operatorSelect").change(function () {
			var currentOperator = currentElement.find(".operatorSelect").val();
			// Set to blank to clear any previous operands, also unbind any possible change events beforehand
			currentElement.find(".numberInput").unbind("change");
			currentElement.find(".stringInput").unbind("change");
			currentElement.find(".constantSelect").unbind("change");
			currentElement.find(".operandContainer").html("");
			// If IN is selected, show the + button and add in ( ) wrappers.
			if (currentOperator === "IN") {
				currentElement.find(".inClauseLeft").text("(");
				currentElement.find(".inClauseRight").text(")");
				currentElement.find(".qualifierAdd").show();
			} else { // Otherwise make sure they are hidden.
				currentElement.find(".inClauseLeft").html("");
				currentElement.find(".inClauseRight").html("");
				currentElement.find(".qualifierAdd").hide();
			}
			// Fill in the proper HTML for the current identifier.
			currentElement.find(".operandContainer").html(generateOperandHtml(currentElement));
			// Update the query if changed
			currentElement.find(".constantSelect").change(function () { updateQuery(); });
			currentElement.find(".numberInput").change(function () { updateQuery(); });
			currentElement.find(".stringInput").change(function () { updateQuery(); });
			// Update the query
			updateQuery();
		}); // End of operatorSelect.change()
		
		// Unbind any old bindings
		currentElement.find(".qualifierAdd").unbind("click");
		// And (re)bind to the + button's click() event
		currentElement.find(".qualifierAdd").click(function () {
			// When clicked add a ", " in between elements and insert a new operand
			currentElement.find(".operandContainer").append("<span>,&nbsp;</span>" + generateOperandHtml(currentElement));
			currentElement.find(".constantSelect").change(function () { updateQuery(); });
			currentElement.find(".numberInput").change(function () { updateQuery(); });
			currentElement.find(".stringInput").change(function () { updateQuery(); });
		});
		
		// Now that it is bound, trigger the change event to deal with the operand code, and then show the operator select
		currentElement.find(".operatorSelect").change();
		currentElement.find(".operatorSelect").show();
		
		// Update the query
		updateQuery();
	}); // End of identifierSelect.change()
	
	// Now that the change event is bound, trigger it and show everything.
	currentElement.find(".identifierSelect").change();
	currentElement.find(".identifierSelect").show();
	
	// Bind to some events for updating the displayed query
	$("#tab-XEQueryBuilderUI input").keyup(updateQuery);
	$("#tab-XEQueryBuilderUI input").click(updateQuery);
	$("#tab-XEQueryBuilderUI input").change(updateQuery);
	
	// Bind the remove button's functionality
	currentElement.find(".removeElement").click(function () {
		// remove() should unbind any registered event handlers, so no need to worry about that
		currentElement.remove();
		updateQuery();
	});
} // End of fillIdentifierList()

// Generates the proper HTML to insert for a given identifier's operand
function generateOperandHtml(currentElement) {
	var listHtml = "", x, i, currentIdentifier = XEqueryBuilderDB[currentElement.find(".identifierSelect").val()];
	if (currentIdentifier.hasOwnProperty("constants")) { // If this identifier has a list of constants, use that in a select list
		listHtml = "<select class=\"constantSelect\">";
		for (i = 0, x = currentIdentifier.constants.length; i < x; i++) {
			listHtml += "<option value=\"" + currentIdentifier.constants[i] + "\">" + currentIdentifier.constants[i]+ "</option>";
		}
		listHtml += "</select>";
	} else { // Otherwise use the input type defined for this identifier
		if (currentIdentifier.inputType === "string") {
			listHtml = "<input class=\"stringInput\" type=\"text\" value=\"\" />";
		} else {
			// HTML5 input type, falls back to text on browsers that don't support it
			listHtml = "<input class=\"numberInput\" type=\"number\" value=\"0\" />";
		}
	}
	return listHtml;
} // End of generateOperandHtml()

// Generates the base HTML for a query element
function generateElementHTML(joinClause) {
	var divHtml = "<div class=\"queryElement\">"+
        "<span class=\"joinClause\">" + joinClause + "&nbsp;</span>" +
        "<select class=\"identifierSelect\"><option disabled=\"disabled\"></option></select>" +
        "<select class=\"operatorSelect\" style=\"display: none;\"><option disabled=\"disabled\"></option></select>" +
        "<span class=\"inClauseLeft\"></span>" +
		"<span class=\"operandContainer\"></span>" +
		"<input class=\"qualifierAdd\" type=\"button\" value=\"+\" style=\"display: none;\"/>" +
		"<span class=\"inClauseRight\"></span>" +
		"<input class=\"removeElement\" type=\"button\" value=\"Remove\" />" +
	"</div>";
	return divHtml;
} // End of generateElementHTML()

// Update the query text
function updateQuery() {
	$("#queryPreview").text(generateQueryString());
} // End of updateQuery

// Generate the query string based on the current UI elements
function generateQueryString() {
	var i, x, j, y, queryString = "", elements = $(".queryElement"), value = "", children;
	for (i = 0, x = elements.length; i < x; i++) {
		// If this isn't the first element, grab the join clause
		if (i > 0) {
			value = $(elements[i]).find(".joinClause").text();
			queryString += " " + value.substring(0, value.length - 1) + " ";
		}
		// Insert the current identifier
		queryString += $(elements[i]).find(".identifierSelect").val();
		// Insert the operator
		value = $(elements[i]).find(".operatorSelect").val();
		queryString += " " + value;
		// Insert the "(", if present
		queryString += " " + $(elements[i]).find(".inClauseLeft").text();
		// Handle the differing operand cases
		if (value === "IN") {
			children = $(elements[i]).find(".operandContainer").children();
			for (j = 0, y = children.length; j < y; j++) {
				if ($(children[j]).is("select")) {
					queryString += $(children[j]).val();
				} else if ($(children[j]).is("input")) {
					if ($(children[j]).attr("type") === "text") {
						queryString += "\"" + $(children[j]).val() + "\"";
					} else {
						queryString += $(children[j]).val();
					}
				} else if ($(children[j]).is("span")) {
					queryString += $(children[j]).text();
				}
			}
		} else {
			if ($(elements[i]).find(".operandContainer").children().is("select")) {
				queryString += $(elements[i]).find(".operandContainer").children().val();
			} else if ($(elements[i]).find(".operandContainer").children().is("input")) {
				if ($(elements[i]).find(".operandContainer").children().attr("type") === "text") {
					queryString += "\"" + $(elements[i]).find(".operandContainer").children().val() + "\"";
				} else {
					queryString += $(elements[i]).find(".operandContainer").children().val();
				}
			}
		}
		queryString += $(elements[i]).find(".inClauseRight").text();
	}
	return queryString;
} // End of generateQueryString

function parseLBQuery(oldQuery) {
    var parsedQuery = '', parsedObjArray = null, subQueryElement = null,
        actorNameList = '', queryElementCount = 0,
        i = 0, j = 0, n = 0, m = 0;
    // HACK - How to do this correctly?
    // Since we are expecting the query to be valid JSON, having a comma with
    //   no data elements after it breaks parseJSON, this removes it when it happens
    //   at the end of the input string.
    if (oldQuery.substring(oldQuery.length - 2,oldQuery.length) === ',]') {
        oldQuery = oldQuery.substring(0,oldQuery.length - 2) + ']';
    }
    // Since the old Log Browser (LB) queries were essentailly JSON we can start with .parseJSON
    // If WoL is still using an outdated version of jQuery, use evalJSON (From the JSON plugin) instead of parseJSON.
    if (jQuery.parseJSON) {
        parsedObjArray = jQuery.parseJSON(oldQuery);
    } else {
        parsedObjArray = jQuery.evalJSON(oldQuery);
    }
    if (parsedObjArray.length > 0) {
        for (i = 0, j = parsedObjArray.length; i < j; i++) {
            if (i > 0 && parsedQuery.length > 0) {
                // If we have multiple queries input, OR them together
                // (As long as the first query wasn't blank)
                parsedQuery += ' OR ';
            }
            // Reset the counter of how many query elements have been input
            queryElementCount = 0;
            // Wrap each query in ()
            parsedQuery += '(';
            for (subQueryElement in parsedObjArray[i]) {
                if (parsedObjArray[i].hasOwnProperty(subQueryElement) && typeof(subQueryElement) === 'string') {
                    switch (subQueryElement.toLowerCase()) { // Match on lower case to handle odd input
                        case 'eventtypes':
                            parsedQuery += (queryElementCount > 0 ? 'AND ' : '') + 'type IN (';
                            for (n = 0, m = parsedObjArray[i][subQueryElement].length; n < m; n++) {
                                // Properly associate the old LB number to the XE Constant
                                switch (parsedObjArray[i][subQueryElement][n]) {
                                    case 1:
                                        parsedQuery += 'TYPE_DAMAGE';
                                    break;
                                    case 2:
                                        parsedQuery += 'TYPE_MISS';
                                    break;
                                    case 3:
                                        parsedQuery += 'TYPE_HEAL';
                                    break;
                                    case 4:
                                        parsedQuery += 'TYPE_AURA';
                                    break;
                                    case 5:
                                        parsedQuery += 'TYPE_DEATH';
                                    break;
                                    case 6:
                                        parsedQuery += 'TYPE_CAST';
                                    break;
                                    case 7:
                                        // Catches interrupts too?
                                        parsedQuery += 'TYPE_DISPEL';
                                    break;
                                    case 8:
                                        parsedQuery += 'TYPE_GAIN';
                                    break;
                                    case 11:
                                        parsedQuery += 'TYPE_SUMMON';
                                    break;
                                    case 50:
                                        parsedQuery += 'TYPE_OTHER';
                                    break;
                                    default: break;
                                }
                                parsedQuery += ',';
                            }
                            // Strip the trailing ',' after we are done adding elements
                            parsedQuery = parsedQuery.substring(0, parsedQuery.length - 1) + ') ';
                            queryElementCount++;
                        break;
                        case 'actornames':
                            actorNameList = '';
                            for (n = 0, m = parsedObjArray[i][subQueryElement].length; n < m; n++) {
                                actorNameList += '"' + parsedObjArray[i][subQueryElement][n] + '",';
                            }
                            // Strip the trailing ',' from the list of actors (source or target)
                            actorNameList = actorNameList.substring(0, actorNameList.length - 1);
                            // Translate the query to XE
                            parsedQuery += (queryElementCount > 0 ? 'AND ' : '') + '(sourceName IN (' +
                                actorNameList + ') OR targetName IN (' + actorNameList + ')) ';
                            queryElementCount++;
                        break;
                        case 'sourcenames':
                            parsedQuery += (queryElementCount > 0 ? 'AND ' : '') + 'sourceName IN (';
                            for (n = 0, m = parsedObjArray[i][subQueryElement].length; n < m; n++) {
                                parsedQuery += '"' + parsedObjArray[i][subQueryElement][n] + '",';
                            }
                            // Strip the trailing ',' and finish the statement
                            parsedQuery = parsedQuery.substring(0, parsedQuery.length - 1) + ') ';
                            queryElementCount++;
                        break;
                        case 'targetnames':
                            parsedQuery += (queryElementCount > 0 ? 'AND ' : '') + 'targetName IN (';
                            for (n = 0, m = parsedObjArray[i][subQueryElement].length; n < m; n++) {
                                parsedQuery += '"' + parsedObjArray[i][subQueryElement][n] + '",';
                            }
                            // Strip the trailing ',' and finish the statement
                            parsedQuery = parsedQuery.substring(0, parsedQuery.length - 1) + ') ';
                            queryElementCount++;
                        break;
                        case 'spellnames':
                            parsedQuery += (queryElementCount > 0 ? 'AND ' : '') + 'spell IN (';
                            for (n = 0, m = parsedObjArray[i][subQueryElement].length; n < m; n++) {
                                parsedQuery += '"' + parsedObjArray[i][subQueryElement][n] + '",';
                            }
                            // Strip the trailing ',' and finish the statement
                            parsedQuery = parsedQuery.substring(0, parsedQuery.length - 1) + ') ';
                            queryElementCount++;
                        break;
                        case 'spellids':
                            parsedQuery += (queryElementCount > 0 ? 'AND ' : '') + 'spellID IN (';
                            for (n = 0, m = parsedObjArray[i][subQueryElement].length; n < m; n++) {
                                parsedQuery += parsedObjArray[i][subQueryElement][n] + ',';
                            }
                            // Strip the trailing ',' and finish the statement
                            parsedQuery = parsedQuery.substring(0, parsedQuery.length - 1) + ') ';
                            queryElementCount++;
                        break;
                        default: break;
                    }
                }
            }
            if (queryElementCount > 0) {
                // Remove the trailing space after the last element and close the ()
                parsedQuery = parsedQuery.substring(0, parsedQuery.length - 1) + ')';
            } else {
                // This means the query had no elements, remove the starting '('
                parsedQuery = parsedQuery.substring(0, parsedQuery.length - 1);
            }
        }
    }
    return parsedQuery;
}

$(document).ready(function() {
    insertQueryBuilderUI();
});