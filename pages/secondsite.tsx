import Link from "next/link";
import Image from "next/image";
import { TbCalendarEvent, TbH3 } from "react-icons/tb";
import { BiTimeFive } from "react-icons/bi";
import { MdPersonOutline } from "react-icons/md";
import { useEffect, useState } from "react";
import Dialog from "@/components/dialog";
import { useRouter } from "next/router";
import ReactDomServer from "react-dom/server";

const createHTML = (
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

interface input {
  id: any;
  headline: string;
  subheadline: string;
  subheadlineAK: string;
  text: { content: string; keyLearning: boolean };
  readingTime: string;
  author: string;
  keylearnings: string | [];
  image: { alt: string; src: string };
  list: {
    type: string;
    keyLearning: boolean;
    listelemente: [{ id: number; content: string }];
    sublists: [
      { position: number; listelemente: [{ id: number; content: string }] }
    ];
  };
}

interface htmlObj {
  content: any;
  type: string;
}

const Secondsite = () => {
  const [contentHTML, setContentHTML] = useState<any>([]);
  const [topHTML, setTopHTML] = useState([]);
  const [dialogSequence, setDialogSequence] = useState<string>("default");
  const [createType, setCreateType] = useState<any>({ name: "", parentID: "" });
  const [contentTable, setContentTable] = useState<any>();
  const router = useRouter();
  const [topRaw, setTopRaw] = useState<any>({});
  const [numberOfListelements, setNumberOfListelements] = useState<any>([]);
  const basicInput: any = {
    id: "",
    family: { type: "", relatedItems: [] },
    content: "",
    keyLearning: false,
    readingTime: "",
    links: [],
    author: "",
    image: { alt: "", src: "" },
    list: {
      type: "",
      keyLearning: false,
      listelemente: [],
      sublists: [],
    },
  };
  const [input, setInput] = useState<any>(basicInput);

  const handleCreateHtml = (type: string) => {
    createHTML(input, type, setContentHTML, setTopHTML, reset, setTopRaw);
    setInput(basicInput);
  };

  const reset = () => {
    setInput(basicInput);
    setCreateType({ name: "", parentID: "" });
    setDialogSequence("default");
    setNumberOfListelements([]);
  };

  const addChild = (parentID: any) => {
    const parentWithChilds = contentHTML.filter((item: any) => {
      if (item.id === parentID) {
        const id = new Date().getTime();
        input.id = id;
        const title =
          input.subheadline !== "" ? input.subheadline : input.subheadlineAK;
        item.family.relatedItems.push({ title, id });
        return item;
      } else {
        return item;
      }
    });
    setContentHTML(parentWithChilds);
    handleCreateHtml(
      input.subheadline !== "" ? "subheadline" : "subheadlineAK"
    );
  };

  useEffect(() => {
    setDialogSequence("default");
  }, []);

  useEffect(() => {
    if (createType.name !== "" && createType.name !== "headline-child") {
      handleCreateHtml(createType.name);
    }
    if (createType.name === "headline-child") {
      addChild(createType.parentID);
    }
  }, [createType]);

  useEffect(() => {
    const headlines = contentHTML.filter((item: any) => {
      if (
        (item.type === "subheadline" || item.type === "subheadlineAK") &&
        item.family.type !== "child"
      ) {
        return item;
      }
    });

    const html: any = headlines.map((item: any) => {
      if (
        item.family.type !== "parent" ||
        (item.family.type === "parent" && item.family.relatedItems.length === 0)
      ) {
        return (
          <li key={item.id} className="item-simple">
            <Link href={`#${item.id}`}>{item.title}</Link>
          </li>
        );
      } else if (
        item.family.type === "parent" &&
        item.family.relatedItems.length > 0
      ) {
        return (
          <li key={item.id} className="item-nested">
            <Link href={`#${item.id}`}>{item.title}</Link>
            <ol>
              {item.family.relatedItems.map((child: any) => {
                return (
                  <li key={child.id}>
                    <Link href={`#${child.id}`}>{child.title}</Link>
                  </li>
                );
              })}
            </ol>
          </li>
        );
      }
    });
    setContentTable(
      <div className="table-of-contents">
        <h3>Übersicht</h3>
        <ol className="list">{html}</ol>
      </div>
    );
  }, [contentHTML]);

  const contentClickHandler = (e: any) => {
    const targetLink = e.target.closest("a");
    if (!targetLink) return;
    e.preventDefault();

    var href = targetLink.getAttribute("href");

    router.push(href);
  };

  const saveArticle = () => {
    const sum = contentHTML.reduce((prev: string, item: any) => {
      return prev.concat(ReactDomServer.renderToStaticMarkup(item.content));
    }, "");
    console.log("sum: ", sum);
    //   {
    //     title: topRaw.headline,
    //     description: ""
    //     content: sum,
    //     imageSRC: topRaw.image.src,
    //    imageALT: topRaw.image.alt,
    //     theme: String!
    //     author: topRaw.author
    //     pubDate: topRaw.date
    //     readingTime: topRaw.readingTime
    //     contentTable: `${contentTable}`
    //     blog: Blog @belongsTo
    //   }
  };

  return (
    <div className="page-wrapper">
      <div className="detailview">
        <div className="left-container">
          <article className="basic-container" onClick={contentClickHandler}>
            {topHTML.map((item: htmlObj) => {
              return item.content;
            })}
            {contentTable}
            <div className="content-wrapper" itemScope itemProp="articleBody">
              {contentHTML &&
                contentHTML.map((item: htmlObj) => {
                  return item.content;
                })}
              <div className="content-wrapper input-container">
                <Dialog
                  dialogSequence={dialogSequence}
                  setDialogSequence={setDialogSequence}
                  input={input}
                  setInput={setInput}
                  setCreateType={setCreateType}
                  setNumberOfListelements={setNumberOfListelements}
                  basicInput={basicInput}
                  numberOfListelements={numberOfListelements}
                  contentHTML={contentHTML}
                />
              </div>
            </div>
          </article>
          <div
            className="basic-container"
            style={{ display: "flex", alignItems: "center" }}
          >
            <button onClick={saveArticle} className="button-18">
              Artikel speichern
            </button>
          </div>
          <div className="basic-container author">
            <div className="img-wrapper">
              <Image className="basic-image" alt="" src=""></Image>
            </div>
            <div className="text-section">
              <h2 className="title-small">
                <Link href="author">Max Budziat</Link>
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
                quod consequatur recusandae iure omnis eum inventore velit?
                Perferendis perspiciatis, recusandae natus
              </p>
            </div>
          </div>
          <div className="next-and-previous-post">
            <div className="basic-container">
              <h3>Älterer Beitrag</h3>
              <article className="small-article">
                <div className="left-section">
                  <div className="img-wrapper">
                    <Image className="basic-image" alt="" src=""></Image>
                  </div>
                </div>
                <div className="right-section">
                  <h3 className="article-title-small">
                    <Link href="blog/thema/artikel">
                      Die 10 beliebtesten Vogelarten für die Vogelzucht
                    </Link>
                  </h3>
                  <div className="post-meta">
                    <span className="box">
                      <BiTimeFive className="icon" />4 min. read
                    </span>
                  </div>
                </div>
              </article>
            </div>
            <div className="basic-container">
              <h3>Neuer Beitrag</h3>
              <article className="small-article">
                <div className="left-section">
                  <div className="img-wrapper">
                    <Image className="basic-image" alt="" src=""></Image>
                  </div>
                </div>
                <div className="right-section">
                  <h3 className="article-title-small">
                    <Link href="blog/thema/artikel">
                      Die 10 beliebtesten Vogelarten für die Vogelzucht
                    </Link>
                  </h3>
                  <div className="post-meta">
                    <span className="box">
                      <BiTimeFive className="icon" />4 min. read
                    </span>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <div className="basic-container recommend-posts">
            <h3 className="title-small">Das sollte dir auch gefallen</h3>
            <div className="recommend-list">
              <div className="article-recommend-wrapper">
                <article className="small-article-recommend">
                  <Link href="Link/toPost">
                    <div className="img-wrapper">
                      <Image className="basic-image" alt="" src=""></Image>
                    </div>
                  </Link>
                  <h3 className="article-title-small">
                    <Link href="blog/thema/artikel">
                      Die 10 beliebtesten Vogelarten für die Vogelzucht
                    </Link>
                  </h3>
                  <div className="post-meta">
                    <span className="box">
                      <BiTimeFive className="icon" />4 min. read
                    </span>
                  </div>
                </article>
              </div>
              <div className="article-recommend-wrapper">
                <article className="small-article-recommend">
                  <Link href="Link/toPost">
                    <div className="img-wrapper">
                      <Image className="basic-image" alt="" src=""></Image>
                    </div>
                  </Link>
                  <h3 className="article-title-small">
                    <Link href="blog/thema/artikel">
                      Die 10 beliebtesten Vogelarten für die Vogelzucht
                    </Link>
                  </h3>
                  <div className="post-meta">
                    <span className="box">
                      <BiTimeFive className="icon" />4 min. read
                    </span>
                  </div>
                </article>
              </div>
              <div className="article-recommend-wrapper">
                <article className="small-article-recommend">
                  <Link href="Link/toPost">
                    <div className="img-wrapper">
                      <Image className="basic-image" alt="" src=""></Image>
                    </div>
                  </Link>
                  <h3 className="article-title-small">
                    <Link href="blog/thema/artikel">
                      Vogelarten beliebtesten Vogelarten für die Vogelzucht
                    </Link>
                  </h3>
                  <div className="post-meta">
                    <span className="box">
                      <BiTimeFive className="icon" />4 min. read
                    </span>
                  </div>
                </article>
              </div>
              <div className="article-recommend-wrapper">
                <article className="small-article-recommend">
                  <Link href="Link/toPost">
                    <div className="img-wrapper">
                      <Image className="basic-image" alt="" src=""></Image>
                    </div>
                  </Link>
                  <h3 className="article-title-small">
                    <Link href="blog/thema/artikel">
                      Die 10 beliebtesten Vogelarten für die Vogelzucht
                    </Link>
                  </h3>
                  <div className="post-meta">
                    <span className="box">
                      <BiTimeFive className="icon" />4 min. read
                    </span>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        <div className="right-container">
          <div className="basic-container">
            <h3 className="title-small">Neue Artikel</h3>
            <div className="list-articles-small">
              <article className="small-article">
                <div className="left-section">
                  <div className="img-wrapper">
                    <Image className="basic-image" alt="" src=""></Image>
                  </div>
                </div>
                <div className="right-section">
                  <h3 className="article-title-small">
                    <Link href="blog/thema/artikel">
                      Die 10 beliebtesten Vogelarten für die Vogelzucht
                    </Link>
                  </h3>
                  <div className="post-meta">
                    <span className="box">
                      <BiTimeFive className="icon" />4 min. read
                    </span>
                  </div>
                </div>
              </article>
              <article className="small-article">
                <div className="left-section">
                  <div className="img-wrapper">
                    <Image className="basic-image" alt="" src=""></Image>
                  </div>
                </div>
                <div className="right-section">
                  <h3 className="article-title-small">
                    <Link href="blog/thema/artikel">
                      Die 10 beliebtesten Vogelarten für die Vogelzucht
                    </Link>
                  </h3>
                  <div className="post-meta">
                    <span className="box">
                      <BiTimeFive className="icon" />4 min. read
                    </span>
                  </div>
                </div>
              </article>
            </div>
            <h3 className="title-small">Themen</h3>
            <div className="basic-tag-list">
              <Link href="/blog/thema" className="basic-tag">
                <div className="dot"></div>
                <h4>Travel</h4>
              </Link>
              <Link href="/blog/thema" className="basic-tag">
                <div className="dot"></div>
                <h4>Travel</h4>
              </Link>
              <Link href="/blog/thema" className="basic-tag">
                <div className="dot"></div>
                <h4>Travel</h4>
              </Link>
              <Link href="/blog/thema" className="basic-tag">
                <div className="dot"></div>
                <h4>Travel</h4>
              </Link>
              <Link href="/blog/thema" className="basic-tag">
                <div className="dot"></div>
                <h4>Travel</h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secondsite;
