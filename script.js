
function downloadResume() {
    const link = document.createElement("a");
    link.href = "Varun_resuma.pdf"; // Replace with your actual resume path
    link.download = "Varun_resuma.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  