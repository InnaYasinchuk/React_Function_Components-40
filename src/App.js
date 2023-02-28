import React, { useState } from "react";
import Article from "./components/Article";


const App = () => {

  const articleEN = {
    title: "NVIDIA NEWS",
    article_title: "NVIDIA Accelerated AI on Azure",
    description: "Article description:",
    preview:
      "NVIDIA on Azure is bringing AI, networking, and high-performance computing to the enterprise.",
    content:
      "Microsoft Azure and NVIDIA empower enterprises in the cloud to harness the combined power of NVIDIA accelerated computing and NVIDIA networking on demand to meet the diverse computational requirements of AI, machine learning, data analytics, graphics, virtual desktop, and high-performance computing (HPC) applications. From fractional GPUs and single GPUs to multiple GPUs across multiple nodes for distributed computing, access the right-sized GPU acceleration for your workloads.",
    author: "Author: Mike",
    published: "Published: 06.12.2022",
    theme: "Theme: Video cards",
    mark_read: 'Mark as read',
    mark_unread: 'Mark as unread',
    button_read: "Read",
    button_closed: "Close",
    langEN:'EN',
    langUA:'UA',
  };

  const articleUA = {
    title: "НОВИНИ NVIDIA",
    article_title:" Прискорений штучний інтелект NVIDIA в Azure",
    description: "Опис статті:",
    preview:
      "NVIDIA на Azure надає підприємствам штучний інтелект, мережі та високопродуктивні обчислення.",
    content:
      "Microsoft Azure та NVIDIA дозволяють підприємствам у хмарі використовувати об\'єднану міць прискорених обчислень NVIDIA та мереж NVIDIA на запит для задоволення різноманітних обчислювальних вимог ІІ, машинного навчання, аналізу даних, графіки, віртуальних робочих столів та високопродуктивних обчислень додатків HPC. Від дрібних графічних процесорів і одиночних графічних процесорів до кількох графічних процесорів на кількох вузлах для розподілених обчислень - отримайте доступ до прискорення графічного процесора потрібного розміру для робочих навантажень.",
    author: "Автор: Майк",
    published: "Опубліковано: 06.12.2022",
    theme: "Тема: Відео карти",
    mark_read: 'Прочитано',
    mark_unread: 'Не прочитано',
    button_read: "Читати",
    button_closed: "Закрити",
    langEN:'Читати англійською',
    langUA:'Читати українською',

  };

  const [isShow, setIsShow] = useState(false);
  const [isMark, setIsMark] = useState(false);
  const [language, setLanguage] = useState("en");

  const lang = language === "en" ? articleEN : articleUA;

  const toggleArticle = () => {
    isShow ? setIsShow(false) : setIsShow(true);
    setIsMark(false);
  };

  return (
    <div className="wrapper">
      <h1 className="title">{lang.title}</h1>
      <div className="article">
        <Article show={isShow} text={lang} mark={isMark}>
          <div className="article__title">
            <h2>{lang.article_title}</h2>
          </div>
        </Article>
        <div className="article__actions">
          <button onClick={() => setIsMark(true)} className="article__btn">
            {lang.mark_read}
          </button>
          <button onClick={toggleArticle} className="article__btn">
            {isShow ? lang.button_closed : lang.button_read}
          </button>
          <button onClick={() => setIsMark(false)} className="article__btn">
           {lang.mark_unread}
          </button>
        </div>
      </div>
      <div className="lang">
        <button onClick={() => setLanguage("ua")} className="lang-btn">
          {lang.langUA}
        </button>
        <button onClick={() => setLanguage("en")} className="lang-btn">
          {lang.langEN}
        </button>
      </div>
    </div>
  );
}
export default App;
