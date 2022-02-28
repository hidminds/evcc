export default {
  header: {
    docs: "Documentation",
    blog: "Blog",
    github: "GitHub",
    login: "Vehicle Logins",
    about: "About evcc",
  },
  footer: {
    version: {
      availableShort: "update",
      availableLong: "update available",
      modalTitle: "Update available",
      modalUpdateStarted: "Evcc will restart after the update..",
      modalInstalledVersion: "Currently installed version",
      modalNoReleaseNotes:
        "No release notes available. More information about the new version can be found here:",
      modalCancel: "Cancel",
      modalUpdate: "Update",
      modalUpdateNow: "Update now",
      modalDownload: "Download",
      modalUpdateStatusStart: "Update started: ",
      modalUpdateStatusFailed: "Update failed: ",
    },
    savings: {
      footerShort: "{percent}% solar",
      footerLong: "{percent}% solar energy",
      modalTitleShort: "{total} kWh charged · {percent}% solar",
      modalTitleLong: "{total} kWh charged · {percent}% solar energy",
      modalChartGrid: "Grid energy {grid} kWh",
      modalChartSelf: "Solar energy {self} kWh",
      modalSavingsPrice: "Effective energy price",
      modalSavingsTotal: "Savings compared to grid",
      modalExplaination: "Calculation",
      modalExplainationGrid: "grid tariff {gridPrice}",
      modalExplainationFeedIn: "feed-in rate {feedInPrice}",
      modalServerStart: "since server start {since}.",
      modalNoData: "nothing charged yet",
      experimentalLabel: "Experimental",
      experimentalText: "Implausible values? Questions about this view? Feel free to join our ",
    },
    sponsor: {
      thanks: "Thanks for your support, {sponsor}! It helps us with the further development.",
      confetti: "Ready for some sponsor confetti?",
      supportUs:
        "We want to make efficient home charging the standard for as many people as possible. Help us by supporting the further development and maintenance of the project.",
      sticker: "...or evcc stickers?",
      confettiPromise: "There will be stickers and digital confetti ;)",
      becomeSponsor: "Become a GitHub Sponsor",
    },
  },
  notifications: {
    modalTitle: "Notifications",
    dismissAll: "Dismiss all",
  },
  main: {
    energyflow: {
      noEnergy: "No Energyflow",
      homePower: "Consumption",
      pvProduction: "Production",
      loadpoints: "Loadpoint | Loadpoint | {count} Loadpoints",
      battery: "Battery",
      batteryCharge: "Battery charge",
      batteryDischarge: "Battery discharge",
      gridImport: "Grid import",
      selfConsumption: "Self consumption",
      pvExport: "Grid export",
    },
    mode: {
      offShort: "Stop",
      offLong: "Stop",
      nowShort: "Now",
      nowLong: "Now",
      minpvShort: "Min",
      minpvLong: "Min + PV",
      pvShort: "PV",
      pvLong: "PV only",
    },
    loadpoints: "Wallbox",
    loadpoint: {
      fallbackName: "Loadpoint",
      remoteDisabledSoft: "{source}: adaptive PV charging disabled",
      remoteDisabledHard: "{source}: disabled",
      power: "Power",
      charged: "Charged",
      duration: "Duration",
      remaining: "Remaining",
    },
    vehicles: "Parking",
    vehicle: {
      fallbackName: "Anonymous Vehicle",
      vehicleSoC: "SoC",
      targetSoC: "Limit",
    },
    vehicleSoC: {
      disconnected: "disconnected",
      charging: "charging",
      ready: "ready",
      connected: "connected",
    },
    vehicleStatus: {
      minCharge: "minimum charging to {soc}%.",
      waitForVehicle: "Ready. Waiting for vehicle.",
      charging: "Charging.",
      targetChargePlanned: "Target charge planned. Charge starts soon.",
      targetChargeWaitForVehicle: "Target charge ready. Wait for vehicle.",
      targetChargeActive: "Target charge active.",
      connected: "Connected.",
      pvDisable: "Not enough surplus. Pausing in {remaining}.",
      pvEnable: "Surplus available. Starging in {remaining}.",
      scale1p: "Reduce to single phase in {remaining}.",
      scale3p: "Increase to three phase in {remaining}.",
      unknown: "",
    },
    provider: {
      login: "login",
      logout: "logout",
    },
    targetCharge: {
      title: "Target Time",
      inactiveLabel: "Target time",
      activeLabel: "{time}",
      modalTitle: "Set Target Time",
      setTargetTime: "none",
      description: "When should the vehicle be charged to {targetSoC}%?",
      today: "today",
      tomorrow: "tomorrow",
      targetIsInThePast: "The chosen time is in the past.",
      remove: "Remove",
      activate: "Activate",
      experimentalLabel: "Experimental",
      experimentalText: `
        This function is at an early stage.
        The algorithm is not perfect yet.
        The target time is currently not persisted - this means, it will be lost when your server restarts.
        So do not rely too much on this function.
        However, we look forward to your experiences and suggestions for improvement in the
      `,
    },
  },
};
