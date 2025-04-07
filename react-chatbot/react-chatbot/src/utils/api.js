// Placeholder for AWS API calls
export const sendMessage = async (text, language = "en") => {
  try {
    const response = await fetch("http://127.0.0.1:8000/chat", {  
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input: text, language })
    });

    const data = await response.json();

    return {
      text: data.response,
      sender: "bot",
      audio: data.audio
    };
  } catch (error) {
    console.error("Error sending message:", error);
    return {
      text: "Sorry, something went wrong.",
      sender: "bot"
    };
  }
};