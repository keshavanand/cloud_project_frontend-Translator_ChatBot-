// Placeholder for AWS API calls
export const sendMessage = async (message, language = "en") => {
  try {
    const response = await fetch("https://<your-chalice-api-endpoint>/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        input: message,
        language: language,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return { text: data.response, audio: data.audio, sender: "bot" };
  } catch (error) {
    console.error("Error sending message to backend:", error);
    return { text: "Sorry, something went wrong. Please try again later.", sender: "bot" };
  }
};