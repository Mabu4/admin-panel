import Link from "next/link";
import Image from "next/image";
import { BiTimeFive } from "react-icons/bi";
import { useEffect, useState } from "react";
import Dialog from "./dialog";
import { useRouter } from "next/router";
import ReactDomServer from "react-dom/server";
import { createHTML } from "@/functions/create-html";
import dive1 from "../public/images/dive1.jpg";
import dive2 from "../public/images/dive2.jpg";
import dive3 from "../public/images/dive3.jpg";
import dive4 from "../public/images/dive4.jpg";
import dive5 from "../public/images/dive5.jpg";
import dive6 from "../public/images/dive6.jpg";
import dive7 from "../public/images/dive7.jpg";
import _ from "lodash";

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

const Main = () => {
  const [contentHTML, setContentHTML] = useState<any>([]);
  const [topHTML, setTopHTML] = useState([]);
  const [dialogSequence, setDialogSequence] = useState<string>("default");
  const [createType, setCreateType] = useState<any>({ name: "", parentID: "" });
  const [contentTable, setContentTable] = useState<any>();
  const [topRaw, setTopRaw] = useState<any>({});
  const [numberOfListelements, setNumberOfListelements] = useState<any>([]);
  const basicInput = {
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

  const router = useRouter();

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
        const title = input.content;
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
        item?.family?.type !== "child"
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
                console.log("child:_ ", child, "headlines : ", headlines);
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
      <div className="table-of-contents" id="tabelOfContent">
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

  const saveArticle = (e: any) => {
    e.preventDefault();
    console.log("theme: ", e.target.theme.value);
    console.log("description: ", e.target.description.value);
    console.log("metaDes: ", e.target.metaDescription.value);
    console.log("ID: ", e.target.blogID.value);

    const sum = contentHTML.reduce((prev: string, item: any) => {
      return prev.concat(ReactDomServer.renderToStaticMarkup(item.content));
    }, "");

    const contentTablee: any = document.getElementById("tabelOfContent");
    const htmlString = contentTablee.outerHTML;

    console.log("sum: ", sum);
    console.log("content: ", contentTable);

    const data = {
      title: _.get(topRaw, "headline") || "",
      description: _.get(e, "target.description.value") || "",
      theme: _.get(e, "target.theme.value") || "",
      author: _.get(topRaw, "author") || "",
      dataCreated: _.get(topRaw, "date") || "",
      dataUpdatet: _.get(topRaw, "date") || "",
      readingTime: _.get(topRaw, "readingTime") || "",
      imageSRC: _.get(topRaw, "image.src") || "",
      imageALT: _.get(topRaw, "image.alt") || "",
      contentTable: htmlString,
      content: sum,
      blog: _.get(e, "target.blogID.value") || "",
      relatedPosts: "", //to do
      metaDescription: _.get(e, "target.metaDescription.value") || "",
    };
    console.log("Mabu data: ", data);
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
            <form action="" onSubmit={saveArticle}>
              <h2>Thema</h2>
              <input type="text" name="theme" id="theme" />
              <h2>Beschreibung</h2>
              <input type="text" name="description" id="description" />
              <h2>Meta Beschreibung</h2>
              <input type="text" name="metaDescription" id="metaDescription" />
              <h2>Blog ID</h2>
              <input type="text" name="blogID" id="blogID" />
              <div>
                <button type="submit" className="button-18">
                  Artikel speichern
                </button>
              </div>
            </form>
          </div>
          <div className="basic-container author">
            <div className="img-wrapper">
              <Image className="basic-image" alt="" src={dive1}></Image>
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
                    <Image className="basic-image" alt="" src={dive2}></Image>
                  </div>
                </div>
                <div className="right-section">
                  <h3 className="article-title-small">
                    <Link href="blog/thema/artikel">
                      Wie ist der perfekte Einstieg ins Wasser
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
                    <Image className="basic-image" alt="" src={dive1}></Image>
                  </div>
                </div>
                <div className="right-section">
                  <h3 className="article-title-small">
                    <Link href="blog/thema/artikel">
                      Die 10 schönsten Tauchgebiete
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
                      <Image className="basic-image" alt="" src={dive3}></Image>
                    </div>
                  </Link>
                  <h3 className="article-title-small">
                    <Link href="blog/thema/artikel">
                      Tauchen mit Schildkröten auf den Malediven
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
                      <Image className="basic-image" alt="" src={dive4}></Image>
                    </div>
                  </Link>
                  <h3 className="article-title-small">
                    <Link href="blog/thema/artikel">
                      Die besten Gebiete um mit Delfinen zu tauchen
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
                      <Image className="basic-image" alt="" src={dive5}></Image>
                    </div>
                  </Link>
                  <h3 className="article-title-small">
                    <Link href="blog/thema/artikel">
                      Tauchpartner finden leicht gemacht
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
                      <Image className="basic-image" alt="" src={dive6}></Image>
                    </div>
                  </Link>
                  <h3 className="article-title-small">
                    <Link href="blog/thema/artikel">
                      Gefährliche Großfische der Südsee
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
                    <Image className="basic-image" alt="" src={dive7}></Image>
                  </div>
                </div>
                <div className="right-section">
                  <h3 className="article-title-small">
                    <Link href="blog/thema/artikel">
                      Das teuerste Tauchequipment im Vergleich
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
                    <Image className="basic-image" alt="" src={dive2}></Image>
                  </div>
                </div>
                <div className="right-section">
                  <h3 className="article-title-small">
                    <Link href="blog/thema/artikel">
                      Wie ist der perfekte Einstieg ins Wasser
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

export default Main;
