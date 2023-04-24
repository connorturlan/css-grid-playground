const tableContent = [
    1,2,3,4,5
]

const addRow = (parent, isTitle=false) => {
    const row = document.createElement("div");
    isTitle && row.classList.add("row--title")
    row.classList.add("row")
    parent && parent.appendChild(row)
    return row
}

const addCell = (parent, content, isTitle=false) => {
    const cell = document.createElement("p");
    isTitle && cell.classList.add("cell--title")
    cell.classList.add("cell")
    cell.innerText = content
    parent && parent.appendChild(cell)
    return cell
}

// get the table
const table = document.getElementById("content-table")

// create the title row.
const title = addRow(table, true)
addCell(title, "title", true)
addCell(title, "content", true)

tableContent.forEach(i => {
    // create the row.
    const row = addRow(table)

    // create the row title.
    addCell(row, "row title:", true)

    // create the elements within the row.
    for (let j = 0; j < i; j++) {
        addCell(row, "cell\ncell\ncell")
    }
})