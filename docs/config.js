const config = {
  style: "mapbox://styles/mapbox/light-v10",
  accessToken:
    "pk.eyJ1IjoibWFwYm94LWNvbW11bml0eSIsImEiOiJja2tkN21jcjAwMG51MnBxdHAxemdueGpzIn0.e0IzLkytGq4pcGGieP8KNA",
  CSV: "./Sample_Data.csv",
  center: [-71.020537, -33.342419],
  zoom: 8.66,
  title: "Andean Road",
  description:
    "My favorite places in Central Chile. Made by Karol Munoz.",
  sideBarInfo: ["Location_Name", "Type", "Google_Maps"],
  popupInfo: ["Location_Name"],
  filters: [
    {
      type: "dropdown",
      title: "Type ",
      columnHeader: "Type",
      listItems: [
        "Wine bar",
        "Restaurant",
        "Brewery",
        "Pizza",
        "Vinyard",
        "Arts",
        "Nails",
        "Nature",
        "Shopping",
        "Arts",
        "Beach",
      ],
    },
    {
      type: "checkbox",
      title: "Devices available: ",
      columnHeader: "Devices_available", // Case sensitive - must match spreadsheet entry
      listItems: ["Computer", "Wi-Fi", "Adaptive Laptops"], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    },
    {
      type: "dropdown",
      title: "Clients: ",
      columnHeader: "Clients",
      listItems: [
        "Adults",
        "Disabled",
        "Homeless",
        "Immigrants/Refugees",
        "Low Income",
        "Seniors",
        "Youth: Pre-teen",
        "Youth: Teen",
      ],
    },
  ],
};
