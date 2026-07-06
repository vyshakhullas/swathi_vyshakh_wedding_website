// RSVP -> Google Sheet handler for Swathi & Vyshakh's wedding site.
// Deployment instructions: see README.md in this folder.

const SHEET_ID = '1Wk9rNBPe2T3hW_Z4yWfIcOONJkB7IUv9pRode_nkTYM';
const SHEET_NAME = 'RSVPs';

const HEADERS = [
  'Timestamp',
  'Name',
  'Attending Wedding',
  'Attending Reception',
  'Guests',
  'Contact',
  'Message',
];

function doPost(e) {
  const params = (e && e.parameter) || {};

  // Honeypot: silently drop likely-spam submissions without saving them.
  if (params['bot-field']) {
    return jsonResponse({ result: 'success' });
  }

  const sheet = getOrCreateSheet();

  sheet.appendRow([
    new Date(),
    params.name || '',
    params.attending_wedding || '',
    params.attending_reception || '',
    params.guests || '',
    params.contact || '',
    params.message || '',
  ]);

  return jsonResponse({ result: 'success' });
}

function getOrCreateSheet() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  if (sheet.getLastRow() === 0) {
    formatSheet(sheet);
  }
  return sheet;
}

function formatSheet(sheet) {
  sheet.appendRow(HEADERS);

  const headerRange = sheet.getRange(1, 1, 1, HEADERS.length);
  headerRange.setFontWeight('bold');
  headerRange.setBackground('#1F3D2B');
  headerRange.setFontColor('#FAF6EF');

  sheet.setFrozenRows(1);
  sheet.setColumnWidths(1, HEADERS.length, 150);
  sheet.setColumnWidth(1, 170); // Timestamp
  sheet.setColumnWidth(7, 260); // Message
}

// Run this once manually from the Apps Script editor (select "setup" in the
// function dropdown, then click Run) to create and format the RSVPs tab
// ahead of time, before any real submissions come in.
function setup() {
  getOrCreateSheet();
}
