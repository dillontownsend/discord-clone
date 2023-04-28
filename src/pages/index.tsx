import { type NextPage } from "next";
import Head from "next/head";
import Navbar from "~/components/index/navbar";
import { TbDownload } from "react-icons/tb";
import { motion } from "framer-motion";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Discord | Your Place to Talk and Hang Out</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={""}>
        <section
          className={
            "relative min-h-[626px] overflow-x-hidden bg-[#404eed] md:pb-20 lg:pb-0"
          }
        >
          <Navbar />

          <div
            className={
              "relative z-10 mx-auto max-w-[1260px] px-6 py-14 text-white md:grid md:grid-cols-8 md:px-10 md:py-20 lg:grid-cols-12 lg:py-[120px] lg:text-center"
            }
          >
            <div className={"md:col-span-5 lg:col-span-8 lg:col-start-3"}>
              <div>
                <div
                  className={
                    "font-antiqueOlive text-2xl font-extrabold uppercase md:text-[56px] md:leading-[1]"
                  }
                >
                  Imagine a Place...
                </div>
                <div
                  className={
                    "mt-6 text-base leading-[1.625] md:mt-10 md:text-xl lg:leading-relaxed"
                  }
                >
                  ...where you can belong to a school club, a gaming group, or a
                  worldwide art community. Where just you and a handful of
                  friends can spend time together. A place that makes it easy to
                  talk every day and hang out more often.
                </div>
              </div>

              <div
                className={
                  "mt-6 flex flex-wrap gap-6 md:mt-8 lg:justify-center"
                }
              >
                <button
                  className={
                    "flex items-center justify-center gap-2 rounded-[28px] bg-white px-8 py-4 text-[#23272a] transition-all duration-200 hover:text-[#5865f2] hover:shadow-xl"
                  }
                >
                  <TbDownload size={24} />
                  <div className={"text-[20px] font-medium leading-6"}>
                    Download for Mac
                  </div>
                </button>

                <button
                  className={
                    "flex items-center justify-center gap-2 rounded-[28px] bg-[#23272a] px-8 py-4 text-white transition-all duration-200 hover:bg-[#303338] hover:shadow-xl"
                  }
                >
                  <div className={"text-[20px] font-medium leading-6"}>
                    Open Discord in your browser
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className={"mx-auto max-w-[609px] md:hidden"}>
            <img
              src={"/index/shoes.svg"}
              alt={"shoes"}
              className={"-ml-20 w-full"}
            />
          </div>

          <div
            className={
              "pointer-events-none absolute bottom-0 top-0 hidden h-full w-full md:block"
            }
          >
            <img
              src="/index/hills.svg"
              alt="hills"
              className={
                "absolute bottom-0 left-1/2 top-auto -ml-[1320px] block w-[2560px] max-w-none"
              }
            />
            <img
              src="/index/shoes.svg"
              alt="shoes"
              className={
                "absolute bottom-0 left-1/2 -ml-[1030px] hidden w-[689px] max-w-none lg:block"
              }
            />
            <img
              src="/index/bar.svg"
              alt="bar"
              className={
                "absolute bottom-0 left-1/2 -ml-[70px] block w-[615px] max-w-none lg:ml-[370px]"
              }
            />
          </div>
        </section>

        <section className={"flex w-full flex-col items-center"}>
          <motion.div
            className={
              "grid max-w-[1260px] grid-cols-4 px-6 py-14 md:grid-cols-8 md:gap-5 md:px-10 md:py-20 lg:grid-cols-12 lg:py-[120px]"
            }
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-180px" }}
            transition={{ type: "tween", duration: 0.6, ease: "easeOut" }}
          >
            <img
              src="/index/study-group.svg"
              alt="study group"
              className={"col-span-4 mt-6 md:my-auto lg:col-span-7"}
            />
            <div
              className={
                "col-span-4 mt-5 text-[#23272a] md:mt-0 md:flex md:flex-col md:justify-center lg:col-start-9"
              }
            >
              <div
                className={
                  "text-xl font-extrabold md:text-5xl md:leading-[120%]"
                }
              >
                Create an invite-only place where you belong
              </div>
              <div
                className={
                  "mt-6 text-base leading-relaxed lg:text-xl lg:leading-relaxed"
                }
              >
                Discord servers are organized into topic-based channels where
                you can collaborate, share, and just talk about your day without
                clogging up a group chat.
              </div>
            </div>
          </motion.div>
        </section>

        <section className={"flex w-full flex-col items-center bg-[#f6f6f6]"}>
          <motion.div
            className={
              "grid max-w-[1260px] grid-cols-4 px-6 py-14 md:grid-cols-8 md:gap-5 md:px-10 md:py-20 lg:grid-cols-12 lg:py-[120px]"
            }
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-180px" }}
            transition={{ type: "tween", duration: 0.6, ease: "easeOut" }}
          >
            <img
              src="/index/voice.svg"
              alt="voice"
              className={
                "col-span-4 mt-6 md:order-2 md:my-auto lg:col-span-7 lg:col-start-6"
              }
            />
            <div
              className={
                "col-span-4 mt-5 text-[#23272a] md:order-1 md:mt-0 md:flex md:flex-col md:justify-center "
              }
            >
              <div
                className={
                  "text-xl font-extrabold md:text-5xl md:leading-[120%]"
                }
              >
                Where hanging out is easy
              </div>
              <div
                className={
                  "mt-6 text-base leading-relaxed lg:text-xl lg:leading-relaxed"
                }
              >
                Grab a seat in a voice channel when you’re free. Friends in your
                server can see you’re around and instantly pop in to talk
                without having to call.
              </div>
            </div>
          </motion.div>
        </section>

        <section className={"flex w-full flex-col items-center"}>
          <motion.div
            className={
              "grid max-w-[1260px] grid-cols-4 px-6 py-14 md:grid-cols-8 md:gap-5 md:px-10 md:py-20 lg:grid-cols-12 lg:py-[120px]"
            }
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-180px" }}
            transition={{ type: "tween", duration: 0.6, ease: "easeOut" }}
          >
            <img
              src="/index/coach.svg"
              alt="coach"
              className={"col-span-4 mt-6 md:my-auto lg:col-span-7"}
            />
            <div
              className={
                "col-span-4 mt-5 text-[#23272a] md:mt-0 md:flex md:flex-col md:justify-center lg:col-start-9"
              }
            >
              <div
                className={
                  "text-xl font-extrabold md:text-5xl md:leading-[120%]"
                }
              >
                From few to a fandom
              </div>
              <div
                className={
                  "mt-6 text-base leading-relaxed lg:text-xl lg:leading-relaxed"
                }
              >
                Get any community running with moderation tools and custom
                member access. Give members special powers, set up private
                channels, and more.
              </div>
            </div>
          </motion.div>
        </section>

        <section className={"flex w-full flex-col items-center bg-[#f6f6f6]"}>
          <motion.div
            className={
              "grid max-w-[1260px] grid-cols-4 px-6 py-14 md:grid-cols-8 md:px-10 md:py-20 lg:grid-cols-12 lg:pb-20 lg:pt-[120px]"
            }
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-180px" }}
            transition={{ type: "tween", duration: 0.6, ease: "easeOut" }}
          >
            <div
              className={
                "col-span-4 text-center text-[#23272a] md:col-span-8 lg:col-span-10 lg:col-start-2"
              }
            >
              <div
                className={
                  "font-antiqueOlive text-xl leading-[95%] md:text-[40px]"
                }
              >
                RELIABLE TECH FOR STAYING CLOSE
              </div>
              <div
                className={
                  "mt-6 text-base leading-relaxed lg:text-xl lg:leading-relaxed"
                }
              >
                Low-latency voice and video feels like you’re in the same room.
                Wave hello over video, watch friends stream their games, or
                gather up and have a drawing session with screen share.
              </div>
            </div>

            <img
              src="/index/chillin.svg"
              alt="chillin"
              className={
                "col-span-4 mt-6 w-full md:col-span-8 lg:col-span-12 lg:mt-4"
              }
            />
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default Home;
