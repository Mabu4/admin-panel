import Link from "next/link";
import Image from "next/image";
import { TbCalendarEvent } from "react-icons/tb";
import { BiTimeFive } from "react-icons/bi";
import { MdPersonOutline } from "react-icons/md";

interface property {
  post: any;
  setPost: Function;
}

const Testsite = ({ post, setPost }: property) => {
  return (
    <div className="page-wrapper">
      <div className="detailview">
        <div className="left-container">
          <article className="basic-container">
            <div className="top-section">
              <div className="img-wrapper">
                <Image
                  className="static-image"
                  alt=""
                  src="http://acs.amazonaws.com/groups/global/AllUsers"
                ></Image>
              </div>
            </div>
            <div className="headline-section">
              <h1 itemScope itemProp="headline" className="title-big">
                Die 10 beliebtesten Vogelarten
              </h1>
              <div className="post-meta">
                <time
                  itemScope
                  itemProp="datePublished"
                  dateTime="2011-08-28"
                  title="August 28th, 2011"
                  className="box"
                >
                  <TbCalendarEvent className="icon" />
                  Mai 2, 2022
                </time>
                <span className="box">
                  <BiTimeFive className="icon" />4 min. read
                </span>
                <span className="box author-box">
                  <MdPersonOutline className="icon" />
                  <address>
                    <Link rel="author" href="/author">
                      Max Budziat
                    </Link>
                  </address>
                </span>
              </div>
            </div>
            <div className="table-of-contents">
              <h3>Übersicht</h3>
              <ol className="list">
                <li className="item-simple">
                  <Link href="id">Coffee</Link>
                </li>
                <li className="item-nested">
                  <Link href="id">Tea</Link>
                  <ol>
                    <li>
                      <Link href="id">Black tea</Link>
                    </li>
                    <li>
                      <Link href="id">Green tea</Link>
                    </li>
                  </ol>
                </li>
                <li className="item-simple">
                  <Link href="id">Milk</Link>
                </li>
              </ol>
            </div>
            <div className="content-wrapper" itemScope itemProp="articleBody">
              <div className="text-section">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Animi molestias enim voluptates facilis voluptas dicta totam
                  alias eaque quam commodi vitae, veniam suscipit praesentium
                  labore, a voluptatem cupiditate quibusdam quia?
                </p>
              </div>
              <div className="img-section">
                <div className="img-wrapper">
                  <Image className="static-image" alt="" src=""></Image>
                </div>
              </div>
              <div className="text-section">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Animi molestias enim voluptates facilis voluptas dicta totam
                  alias eaque quam commodi vitae, veniam suscipit praesentium
                  labore, a voluptatem cupiditate quibusdam quia?
                </p>
              </div>
              <div className="text-section">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Animi molestias enim voluptates facilis voluptas dicta totam
                  alias eaque quam commodi vitae, veniam suscipit praesentium
                  labore, a voluptatem cupiditate quibusdam quia?
                </p>
              </div>
              <div className="subheading">
                <h2 className="title-medium">
                  1. Wie wähle ich die richtige Vogelart ?
                </h2>
              </div>
              <div className="text-section">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Animi molestias enim voluptates facilis voluptas dicta totam
                  alias eaque quam commodi vitae, veniam suscipit praesentium
                  labore, a voluptatem cupiditate quibusdam quia. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit. Animi molestias
                  enim voluptates facilis voluptas dicta totam alias eaque quam
                  commodi vitae, veniam suscipit praesentium labore, a
                  voluptatem cupiditate quibusdam quia?
                </p>
              </div>
              <div className="key-learnings">
                <div className="line-1 line"></div>
                <div className="line-2 line"></div>
                <div className="line-3 line"></div>
                <div className="line-4 line"></div>
                <h4 className="key-text">Key Learnings</h4>
                <div className="content-box">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Totam laboriosam, dolorem ipsam ex deleniti ullam eaque
                    harum, maxime, mollitia necessitatibus nemo! Tempore
                    reprehenderit, numquam deleniti ex sapiente sed sint
                    mollitia.
                  </p>
                </div>
              </div>
              <div className="subheading">
                <h2 className="title-medium-afterkey">
                  2. Wieviel Platz braucht der Vogel ?
                </h2>
              </div>
              <div className="text-section">
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Numquam reiciendis consequuntur
                  </li>
                  <li>
                    excepturi nesciunt ad corporis error cum est fugiat quae
                    dolorem, sapiente earum?
                  </li>
                  <li>
                    delectus velit quod, incidunt temporibus asperiores
                    consequatur{" "}
                  </li>
                  <li>
                    delectus velit quod, incidunt temporibus asperiores
                    consequatur{" "}
                  </li>
                  <li>
                    delectus velit quod, incidunt temporibus asperiores
                    consequatur{" "}
                  </li>
                </ul>
              </div>
              <div className="subheading">
                <h2 className="title-medium">
                  3. Welches Futter braucht der Vogel ?
                </h2>
              </div>
              <div className="text-section">
                <ol>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Numquam reiciendis consequuntur
                  </li>
                  <li>
                    excepturi nesciunt ad corporis error cum est fugiat quae
                    dolorem, sapiente earum?
                  </li>
                  <li>
                    delectus velit quod, incidunt temporibus asperiores
                    consequatur{" "}
                  </li>
                  <li>
                    delectus velit quod, incidunt temporibus asperiores
                    consequatur{" "}
                  </li>
                  <li>
                    delectus velit quod, incidunt temporibus asperiores
                    consequatur{" "}
                  </li>
                </ol>
              </div>
            </div>
          </article>
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

export default Testsite;
