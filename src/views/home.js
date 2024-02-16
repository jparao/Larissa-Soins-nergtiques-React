import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Larissa Soins Énergétiques à Sherbrooke</title>
        <meta
          property="og:title"
          content="Larissa Soins Énergétiques à Sherbrooke"
        />
      </Helmet>
      <div className="home-hero">
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <img alt="image" src="/logo-larissa.svg" className="home-image" />
          <div data-thq="thq-navbar-nav" className="home-desktop-menu">
            <nav className="home-links Navbar">
              <Link to="/" className="home-text">
                Accueil
              </Link>
              <span className="home-text001">Rendez-vous</span>
              <span className="home-text002">Soins Énergétiques</span>
              <span className="home-text003">Évenements</span>
              <span className="home-text004">Articles</span>
            </nav>
            <div className="home-buttons">
              <button className="home-secoundrybutton">
                <span className="home-text005">
                  <span>Contact</span>
                </span>
              </button>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div className="home-nav">
              <div className="home-top">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="home-logo"
                />
                <div data-thq="thq-close-menu" className="home-close-menu">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="home-links1">
                <span className="home-text007">About</span>
                <span className="home-text008">Features</span>
                <span className="home-text009">Pricing</span>
                <span className="home-text010">Team</span>
                <span className="home-text011">Blog</span>
              </nav>
              <div className="home-buttons1">
                <button className="home-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div>
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="home-container01">
          <div className="home-text012">
            <h1 className="home-text013">
              <span className="home-text014">Soins </span>
              <span className="home-text015">Énergétiques</span>
              <span> à Sherbrooke</span>
            </h1>
            <span className="home-text017">
              <span>
                Hi! I&apos;m Larissa, your guide on this beautiful quest towards
                wellness and self-discovery, designed to inspire and nurture
                your inner strength and serenity.
              </span>
            </span>
            <span className="home-text019">
              Join me on an intuitive and transformative path, where each
              session is a commitment to understanding, gentleness, and
              reconnection to your true essence.
            </span>
            <button className="home-button">
              <span className="home-text020">Rendez-vous</span>
            </button>
          </div>
          <div className="home-photos">
            <div className="home-frame2612309">
              <div className="home-frame2612308">
                <img
                  alt="Rectangle41464153"
                  src="/external/rectangle41464153-0nwt-500h.png"
                  className="home-rectangle4146"
                />
              </div>
              <div className="home-frame2612249">
                <img
                  alt="Ellipse7644189"
                  src="/external/ellipse7644189-i77a-200h.png"
                  className="home-ellipse764"
                />
                <img
                  alt="Ellipse7654189"
                  src="/external/ellipse7654189-1m4-200h.png"
                  className="home-ellipse765"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-techniques">
        <div className="home-frame2612223">
          <span className="home-text021">Mes spécialitées</span>
          <span className="home-text022">
            For every need there is a suitable technique.Here are the energy
            healing techniques I work with.
          </span>
          <div className="home-row-techniques">
            <a
              href="https://constellation-familiale"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link"
            >
              <div className="home-constellation">
                <div className="home-container02">
                  <img src="/icone-constellation.svg" className="home-image1" />
                </div>
                <span className="home-text023">
                  <span>Constellation Familiale</span>
                  <br></br>
                </span>
                <span className="home-text026">
                  <span>
                    The Family Constellation allows the person to shed light on
                    the family ties linked to their ancestors.
                  </span>
                </span>
                <span className="home-text028">
                  <span>Read More</span>
                </span>
              </div>
            </a>
            <div className="home-reiki">
              <div className="home-container03">
                <img
                  alt="image"
                  src="/icone-reiki.svg"
                  className="home-image2"
                />
              </div>
              <span className="home-text030">Reiki</span>
              <span className="home-text031">
                <span>
                  The Family Constellation allows the person to shed light on
                  the family ties linked to their ancestors.
                </span>
              </span>
              <span className="home-text033">
                <span>Read More</span>
              </span>
            </div>
            <div className="home-theta-healing">
              <div className="home-container04">
                <img
                  alt="image"
                  src="/icone-theta.svg"
                  className="home-image3"
                />
              </div>
              <span className="home-text035">ThetaHealing Constellation</span>
              <span className="home-text036">
                <span>
                  The Family Constellation allows the person to shed light on
                  the family ties linked to their ancestors.
                </span>
              </span>
              <span className="home-text038">
                <span>Read More</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-a-propos-de-moi">
        <div className="home-frame26122231">
          <span className="home-text040">À propos de moi</span>
          <div className="home-row-larissa">
            <div className="home-photo">
              <img
                alt="image"
                src="/frame%202612288-600h.jpg"
                className="home-image4"
              />
            </div>
            <div className="home-intro">
              <div className="home-container05">
                <img alt="image" src="/wave.svg" className="home-image5" />
                <span className="home-text041">BONJOUR</span>
              </div>
              <span className="home-text042">
                <span>Moi c&apos;est</span>
                <span className="Heading"> LARISSA</span>
              </span>
              <p className="home-text045">
                <span>
                  Je m’appelle Larissa et je suis Thérapeute en Soins
                  Énergétiques à Sherbrooke, QC.
                </span>
                <br></br>
                <br></br>
                <span>
                  Ça fait 9 ans que je travaille avec des Thérapies Énergétiques
                  comme la Constellation Familiale, le Reiki, le ThetaHealing®
                  et les Fleurs de Bach.
                </span>
                <br></br>
                <br></br>
                <span>
                  Dans mon pays d&apos;origine, le Brésil, j&apos;ai exercé la
                  profession de Psychologue clinique et en ligne pendant six
                  ans.
                </span>
                <br></br>
                <br></br>
                <span>
                  Les Thérapies intégratives ont changé ma vie et c’est pour ça
                  que j&apos;ai choisi ce domaine pour aider ceux qui ont
                  besoin.
                </span>
                <br></br>
              </p>
              <div className="home-buttons2">
                <button className="home-btn-rendezvous">
                  <span className="home-text057">Rendez-vous</span>
                </button>
                <button className="home-button1">
                  <span className="home-text058">Plus sur moi</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-evenements-prochains">
        <span className="home-text059">Évenements prochains</span>
        <div className="home-container06">
          <div className="home-event1">
            <img
              alt="Rectangle41421072"
              src="/external/rectangle41421072-0br8-200w.png"
              className="home-rectangle4142"
            />
            <div className="home-frame2612237">
              <div className="home-frame2612238">
                <div className="home-frame2612219">
                  <span className="home-text060">
                    <span>$50 – $120</span>
                  </span>
                </div>
              </div>
              <div className="home-frame2612225">
                <span className="home-text062">
                  <span>Family Constellation Group In Sherbrooke</span>
                </span>
                <div className="home-frame261221901">
                  <div className="home-vuesaxlinearcalendar">
                    <div className="home-calendar">
                      <img
                        alt="Vector1072"
                        src="/external/vector1072-11al.svg"
                        className="home-vector"
                      />
                      <img
                        alt="Vector1072"
                        src="/external/vector1072-20dp.svg"
                        className="home-vector01"
                      />
                      <img
                        alt="Vector1072"
                        src="/external/vector1072-nb.svg"
                        className="home-vector02"
                      />
                      <img
                        alt="Vector1072"
                        src="/external/vector1072-cd66.svg"
                        className="home-vector03"
                      />
                      <img
                        alt="Vector1072"
                        src="/external/vector1072-q9ua.svg"
                        className="home-vector04"
                      />
                      <img
                        alt="Vector1072"
                        src="/external/vector1072-zslg.svg"
                        className="home-vector05"
                      />
                      <img
                        alt="Vector1072"
                        src="/external/vector1072-2rig.svg"
                        className="home-vector06"
                      />
                      <img
                        alt="Vector1072"
                        src="/external/vector1072-6jc5.svg"
                        className="home-vector07"
                      />
                      <img
                        alt="Vector1072"
                        src="/external/vector1072-6rf.svg"
                        className="home-vector08"
                      />
                      <img
                        alt="Vector1072"
                        src="/external/vector1072-29y8.svg"
                        className="home-vector09"
                      />
                    </div>
                  </div>
                  <span className="home-text064">
                    <span>May 27, 2023 from 9:30 am to 1:30 pm</span>
                  </span>
                </div>
                <span className="home-text066">
                  <span>
                    Come celebrate healing and self-knowledge through Family
                    Constellation Therapy in a group.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
              <div className="home-frame26122371">
                <div className="home-frame261221902">
                  <span className="home-text068">
                    <span>Read More</span>
                  </span>
                  <div className="home-vuesaxlineararrowleft">
                    <div className="home-vuesaxlineararrowleft1">
                      <div className="home-arrowleft">
                        <img
                          alt="Vector1072"
                          src="/external/vector1072-2c2.svg"
                          className="home-vector10"
                        />
                        <img
                          alt="Vector1072"
                          src="/external/vector1072-445a.svg"
                          className="home-vector11"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-event11">
            <img
              alt="Rectangle41421072"
              src="/external/rectangle41421072-0br8-200w.png"
              className="home-rectangle41421"
            />
            <div className="home-frame26122372">
              <div className="home-frame26122381">
                <div className="home-frame261221903">
                  <span className="home-text070">
                    <span>$50 – $120</span>
                  </span>
                </div>
              </div>
              <div className="home-frame26122251">
                <span className="home-text072">
                  <span>Family Constellation Group In Sherbrooke</span>
                </span>
                <div className="home-frame261221904">
                  <div className="home-vuesaxlinearcalendar1">
                    <div className="home-calendar1">
                      <img
                        alt="Vector1072"
                        src="/external/vector1072-11al.svg"
                        className="home-vector12"
                      />
                      <img
                        alt="Vector1072"
                        src="/external/vector1072-20dp.svg"
                        className="home-vector13"
                      />
                      <img
                        alt="Vector1072"
                        src="/external/vector1072-nb.svg"
                        className="home-vector14"
                      />
                      <img
                        alt="Vector1072"
                        src="/external/vector1072-cd66.svg"
                        className="home-vector15"
                      />
                      <img
                        alt="Vector1072"
                        src="/external/vector1072-q9ua.svg"
                        className="home-vector16"
                      />
                      <img
                        alt="Vector1072"
                        src="/external/vector1072-zslg.svg"
                        className="home-vector17"
                      />
                      <img
                        alt="Vector1072"
                        src="/external/vector1072-2rig.svg"
                        className="home-vector18"
                      />
                      <img
                        alt="Vector1072"
                        src="/external/vector1072-6jc5.svg"
                        className="home-vector19"
                      />
                      <img
                        alt="Vector1072"
                        src="/external/vector1072-6rf.svg"
                        className="home-vector20"
                      />
                      <img
                        alt="Vector1072"
                        src="/external/vector1072-29y8.svg"
                        className="home-vector21"
                      />
                    </div>
                  </div>
                  <span className="home-text074">
                    <span>May 27, 2023 from 9:30 am to 1:30 pm</span>
                  </span>
                </div>
                <span className="home-text076">
                  <span>
                    Come celebrate healing and self-knowledge through Family
                    Constellation Therapy in a group.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
              <div className="home-frame26122373">
                <div className="home-frame261221905">
                  <span className="home-text078">
                    <span>Read More</span>
                  </span>
                  <div className="home-vuesaxlineararrowleft2">
                    <div className="home-vuesaxlineararrowleft3">
                      <div className="home-arrowleft1">
                        <img
                          alt="Vector1072"
                          src="/external/vector1072-2c2.svg"
                          className="home-vector22"
                        />
                        <img
                          alt="Vector1072"
                          src="/external/vector1072-445a.svg"
                          className="home-vector23"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-event12">
            <img
              alt="Rectangle41421072"
              src="/external/rectangle41421072-0br8-200w.png"
              className="home-rectangle41422"
            />
            <div className="home-frame26122374">
              <div className="home-frame26122382">
                <div className="home-frame261221906">
                  <span className="home-text080">
                    <span>$50 – $120</span>
                  </span>
                </div>
              </div>
              <div className="home-frame26122252">
                <span className="home-text082">
                  <span>Family Constellation Group In Sherbrooke</span>
                </span>
                <div className="home-frame261221907">
                  <div className="home-vuesaxlinearcalendar2">
                    <div className="home-calendar2">
                      <img
                        alt="Vector1072"
                        src="/external/vector1072-11al.svg"
                        className="home-vector24"
                      />
                      <img
                        alt="Vector1072"
                        src="/external/vector1072-20dp.svg"
                        className="home-vector25"
                      />
                      <img
                        alt="Vector1072"
                        src="/external/vector1072-nb.svg"
                        className="home-vector26"
                      />
                      <img
                        alt="Vector1072"
                        src="/external/vector1072-cd66.svg"
                        className="home-vector27"
                      />
                      <img
                        alt="Vector1072"
                        src="/external/vector1072-q9ua.svg"
                        className="home-vector28"
                      />
                      <img
                        alt="Vector1072"
                        src="/external/vector1072-zslg.svg"
                        className="home-vector29"
                      />
                      <img
                        alt="Vector1072"
                        src="/external/vector1072-2rig.svg"
                        className="home-vector30"
                      />
                      <img
                        alt="Vector1072"
                        src="/external/vector1072-6jc5.svg"
                        className="home-vector31"
                      />
                      <img
                        alt="Vector1072"
                        src="/external/vector1072-6rf.svg"
                        className="home-vector32"
                      />
                      <img
                        alt="Vector1072"
                        src="/external/vector1072-29y8.svg"
                        className="home-vector33"
                      />
                    </div>
                  </div>
                  <span className="home-text084">
                    <span>May 27, 2023 from 9:30 am to 1:30 pm</span>
                  </span>
                </div>
                <span className="home-text086">
                  <span>
                    Come celebrate healing and self-knowledge through Family
                    Constellation Therapy in a group.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
              <div className="home-frame26122375">
                <div className="home-frame261221908">
                  <span className="home-text088">
                    <span>Read More</span>
                  </span>
                  <div className="home-vuesaxlineararrowleft4">
                    <div className="home-vuesaxlineararrowleft5">
                      <div className="home-arrowleft2">
                        <img
                          alt="Vector1072"
                          src="/external/vector1072-2c2.svg"
                          className="home-vector34"
                        />
                        <img
                          alt="Vector1072"
                          src="/external/vector1072-445a.svg"
                          className="home-vector35"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-event13">
            <img
              alt="Rectangle41421072"
              src="/external/rectangle41421072-0br8-200w.png"
              className="home-rectangle41423"
            />
            <div className="home-frame26122376">
              <div className="home-frame26122383">
                <div className="home-frame261221909">
                  <span className="home-text090">
                    <span>$50 – $120</span>
                  </span>
                </div>
              </div>
              <div className="home-frame26122253">
                <span className="home-text092">
                  <span>Family Constellation Group In Sherbrooke</span>
                </span>
                <div className="home-frame261221910">
                  <div className="home-vuesaxlinearcalendar3">
                    <div className="home-calendar3">
                      <img
                        alt="Vector1072"
                        src="/external/vector1072-11al.svg"
                        className="home-vector36"
                      />
                      <img
                        alt="Vector1072"
                        src="/external/vector1072-20dp.svg"
                        className="home-vector37"
                      />
                      <img
                        alt="Vector1072"
                        src="/external/vector1072-nb.svg"
                        className="home-vector38"
                      />
                      <img
                        alt="Vector1072"
                        src="/external/vector1072-cd66.svg"
                        className="home-vector39"
                      />
                      <img
                        alt="Vector1072"
                        src="/external/vector1072-q9ua.svg"
                        className="home-vector40"
                      />
                      <img
                        alt="Vector1072"
                        src="/external/vector1072-zslg.svg"
                        className="home-vector41"
                      />
                      <img
                        alt="Vector1072"
                        src="/external/vector1072-2rig.svg"
                        className="home-vector42"
                      />
                      <img
                        alt="Vector1072"
                        src="/external/vector1072-6jc5.svg"
                        className="home-vector43"
                      />
                      <img
                        alt="Vector1072"
                        src="/external/vector1072-6rf.svg"
                        className="home-vector44"
                      />
                      <img
                        alt="Vector1072"
                        src="/external/vector1072-29y8.svg"
                        className="home-vector45"
                      />
                    </div>
                  </div>
                  <span className="home-text094">
                    <span>May 27, 2023 from 9:30 am to 1:30 pm</span>
                  </span>
                </div>
                <span className="home-text096">
                  <span>
                    Come celebrate healing and self-knowledge through Family
                    Constellation Therapy in a group.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
              <div className="home-frame26122377">
                <div className="home-frame261221911">
                  <span className="home-text098">
                    <span>Read More</span>
                  </span>
                  <div className="home-vuesaxlineararrowleft6">
                    <div className="home-vuesaxlineararrowleft7">
                      <div className="home-arrowleft3">
                        <img
                          alt="Vector1072"
                          src="/external/vector1072-2c2.svg"
                          className="home-vector46"
                        />
                        <img
                          alt="Vector1072"
                          src="/external/vector1072-445a.svg"
                          className="home-vector47"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="home-footer">
        <div className="home-container07"></div>
        <div className="home-container08">
          <img alt="image" src="/logo-larissa.svg" className="home-image6" />
          <div className="home-icon-group1">
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon10">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon12">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
        <div className="home-container09"></div>
      </footer>
    </div>
  )
}

export default Home
