const data = [
  { name: "Data Privacy Policy", status: "Compliant", date: "2024-10-01" },
  { name: "Security Policy", status: "Review Needed", date: "2024-08-15" },
  { name: "Access Control Policy", status: "Compliant", date: "2024-09-10" }
];

const tbody = document.getElementById("policies");

data.forEach(p => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${p.name}</td>
    <td class="${p.status === "Compliant" ? "compliant" : "review"}">
      ${p.status}
    </td>
    <td>${p.date}</td>
  `;
  tbody.appendChild(row);
});
