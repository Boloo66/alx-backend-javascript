const ExcelJS = require("exceljs");

(async () => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Example Sheet");

  // Add column headers
  worksheet.columns = [
    { header: "ID", key: "id", width: 10 },
    { header: "Name", key: "name", width: 30 },
    { header: "Age", key: "age", width: 10 },
  ];

  // Add rows
  worksheet.addRow({ id: 1, name: "John Doe", age: 25 });
  worksheet.addRow({ id: 2, name: "Jane Smith", age: 32 });

  // Format header row
  worksheet.getRow(1).font = { bold: true };
  worksheet.getCell("A1").fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "FFFFCC00" }, // Yellow background
  };

  // Save to file
  await workbook.xlsx.writeFile("example.xlsx");

  // Reading back data
  const newWorkbook = new ExcelJS.Workbook();
  await newWorkbook.xlsx.readFile("example.xlsx");
  const readWorksheet = newWorkbook.getWorksheet("Example Sheet");

  readWorksheet.eachRow((row, rowNumber) => {
    console.log(`Row ${rowNumber}:`, row.values);
  });
})();
