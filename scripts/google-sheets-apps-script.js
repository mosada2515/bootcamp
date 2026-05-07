const SHEET_NAME = "Applications";

const HEADERS = [
  "Submitted at",
  "Full name",
  "Email",
  "School/company",
  "Technical background",
  "Built before",
  "Why join",
  "Future work",
];

function doPost(e) {
  try {
    const expectedSecret =
      PropertiesService.getScriptProperties().getProperty("GOOGLE_SHEETS_SECRET");
    const payload = JSON.parse((e.postData && e.postData.contents) || "{}");

    if (!expectedSecret || payload.secret !== expectedSecret) {
      return json({ ok: false, error: "Unauthorized" });
    }

    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);

    ensureHeaders(sheet);

    sheet.appendRow([
      payload.submittedAt ? new Date(payload.submittedAt) : new Date(),
      payload.fullName || "",
      payload.email || "",
      payload.schoolCompany || "",
      payload.technicalBackground || "",
      payload.builtBefore || "",
      payload.whyJoin || "",
      payload.futureWork || "",
    ]);

    return json({ ok: true });
  } catch (error) {
    return json({ ok: false, error: String(error) });
  }
}

function ensureHeaders(sheet) {
  const headerRange = sheet.getRange(1, 1, 1, HEADERS.length);
  const currentHeaders = headerRange.getValues()[0];
  const hasHeaders = currentHeaders.some(Boolean);

  if (!hasHeaders) {
    headerRange.setValues([HEADERS]);
    sheet.setFrozenRows(1);
  }
}

function json(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(
    ContentService.MimeType.JSON
  );
}
