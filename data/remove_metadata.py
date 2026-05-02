from openpyxl import load_workbook

file_in = "Reported_bugs_and_CVEs.xlsx"
file_out = "clean.xlsx"

wb = load_workbook(file_in)

# Remove workbook properties (metadata)
wb.properties.creator = None
wb.properties.lastModifiedBy = None
wb.properties.title = None
wb.properties.subject = None
wb.properties.description = None
wb.properties.keywords = None
wb.properties.category = None

wb.save(file_out)

print("Metadata removed")