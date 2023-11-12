import React from "react";
import ExcelJs from "exceljs";
import Button from "@components/Button";
import { earningData2 } from "@mocks/earningData";
//const mockData = earningData2;

const ExportToExcel = (props) => {
  const mockData = props.mockData;
  const exportToExcel = (data) => {
    let sheetName = "Logist.xlsx";
    let headerName = "RequestsList";
    const today = new Date();
    let workbook = new ExcelJs.Workbook();
    let sheet = workbook.addWorksheet("National Sales", {
      properties: { tabColor: { argb: "FFC0000" } },
      pageSetup: {
        paperSize: 9,
        orientation: "portrait",
        margins: {
          left: 0.7,
          right: 0.7,
          top: 0.75,
          bottom: 0.75,
          header: 0.3,
          footer: 0.3,
        },
      },
    });

    sheet.getCell("A1").value = props.title;
    sheet.getCell("A1").alignment = {
      vertical: "middle",
      horizontal: "center",
    };
    sheet.getCell("A1").font = {
      name: "Arial",
      family: 4,
      size: 14,
      underline: false,
      bold: false,
    };
    sheet.mergeCells("A1:G2");

    sheet.getCell("A3").value = `Created At: ${
      today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()
    }`;
    sheet.getCell("A3").alignment = {
      vertical: "middle",
      horizontal: "center",
    };
    sheet.getCell("A3").font = {
      name: "Arial",
      family: 2,
      size: 10,
      underline: false,
      bold: false,
    };
    sheet.mergeCells("A3:G4");

    let columnArr = [];
    for (let i in data[0]) {
      let tempObj = { name: "" };
      tempObj.name = i;
      columnArr.push(tempObj);
    }

    /* sheet.addTable({
      name: `Header`,
      ref: "A1",
      headerRow: true,
      totalsRow: false,
      style: {
        theme: "",
        showRowStripes: false,
        showFirstColumn: true,
        width: 200,
      },
      columns: [{ name: "This is the header text" }],
      rows: [[`As of: 07/09/2021`], [`Allen`]],
    }); */

    sheet.addTable({
      name: headerName,
      ref: "A5",
      headerRow: true,
      totalsRow: false,
      style: {
        theme: "TableStyleMedium2",
        showRowStripes: false,
        width: 200,
      },
      columns: columnArr ? columnArr : [{ name: "" }],
      rows: data.map((e) => {
        let arr = [];
        for (let i in e) {
          arr.push(e[i]);
        }
        return arr;
      }),
    });

    sheet.getCell("A1").font = {
      size: 20,
      bold: true,
    };

    sheet.columns = sheet.columns.map((e) => {
      const expr = e.values[5];
      switch (expr) {
        case "Name":
          return { width: 50 };
        case "Gender":
          return { width: 40 };
        case "Height":
          return { width: 30 };
        default:
          return { width: 20 };
      }
    });

    const table = sheet.getTable(headerName);
    for (let i = 0; i < table.table.columns.length; i++) {
      sheet.getCell(`${String.fromCharCode(65 + i)}5`).font = { size: 12 };
      sheet.getCell(`${String.fromCharCode(65 + i)}5`).fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "c5d9f1" },
      };
      sheet.getCell(`${String.fromCharCode(65 + i)}5`).alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      for (let j = 0; j < table.table.rows.length; j++) {
        let rowCell = sheet.getCell(`${String.fromCharCode(65 + i)}${j + 6}`);
        rowCell.alignment = {
          wrapText: true,
          vertical: "middle",
          horizontal: "center",
        };
        rowCell.border = {
          bottom: {
            style: "thin",
            color: { argb: "a6a6a6" },
          },
        };
      }
    }
    table.commit();

    const writeFile = (fileName, content) => {
      const link = document.createElement("a");
      const blob = new Blob([content], {
        type: "application/vnd.ms-excel;charset=utf-8;",
      });
      link.download = fileName;
      link.href = URL.createObjectURL(blob);
      link.click();
    };

    workbook.xlsx.writeBuffer().then((buffer) => {
      writeFile(sheetName, buffer);
    });
  };

  return (
    <Button
      label="تحميل Excel"
      onClick={() => {
        exportToExcel(mockData);
      }}
    />
  );
};

export default ExportToExcel;
