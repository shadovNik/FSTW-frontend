import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import { useEffect, useRef, useState } from "react";

export default function ResumeChat() {
  const { id } = useParams();
  const chatRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [messagesHistory, setMessagesHistory] = useState([]);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messagesHistory]);

  useEffect(() => {
    fetchHistory();
  }, [])

  const fetchHistory = async () => {
    try {
      const response = await fetch(`http://localhost:80/api/neuronet/resume_chat/${id}/history/1000/1`);
      const data = await response.json();
      setMessagesHistory(data.reverse());
    } catch (err) {
      console.error(err);
    }
  }

  const handleSendMessage = async () => {
    if (inputText.trim() === "") return;

    const userMessage = { text: inputText, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsLoading(true);

    try {
      const response = await fetch(`http://localhost:80/api/neuronet/resume_chat/send/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputText),
      });

      const data = await response.json();
      const parsedAnswer = parseServerResponse(data);

      const botMessage = { text: parsedAnswer, sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Ошибка:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const parseServerResponse = (text) => {
    if (!text || typeof text !== "string") return "Произошла ошибка при обработке ответа";

    let parsedText = text;

    parsedText = parsedText.replace(/```(?:[^\n]*)?\n([\s\S]*?)```/g, "<pre><code>$1</code></pre>");
    parsedText = parsedText.replace(/`([^`]+)`/g, "<code>$1</code>");
    parsedText = parsedText.replace(/^######\s(.+)$/gm, "<h6>$1</h6>");
    parsedText = parsedText.replace(/^#####\s(.+)$/gm, "<h5>$1</h5>");
    parsedText = parsedText.replace(/^####\s(.+)$/gm, "<h4>$1</h4>");
    parsedText = parsedText.replace(/^###\s(.+)$/gm, "<h3>$1</h3>");
    parsedText = parsedText.replace(/^##\s(.+)$/gm, "<h2>$1</h2>");
    parsedText = parsedText.replace(/^#\s(.+)$/gm, "<h1>$1</h1>");
    parsedText = parsedText.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    parsedText = parsedText.replace(/\*(.*?)\*/g, "<em>$1</em>");
    parsedText = parsedText.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank">$1</a>');
    parsedText = parsedText.replace(/\n/g, "<br>");
    parsedText = parsedText.replace(/"/g, "");

    return parsedText || "Ответ пустой";
  };

  const decodeEscapedString = (text) => {
    if (!text || typeof text !== "string") return text;
    return text
      .replace(/\\n/g, "\n")
      .replace(/\\"/g, '"')
      .replace(/\\\\/g, "\\");
  };

  return (
    <>
      <Header
        linksContent={
          <>
            <Link to="/pc" className="logregHref">
              <div className="logregButton persCab">
                <p className="loginRegister text">Личный кабинет</p>
              </div>
            </Link>
          </>
        }
      />
      <main className="main chatBot-main">
        <div className="chatBot-mainContent">
          <p className="chatBot-header">IT-Стажировки | AI</p>
          <div className="horizontalLine"></div>
          <div className="chatBot">
            <div className="chatBot-history" ref={chatRef}>
              {messagesHistory.map((message) => (
                <>
                  {message.userMessage && (
                    <div className="message user-message">
                      {parseServerResponse(message.userMessage)}
                    </div>
                  )}
                  {message.botMessage && (
                    <div className="message bot-message">
                      <p
                        className="responsedMessage"
                        dangerouslySetInnerHTML={{ __html: parseServerResponse(decodeEscapedString(message.botMessage)) }}
                      />
                    </div>
                  )}
                </>
              ))}
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`message ${message.sender === "user" ? "user-message" : "bot-message"}`}
                >
                  {message.sender === "user" ? (
                    message.text
                  ) : (
                    <p className="responsedMessage" dangerouslySetInnerHTML={{ __html: message.text }} />
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="message bot-message loading">
                  Загрузка<span className="dots"></span>
                </div>
              )}
            </div>
            <div className="chatBot-inputContainer">
              <input type="textarea"
                className="chatBot-input"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Задайте мне вопрос!"
                disabled={isLoading}
              />
              <button className="chatBot-inputButton" onClick={handleSendMessage}><i class='fa fa-send fa-lg' /></button>
            </div>
          </div>
          <div className="chatBotHelp">
              <div className="chatBotHelper--container">
                <h1 className="chatBotHelper--title">Что умеет AI?</h1>
                <ul className="chatBot--part">
                  <li className="chatBotHelper--text">Анализирует резюме</li>
                  <li className="chatBotHelper--text">Подсказывает, как сделать резюме лучше</li>
                </ul>
              </div>
          </div>
        </div>
      </main>
    </>
  );
}
