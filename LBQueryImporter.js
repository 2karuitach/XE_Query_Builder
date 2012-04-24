// Inserts the base UI building blocks
function insertLBImporterUI () {
    // Add the tab to the interface
    $('#logRoot').tabs('add', '#tab-LBQueryImporterUI', 'Log Browser Import');
    // Build the base UI in the <div> created automatically above
    $('#tab-LBQueryImporterUI').append('<textarea id="inputQuery"' +
        ' style="width: 99%; padding: 0; margin: 0; height: 5em" />' +
        '<div style="text-align:right">' +
        '<input id="importQuery" type="button" value="Import Query" />' +
        '</div>');
    //$('#tab-LBQueryImporterUI').append('<br /><span id="LBqueryPreview"></span>');

    // Bind the click() event on the importQuery button
    $("#importQuery").click(function () {
        try {
            $('#LBqueryPreview').text(parseLBQuery($('#inputQuery').val()));
            $('#expression').val(parseLBQuery($('#inputQuery').val()));
            $('#logRoot').tabs('select', '#tab-querybuilder');
        } catch (e) {}
    });
} // End of insertLBImporterUI

// Parses old LB style queries into new XE queries
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
    if (parsedObjArray !== null && parsedObjArray.length > 0) {
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
    insertLBImporterUI();
});