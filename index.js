document.addEventListener("DOMContentLoaded", () => {
    function updateTime() {
      const utcTimeElement = document.getElementById("utcTime");
      const currentDayElement = document.getElementById("currentDay");
      const now = new Date();
      const utcHours = now.getUTCHours().toString().padStart(2, "0");
      const utcMinutes = now.getUTCMinutes().toString().padStart(2, "0");
      const utcSeconds = now.getUTCSeconds().toString().padStart(2, "0");
      utcTimeElement.textContent = `${utcHours}:${utcMinutes}:${utcSeconds} UTC`;
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      currentDayElement.textContent = days[now.getUTCDay()];
    }
    updateTime();
    setInterval(updateTime, 1000);
  });
  