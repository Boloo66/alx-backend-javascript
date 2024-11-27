const fs = require("fs");

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, "utf8");

    // Split the data into lines and filter out empty lines
    const lines = data.split("\n").filter((line) => line.trim() !== "");

    // Check if there is data after the header
    if (lines.length <= 1) {
      throw new Error("Cannot load the database");
    }

    // Parse the CSV content (skip the header line)
    const students = lines.slice(1).map((line) => {
      const [firstname, lastname, age, field] = line.split(",");
      return { firstname, lastname, age, field };
    });

    // Count the total number of students
    console.log(`Number of students: ${students.length}`);

    // Group students by field
    const fields = {};
    for (const student of students) {
      if (!fields[student.field]) {
        fields[student.field] = [];
      }
      fields[student.field].push(student.firstname);
    }

    // Log the count and names for each field
    for (const [field, names] of Object.entries(fields)) {
      console.log(
        `Number of students in ${field}: ${names.length}. List: ${names.join(
          ", "
        )}`
      );
    }
  } catch (error) {
    throw new Error("Cannot load the database");
  }
}

module.exports = countStudents;
