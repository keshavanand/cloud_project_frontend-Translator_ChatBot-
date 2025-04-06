// Placeholder for AWS API calls
//export const sendMessage = async (message) => {
//    // Use AWS SDK or fetch to call your backend API
//    return { text: 'This is a placeholder response from AWS.', sender: 'bot' };
//  };

export const sendMessage = async (text, language = "en") => {
  try {
    // need to add api url
    const response = await fetch("https://<your-api-url>.amazonaws.com/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input: text, language })
    });

    const data = await response.json();

    return {
      text: data.response,
      sender: "bot",
      audio: data.audio  // may not work
    };
  } catch (error) {
    console.error("Error sending message:", error);
    return {
      text: "Sorry, something went wrong.",
      sender: "bot"
    };
  }
};