const fs = require("fs");

function countStudents(fileName) {
  return new Promise((resolve, reject) => {
    // Read the file asynchronously
    fs.readFile(fileName, "utf-8", (err, data) => {
      if (err) {
        reject(new Error("Cannot load the database"));
        return;
      }

      try {
        // Split the data into lines and filter out empty lines
        const lines = data.split("\n").filter((line) => line.trim() !== "");

        // Ensure there is data after the header
        if (lines.length <= 1) {
          reject(new Error("Cannot load the database"));
          return;
        }

        // Parse the CSV data
        const students = {};
        const fields = {};
        const records = lines.slice(1); // Skip the header line

        // Process each record
        for (const record of records) {
          const [firstname, lastname, age, field] = record.split(",");

          // Add student to the field group
          if (!students[field]) {
            students[field] = [];
          }
          students[field].push(firstname);

          // Increment the field count
          fields[field] = (fields[field] || 0) + 1;
        }

        // Log the total number of students
        const totalStudents = Object.values(fields).reduce(
          (acc, count) => acc + count,
          0
        );
        console.log(`Number of students: ${totalStudents}`);

        // Log the number of students and list of names per field
        for (const [field, count] of Object.entries(fields)) {
          console.log(
            `Number of students in ${field}: ${count}. List: ${students[
              field
            ].join(", ")}`
          );
        }

        // Resolve the Promise
        resolve();
      } catch (error) {
        reject(new Error("Cannot load the database"));
      }
    });
  });
}

module.exports = countStudents;
