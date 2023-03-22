import { TbCalendarEvent } from "react-icons/tb";
import { BiTimeFive } from "react-icons/bi";
import { MdPersonOutline } from "react-icons/md";

export const createHTML = (
    input: any,
    type: String,
    setHTML: Function,
    setTopHTML: Function,
    reset: Function,
    setTopRaw: Function
  ) => {
    switch (type) {
      case "image":
        setHTML((prev: any) => [
          ...prev,
          {
            type,
            cotent: (
              <div className="img-section" key={input.id}>
                <div className="img-wrapper">
                  <img
                    className="static-image"
                    alt={input.image.alt}
                    src={input.image.src}
                  />
                </div>
              </div>
            ),
          },
        ]);
        reset();
        break;
      case "startImage":
        setTopRaw((prev: any) => {
          return {
            ...prev,
            image: {
              alt: input.image.alt,
              src: input.image.src,
            },
          };
        });
        setTopHTML((prev: any) => [
          ...prev,
          {
            type,
            content: (
              <div className="top-section" key={input.id}>
                <div className="img-wrapper">
                  <img
                    className="static-image"
                    alt={input.image.alt}
                    src={input.image.src}
                  />
                </div>
              </div>
            ),
          },
        ]);
        reset();
        break;
      case "headline":
        let date = new Date();
        setTopRaw((prev: any) => {
          return {
            ...prev,
            date: `${date.toLocaleString("de", {
              month: "short",
            })} ${date.getDate()}, ${date.getFullYear()}`,
            readingTime: input.readingTime,
            author: input.author,
            headline: input.content,
          };
        });
        setTopHTML((prev: any) => [
          ...prev,
          {
            type,
            content: (
              <div className="headline-section" key={input.id}>
                <h1 itemScope itemProp="headline" className="title-big">
                  {input.content}
                </h1>
                <div className="post-meta">
                  <time
                    itemScope
                    itemProp="datePublished"
                    dateTime={date.toISOString().substring(0, 10)}
                    className="box"
                  >
                    <TbCalendarEvent className="icon" />
                    {`${date.toLocaleString("de", {
                      month: "short",
                    })} ${date.getDate()}, ${date.getFullYear()}`}
                  </time>
                  <span className="box">
                    <BiTimeFive className="icon" />
                    {input.readingTime} min. read
                  </span>
                  <span className="box author-box">
                    <MdPersonOutline className="icon" />
                    <address>
                      <a rel="author" href="/autoren">
                        {input.author}
                      </a>
                    </address>
                  </span>
                </div>
              </div>
            ),
          },
        ]);
        reset();
        break;
      case "text":
        let newContent = input.content;
        for (const link of input.links) {
          newContent = newContent.replace(
            link.id,
            `<a class="inline-link" value="${link.link}" href="${link.link}">${link.value}</a>`
          );
        }
        setHTML((prev: any) => [
          ...prev,
          {
            type,
            content: !!input.keyLearning ? (
              <div className="key-learnings" key={input.id}>
                <div className="line-1 line"></div>
                <div className="line-2 line"></div>
                <div className="line-3 line"></div>
                <div className="line-4 line"></div>
                <h4 className="key-text">Key Learnings</h4>
                <div className="content-box">
                  <div className="text-section">
                    <p>{newContent}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-section" key={input.id}>
                <p dangerouslySetInnerHTML={{ __html: newContent }}></p>
              </div>
            ),
          },
        ]);
        reset();
        break;
      case "subheadline":
      case "subheadlineAK":
        setHTML((prev: any) => [
          ...prev,
          {
            type,
            id: input.id,
            family: input.family,
            title: input.content,
            content: (
              <div className="subheading" id={`${input.id}`} key={input.id}>
                <h2
                  className={`title-medium${
                    type === "subheadlineAK" ? "-afterkey" : ""
                  }`}
                >
                  {input.content}
                </h2>
              </div>
            ),
          },
        ]);
        reset();
        break;
      case "list-ol-second":
        setHTML((prev: any) => [
          ...prev,
          {
            type,
            content: !!input.list.keyLearning ? (
              <div className="key-learnings" key={input.id}>
                <div className="line-1 line"></div>
                <div className="line-2 line"></div>
                <div className="line-3 line"></div>
                <div className="line-4 line"></div>
                <h4 className="key-text">Key Learnings</h4>
                <div className="content-box">
                  <div className="text-section" key={input.id}>
                    <ol>
                      {input.list.listelemente.map(
                        (element: string, index: any) => {
                          let newContent = element;
                          for (const link of input.links) {
                            newContent = newContent.replace(
                              link.id,
                              `<a class="inline-link" value="${link.link}" href="${link.link}">${link.value}</a>`
                            );
                          }
                          return (
                            <li
                              key={index}
                              dangerouslySetInnerHTML={{ __html: newContent }}
                            ></li>
                          );
                        }
                      )}
                    </ol>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-section" key={input.id}>
                <ol>
                  {input.list.listelemente.map((element: string, index: any) => {
                    let newContent = element;
                    for (const link of input.links) {
                      newContent = newContent.replace(
                        link.id,
                        `<a class="inline-link" value="${link.link}" href="${link.link}">${link.value}</a>`
                      );
                    }
                    return (
                      <li
                        key={index}
                        dangerouslySetInnerHTML={{ __html: newContent }}
                      ></li>
                    );
                  })}
                </ol>
              </div>
            ),
          },
        ]);
        reset();
        break;
      case "list-ul-second":
        setHTML((prev: any) => [
          ...prev,
          {
            type,
            content: !!input.list.keyLearning ? (
              <div className="key-learnings" key={input.id}>
                <div className="line-1 line"></div>
                <div className="line-2 line"></div>
                <div className="line-3 line"></div>
                <div className="line-4 line"></div>
                <h4 className="key-text">Key Learnings</h4>
                <div className="content-box">
                  <div className="text-section" key={input.id}>
                    <ul>
                      {input.list.listelemente.map(
                        (element: string, index: any) => {
                          let newContent = element;
                          for (const link of input.links) {
                            newContent = newContent.replace(
                              link.id,
                              `<a class="inline-link" value="${link.link}" href="${link.link}">${link.value}</a>`
                            );
                          }
                          return (
                            <li
                              key={index}
                              dangerouslySetInnerHTML={{ __html: newContent }}
                            ></li>
                          );
                        }
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-section" key={input.id}>
                <ul>
                  {input.list.listelemente.map((element: string, index: any) => {
                    let newContent = element;
                    for (const link of input.links) {
                      newContent = newContent.replace(
                        link.id,
                        `<a class="inline-link" value="${link.link}" href="${link.link}">${link.value}</a>`
                      );
                    }
                    return (
                      <li
                        key={index}
                        dangerouslySetInnerHTML={{ __html: newContent }}
                      ></li>
                    );
                  })}
                </ul>
              </div>
            ),
          },
        ]);
        reset();
        break;
    }
  };