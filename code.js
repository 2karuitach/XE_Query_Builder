// Inserts the base UI building blocks
function insertQueryBuilderUI () {
    $('#logRoot').tabs('add', '#tab-XEQueryBuilderUI', 'Query Builder');
    
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
		var listHtml = "", currentIdentifier = XEqueryBuilderDB[currentElement.find(".identifierSelect").val()];
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
}

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
}

$("#addElement").click(function () {
	$("#queryElementContainer").append(generateElementHTML($("#joinTypeSelect").val()));
	$("#joinTypeSelect").val("AND");
	fillIdentifierList();
});

$(document).ready(function() {
    insertQueryBuilderUI();
	$("#addElement").click();
});