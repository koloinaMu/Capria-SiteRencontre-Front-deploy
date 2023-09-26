import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderSlot, m as maybeRenderHead, f as renderComponent, _ as __astro_tag_component__ } from './astro.cb8f9efd.mjs';
import 'html-escaper';
/* empty css                          *//* empty css                                    *//* empty css                                   */import { useState, useEffect, Component, useRef } from 'react';
/* empty css                                 */import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import Cookies from 'js-cookie';
/* empty css                               */import io from 'socket.io-client';
/* empty css                               *//* empty css                          *//* empty css                               */
const $$Astro$i = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="description" content="Astro description">
		<meta name="viewport" content="width=device-width">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
		<title>${title}</title>
	${renderHead()}</head>
	<body>
		${renderSlot($$result, $$slots["default"])}
	</body></html>`;
}, "E:/PROJET/perso/capria/Capria-SiteRencontre-Front-deploy/src/layouts/Layout.astro", void 0);

const $$Astro$h = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Card;
  const { href, title, body } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="link-card astro-DOHJNAO5">
	<a${addAttribute(href, "href")} class="astro-DOHJNAO5">
		<h2 class="astro-DOHJNAO5">
			${title}
			<span class="astro-DOHJNAO5">&rarr;</span>
		</h2>
		<p class="astro-DOHJNAO5">
			${body}
		</p>
	</a>
</li>`;
}, "E:/PROJET/perso/capria/Capria-SiteRencontre-Front-deploy/src/components/Card.astro", void 0);

const $$Astro$g = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro.", "class": "astro-J7PV25F6" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead()}<main class="astro-J7PV25F6">
		<h1 class="astro-J7PV25F6">Welcome to <span class="text-gradient astro-J7PV25F6">Astro</span></h1>
		<p class="instructions astro-J7PV25F6">
			To get started, open the directory <code class="astro-J7PV25F6">src/pages</code> in your project.<br class="astro-J7PV25F6">
			<strong class="astro-J7PV25F6">Code Challenge:</strong> Tweak the "Welcome to Astro" message above.
		</p>
		<ul role="list" class="link-card-grid astro-J7PV25F6">
			${renderComponent($$result2, "Card", $$Card, { "href": "https://docs.astro.build/", "title": "Documentation", "body": "Learn how Astro works and explore the official API docs.", "class": "astro-J7PV25F6" })}
			${renderComponent($$result2, "Card", $$Card, { "href": "https://astro.build/integrations/", "title": "Integrations", "body": "Supercharge your project with new frameworks and libraries.", "class": "astro-J7PV25F6" })}
			${renderComponent($$result2, "Card", $$Card, { "href": "https://astro.build/themes/", "title": "Themes", "body": "Explore a galaxy of community-built starter themes.", "class": "astro-J7PV25F6" })}
			${renderComponent($$result2, "Card", $$Card, { "href": "https://astro.build/chat/", "title": "Community", "body": "Come say hi to our amazing Discord community. \u2764\uFE0F", "class": "astro-J7PV25F6" })}
		</ul>
	</main>
` })}`;
}, "E:/PROJET/perso/capria/Capria-SiteRencontre-Front-deploy/src/pages/index.astro", void 0);

const $$file$e = "E:/PROJET/perso/capria/Capria-SiteRencontre-Front-deploy/src/pages/index.astro";
const $$url$e = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file$e,
	url: $$url$e
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$f = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`

${maybeRenderHead()}<footer class=" p-t-75 p-b-32 astro-SZ7XMLTE">
    <p class="stext-107 cl6 txt-center astro-SZ7XMLTE">
      Copyright &copy; All rights reserved | Capria 2023
    </p>
</footer>`;
}, "E:/PROJET/perso/capria/Capria-SiteRencontre-Front-deploy/src/components/Footer.astro", void 0);

function api(query) {
    return "http://127.0.0.1:3100/"+query
}

const $$Astro$e = createAstro();
const $$ForgotPassword = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$ForgotPassword;
  var erreur = "";
  var step = 1;
  var mail = "";
  const stepp = Astro2.url.searchParams.get("step");
  if (stepp != null) {
    step = parseInt(stepp);
    const maill = Astro2.url.searchParams.get("mail");
    if (maill != null) {
      mail = maill;
    }
  }
  if (Astro2.request.method === "POST") {
    try {
      const data = await Astro2.request.formData();
      var stepPost = 1;
      const postStep = data.get("step");
      if (postStep != null) {
        stepPost = parseInt(postStep.toString());
      }
      var mailPost = String(data.get("mail"));
      if (stepPost == 1) {
        const jsonObject = { mail: mailPost };
        const jsonString = JSON.stringify(jsonObject);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Accept", "application/json");
        const response = await fetch(api("users/mdp"), {
          headers: myHeaders,
          method: "POST",
          body: jsonString
        });
      } else {
        const response = await fetch(api("users/email/" + mailPost), {
          headers: { "Content-Type": "application/json" },
          method: "GET"
        });
        const users = await response.json();
        const user = users[0];
        const retour = await fetch(api("users/mdp/" + user.id), {
          headers: { "Content-Type": "application/json" },
          method: "PUT",
          body: JSON.stringify({
            "mdp": user.nom
          })
        });
        const retourJson = await retour.json();
        if (retourJson.ok) {
          var rep = JSON.stringify(users);
          localStorage.setItem("user", rep);
          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          myHeaders.append("Accept", "application/json");
          const userAbo = await fetch(api("subscription/" + user.id), {
            headers: myHeaders,
            method: "GET"
          });
          const abo = await userAbo.json();
          if (abo.length == 0) {
            localStorage.setItem("abonnement", "");
          } else {
            const ajd = /* @__PURE__ */ new Date();
            const dateFin = new Date(abo[0].date_fin);
            if (dateFin > ajd) {
              localStorage.setItem("abonnement", JSON.stringify(abo[0]));
            } else {
              localStorage.setItem("abonnement", "");
            }
          }
          return Astro2.redirect("/accueil?id=" + user.id);
        } else {
          throw Error("error");
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  return renderTemplate`<html lang="en" class="astro-SJXCI7TL">
<head>
	<title>Mot de passe oublié</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
<!--===============================================================================================-->	
	<link rel="icon" type="image/png" href="images/icons/favicon.png">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="fonts/iconic/css/material-design-iconic-font.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="fonts/linearicons-v1.0.0/icon-font.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="css/util.css">
	<link rel="stylesheet" type="text/css" href="css/main.css">
<!--===============================================================================================-->
${renderHead()}</head>
<body class="animsition astro-SJXCI7TL">

    <!-- Section: Design Block -->
<section class="text-center text-lg-start astro-SJXCI7TL">
    
    <!-- Jumbotron -->
    <div class="container py-4 astro-SJXCI7TL">
      <div class="row g-0 align-items-center astro-SJXCI7TL" style="margin-top: 5%;">
        <div class="col-md-1 astro-SJXCI7TL"></div>
        <div class="col-lg-5 mb-5 mb-lg-0 astro-SJXCI7TL" style="z-index: 100000;">
          <div class="card cascading-right jumbotron astro-SJXCI7TL" style="
              background: hsla(0, 0%, 100%, 0.55);
              backdrop-filter: blur(30px);
              box-shadow: 0px 0px 15px -5px;
              border: none;
              box-shadow-right: none;
              ">
            <div class="card-body p-5 shadow-5 text-center astro-SJXCI7TL">
              <h2 class="fw-bold mb-5 astro-SJXCI7TL">Mot de passe oublié</h2>
              ${step == 1 && renderTemplate`<form method="post" class="astro-SJXCI7TL">

                    <div class="form-group astro-SJXCI7TL">
                        <input type="email" id="email" name="mail" class="form-control astro-SJXCI7TL" placeholder=" ">
                        <label class="form-label astro-SJXCI7TL">Adresse email</label>
                    </div>
                    <input type="hidden" name="step" value="1" class="astro-SJXCI7TL">
                
                    ${erreur }
                    <!-- Submit button -->
                    <button type="submit" class="btn btn-primary btn-block mb-4 submit-btn astro-SJXCI7TL">
                    Confirmer
                    </button>
    
                    
                </form><p class="astro-SJXCI7TL">Vous n'avez pas de compte? <a href="/registration" class="astro-SJXCI7TL">Inscrivez-vous.</a></p>`}
              ${step == 2 && renderTemplate`<form method="post" class="astro-SJXCI7TL">

                    <div class="form-group astro-SJXCI7TL">
                        <input type="email" id="email" name="mail" class="form-control astro-SJXCI7TL"${addAttribute(mail, "value")} readonly>
                        <label class="form-label astro-SJXCI7TL">Adresse email</label>
                    </div>
                    <div class="form-group mb-4 astro-SJXCI7TL">
                        <input type="password" id="password" name="mdp" class="form-control astro-SJXCI7TL" placeholder=" ">
                        <label class="form-label astro-SJXCI7TL" for="password">Nouveau mot de passe</label>
                    </div>
                    <input type="hidden" name="step" value="2" class="astro-SJXCI7TL">
                
                    ${erreur }
                    <!-- Submit button -->
                    <button type="submit" class="btn btn-primary btn-block mb-4 submit-btn astro-SJXCI7TL">
                    Confirmer
                    </button>
    
                    
                </form>`}
              
            </div>
          </div>
        </div>
  
        <div class="col-lg-5 mb-5 mb-lg-0 astro-SJXCI7TL">
          <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" style="box-shadow: 0px 0px 20px -5px;" class="w-100 rounded-4 shadow-4 astro-SJXCI7TL" alt="">
        </div>
        <div class="col-md-1 astro-SJXCI7TL"></div>
      </div>
    </div>
    <!-- Jumbotron -->
  </section>
  <!-- Section: Design Block -->

  ${renderComponent($$result, "Footer", $$Footer, { "class": "astro-SJXCI7TL" })}
    
</body></html>`;
}, "E:/PROJET/perso/capria/Capria-SiteRencontre-Front-deploy/src/pages/forgot-password.astro", void 0);

const $$file$d = "E:/PROJET/perso/capria/Capria-SiteRencontre-Front-deploy/src/pages/forgot-password.astro";
const $$url$d = "/forgot-password";

const forgotPassword = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$ForgotPassword,
	file: $$file$d,
	url: $$url$d
}, Symbol.toStringTag, { value: 'Module' }));

function Online_offline(props) {
  const socket = io(api(""));
  useState();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))[0];
    socket.on("connect", function() {
      socket.emit("client_connect", user.id);
      socket.on("getOnlineUsers", (users) => {
        console.log("online_offline", users);
      });
    });
    socket.on("disconnect", () => {
      socket.emit("client_disconnect", user.id);
    });
    return () => {
    };
  }, []);
}
__astro_tag_component__(Online_offline, "@astrojs/react");

var __freeze$4 = Object.freeze;
var __defProp$4 = Object.defineProperty;
var __template$4 = (cooked, raw) => __freeze$4(__defProp$4(cooked, "raw", { value: __freeze$4(raw || cooked.slice()) }));
var _a$4;
const $$Astro$d = createAstro();
const $$Page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Page;
  const { title } = Astro2.props;
  var landing = false;
  if (Astro2.url.pathname == "/landing") {
    landing = true;
  }
  const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user"))[0] : [];
  return renderTemplate(_a$4 || (_a$4 = __template$4(['<html lang="en">\n<head>\n	<title>', '</title>\n	<meta charset="UTF-8">\n	<meta name="no-referrer-when-downgrade" content="origin">\n	<meta name="viewport" content="width=device-width, initial-scale=1">\n<!--===============================================================================================-->	\n	<link rel="icon" type="image/png" href="images/icons/favicon.png">\n<!--===============================================================================================-->\n	<link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css">\n<!--===============================================================================================-->\n	<!-- <link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css"> -->\n<!--===============================================================================================-->\n	<link rel="stylesheet" type="text/css" href="fonts/iconic/css/material-design-iconic-font.min.css">\n<!--===============================================================================================-->\n	<link rel="stylesheet" type="text/css" href="fonts/linearicons-v1.0.0/icon-font.min.css">\n<!--===============================================================================================-->\n	<link rel="stylesheet" type="text/css" href="vendor/animate/animate.css">\n<!--===============================================================================================-->	\n	<link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css">\n<!--===============================================================================================-->\n	<link rel="stylesheet" type="text/css" href="vendor/slick/slick.css">\n<!--===============================================================================================-->\n	<link rel="stylesheet" type="text/css" href="vendor/animsition/css/animsition.min.css">\n<!--===============================================================================================-->\n	<link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css">\n<!--===============================================================================================-->\n	<link rel="stylesheet" type="text/css" href="vendor/perfect-scrollbar/perfect-scrollbar.css">\n<!--===============================================================================================-->\n	<link rel="stylesheet" type="text/css" href="css/util.css">\n	<link rel="stylesheet" type="text/css" href="css/main.css">\n<!--===============================================================================================-->\n	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.css">\n  	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/brands.css">\n  	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/fontawesome.min.css">\n  	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/regular.min.css">\n	\n\n', '</head>\n<body class="animsition">\n	', "\n\n	", "\n    ", `

	
	<div class="wrap-header-cart js-panel-cart">
		<div class="s-full js-hide-cart"></div>

		<div class="header-cart flex-col-l p-l-65 p-r-25">
			<div class="header-cart-title flex-w flex-sb-m p-b-8">
				<span class="mtext-103 cl2">
					Notification
				</span>

				<div class="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart">
					<i class="zmdi zmdi-close"></i>
				</div>
			</div>
			
			<div class="header-cart-content flex-w js-pscroll">
				<p>Vous n'avez aucune notification.</p>
				
				
				<div class="w-full">
					

					<div class="header-cart-buttons flex-w w-full">
						

						
					</div>
				</div>
			</div>
		</div>
	</div>
    
	<!-- Footer -->
	`, `

    <!-- Back to top -->
	<div class="btn-back-to-top" id="myBtn">
		<span class="symbol-btn-back-to-top">
			<i class="zmdi zmdi-chevron-up"></i>
		</span>
	</div>

    <!--===============================================================================================-->	
	<script src="vendor/jquery/jquery-3.2.1.min.js"><\/script>
<!--===============================================================================================-->
	<script src="vendor/animsition/js/animsition.min.js"><\/script>
<!--===============================================================================================-->
	<script src="vendor/bootstrap/js/popper.js"><\/script>
	<script src="vendor/bootstrap/js/bootstrap.min.js"><\/script>
<!--===============================================================================================-->
	<script src="vendor/select2/select2.min.js"><\/script>
	
<!--===============================================================================================-->
	<script src="vendor/daterangepicker/moment.min.js"><\/script>
	<script src="vendor/daterangepicker/daterangepicker.js"><\/script>
<!--===============================================================================================-->
	<script src="vendor/slick/slick.min.js"><\/script>
	<script src="js/slick-custom.js"><\/script>
<!--===============================================================================================-->
	<!-- <script is:inline src="vendor/parallax100/parallax100.js"><\/script> -->
	<!-- <script>
        $('.parallax100').parallax100();
	<\/script> -->
<!--===============================================================================================-->
	<script src="vendor/MagnificPopup/jquery.magnific-popup.min.js"><\/script>
	
<!--===============================================================================================-->
	<script src="vendor/isotope/isotope.pkgd.min.js"><\/script>
<!--===============================================================================================-->
	<script src="vendor/sweetalert/sweetalert.min.js"><\/script>
	
<!--===============================================================================================-->
	<script src="vendor/perfect-scrollbar/perfect-scrollbar.min.js"><\/script>
	
<!--===============================================================================================-->
	<script src="js/main.js"><\/script>
	<script src="https://kit.fontawesome.com/yourcode.js" crossorigin="anonymous"><\/script>

</body>
</html>`])), title, renderHead(), !landing && renderTemplate`${renderComponent($$result, "Online_offline", Online_offline, { "user": user, "client:load": true, "client:component-hydration": "load", "client:component-path": "E:/PROJET/perso/capria/Capria-SiteRencontre-Front-deploy/src/components/online_offline.jsx", "client:component-export": "default" })}`, landing && renderTemplate`${renderSlot($$result, $$slots["default"])}`, landing == false && renderTemplate`<div class="container">
			${renderSlot($$result, $$slots["default"])}
		</div>`, renderComponent($$result, "Footer", $$Footer, {}));
}, "E:/PROJET/perso/capria/Capria-SiteRencontre-Front-deploy/src/components/Page.astro", void 0);

function Icon_header() {
  useState([]);
  const [disconnect, setDisconnect] = useState(false);
  const socket = io(api(""));
  useEffect(() => {
    socket.on("connect", () => {
      socket.on("getNotification", (data) => {
        console.log("Some notifications ", data);
      });
    });
  }, []);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))[0];
    if (disconnect) {
      localStorage.removeItem("user");
      localStorage.removeItem("abonnement");
      socket.emit("client_disconnect", user.id);
      window.location.href = "/login";
    }
  }, [disconnect]);
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsxs("div", {
      className: "wrap-icon-header flex-w flex-r-m",
      children: [/* @__PURE__ */ jsx("div", {
        className: "icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10",
        children: /* @__PURE__ */ jsx("a", {
          href: "/chat",
          children: /* @__PURE__ */ jsx("i", {
            className: "fa-sharp fa-regular fa-message text-dark hov-cl1"
          })
        })
      }), /* @__PURE__ */ jsx("div", {
        className: "icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 js-show-cart",
        children: /* @__PURE__ */ jsx("i", {
          className: "fa-sharp fa-regular fa-bell"
        })
      }), /* @__PURE__ */ jsx("div", {
        className: "icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 ",
        "data-notify": "2",
        children: /* @__PURE__ */ jsx("i", {
          className: "fa-sharp fa-solid fa-right-from-bracket text-dark",
          onClick: () => {
            setDisconnect(true);
          }
        })
      })]
    })
  });
}
__astro_tag_component__(Icon_header, "@astrojs/react");

function NavBar() {
  const [currentPage, setCurrentPage] = useState();
  const [user, setUser] = useState();
  const socket = io(api(""));
  const [disconnect, setDisconnect] = useState(false);
  useEffect(() => {
    setCurrentPage(window.location.pathname);
    setUser(JSON.parse(localStorage.getItem("user"))[0]);
  }, []);
  useEffect(() => {
    if (disconnect) {
      localStorage.removeItem("user");
      localStorage.removeItem("abonnement");
      socket.emit("client_disconnect", user.id);
      window.location.href = "/login";
    }
  }, [disconnect]);
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsxs("header", {
      className: "header-v4",
      children: [/* @__PURE__ */ jsx("div", {
        className: "container-menu-desktop",
        children: /* @__PURE__ */ jsx("div", {
          className: "wrap-menu-desktop how-shadow1",
          style: {
            "top": 0
          },
          children: /* @__PURE__ */ jsxs("nav", {
            className: "limiter-menu-desktop container",
            children: [/* @__PURE__ */ jsx("a", {
              href: "/accueil",
              className: "logo",
              children: /* @__PURE__ */ jsx("img", {
                src: "images/icons/logo-01.png",
                alt: "IMG-LOGO"
              })
            }), /* @__PURE__ */ jsx("div", {
              className: "menu-desktop",
              children: /* @__PURE__ */ jsxs("ul", {
                className: "main-menu",
                children: [/* @__PURE__ */ jsx("li", {
                  className: currentPage == "/accueil" ? "active-menu" : "menu",
                  children: /* @__PURE__ */ jsx("a", {
                    href: "/accueil",
                    children: "Accueil"
                  })
                }), /* @__PURE__ */ jsx("li", {
                  className: currentPage == "/abonnement" ? "active-menu" : "menu",
                  children: /* @__PURE__ */ jsx("a", {
                    href: "/abonnement",
                    children: "Abonnement"
                  })
                }), /* @__PURE__ */ jsx("li", {
                  className: currentPage == "/profile" ? "active-menu" : "menu",
                  children: /* @__PURE__ */ jsx("a", {
                    href: "/profile?id=" + user?.id,
                    children: "Profil"
                  })
                }), /* @__PURE__ */ jsx("li", {
                  className: currentPage == "/assistance" ? "active-menu" : "menu",
                  children: /* @__PURE__ */ jsx("a", {
                    href: "/assistance",
                    children: "Assistance"
                  })
                })]
              })
            }), /* @__PURE__ */ jsx(Icon_header, {})]
          })
        })
      }), /* @__PURE__ */ jsxs("div", {
        className: "wrap-header-mobile",
        children: [/* @__PURE__ */ jsx("div", {
          className: "logo-mobile",
          children: /* @__PURE__ */ jsx("a", {
            href: "/accueil",
            children: /* @__PURE__ */ jsx("img", {
              src: "images/icons/logo-01.png",
              alt: "IMG-LOGO"
            })
          })
        }), /* @__PURE__ */ jsxs("div", {
          className: "wrap-icon-header flex-w flex-r-m m-r-15",
          children: [/* @__PURE__ */ jsx("div", {
            className: "icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search",
            children: /* @__PURE__ */ jsx("i", {
              className: "zmdi zmdi-search"
            })
          }), /* @__PURE__ */ jsx("div", {
            className: "icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 ",
            "data-notify": "2",
            children: /* @__PURE__ */ jsx("i", {
              className: "zmdi zmdi-power",
              onClick: () => {
                setDisconnect(true);
              }
            })
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "btn-show-menu-mobile hamburger hamburger--squeeze",
          children: /* @__PURE__ */ jsx("span", {
            className: "hamburger-box",
            children: /* @__PURE__ */ jsx("span", {
              className: "hamburger-inner"
            })
          })
        })]
      }), /* @__PURE__ */ jsx("div", {
        className: "menu-mobile",
        children: /* @__PURE__ */ jsxs("ul", {
          className: "main-menu-m",
          children: [/* @__PURE__ */ jsx("li", {
            children: /* @__PURE__ */ jsx("a", {
              href: "/accueil",
              children: "Accueil"
            })
          }), /* @__PURE__ */ jsx("li", {
            children: /* @__PURE__ */ jsx("a", {
              href: "/abonnement",
              children: "Abonnement"
            })
          }), /* @__PURE__ */ jsx("li", {
            children: /* @__PURE__ */ jsx("a", {
              href: "/chat",
              children: "Chat"
            })
          }), /* @__PURE__ */ jsx("li", {
            children: /* @__PURE__ */ jsx("a", {
              href: "/profile?id=" + user?.id,
              children: "Profil"
            })
          }), /* @__PURE__ */ jsx("li", {
            children: /* @__PURE__ */ jsx("a", {
              href: "/assistance",
              children: "Assistance"
            })
          })]
        })
      }), /* @__PURE__ */ jsx("div", {
        className: "modal-search-header flex-c-m trans-04 js-hide-modal-search",
        children: /* @__PURE__ */ jsxs("div", {
          className: "container-search-header",
          children: [/* @__PURE__ */ jsx("button", {
            className: "flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search",
            children: /* @__PURE__ */ jsx("img", {
              src: "images/icons/icon-close2.png",
              alt: "CLOSE"
            })
          }), /* @__PURE__ */ jsxs("form", {
            className: "wrap-search-header flex-w p-l-15",
            children: [/* @__PURE__ */ jsx("button", {
              className: "flex-c-m trans-04",
              children: /* @__PURE__ */ jsx("i", {
                className: "zmdi zmdi-search"
              })
            }), /* @__PURE__ */ jsx("input", {
              className: "plh3",
              type: "text",
              name: "search",
              placeholder: "Search..."
            })]
          })]
        })
      })]
    })
  });
}
__astro_tag_component__(NavBar, "@astrojs/react");

function Accueil_component() {
  const [user, setUser] = useState();
  const [profils, setProfils] = useState([]);
  const [tableauAge, setTableauAge] = useState([]);
  const [filtres, setFiltres] = useState([]);
  const [nameSearch, setNameSearch] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [ageFilter, setAgeFilter] = useState("");
  useEffect(() => {
    const userr = JSON.parse(localStorage.getItem("user"))[0];
    setUser(userr);
    var ageList = tableauAge;
    ageList.push("18ans-25ans");
    ageList.push("25ans-30ans");
    for (let i = 30; i < 60; i += 10) {
      var ag = i + "ans-" + (i + 10) + "ans";
      ageList.push(ag);
      setTableauAge(ageList);
    }
    var obj = {
      "id": userr.id,
      "filtres": filtres
    };
    const jsonString = JSON.stringify(obj);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");
    fetch(api("userList"), {
      headers: myHeaders,
      method: "POST",
      body: jsonString
    }).then((res) => {
      res.json().then((res2) => {
        setProfils(res2);
      });
    });
  }, []);
  const updateUserList = (filtres2) => {
    const userr = JSON.parse(localStorage.getItem("user"))[0];
    var obj = {
      "id": userr.id,
      "filtres": filtres2
    };
    const jsonString = JSON.stringify(obj);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");
    fetch(api("userList"), {
      headers: myHeaders,
      method: "POST",
      body: jsonString
    }).then((res) => {
      res.json().then((res2) => {
        setProfils(res2);
      });
    });
  };
  useEffect(() => {
    var filtreTemp = [];
    if (genderFilter != "" || ageFilter != "") {
      filtreTemp.push(1);
      const genre = genderFilter;
      filtreTemp.push(genre);
      var ageFiltre = ageFilter;
      if (ageFiltre == "Tous") {
        setFiltres(filtreTemp.push(""));
      } else if (ageFiltre == "60") {
        setFiltres(filtreTemp.push("60"));
      } else {
        ageFiltre = String(ageFiltre);
        var ages = ageFiltre?.toString().split("-");
        ages.map((age) => {
          filtreTemp.push(age.toString().split("ans")[0]);
        });
        setFiltres(filtreTemp);
      }
      updateUserList(filtreTemp);
    } else if (nameSearch != "") {
      filtreTemp.push(0);
      const nom = nameSearch;
      filtreTemp.push(nom);
      setFiltres(filtreTemp);
      updateUserList(filtreTemp);
    } else {
      setFiltres(filtreTemp);
      updateUserList(filtreTemp);
    }
    console.log(filtreTemp);
  }, [nameSearch, genderFilter, ageFilter]);
  const search = (e) => {
    e.preventDefault();
    var filtreTemp = [];
    if (genderFilter != "" || ageFilter != "") {
      filtreTemp.push(1);
      const genre = genderFilter;
      filtreTemp.push(genre);
      var ageFiltre = ageFilter;
      if (ageFiltre == "Tous") {
        setFiltres(filtreTemp.push(""));
      } else if (ageFiltre == "60") {
        setFiltres(filtreTemp.push("60"));
      } else {
        ageFiltre = String(ageFiltre);
        var ages = ageFiltre?.toString().split("-");
        ages.map((age) => {
          filtreTemp.push(age.toString().split("ans")[0]);
        });
        setFiltres(filtreTemp);
      }
      updateUserList(filtreTemp);
    } else if (nameSearch != "") {
      filtreTemp.push(0);
      const nom = nameSearch;
      filtreTemp.push(nom);
      setFiltres(filtreTemp);
      updateUserList(filtreTemp);
    } else {
      setFiltres(filtreTemp);
      updateUserList(filtreTemp);
    }
    console.log(filtreTemp);
  };
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsx("section", {
      className: "bg0 p-t-80 p-b-50",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container",
        children: [/* @__PURE__ */ jsx("div", {
          className: "p-b-10",
          children: /* @__PURE__ */ jsx("h3", {
            className: "ltext-103 cl5",
            children: "Suggestions"
          })
        }), /* @__PURE__ */ jsxs("div", {
          className: "flex-w flex-sb-m p-b-52",
          children: [/* @__PURE__ */ jsx("div", {
            className: "flex-w flex-l-m filter-tope-group m-tb-10"
          }), /* @__PURE__ */ jsxs("div", {
            className: "flex-w flex-c-m m-tb-10",
            children: [/* @__PURE__ */ jsxs("div", {
              className: "flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn1 trans-04 m-r-8 m-tb-4 js-show-filter",
              children: [/* @__PURE__ */ jsx("i", {
                className: "icon-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-filter-list"
              }), /* @__PURE__ */ jsx("i", {
                className: "icon-close-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"
              }), "Filtre"]
            }), /* @__PURE__ */ jsxs("div", {
              className: "flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn1 trans-04 m-tb-4 js-show-search",
              children: [/* @__PURE__ */ jsx("i", {
                className: "icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search"
              }), /* @__PURE__ */ jsx("i", {
                className: "icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"
              }), "Search"]
            })]
          }), /* @__PURE__ */ jsx("div", {
            className: "dis-none panel-search w-full p-t-10 p-b-15",
            children: /* @__PURE__ */ jsx("div", {
              className: "bor8 dis-flex p-l-15",
              children: /* @__PURE__ */ jsxs("form", {
                onSubmit: search,
                children: [/* @__PURE__ */ jsx("button", {
                  className: "size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04",
                  children: /* @__PURE__ */ jsx("i", {
                    className: "zmdi zmdi-search"
                  })
                }), /* @__PURE__ */ jsx("input", {
                  className: "mtext-107 cl2 size-114 plh2 p-r-15",
                  onChange: (e) => {
                    setNameSearch(e.target.value);
                  },
                  type: "text",
                  name: "nom",
                  placeholder: "Search"
                })]
              })
            })
          }), /* @__PURE__ */ jsx("div", {
            className: "dis-none panel-filter w-full p-t-10",
            children: /* @__PURE__ */ jsx("form", {
              onSubmit: (e) => {
                search(e);
              },
              children: /* @__PURE__ */ jsxs("div", {
                className: "wrap-filter flex-w bg6 w-full p-lr-40 p-t-27 p-lr-15-sm",
                children: [/* @__PURE__ */ jsxs("div", {
                  className: "filter-col1 p-r-15 p-b-27",
                  children: [/* @__PURE__ */ jsx("div", {
                    className: "mtext-102 cl2 p-b-15",
                    children: "Genre"
                  }), /* @__PURE__ */ jsxs("ul", {
                    children: [/* @__PURE__ */ jsx("li", {
                      className: "p-b-6",
                      children: /* @__PURE__ */ jsxs("div", {
                        className: "form-check",
                        children: [/* @__PURE__ */ jsx("input", {
                          className: "form-check-input filter-link-active",
                          onChange: (e) => {
                            setGenderFilter(e.target.value);
                          },
                          type: "radio",
                          name: "genre",
                          id: "allGender",
                          value: "",
                          checked: genderFilter == ""
                        }), /* @__PURE__ */ jsx("label", {
                          className: "form-check-label",
                          htmlFor: "allGender",
                          children: "Tous"
                        })]
                      })
                    }), /* @__PURE__ */ jsx("li", {
                      className: "p-b-6",
                      children: /* @__PURE__ */ jsxs("div", {
                        className: "form-check",
                        children: [/* @__PURE__ */ jsx("input", {
                          className: "form-check-input",
                          onChange: (e) => {
                            setGenderFilter(e.target.value);
                          },
                          type: "radio",
                          name: "genre",
                          id: "genderM",
                          value: "H",
                          checked: genderFilter == "H"
                        }), /* @__PURE__ */ jsx("label", {
                          className: "form-check-label",
                          htmlFor: "genderM",
                          children: "Homme"
                        })]
                      })
                    }), /* @__PURE__ */ jsx("li", {
                      className: "p-b-6",
                      children: /* @__PURE__ */ jsxs("div", {
                        className: "form-check",
                        children: [/* @__PURE__ */ jsx("input", {
                          className: "form-check-input",
                          onChange: (e) => {
                            setGenderFilter(e.target.value);
                          },
                          type: "radio",
                          name: "genre",
                          id: "genderF",
                          value: "F",
                          checked: genderFilter == "F"
                        }), /* @__PURE__ */ jsx("label", {
                          className: "form-check-label",
                          htmlFor: "genderF",
                          children: "Femme"
                        })]
                      })
                    })]
                  })]
                }), /* @__PURE__ */ jsxs("div", {
                  className: "filter-col2 p-r-15 p-b-27",
                  children: [/* @__PURE__ */ jsx("div", {
                    className: "mtext-102 cl2 p-b-15",
                    children: "Age"
                  }), /* @__PURE__ */ jsxs("ul", {
                    children: [/* @__PURE__ */ jsx("li", {
                      className: "p-b-6",
                      children: /* @__PURE__ */ jsxs("div", {
                        className: "form-check",
                        children: [/* @__PURE__ */ jsx("input", {
                          className: "form-check-input",
                          onChange: (e) => {
                            setAgeFilter(e.target.value);
                          },
                          type: "radio",
                          name: "age",
                          id: "allAge",
                          value: "",
                          checked: ageFilter == ""
                        }), /* @__PURE__ */ jsx("label", {
                          className: "form-check-label",
                          htmlFor: "allAge",
                          children: "Tous"
                        })]
                      })
                    }), tableauAge.map((ages, key) => /* @__PURE__ */ jsx("li", {
                      className: "p-b-6",
                      children: /* @__PURE__ */ jsxs("div", {
                        className: "form-check",
                        children: [/* @__PURE__ */ jsx("input", {
                          className: "form-check-input",
                          type: "radio",
                          onChange: (e) => {
                            setAgeFilter(e.target.value);
                          },
                          name: "age",
                          id: "age" + key,
                          value: ages,
                          checked: ageFilter == ages
                        }), /* @__PURE__ */ jsx("label", {
                          className: "form-check-label",
                          htmlFor: "age" + key,
                          children: ages
                        })]
                      })
                    }, key)), /* @__PURE__ */ jsx("li", {
                      className: "p-b-6",
                      children: /* @__PURE__ */ jsxs("div", {
                        className: "form-check",
                        children: [/* @__PURE__ */ jsx("input", {
                          className: "form-check-input",
                          type: "radio",
                          onChange: (e) => {
                            setAgeFilter(e.target.value);
                          },
                          name: "age",
                          id: "agePlus",
                          value: "60"
                        }), /* @__PURE__ */ jsx("label", {
                          className: "form-check-label",
                          htmlFor: "agePlus",
                          children: "60ans+"
                        })]
                      })
                    })]
                  })]
                })]
              })
            })
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "row isotope-grid",
          children: profils && profils.map((profil, key) => /* @__PURE__ */ jsx("div", {
            className: "col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women",
            children: /* @__PURE__ */ jsxs("div", {
              className: "block2",
              children: [/* @__PURE__ */ jsxs("div", {
                className: "block2-pic hov-img0 block-img ",
                style: {
                  width: "auto",
                  height: "270px"
                },
                children: [/* @__PURE__ */ jsx("img", {
                  src: profil.photoDeProfil,
                  alt: "IMG-PRODUCT"
                }), /* @__PURE__ */ jsx("a", {
                  href: "chat?id=" + profil.id,
                  className: "block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04",
                  children: "Chat"
                })]
              }), /* @__PURE__ */ jsx("div", {
                className: "block2-txt flex-w flex-t p-t-14",
                children: /* @__PURE__ */ jsx("div", {
                  className: "block2-txt-child1 flex-col-l ",
                  children: /* @__PURE__ */ jsx("a", {
                    href: "/profile?id=" + profil.id,
                    className: "stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6",
                    children: profil.pseudo
                  })
                })
              })]
            })
          }, key))
        })]
      })
    })
  });
}
__astro_tag_component__(Accueil_component, "@astrojs/react");

const $$Astro$c = createAstro();
const $$AccueilBackup = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$AccueilBackup;
  console.log("Navigateur isika izao", localStorage.getItem("user"));
  return renderTemplate`${renderComponent($$result, "Page", $$Page, { "title": "Tongasoa", "class": "astro-TVB3CCAD" }, { "default": ($$result2) => renderTemplate`
    
	
	${renderComponent($$result2, "NavBar", NavBar, { "class": "astro-TVB3CCAD" })}
	${renderComponent($$result2, "AccueilComponent", Accueil_component, { "client:load": true, "client:component-hydration": "load", "client:component-path": "E:/PROJET/perso/capria/Capria-SiteRencontre-Front-deploy/src/components/Accueil_component", "client:component-export": "default", "class": "astro-TVB3CCAD" })}
	

	
	
	${maybeRenderHead()}<section class="bg0 p-t-80 p-b-50 astro-TVB3CCAD">
		<div class="container astro-TVB3CCAD">
			<div class="p-b-10 astro-TVB3CCAD">
				<h3 class="ltext-103 cl5 astro-TVB3CCAD">
					Suggestions
				</h3>
			</div>

			<div class="flex-w flex-sb-m p-b-52 astro-TVB3CCAD">
				<div class="flex-w flex-l-m filter-tope-group m-tb-10 astro-TVB3CCAD">
					
				</div>

				<div class="flex-w flex-c-m m-tb-10 astro-TVB3CCAD">
					<div class="flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn1 trans-04 m-r-8 m-tb-4 js-show-filter astro-TVB3CCAD">
						<i class="icon-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-filter-list astro-TVB3CCAD"></i>
						<i class="icon-close-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none astro-TVB3CCAD"></i>
						 Filtre
					</div>

					<!-- <div class="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search">
						<i class="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search"></i>
						<i class="icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
						Search
					</div> -->
				</div>
				
				
				<div class="dis-none panel-search w-full p-t-10 p-b-15 astro-TVB3CCAD">
					<div class="bor8 dis-flex p-l-15 astro-TVB3CCAD">
					<form method="post" class="astro-TVB3CCAD">
						<button class="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04 astro-TVB3CCAD">
							<i class="zmdi zmdi-search astro-TVB3CCAD"></i>
						</button>

						<input class="mtext-107 cl2 size-114 plh2 p-r-15 astro-TVB3CCAD" type="text" name="nom" placeholder="Search">
					</form>
					</div>	
				</div>

				<div class="dis-none panel-filter w-full p-t-10 astro-TVB3CCAD">
					<form method="post" class="astro-TVB3CCAD">
					<div class="wrap-filter flex-w bg6 w-full p-lr-40 p-t-27 p-lr-15-sm astro-TVB3CCAD">						

						<div class="filter-col1 p-r-15 p-b-27 astro-TVB3CCAD">
							<div class="mtext-102 cl2 p-b-15 astro-TVB3CCAD">
								Genre
							</div>

							<ul class="astro-TVB3CCAD">
								<li class="p-b-6 astro-TVB3CCAD">
									<div class="form-check astro-TVB3CCAD">
										<input class="form-check-input filter-link-active astro-TVB3CCAD" type="radio" name="genre" id="exampleRadios1" value="" checked>
										<label class="form-check-label astro-TVB3CCAD" for="exampleRadios1">
											Tous
										</label>
									</div>
								</li>

								<li class="p-b-6 astro-TVB3CCAD">
									<div class="form-check astro-TVB3CCAD">
										<input class="form-check-input  astro-TVB3CCAD" type="radio" name="genre" id="exampleRadios1" value="M" checked>
										<label class="form-check-label astro-TVB3CCAD" for="exampleRadios1">
											Homme
										</label>
									</div>
								</li>

								<li class="p-b-6 astro-TVB3CCAD">
									<div class="form-check astro-TVB3CCAD">
										<input class="form-check-input  astro-TVB3CCAD" type="radio" name="genre" id="exampleRadios1" value="F" checked>
										<label class="form-check-label astro-TVB3CCAD" for="exampleRadios1">
											Femme
										</label>
									</div>
								</li>								
							</ul>
						</div>

						<div class="filter-col2 p-r-15 p-b-27 astro-TVB3CCAD">
							<div class="mtext-102 cl2 p-b-15 astro-TVB3CCAD">
								Age
							</div>

							<ul class="astro-TVB3CCAD">
								<li class="p-b-6 astro-TVB3CCAD">
									<div class="form-check astro-TVB3CCAD">
										<input class="form-check-input astro-TVB3CCAD" type="radio" name="age" id="exampleRadios1" value="" checked>
										<label class="form-check-label astro-TVB3CCAD" for="exampleRadios1">
											Tous
										</label>
									</div>
								</li>
								

								<li class="p-b-6 astro-TVB3CCAD">
									<div class="form-check astro-TVB3CCAD">
										<input class="form-check-input astro-TVB3CCAD" type="radio" name="age" id="exampleRadios1" value="60" checked>
										<label class="form-check-label astro-TVB3CCAD" for="exampleRadios1">
											60ans+
										</label>
									</div>
								</li>
							</ul>
						</div>

					</div>
                    <div class="row astro-TVB3CCAD">
                        <div class="col-md-3 astro-TVB3CCAD"></div>
                        <button class="flex-c-m stext-101 cl0  bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer astro-TVB3CCAD" style=" width:50%;height:50px">
                            Rechercher
                        </button>
                    </div>	
					</form>
				</div>
			</div>

			<div class="row isotope-grid astro-TVB3CCAD">
                
				

			</div>

			
		</div>
	</section>


	
	<div class="btn-back-to-top astro-TVB3CCAD" id="myBtn">
		<span class="symbol-btn-back-to-top astro-TVB3CCAD">
			<i class="zmdi zmdi-chevron-up astro-TVB3CCAD"></i>
		</span>
	</div>

	
	<div class="wrap-modal1 js-modal1 p-t-60 p-b-20 astro-TVB3CCAD">
		<div class="overlay-modal1 js-hide-modal1 astro-TVB3CCAD"></div>

		<div class="container astro-TVB3CCAD">
			<div class="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent astro-TVB3CCAD">
				<button class="how-pos3 hov3 trans-04 js-hide-modal1 astro-TVB3CCAD">
					<img src="images/icons/icon-close.png" alt="CLOSE" class="astro-TVB3CCAD">
				</button>

				<div class="row astro-TVB3CCAD">
					<div class="col-md-6 col-lg-7 p-b-30 astro-TVB3CCAD">
						<div class="p-l-25 p-r-30 p-lr-0-lg astro-TVB3CCAD">
							<div class="wrap-slick3 flex-sb flex-w astro-TVB3CCAD">
								<div class="wrap-slick3-dots astro-TVB3CCAD"></div>
								<div class="wrap-slick3-arrows flex-sb-m flex-w astro-TVB3CCAD"></div>

								<div class="slick3 gallery-lb astro-TVB3CCAD">
									<div class="item-slick3 astro-TVB3CCAD" data-thumb="images/product-detail-01.jpg">
										<div class="wrap-pic-w pos-relative astro-TVB3CCAD">
											<img src="images/product-detail-01.jpg" alt="IMG-PRODUCT" class="astro-TVB3CCAD">

											<a class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04 astro-TVB3CCAD" href="images/product-detail-01.jpg">
												<i class="fa fa-expand astro-TVB3CCAD"></i>
											</a>
										</div>
									</div>

									<div class="item-slick3 astro-TVB3CCAD" data-thumb="images/product-detail-02.jpg">
										<div class="wrap-pic-w pos-relative astro-TVB3CCAD">
											<img src="images/product-detail-02.jpg" alt="IMG-PRODUCT" class="astro-TVB3CCAD">

											<a class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04 astro-TVB3CCAD" href="images/product-detail-02.jpg">
												<i class="fa fa-expand astro-TVB3CCAD"></i>
											</a>
										</div>
									</div>

									<div class="item-slick3 astro-TVB3CCAD" data-thumb="images/product-detail-03.jpg">
										<div class="wrap-pic-w pos-relative astro-TVB3CCAD">
											<img src="images/product-detail-03.jpg" alt="IMG-PRODUCT" class="astro-TVB3CCAD">

											<a class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04 astro-TVB3CCAD" href="images/product-detail-03.jpg">
												<i class="fa fa-expand astro-TVB3CCAD"></i>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					<div class="col-md-6 col-lg-5 p-b-30 astro-TVB3CCAD">
						<div class="p-r-50 p-t-5 p-lr-0-lg astro-TVB3CCAD">
							<h4 class="mtext-105 cl2 js-name-detail p-b-14 astro-TVB3CCAD">
								Lightweight Jacket
							</h4>

							<span class="mtext-106 cl2 astro-TVB3CCAD">
								$58.79
							</span>

							<p class="stext-102 cl3 p-t-23 astro-TVB3CCAD">
								Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.
							</p>
							
							<!--  -->
							<div class="p-t-33 astro-TVB3CCAD">
								<div class="flex-w flex-r-m p-b-10 astro-TVB3CCAD">
									<div class="size-203 flex-c-m respon6 astro-TVB3CCAD">
										Size
									</div>

									<div class="size-204 respon6-next astro-TVB3CCAD">
										<div class="rs1-select2 bor8 bg0 astro-TVB3CCAD">
											<select class="js-select2 astro-TVB3CCAD" name="time">
												<option class="astro-TVB3CCAD">Choose an option</option>
												<option class="astro-TVB3CCAD">Size S</option>
												<option class="astro-TVB3CCAD">Size M</option>
												<option class="astro-TVB3CCAD">Size L</option>
												<option class="astro-TVB3CCAD">Size XL</option>
											</select>
											<div class="dropDownSelect2 astro-TVB3CCAD"></div>
										</div>
									</div>
								</div>

								<div class="flex-w flex-r-m p-b-10 astro-TVB3CCAD">
									<div class="size-203 flex-c-m respon6 astro-TVB3CCAD">
										Color
									</div>

									<div class="size-204 respon6-next astro-TVB3CCAD">
										<div class="rs1-select2 bor8 bg0 astro-TVB3CCAD">
											<select class="js-select2 astro-TVB3CCAD" name="time">
												<option class="astro-TVB3CCAD">Choose an option</option>
												<option class="astro-TVB3CCAD">Red</option>
												<option class="astro-TVB3CCAD">Blue</option>
												<option class="astro-TVB3CCAD">White</option>
												<option class="astro-TVB3CCAD">Grey</option>
											</select>
											<div class="dropDownSelect2 astro-TVB3CCAD"></div>
										</div>
									</div>
								</div>

								<div class="flex-w flex-r-m p-b-10 astro-TVB3CCAD">
									<div class="size-204 flex-w flex-m respon6-next astro-TVB3CCAD">
										<div class="wrap-num-product flex-w m-r-20 m-tb-10 astro-TVB3CCAD">
											<div class="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m astro-TVB3CCAD">
												<i class="fs-16 zmdi zmdi-minus astro-TVB3CCAD"></i>
											</div>

											<input class="mtext-104 cl3 txt-center num-product astro-TVB3CCAD" type="number" name="num-product" value="1">

											<div class="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m astro-TVB3CCAD">
												<i class="fs-16 zmdi zmdi-plus astro-TVB3CCAD"></i>
											</div>
										</div>

										<button class="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail astro-TVB3CCAD">
											Add to cart
										</button>
									</div>
								</div>	
							</div>

							<!--  -->
							<div class="flex-w flex-m p-l-100 p-t-40 respon7 astro-TVB3CCAD">
								<div class="flex-m bor9 p-r-10 m-r-11 astro-TVB3CCAD">
									<a href="#" class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100 astro-TVB3CCAD" data-tooltip="Add to Wishlist">
										<i class="zmdi zmdi-favorite astro-TVB3CCAD"></i>
									</a>
								</div>

								<a href="#" class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100 astro-TVB3CCAD" data-tooltip="Facebook">
									<i class="fa fa-facebook astro-TVB3CCAD"></i>
								</a>

								<a href="#" class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100 astro-TVB3CCAD" data-tooltip="Twitter">
									<i class="fa fa-twitter astro-TVB3CCAD"></i>
								</a>

								<a href="#" class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100 astro-TVB3CCAD" data-tooltip="Google Plus">
									<i class="fa fa-google-plus astro-TVB3CCAD"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	

` })}`;
}, "E:/PROJET/perso/capria/Capria-SiteRencontre-Front-deploy/src/pages/accueil_backup.astro", void 0);

const $$file$c = "E:/PROJET/perso/capria/Capria-SiteRencontre-Front-deploy/src/pages/accueil_backup.astro";
const $$url$c = "/accueil_backup";

const accueil_backup = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$AccueilBackup,
	file: $$file$c,
	url: $$url$c
}, Symbol.toStringTag, { value: 'Module' }));

class Registation_step1 extends Component {
  // state = { isOk: false };
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  state = {
    errorPseudo: false,
    errorEmail: false,
    errorEmailExistence: false,
    errorPassword: false,
    errorConfirmPassword: false
  };
  render() {
    const {
      errorPseudo,
      errorEmail,
      errorEmailExistence,
      errorPassword,
      errorConfirmPassword
    } = this.state;
    const {
      values,
      inputChange,
      login
    } = this.props;
    const checkError = (e) => {
      e.preventDefault();
      fetch(api("users/pseudo/" + values.pseudo), {
        headers: {
          "Content-Type": "application/json"
        },
        method: "GET"
      }).then((res) => {
        res.json().then((data) => {
          if (data.length != 0) {
            this.setState({
              errorPseudo: true
            });
          } else {
            this.setState({
              errorPseudo: false
            });
            fetch(api("users/email/" + values.email), {
              headers: {
                "Content-Type": "application/json"
              },
              method: "GET"
            }).then((res2) => {
              res2.json().then((data2) => {
                if (data2.erreur) {
                  this.setState({
                    errorEmailExistence: true
                  });
                } else if (data2.length != 0) {
                  this.setState({
                    errorEmail: true
                  });
                } else {
                  this.setState({
                    errorEmail: false
                  });
                  if (values.password.length < 6) {
                    this.setState({
                      errorPassword: true
                    });
                  } else {
                    this.setState({
                      errorPassword: false
                    });
                    if (values.password != values.confirm_password) {
                      this.setState({
                        errorConfirmPassword: true
                      });
                    } else {
                      this.setState({
                        errorConfirmPassword: false
                      });
                      this.continue(e);
                    }
                  }
                }
              });
            });
          }
        });
      });
    };
    return /* @__PURE__ */ jsxs(Fragment, {
      children: [/* @__PURE__ */ jsx("h2", {
        className: "fw-bold mb-5",
        children: "Créer votre compte"
      }), /* @__PURE__ */ jsxs("form", {
        onSubmit: checkError,
        children: [/* @__PURE__ */ jsxs("div", {
          className: "tab",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "form-group",
            children: [/* @__PURE__ */ jsx("input", {
              type: "text",
              id: "pseudo",
              name: "pseudo",
              className: errorPseudo ? "form-control in-error" : "form-control",
              placeholder: " ",
              onChange: inputChange("pseudo"),
              value: values.pseudo,
              required: true
            }), /* @__PURE__ */ jsx("label", {
              className: "form-label",
              children: "Pseudo"
            }), errorPseudo && /* @__PURE__ */ jsx("span", {
              className: "error",
              children: "Ce pseudo est déjà pris"
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "form-group mt-4",
            children: [/* @__PURE__ */ jsx("input", {
              type: "email",
              id: "email",
              name: "email",
              onChange: inputChange("email"),
              value: values.email,
              className: errorEmail ? "form-control in-error" : "form-control",
              placeholder: " ",
              required: true
            }), /* @__PURE__ */ jsx("label", {
              className: "form-label",
              children: "Adresse email"
            }), errorEmail && /* @__PURE__ */ jsx("span", {
              className: "error",
              children: "Cet email est déjà pris"
            }), errorEmailExistence && /* @__PURE__ */ jsx("span", {
              className: "error",
              children: "Cet email n'existe pas"
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "form-group mt-4",
            children: [/* @__PURE__ */ jsx("input", {
              type: "password",
              id: "password",
              onChange: inputChange("password"),
              value: values.password,
              name: "password",
              className: errorPassword ? "form-control in-error" : "form-control",
              placeholder: " ",
              required: true
            }), /* @__PURE__ */ jsx("label", {
              className: "form-label",
              htmlFor: "password",
              children: "Mot de passe"
            }), errorPassword && /* @__PURE__ */ jsx("span", {
              className: "error",
              children: "Le mot de passe doit contenir au moins 6 caractères"
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "form-group mb-4",
            children: [/* @__PURE__ */ jsx("input", {
              type: "password",
              id: "confirm_password",
              onChange: inputChange("confirm_password"),
              value: values.confirm_password,
              className: errorConfirmPassword ? "form-control in-error" : "form-control",
              placeholder: " ",
              required: true
            }), /* @__PURE__ */ jsx("label", {
              className: "form-label",
              htmlFor: "confirm_password",
              children: "Confirmer votre mot de passe"
            }), errorConfirmPassword && /* @__PURE__ */ jsx("span", {
              className: "error",
              children: "Les mots de passes ne sont pas identiques"
            })]
          })]
        }), /* @__PURE__ */ jsx("button", {
          type: "submit",
          id: "submit-btn",
          className: "flex-c-m stext-101 bg2 hov-btn1 size-116 p-lr-15 trans-04 mb-3",
          children: "Suivant"
        })]
      }), /* @__PURE__ */ jsxs("p", {
        children: ["Vous avez déjà un compte? ", /* @__PURE__ */ jsx("a", {
          href: "/login",
          children: "Connectez-vous"
        })]
      })]
    });
  }
}
__astro_tag_component__(Registation_step1, "@astrojs/react");

class Registation_step2 extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  state = {
    errorDateOfBirth: false
  };
  render() {
    const {
      errorDateOfBirth
    } = this.state;
    const {
      values,
      inputChange
    } = this.props;
    const checkError = (e) => {
      e.preventDefault();
      const currentDate = /* @__PURE__ */ new Date();
      const dateOfBirth = new Date(values.date_of_birth);
      const diffDays = Math.ceil(Math.abs(currentDate - dateOfBirth) / (1e3 * 60 * 60 * 24));
      const diffYears = parseInt(diffDays / 365);
      if (diffYears < 18) {
        this.setState({
          errorDateOfBirth: true
        });
      } else {
        this.setState({
          errorDateOfBirth: false
        });
        this.continue(e);
      }
    };
    return /* @__PURE__ */ jsxs(Fragment, {
      children: [/* @__PURE__ */ jsx("h2", {
        className: "fw-bold mb-5",
        children: "Information personnelle"
      }), /* @__PURE__ */ jsxs("form", {
        onSubmit: checkError,
        children: [/* @__PURE__ */ jsxs("div", {
          className: "tab",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "row",
            children: [/* @__PURE__ */ jsx("div", {
              className: "col-md-6",
              children: /* @__PURE__ */ jsxs("div", {
                className: "form-group",
                children: [/* @__PURE__ */ jsx("input", {
                  type: "text",
                  id: "name",
                  onChange: inputChange("name"),
                  value: values.name,
                  name: "name",
                  className: "form-control",
                  placeholder: " ",
                  required: true
                }), /* @__PURE__ */ jsx("label", {
                  className: "form-label",
                  children: "Nom"
                })]
              })
            }), /* @__PURE__ */ jsx("div", {
              className: "col-md-6",
              children: /* @__PURE__ */ jsxs("div", {
                className: "form-group",
                children: [/* @__PURE__ */ jsx("input", {
                  type: "text",
                  id: "firstname",
                  onChange: inputChange("firstname"),
                  value: values.firstname,
                  name: "firstname",
                  className: "form-control",
                  placeholder: " ",
                  required: true
                }), /* @__PURE__ */ jsx("label", {
                  className: "form-label",
                  children: "Prénom(s)"
                })]
              })
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "row",
            children: [/* @__PURE__ */ jsx("div", {
              className: "col-md-6",
              children: /* @__PURE__ */ jsx("div", {
                className: "form-group",
                children: /* @__PURE__ */ jsxs("select", {
                  name: "gender",
                  id: "gender",
                  className: "form-control",
                  onChange: inputChange("gender"),
                  value: values.gender,
                  required: true,
                  children: [/* @__PURE__ */ jsx("option", {
                    value: "",
                    children: "Genre"
                  }), /* @__PURE__ */ jsx("option", {
                    value: "H",
                    children: "Homme"
                  }), /* @__PURE__ */ jsx("option", {
                    value: "F",
                    children: "Femme"
                  }), /* @__PURE__ */ jsx("option", {
                    value: "A",
                    children: "Autre"
                  })]
                })
              })
            }), /* @__PURE__ */ jsx("div", {
              className: "col-md-6",
              children: /* @__PURE__ */ jsxs("div", {
                className: "form-group",
                children: [/* @__PURE__ */ jsx("input", {
                  type: "date",
                  name: "date_of_birth",
                  onChange: inputChange("date_of_birth"),
                  value: values.date_of_birth,
                  id: "date_of_birth",
                  className: errorDateOfBirth ? "form-control in-error" : "form-control",
                  placeholder: " ",
                  required: true
                }), /* @__PURE__ */ jsx("label", {
                  className: "form-label",
                  children: "Date de naissance"
                }), errorDateOfBirth && /* @__PURE__ */ jsx("span", {
                  className: "error",
                  children: "Date de naissance invalide"
                })]
              })
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "row",
            children: [/* @__PURE__ */ jsx("div", {
              className: "col-md-6",
              children: /* @__PURE__ */ jsxs("div", {
                className: "form-group",
                children: [/* @__PURE__ */ jsx("input", {
                  type: "text",
                  id: "city",
                  onChange: inputChange("city"),
                  value: values.city,
                  name: "city",
                  className: "form-control",
                  placeholder: " ",
                  required: true
                }), /* @__PURE__ */ jsx("label", {
                  className: "form-label",
                  children: "Ville"
                })]
              })
            }), /* @__PURE__ */ jsx("div", {
              className: "col-md-6",
              children: /* @__PURE__ */ jsxs("div", {
                className: "form-group",
                children: [/* @__PURE__ */ jsx("input", {
                  type: "text",
                  id: "nationality",
                  onChange: inputChange("nationality"),
                  value: values.nationality,
                  name: "nationality",
                  className: "form-control",
                  placeholder: " ",
                  required: true
                }), /* @__PURE__ */ jsx("label", {
                  className: "form-label",
                  children: "Nationalité"
                })]
              })
            })]
          }), /* @__PURE__ */ jsx("div", {
            className: "form-group mb-4",
            children: /* @__PURE__ */ jsxs("select", {
              name: "sexual_orientation",
              style: {
                backgroundColor: "transparent"
              },
              id: "sexual_orientation",
              className: "form-control",
              onChange: inputChange("sexual_orientation"),
              value: values.sexual_orientation,
              required: true,
              children: [/* @__PURE__ */ jsx("option", {
                value: "",
                children: "Orientation sexuelle"
              }), /* @__PURE__ */ jsx("option", {
                value: "Hetero",
                children: "Hétérosexuel"
              }), /* @__PURE__ */ jsx("option", {
                value: "Homo",
                children: "Homosexuel"
              })]
            })
          })]
        }), /* @__PURE__ */ jsx("button", {
          type: "submit",
          id: "submit-btn",
          className: "flex-c-m stext-101 bg2 hov-btn1 size-116 p-lr-15 trans-04 mb-3",
          children: "Suivant"
        }), /* @__PURE__ */ jsx("button", {
          id: "back-btn",
          onClick: this.back,
          className: "flex-c-m stext-101 bg2 hov-btn1 size-116 p-lr-15 trans-04 mb-3",
          children: "Retour"
        })]
      }), /* @__PURE__ */ jsxs("p", {
        children: ["Vous avez déjà un compte? ", /* @__PURE__ */ jsx("a", {
          href: "/login",
          children: "Connectez-vous"
        })]
      })]
    });
  }
}
__astro_tag_component__(Registation_step2, "@astrojs/react");

const ImgUpload = ({
  onChange,
  src
}) => /* @__PURE__ */ jsxs("label", {
  htmlFor: "profile_picture",
  className: "custom-file-upload fas",
  children: [/* @__PURE__ */ jsx("div", {
    className: "img-wrap img-upload",
    children: /* @__PURE__ */ jsx("img", {
      htmlFor: "profile_picture",
      src
    })
  }), /* @__PURE__ */ jsx("input", {
    id: "profile_picture",
    name: "profile_picture",
    type: "file",
    onChange
  })]
});
class Registation_step3 extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  state = {
    errorPdp: false
  };
  render() {
    const {
      values,
      changeProfilePicture
    } = this.props;
    const {
      errorPdp
    } = this.state;
    const {
      values: {
        pseudo,
        email,
        password,
        confirm_password,
        name,
        firstname,
        gender,
        date_of_birth,
        city,
        nationality,
        sexual_orientation,
        profile_picture,
        profile_picture_file
      }
    } = this.props;
    const photoUpload = (e) => {
      e.preventDefault();
      const reader = new FileReader();
      const file = e.target.files[0];
      let contentType = file.type;
      reader.onloadend = () => {
        changeProfilePicture(file, reader.result);
      };
      reader.readAsDataURL(file);
      file.arrayBuffer().then((ress) => {
        const fileBlob = new Int8Array(ress);
        fetch(api("users/checkPdp/"), {
          headers: {
            "Content-Type": contentType
          },
          method: "POST",
          body: fileBlob
        }).then((res) => res.json()).then((res) => {
          if (res.nb != 1) {
            this.setState({
              errorPdp: true
            });
          } else {
            this.setState({
              errorPdp: false
            });
          }
        }).catch(() => {
          console.log("Error");
        });
      });
    };
    const register = async (e) => {
      e.preventDefault();
      if (values.profile_picture_file) {
        const body = new FormData();
        body.append("image", values.profile_picture_file);
        fetch("https://api.imgbb.com/1/upload?key=dbeec0e3599490973977d041a34dbbde", {
          method: "POST",
          body
        }).then((ress) => {
          ress.json().then((jsonRes) => {
            if (jsonRes.status == 200) {
              const urlPhoto = jsonRes.data.url;
              fetch(api("users/"), {
                headers: {
                  "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify({
                  "name": name,
                  "firstname": firstname,
                  "email": email,
                  "password": password,
                  "pseudo": pseudo,
                  //"profile_picture": profile_picture_file.name,
                  "profile_picture": urlPhoto,
                  "gender": gender,
                  "date_of_birth": date_of_birth,
                  "city": city,
                  "nationality": nationality,
                  "sexual_orientation": sexual_orientation
                })
              }).then((res) => res.json()).then((res) => {
                const id = res.insertId;
                if (res.ok) {
                  fetch(api("users/id/" + id)).then((response) => {
                    response.json().then((response2) => {
                      console.log("redirect accueil");
                      var rep = JSON.stringify(response2);
                      localStorage.setItem("user", rep);
                      localStorage.setItem("abonnement", "");
                      Cookies.set("userFromCookie", JSON.stringify(rep));
                      window.location.href = "/accueil?id=" + id;
                    });
                  });
                } else {
                  throw Error("Error");
                }
              }).catch(() => {
                console.log("Error");
              });
            }
          });
        });
      }
    };
    return /* @__PURE__ */ jsxs(Fragment, {
      children: [/* @__PURE__ */ jsx("h2", {
        className: "fw-bold mb-5",
        children: "Photo de profile"
      }), /* @__PURE__ */ jsxs("div", {
        children: [/* @__PURE__ */ jsx(ImgUpload, {
          onChange: photoUpload,
          src: profile_picture,
          value: values.profile_picture
        }), /* @__PURE__ */ jsx("br", {}), errorPdp && /* @__PURE__ */ jsx("span", {
          className: "error",
          children: "Image invalide. Elle ne contient pas de visage ou est une photo de groupe."
        }), /* @__PURE__ */ jsx("button", {
          type: "submit",
          id: "submit-btn",
          onClick: register,
          class: "flex-c-m stext-101 bg2 hov-btn1 size-116 p-lr-15 trans-04 mb-3",
          children: "S'inscrire"
        }), /* @__PURE__ */ jsx("button", {
          id: "back-btn",
          onClick: this.back,
          class: "flex-c-m stext-101 bg2 hov-btn1 size-116 p-lr-15 trans-04 mb-3",
          children: "Retour"
        })]
      }), /* @__PURE__ */ jsxs("p", {
        children: ["Vous avez déjà un compte? ", /* @__PURE__ */ jsx("a", {
          href: "/login",
          children: "Connectez-vous"
        })]
      })]
    });
  }
}
__astro_tag_component__(Registation_step3, "@astrojs/react");

class Registration extends Component {
  state = {
    step: 1,
    pseudo: "",
    email: "",
    password: "",
    confirm_password: "",
    name: "",
    firstname: "",
    gender: "",
    date_of_birth: "2000-01-01",
    city: "",
    nationality: "",
    sexual_orientation: "",
    profile_picture: "/photo/default.jpg",
    profile_picture_file: ""
  };
  nextStep = () => {
    const {
      step
    } = this.state;
    this.setState({
      step: step + 1
    });
  };
  prevStep = () => {
    const {
      step
    } = this.state;
    this.setState({
      step: step - 1
    });
  };
  inputChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value
    });
  };
  changeProfilePicture = (file, imagePreviewUrl) => {
    this.setState({
      profile_picture_file: file,
      profile_picture: imagePreviewUrl
    });
  };
  render() {
    const {
      step
    } = this.state;
    const {
      pseudo,
      email,
      password,
      confirm_password,
      name,
      firstname,
      gender,
      date_of_birth,
      city,
      nationality,
      sexual_orientation,
      profile_picture,
      profile_picture_file
    } = this.state;
    const values = {
      pseudo,
      email,
      password,
      confirm_password,
      name,
      firstname,
      gender,
      date_of_birth,
      city,
      nationality,
      sexual_orientation,
      profile_picture,
      profile_picture_file
    };
    switch (step) {
      case 1:
        return /* @__PURE__ */ jsx(Registation_step1, {
          nextStep: this.nextStep,
          inputChange: this.inputChange,
          values
        });
      case 2:
        return /* @__PURE__ */ jsx(Registation_step2, {
          nextStep: this.nextStep,
          prevStep: this.prevStep,
          inputChange: this.inputChange,
          values
        });
      case 3:
        return /* @__PURE__ */ jsx(Registation_step3, {
          nextStep: this.nextStep,
          prevStep: this.prevStep,
          inputChange: this.inputChange,
          values,
          changeProfilePicture: this.changeProfilePicture
        });
    }
  }
}
__astro_tag_component__(Registration, "@astrojs/react");

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(raw || cooked.slice()) }));
var _a$3;
const $$Astro$b = createAstro();
const $$Registration = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Registration;
  return renderTemplate(_a$3 || (_a$3 = __template$3(['<html lang="en" class="astro-6UBMNB5E">\n<head>\n	<title>Inscription</title>\n	<meta charset="UTF-8">\n	<meta name="viewport" content="width=device-width, initial-scale=1">\n<!--===============================================================================================-->	\n	<link rel="icon" type="image/png" href="images/icons/favicon.png">\n<!--===============================================================================================-->\n	<link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css">\n<!--===============================================================================================-->\n	<link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css">\n<!--===============================================================================================-->\n	<link rel="stylesheet" type="text/css" href="fonts/iconic/css/material-design-iconic-font.min.css">\n<!--===============================================================================================-->\n	<link rel="stylesheet" type="text/css" href="fonts/linearicons-v1.0.0/icon-font.min.css">\n<!--===============================================================================================-->\n	<link rel="stylesheet" type="text/css" href="css/util.css">\n	<link rel="stylesheet" type="text/css" href="css/main.css">\n<!--===============================================================================================-->\n', `</head>
<body class="animsition astro-6UBMNB5E">

    <!-- Section: Design Block -->
<section class="text-center text-lg-start astro-6UBMNB5E">
    

    <!-- <script>
        // Profile picture
        const imgDiv = document.querySelector('.profile-pic-div');
        const img = document.querySelector('#photo');
        const file = document.querySelector('#file');
        const uploadBtn = document.querySelector('#uploadBtn');

        imgDiv.addEventListener('mouseenter', function() {
            uploadBtn.style.display = 'block';
        });

        imgDiv.addEventListener('mouseleave', function() {
            uploadBtn.style.display = 'none';
        })

        file.addEventListener('change', function() {
            const choosedFile = this.files[0];
            if(choosedFile) {
                const reader = new FileReader();

                reader.addEventListener('load', function() {
                    img.setAttribute('src', reader.result);
                })

                reader.readAsDataURL(choosedFile);
            }
        })

    <\/script> -->
  
    <!-- Jumbotron -->
    <div class="container py-4 astro-6UBMNB5E">
      <div class="row g-0 align-items-center astro-6UBMNB5E" style="margin-top: 5%;">
        <div class="col-md-1 astro-6UBMNB5E"></div>
        <div class="col-lg-5 mb-5 mb-lg-0 astro-6UBMNB5E" style="z-index: 100000;">
          <div class="card cascading-right jumbotron astro-6UBMNB5E" style="
              background: hsla(0, 0%, 100%, 0.55);
              backdrop-filter: blur(30px);
              box-shadow: 0px 0px 15px -5px;
              border: none;
              box-shadow-right: none;
              height: 620px;    
              width: 120%;
              border-radius: 0 !important;
              ">
            <div class="card-body p-5 shadow-5 text-center astro-6UBMNB5E">
                `, `
            </div>
          </div>
        </div>
  
        <div class="col-lg-5 mb-5 mb-lg-0 astro-6UBMNB5E">
          <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" style="box-shadow: 0px 0px 20px -5px;" class="w-100 rounded-4 shadow-4 astro-6UBMNB5E" alt="">
        </div>
        <div class="col-md-1 astro-6UBMNB5E"></div>
      </div>
    </div>
    <!-- Jumbotron -->
  </section>
  <!-- Section: Design Block -->

  <footer class=" p-t-75 p-b-32 astro-6UBMNB5E">
    <p class="stext-107 cl6 txt-center astro-6UBMNB5E">
        <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
Copyright &copy; All rights reserved | Capria 2023</p>
<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->

    
  </footer>
    
</body></html>`])), renderHead(), renderComponent($$result, "Registration_form", Registration, { "client:load": true, "client:component-hydration": "load", "client:component-path": "E:/PROJET/perso/capria/Capria-SiteRencontre-Front-deploy/src/components/Registration.jsx", "client:component-export": "default", "class": "astro-6UBMNB5E" }));
}, "E:/PROJET/perso/capria/Capria-SiteRencontre-Front-deploy/src/pages/registration.astro", void 0);

const $$file$b = "E:/PROJET/perso/capria/Capria-SiteRencontre-Front-deploy/src/pages/registration.astro";
const $$url$b = "/registration";

const registration = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Registration,
	file: $$file$b,
	url: $$url$b
}, Symbol.toStringTag, { value: 'Module' }));

function Subscription() {
  const [subscription, setSubscription] = useState();
  const [subscriptionActive, setSubscriptionActive] = useState();
  const [numero, setNumero] = useState("");
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))[0];
    fetch(api("subscription"), {
      headers: {
        "Content-Type": "application/json"
      },
      method: "GET"
    }).then((res) => {
      res.json().then((res2) => {
        setSubscription(res2);
      });
    });
    fetch(api("subscription/" + user.id), {
      headers: {
        "Content-Type": "application/json"
      },
      method: "GET"
    }).then((res) => {
      if (res.ok) {
        res.json().then((res2) => {
          let endDate = new Date(res2[0].date_fin).setHours(0, 0, 0, 0);
          endDate >= /* @__PURE__ */ (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0) && setSubscriptionActive(res2[0]);
          console.log(res2[0]);
        });
      }
    });
  }, []);
  const subscribe = (sub) => {
    const user = JSON.parse(localStorage.getItem("user"))[0];
    fetch(api("paiement"), {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
        "numero": numero,
        "montant": sub.prix
      })
    }).then((res) => {
      res.json().then((res2) => {
        if (res2.statu == 200) {
          const today = /* @__PURE__ */ new Date();
          let end_date = moment(today.getFullYear() + "-" + (today.getMonth() + sub.duree + 1) + "-" + today.getDate(), "yyyy-mm-dd");
          fetch(api("subscription"), {
            headers: {
              "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
              "id_abo": sub.id,
              "id_user": user.id,
              "date_fin": end_date._i,
              "prix": sub.prix
            })
          }).then((res3) => {
            if (res3.ok) {
              var myHeaders = new Headers();
              myHeaders.append("Content-Type", "application/json");
              myHeaders.append("Accept", "application/json");
              fetch(api("subscription/" + user.id), {
                headers: myHeaders,
                method: "GET"
              }).then((res4) => {
                res4.json().then((abo) => {
                  if (abo.length == 0) {
                    localStorage.setItem("abonnement", "");
                  } else {
                    const ajd = /* @__PURE__ */ new Date();
                    const dateFin = new Date(abo[0].date_fin);
                    if (dateFin > ajd) {
                      localStorage.setItem("abonnement", JSON.stringify(abo[0]));
                    } else {
                      localStorage.setItem("abonnement", "");
                    }
                  }
                  swal("Payement effectué.", "Merci pour votre abonnement", "success");
                  window.location.href = "/accueil";
                });
              });
            } else
              throw Error("Error interne tsy ok");
          }).catch((error) => {
            console.log(error);
          });
        } else {
          swal("Erreur.", res2.msg, "error");
        }
      });
    });
  };
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsx("div", {
      id: "generic_price_table",
      children: /* @__PURE__ */ jsx("section", {
        children: /* @__PURE__ */ jsx("div", {
          className: "row",
          children: subscription && subscription.map((sub, index) => {
            return /* @__PURE__ */ jsx("div", {
              className: "col-md-4",
              children: /* @__PURE__ */ jsxs("div", {
                className: subscriptionActive && subscriptionActive.id_abo == sub.id ? "generic_content active clearfix" : "generic_content clearfix",
                style: {
                  boxShadow: "0 0 30px -20px"
                },
                children: [/* @__PURE__ */ jsxs("div", {
                  className: "generic_head_price clearfix",
                  children: [/* @__PURE__ */ jsxs("div", {
                    className: "generic_head_content clearfix",
                    children: [/* @__PURE__ */ jsx("div", {
                      className: "head_bg"
                    }), /* @__PURE__ */ jsx("div", {
                      className: "head",
                      children: /* @__PURE__ */ jsx("span", {
                        children: sub.nom
                      })
                    })]
                  }), /* @__PURE__ */ jsx("div", {
                    className: "generic_price_tag clearfix",
                    children: /* @__PURE__ */ jsxs("span", {
                      className: "price",
                      children: [/* @__PURE__ */ jsx("span", {
                        className: "sign",
                        children: "Ariary"
                      }), /* @__PURE__ */ jsx("span", {
                        className: "currency",
                        children: sub.prix.toString().slice(0, -3)
                      }), /* @__PURE__ */ jsx("span", {
                        className: "cent",
                        children: sub.prix.toString().slice(-3)
                      }), /* @__PURE__ */ jsx("span", {
                        className: "month",
                        children: "/mois"
                      })]
                    })
                  })]
                }), /* @__PURE__ */ jsx("div", {
                  className: "generic_feature_list",
                  children: /* @__PURE__ */ jsxs("ul", {
                    children: [/* @__PURE__ */ jsxs("li", {
                      children: [/* @__PURE__ */ jsx("span", {
                        children: "150GB"
                      }), " Storage"]
                    }), /* @__PURE__ */ jsxs("li", {
                      children: [/* @__PURE__ */ jsx("span", {
                        children: "12"
                      }), " Accounts"]
                    }), /* @__PURE__ */ jsxs("li", {
                      children: [/* @__PURE__ */ jsx("span", {
                        children: "7"
                      }), " Host Domain"]
                    }), /* @__PURE__ */ jsxs("li", {
                      children: [/* @__PURE__ */ jsx("span", {
                        children: "24/7"
                      }), " Support"]
                    })]
                  })
                }), /* @__PURE__ */ jsxs("div", {
                  className: "generic_price_btn clearfix",
                  children: [subscriptionActive && subscriptionActive.id_abo == sub.id ? /* @__PURE__ */ jsx("a", {
                    className: "btn-subscribe",
                    style: {
                      cursor: "default"
                    },
                    children: "En cours"
                  }) : /* @__PURE__ */ jsx("a", {
                    className: "btn-subscribe",
                    style: {
                      cursor: "pointer"
                    },
                    "data-toggle": "modal",
                    "data-target": "#exampleModal" + index,
                    children: "S'abonner"
                  }), /* @__PURE__ */ jsx("div", {
                    class: "modal fade",
                    id: "exampleModal" + index,
                    tabindex: "-1",
                    role: "dialog",
                    "aria-labelledby": "exampleModalLabel",
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ jsx("div", {
                      class: "modal-dialog",
                      role: "document",
                      children: /* @__PURE__ */ jsxs("div", {
                        class: "modal-content",
                        children: [/* @__PURE__ */ jsxs("div", {
                          class: "modal-header",
                          children: [/* @__PURE__ */ jsx("h5", {
                            class: "modal-title",
                            id: "exampleModalLabel",
                            children: "Paiement"
                          }), /* @__PURE__ */ jsx("button", {
                            type: "button",
                            class: "close",
                            "data-dismiss": "modal",
                            "aria-label": "Close",
                            children: /* @__PURE__ */ jsx("span", {
                              "aria-hidden": "true",
                              children: "×"
                            })
                          })]
                        }), /* @__PURE__ */ jsxs("div", {
                          class: "modal-body",
                          children: [/* @__PURE__ */ jsxs("span", {
                            children: ["Vous allez souscrire à un abonnement de ", sub.prix, " Ar."]
                          }), " ", /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsxs("span", {
                            children: ["Cette somme sera prélevée sur le numéro ", /* @__PURE__ */ jsx("input", {
                              id: "num",
                              className: "mtext-107 cl2 size-114 plh2 p-r-15",
                              type: "text",
                              name: "nom",
                              placeholder: "034*******/038*******",
                              onChange: (e) => {
                                setNumero(e.target.value);
                              }
                            }), " après validation. "]
                          })]
                        }), /* @__PURE__ */ jsxs("div", {
                          class: "modal-footer",
                          children: [/* @__PURE__ */ jsx("button", {
                            type: "button",
                            class: "btn btn-secondary",
                            "data-dismiss": "modal",
                            children: "Annuler"
                          }), /* @__PURE__ */ jsx("a", {
                            className: "btn-subscribe",
                            style: {
                              cursor: "pointer"
                            },
                            onClick: () => subscribe(sub),
                            children: "Payer"
                          })]
                        })]
                      })
                    })
                  })]
                })]
              })
            }, index);
          })
        })
      })
    })
  });
}
__astro_tag_component__(Subscription, "@astrojs/react");

const $$Astro$a = createAstro();
const $$Abonnement = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Abonnement;
  return renderTemplate`${renderComponent($$result, "Page", $$Page, { "title": "Site rencontre - Abonnement" }, { "default": ($$result2) => renderTemplate`
	
	${renderComponent($$result2, "NavBar", NavBar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "E:/PROJET/perso/capria/Capria-SiteRencontre-Front-deploy/src/components/NavBar.jsx", "client:component-export": "default" })}

    
	${maybeRenderHead()}<section class="sec-product-detail bg0 p-t-65 p-b-60">
		<div class="container">

            ${renderComponent($$result2, "Subscription", Subscription, { "client:load": true, "client:component-hydration": "load", "client:component-path": "E:/PROJET/perso/capria/Capria-SiteRencontre-Front-deploy/src/components/Subscription.jsx", "client:component-export": "default" })}

		</div>
	</section>
    

` })}`;
}, "E:/PROJET/perso/capria/Capria-SiteRencontre-Front-deploy/src/pages/abonnement.astro", void 0);

const $$file$a = "E:/PROJET/perso/capria/Capria-SiteRencontre-Front-deploy/src/pages/abonnement.astro";
const $$url$a = "/abonnement";

const abonnement = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Abonnement,
	file: $$file$a,
	url: $$url$a
}, Symbol.toStringTag, { value: 'Module' }));

function Assistance(props) {
  const [messages, setMessages] = useState([]);
  const [yourMessage, setYourMessage] = useState();
  const [autoReply, setAutoReply] = useState(false);
  const [user, setUser] = useState();
  const messagesEndRef = useRef(null);
  const msgCardBodyRef = useRef(null);
  const messageAuto = "Bonjour " + user?.nom + "! Nous avons bien reçu votre message hihi";
  const socket = io(api(""));
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  };
  useEffect(() => {
    const userr = JSON.parse(localStorage.getItem("user"))[0];
    setUser(userr);
    fetch(api("messages"), {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
        "mon_id": userr.id,
        "receiver_id": props.admin.id
      })
    }).then((res) => {
      res.json().then((res2) => {
        setMessages(res2);
      });
    });
    fetch(api("messages/lastMessage/" + userr.id + "/" + props.admin.id), {
      headers: {
        "Content-Type": "application/json"
      },
      method: "GET"
    }).then((res) => {
      res.json().then((res2) => {
        const messageDate = new Date(res2.send_time);
        const today = /* @__PURE__ */ new Date();
        const differenceS = Math.abs(today - messageDate) / 1e3;
        if (differenceS > 86400) {
          setAutoReply(true);
        } else
          setAutoReply(false);
      }).catch(() => {
        setAutoReply(true);
      });
    });
    scrollToBottom();
  }, []);
  useEffect(() => {
    const userr = JSON.parse(localStorage.getItem("user"))[0];
    fetch(api("messages/lastMessage/" + userr.id + "/" + props.admin.id), {
      headers: {
        "Content-Type": "application/json"
      },
      method: "GET"
    }).then((res) => {
      res.json().then((res2) => {
        const messageDate = new Date(res2.send_time);
        const today = /* @__PURE__ */ new Date();
        const differenceS = Math.abs(today - messageDate) / 1e3;
        if (differenceS > 86400) {
          setAutoReply(true);
        } else {
          setAutoReply(false);
        }
      }).catch((error) => {
        console.log(error);
      });
    });
    scrollToBottom();
  }, [messages]);
  const handleSendMessage = async (e) => {
    const userr = JSON.parse(localStorage.getItem("user"))[0];
    e.preventDefault();
    if (yourMessage.trim() === "") {
      return false;
    }
    if (msgCardBodyRef.current) {
      msgCardBodyRef.current.scrollTop = msgCardBodyRef.current.scrollHeight;
    }
    const msg = {
      sender_id: userr.id,
      receiver_id: props.admin.id,
      message: yourMessage,
      send_time: /* @__PURE__ */ new Date()
    };
    socket.emit("CLIENT_MSG", msg);
    setMessages(messages.concat([msg]));
    setYourMessage("");
    let promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          // Reponse auto
          {
            sender_id: props.admin.id,
            receiver_id: userr.id,
            message: messageAuto,
            send_time: /* @__PURE__ */ new Date()
          }
        );
      }, 1e3);
    });
    const msgAuto = await promise;
    autoReply && socket.emit("CLIENT_MSG", msgAuto);
    autoReply && setMessages(messages.concat([msg, msgAuto]));
  };
  const handleEnterKey = async (e) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(e);
      return false;
    }
  };
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsx("section", {
      className: "sec-product-detail bg0 p-t-65",
      children: /* @__PURE__ */ jsx("div", {
        className: "container",
        children: /* @__PURE__ */ jsxs("div", {
          className: "row justify-content-center",
          children: [/* @__PURE__ */ jsx("div", {
            className: "col-md-4",
            style: {
              height: "75vh"
            },
            children: /* @__PURE__ */ jsx("div", {
              className: "card mb-sm-3 mb-md-0 contacts_card",
              children: /* @__PURE__ */ jsx("div", {
                className: "card-body contacts_body",
                children: /* @__PURE__ */ jsxs("div", {
                  className: "row",
                  children: [/* @__PURE__ */ jsx("div", {
                    className: "col-md-12 mb-5 flex-w w-full",
                    children: /* @__PURE__ */ jsxs("div", {
                      className: "p-t-2 w-100 txt-center",
                      children: [/* @__PURE__ */ jsxs("span", {
                        className: "mtext-110 cl2",
                        children: [/* @__PURE__ */ jsx("span", {
                          className: "lnr lnr-phone-handset mr-2"
                        }), "Contact"]
                      }), /* @__PURE__ */ jsx("p", {
                        className: "stext-115 cl1 p-t-18",
                        children: "+261 34 12 345 67"
                      })]
                    })
                  }), /* @__PURE__ */ jsx("div", {
                    className: "col-md-12 flex-w w-full",
                    children: /* @__PURE__ */ jsxs("div", {
                      className: "w-100 txt-center p-t-2",
                      children: [/* @__PURE__ */ jsxs("span", {
                        className: "mtext-110 cl2",
                        children: [/* @__PURE__ */ jsx("span", {
                          className: "lnr lnr-envelope mr-2"
                        }), "Adresse email"]
                      }), /* @__PURE__ */ jsx("p", {
                        className: "stext-115 cl1 p-t-18",
                        children: "contact@mail.com"
                      })]
                    })
                  })]
                })
              })
            })
          }), /* @__PURE__ */ jsx("div", {
            className: "col-md-8",
            style: {
              height: "75vh"
            },
            children: /* @__PURE__ */ jsxs("div", {
              className: "card",
              children: [/* @__PURE__ */ jsx("div", {
                className: "card-header msg_head",
                children: /* @__PURE__ */ jsx("h3", {
                  children: "Espace assistance"
                })
              }), /* @__PURE__ */ jsxs("div", {
                ref: msgCardBodyRef,
                className: "card-body msg_card_body",
                children: [messages.map((msg) => {
                  let messageDate = new Date(msg.send_time);
                  let months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
                  if (user && msg.sender_id == user.id) {
                    return /* @__PURE__ */ jsxs("div", {
                      className: "d-flex justify-content-end mb-4",
                      children: [/* @__PURE__ */ jsxs("div", {
                        className: "msg_cotainer_send",
                        children: [msg.message, /* @__PURE__ */ jsxs("span", {
                          className: "msg_time_send",
                          style: {
                            whiteSpace: "nowrap"
                          },
                          children: [("0" + messageDate.getHours()).slice(-2), ":", ("0" + messageDate.getMinutes()).slice(-2), ", ", messageDate.toLocaleDateString("en-US") == /* @__PURE__ */ (/* @__PURE__ */ new Date()).toLocaleDateString("en-US") ? "Aujourd'hui" : messageDate.getDay() + " " + months[messageDate.getMonth()]]
                        }, "time" + msg.id)]
                      }, "msg" + msg.id), /* @__PURE__ */ jsx("div", {
                        className: "img_cont_msg",
                        children: /* @__PURE__ */ jsx("img", {
                          src: "photo/" + user.photoDeProfil,
                          className: "rounded-circle user_img_msg"
                        })
                      }, "img" + msg.id)]
                    }, msg.id);
                  } else
                    return /* @__PURE__ */ jsxs("div", {
                      className: "d-flex justify-content-start mb-4",
                      children: [/* @__PURE__ */ jsx("div", {
                        className: "img_cont_msg",
                        children: /* @__PURE__ */ jsx("img", {
                          src: "photo/" + props.admin.photoDeProfil,
                          className: "rounded-circle user_img_msg"
                        })
                      }, "img" + msg.id), /* @__PURE__ */ jsxs("div", {
                        className: "msg_cotainer",
                        children: [msg.message, /* @__PURE__ */ jsxs("span", {
                          className: "msg_time",
                          children: [("0" + messageDate.getHours()).slice(-2), ":", ("0" + messageDate.getMinutes()).slice(-2), ", ", messageDate.toLocaleDateString("en-US") == /* @__PURE__ */ (/* @__PURE__ */ new Date()).toLocaleDateString("en-US") ? "Aujourd'hui" : messageDate.getDay() + " " + months[messageDate.getMonth()]]
                        }, "time" + msg.id)]
                      }, "msg" + msg.id)]
                    }, msg.id);
                }), /* @__PURE__ */ jsx("div", {
                  ref: messagesEndRef
                })]
              }), /* @__PURE__ */ jsx("div", {
                className: "card-footer",
                children: /* @__PURE__ */ jsxs("div", {
                  className: "input-group",
                  children: [/* @__PURE__ */ jsx("div", {
                    className: "input-group-append",
                    children: /* @__PURE__ */ jsx("span", {
                      className: "input-group-text attach_btn",
                      children: /* @__PURE__ */ jsx("i", {
                        className: "fas fa-paperclip"
                      })
                    })
                  }), /* @__PURE__ */ jsx("textarea", {
                    id: "messageInput",
                    value: yourMessage,
                    onKeyDown: (e) => handleEnterKey(e),
                    onChange: (e) => {
                      setYourMessage(e.target.value);
                    },
                    name: "",
                    className: "form-control type_msg",
                    placeholder: "Entrez votre message"
                  }), /* @__PURE__ */ jsx("div", {
                    onClick: (e) => handleSendMessage(e),
                    tabIndex: "0",
                    className: "input-group-append",
                    children: /* @__PURE__ */ jsx("span", {
                      className: "input-group-text send_btn",
                      children: /* @__PURE__ */ jsx("i", {
                        className: "fas fa-location-arrow"
                      })
                    })
                  })]
                })
              })]
            })
          })]
        })
      })
    })
  });
}
__astro_tag_component__(Assistance, "@astrojs/react");

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$9 = createAstro();
const $$Assistance = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Assistance;
  const res = await fetch(api("users/admin"), {
    headers: { "Content-Type": "application/json" },
    method: "GET"
  });
  const [admin] = await res.json();
  return renderTemplate`${renderComponent($$result, "Page", $$Page, { "title": "Site rencontre - Chat" }, { "default": ($$result2) => renderTemplate(_a$2 || (_a$2 = __template$2(['\n    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">\n    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">\n    \n    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.min.css">\n    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.min.js"><\/script>\n\n    <link rel="stylesheet" type="text/css" href="css/chat.css">\n    \n        ', "\n        ", "\n    \n"])), renderComponent($$result2, "NavBar", NavBar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "E:/PROJET/perso/capria/Capria-SiteRencontre-Front-deploy/src/components/NavBar.jsx", "client:component-export": "default" }), renderComponent($$result2, "AssistanceComponent", Assistance, { "admin": admin, "client:load": true, "client:component-hydration": "load", "client:component-path": "E:/PROJET/perso/capria/Capria-SiteRencontre-Front-deploy/src/components/assistance", "client:component-export": "default" })) })}`;
}, "E:/PROJET/perso/capria/Capria-SiteRencontre-Front-deploy/src/pages/assistance.astro", void 0);

const $$file$9 = "E:/PROJET/perso/capria/Capria-SiteRencontre-Front-deploy/src/pages/assistance.astro";
const $$url$9 = "/assistance";

const assistance = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Assistance,
	file: $$file$9,
	url: $$url$9
}, Symbol.toStringTag, { value: 'Module' }));

function Essai(userInfo) {
  const [messages, setMessages] = useState(userInfo.messagesAvant);
  const socket = io(api(""));
  const user = JSON.parse(userInfo.userInfo);
  socket.on("SERVER_MSG", (msg) => {
    setNewMessage(msg);
  });
  function setNewMessage(msg) {
    setMessages([...messages, msg]);
  }
  function sendMessage(e) {
    e.preventDefault();
    var receiver = localStorage.getItem("activatedChat");
    const msg = {
      sender_id: user[0].id,
      receiver_id: receiver,
      message: e.target.text.value
    };
    socket.emit("CLIENT_MSG", msg);
    setNewMessage(msg);
  }
  return /* @__PURE__ */ jsx("div", {
    className: "container",
    children: /* @__PURE__ */ jsx("div", {
      className: "row",
      children: /* @__PURE__ */ jsx("div", {
        className: "col-4",
        children: /* @__PURE__ */ jsxs("div", {
          className: "card",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "card-body",
            children: [/* @__PURE__ */ jsx("div", {
              className: "card-title",
              children: "My first chat"
            }), /* @__PURE__ */ jsx("hr", {}), /* @__PURE__ */ jsx("div", {
              className: "messages",
              children: messages.map((msg) => {
                return /* @__PURE__ */ jsxs("div", {
                  children: [msg.sender_id, ": ", msg.message]
                }, messages.indexOf(msg));
              })
            })]
          }), /* @__PURE__ */ jsx("form", {
            onSubmit: (e) => sendMessage(e),
            children: /* @__PURE__ */ jsxs("div", {
              className: "card-footer",
              children: [/* @__PURE__ */ jsx("input", {
                id: "username",
                type: "text",
                placeholder: "Username",
                className: "form-control"
              }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("input", {
                id: "text",
                type: "text",
                placeholder: "Your message",
                className: "form-control"
              }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("button", {
                type: "submit",
                className: "btn btn-primary form-control",
                children: "send"
              })]
            })
          })]
        })
      })
    })
  });
}
__astro_tag_component__(Essai, "@astrojs/react");

const $$Astro$8 = createAstro();
const $$ChatEssai = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$ChatEssai;
  var uss = localStorage.getItem("user");
  const user = JSON.parse(uss)[0];
  var users = [];
  var messages = [];
  var obj = { "id": user.id, "filtres": [] };
  const jsonString = JSON.stringify(obj);
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Accept", "application/json");
  const response = await fetch(api("userList"), {
    headers: myHeaders,
    method: "POST",
    body: jsonString
  });
  const reponse = await response.json();
  users = reponse;
  var objC = { "mon_id": user.id, "receiver_id": users[0].id };
  const jsonStringC = JSON.stringify(objC);
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Accept", "application/json");
  const resC = await fetch(api("messages"), {
    headers: myHeaders,
    method: "POST",
    body: jsonStringC
  });
  const reponseC = await resC.json();
  messages = reponseC;
  return renderTemplate`${maybeRenderHead()}<div class="users-list col-md-10">
    ${users.map(
    (user2) => renderTemplate`<div${addAttribute("activateChatId" + user2.id, "id")} class="chats">${user2.pseudo}</div>`
  )}
</div>

${renderComponent($$result, "Essai", Essai, { "client:load": true, "userInfo": uss, "messagesAvant": messages, "client:component-hydration": "load", "client:component-path": "E:/PROJET/perso/capria/Capria-SiteRencontre-Front-deploy/src/components/Essai", "client:component-export": "default" })}`;
}, "E:/PROJET/perso/capria/Capria-SiteRencontre-Front-deploy/src/pages/chat-essai.astro", void 0);

const $$file$8 = "E:/PROJET/perso/capria/Capria-SiteRencontre-Front-deploy/src/pages/chat-essai.astro";
const $$url$8 = "/chat-essai";

const chatEssai = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$ChatEssai,
	file: $$file$8,
	url: $$url$8
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$7 = createAstro();
const $$Landing2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Landing2;
  return renderTemplate`${renderComponent($$result, "Page", $$Page, { "title": "Tongasoa" }, { "default": ($$result2) => renderTemplate`
	
	${maybeRenderHead()}<header class="header-v4">
		<!-- Header desktop -->
		<div class="container-menu-desktop" style="height: 85px">
			<!-- Topbar -->
			<!-- <div class="top-bar"> -->
				<!-- <div class="content-topbar flex-sb-m h-full container">
					<div class="left-top-bar">
						Free shipping for standard order over $100
					</div>

					<div class="right-top-bar flex-w h-full">
						<a href="#" class="flex-c-m trans-04 p-lr-25">
							Help & FAQs
						</a>

						<a href="#" class="flex-c-m trans-04 p-lr-25">
							My Account
						</a>

						<a href="#" class="flex-c-m trans-04 p-lr-25">
							EN
						</a>

						<a href="#" class="flex-c-m trans-04 p-lr-25">
							USD
						</a>
					</div>
				</div> -->
			<!-- </div> -->

			<div class="wrap-menu-desktop how-shadow1">
				<nav class="limiter-menu-desktop container">
					
					<!-- Logo desktop -->		
					<a href="#" class="logo">
						<img src="images/icons/logo-01.png" alt="IMG-LOGO">
					</a>

					<!-- Menu desktop -->
					<!-- <div class="menu-desktop">
						<ul class="main-menu">
							<li>
								<a href="index.html">Home</a>
								<ul class="sub-menu">
									<li><a href="index.html">Homepage 1</a></li>
									<li><a href="home-02.html">Homepage 2</a></li>
									<li><a href="home-03.html">Homepage 3</a></li>
								</ul>
							</li>

							<li>
								<a href="product.html">Shop</a>
							</li>

							<li class="label1" data-label1="hot">
								<a href="shoping-cart.html">Features</a>
							</li>

							<li>
								<a href="blog.html">Blog</a>
							</li>

							<li class="active-menu">
								<a href="about.html">About</a>
							</li>

							<li>
								<a href="contact.html">Contact</a>
							</li>
						</ul>
					</div>	 -->

					<!-- Icon header -->
					<div class="wrap-icon-header flex-w flex-r-m">
						<form action="/login">
							<button class="flex-c-m stext-101 cl2 size-119 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer m-tb-10">
								Se Connecter
							</button>
						</form>
						<form action="/registration">
							<button class="flex-c-m stext-101 cl2 size-119 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer m-tb-10">
								S'inscrire
							</button>
						</form>
						<!--<div class="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
							<i class="zmdi zmdi-search"></i>
						</div>

						<div class="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart" data-notify="2">
							<i class="zmdi zmdi-shopping-cart"></i>
						</div>

						<a href="#" class="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti" data-notify="0">
							<i class="zmdi zmdi-favorite-outline"></i>
						</a> -->
					</div> 
				</nav>
			</div>	
		</div>

		<!-- Header Mobile -->
		<div class="wrap-header-mobile">
			<!-- Logo moblie -->		
			<div class="logo-mobile">
				<a href="index.html"><img src="images/icons/logo-01.png" alt="IMG-LOGO"></a>
			</div>

			<!-- Icon header -->
			<div class="wrap-icon-header flex-w flex-r-m m-r-15">
				<div class="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search">
					<i class="zmdi zmdi-search"></i>
				</div>

				<div class="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart" data-notify="2">
					<i class="zmdi zmdi-shopping-cart"></i>
				</div>

				<a href="#" class="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti" data-notify="0">
					<i class="zmdi zmdi-favorite-outline"></i>
				</a>
			</div>

			<!-- Button show menu -->
			<div class="btn-show-menu-mobile hamburger hamburger--squeeze">
				<span class="hamburger-box">
					<span class="hamburger-inner"></span>
				</span>
			</div>
		</div>


		<!-- Menu Mobile -->
		<div class="menu-mobile">
			<ul class="topbar-mobile">
				<li>
					<div class="left-top-bar">
						Free shipping for standard order over $100
					</div>
				</li>

				<li>
					<div class="right-top-bar flex-w h-full">
						<a href="#" class="flex-c-m p-lr-10 trans-04">
							Help & FAQs
						</a>

						<a href="#" class="flex-c-m p-lr-10 trans-04">
							My Account
						</a>

						<a href="#" class="flex-c-m p-lr-10 trans-04">
							EN
						</a>

						<a href="#" class="flex-c-m p-lr-10 trans-04">
							USD
						</a>
					</div>
				</li>
			</ul>

			<ul class="main-menu-m">
				<li>
					<a href="index.html">Home</a>
					<ul class="sub-menu-m">
						<li><a href="index.html">Homepage 1</a></li>
						<li><a href="home-02.html">Homepage 2</a></li>
						<li><a href="home-03.html">Homepage 3</a></li>
					</ul>
					<span class="arrow-main-menu-m">
						<i class="fa fa-angle-right" aria-hidden="true"></i>
					</span>
				</li>

				<li>
					<a href="product.html">Shop</a>
				</li>

				<li>
					<a href="shoping-cart.html" class="label1 rs1" data-label1="hot">Features</a>
				</li>

				<li>
					<a href="blog.html">Blog</a>
				</li>

				<li>
					<a href="about.html">About</a>
				</li>

				<li>
					<a href="contact.html">Contact</a>
				</li>
			</ul>
		</div>

		<!-- Modal Search -->
		<div class="modal-search-header flex-c-m trans-04 js-hide-modal-search">
			<div class="container-search-header">
				<button class="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search">
					<img src="images/icons/icon-close2.png" alt="CLOSE">
				</button>

				<form class="wrap-search-header flex-w p-l-15">
					<button class="flex-c-m trans-04">
						<i class="zmdi zmdi-search"></i>
					</button>
					<input class="plh3" type="text" name="search" placeholder="Search...">
				</form>
			</div>
		</div>
	</header>

	
	


	
	<section class="bg-img1 txt-center p-lr-15 p-tb-92" style="background-image: url('images/bg-01.jpg');">
		<h2 class="ltext-105 cl0 txt-center">
			Tongasoa
		</h2>
	</section>	


	
	<section class="bg0 p-t-75 p-b-120">
		<div class="container">
			<div class="row p-b-148">
				<div class="col-md-7 col-lg-8">
					<div class="p-t-7 p-r-85 p-r-15-lg p-r-0-md">
						<h3 class="mtext-111 cl2 p-b-16">
							Our Story
						</h3>

						<p class="stext-113 cl6 p-b-26">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat consequat enim, non auctor massa ultrices non. Morbi sed odio massa. Quisque at vehicula tellus, sed tincidunt augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas varius egestas diam, eu sodales metus scelerisque congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas gravida justo eu arcu egestas convallis. Nullam eu erat bibendum, tempus ipsum eget, dictum enim. Donec non neque ut enim dapibus tincidunt vitae nec augue. Suspendisse potenti. Proin ut est diam. Donec condimentum euismod tortor, eget facilisis diam faucibus et. Morbi a tempor elit.
						</p>

						<p class="stext-113 cl6 p-b-26">
							Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula. 
						</p>

						<p class="stext-113 cl6 p-b-26">
							Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879
						</p>
					</div>
				</div>

				<div class="col-11 col-md-5 col-lg-4 m-lr-auto">
					<div class="how-bor1 ">
						<div class="hov-img0">
							<img src="images/about-01.jpg" alt="IMG">
						</div>
					</div>
				</div>
			</div>
			
			<div class="row">
				<div class="order-md-2 col-md-7 col-lg-8 p-b-30">
					<div class="p-t-7 p-l-85 p-l-15-lg p-l-0-md">
						<h3 class="mtext-111 cl2 p-b-16">
							Our Mission
						</h3>

						<p class="stext-113 cl6 p-b-26">
							Mauris non lacinia magna. Sed nec lobortis dolor. Vestibulum rhoncus dignissim risus, sed consectetur erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam maximus mauris sit amet odio convallis, in pharetra magna gravida. Praesent sed nunc fermentum mi molestie tempor. Morbi vitae viverra odio. Pellentesque ac velit egestas, luctus arcu non, laoreet mauris. Sed in ipsum tempor, consequat odio in, porttitor ante. Ut mauris ligula, volutpat in sodales in, porta non odio. Pellentesque tempor urna vitae mi vestibulum, nec venenatis nulla lobortis. Proin at gravida ante. Mauris auctor purus at lacus maximus euismod. Pellentesque vulputate massa ut nisl hendrerit, eget elementum libero iaculis.
						</p>

						<div class="bor16 p-l-29 p-b-9 m-t-22">
							<p class="stext-114 cl6 p-r-40 p-b-11">
								Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.
							</p>

							<span class="stext-111 cl8">
								- Steve Job’s 
							</span>
						</div>
					</div>
				</div>

				<div class="order-md-1 col-11 col-md-5 col-lg-4 m-lr-auto p-b-30">
					<div class="how-bor2">
						<div class="hov-img0">
							<img src="images/about-02.jpg" alt="IMG">
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
` })}`;
}, "E:/PROJET/perso/capria/Capria-SiteRencontre-Front-deploy/src/pages/landing2.astro", void 0);

const $$file$7 = "E:/PROJET/perso/capria/Capria-SiteRencontre-Front-deploy/src/pages/landing2.astro";
const $$url$7 = "/landing2";

const landing2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Landing2,
	file: $$file$7,
	url: $$url$7
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$6 = createAstro();
const $$Accueil = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Accueil;
  return renderTemplate`${renderComponent($$result, "Page", $$Page, { "title": "Tongasoa" }, { "default": ($$result2) => renderTemplate`
    
	
	${renderComponent($$result2, "NavBar", NavBar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "E:/PROJET/perso/capria/Capria-SiteRencontre-Front-deploy/src/components/NavBar.jsx", "client:component-export": "default" })}

	${renderComponent($$result2, "AccueilComponent", Accueil_component, { "client:load": true, "client:component-hydration": "load", "client:component-path": "E:/PROJET/perso/capria/Capria-SiteRencontre-Front-deploy/src/components/Accueil_component", "client:component-export": "default" })}

	
	${maybeRenderHead()}<div class="btn-back-to-top" id="myBtn">
		<span class="symbol-btn-back-to-top">
			<i class="zmdi zmdi-chevron-up"></i>
		</span>
	</div>

	
	<div class="wrap-modal1 js-modal1 p-t-60 p-b-20">
		<div class="overlay-modal1 js-hide-modal1"></div>

		<div class="container">
			<div class="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
				<button class="how-pos3 hov3 trans-04 js-hide-modal1">
					<img src="images/icons/icon-close.png" alt="CLOSE">
				</button>

				<div class="row">
					<div class="col-md-6 col-lg-7 p-b-30">
						<div class="p-l-25 p-r-30 p-lr-0-lg">
							<div class="wrap-slick3 flex-sb flex-w">
								<div class="wrap-slick3-dots"></div>
								<div class="wrap-slick3-arrows flex-sb-m flex-w"></div>

								<div class="slick3 gallery-lb">
									<div class="item-slick3" data-thumb="images/product-detail-01.jpg">
										<div class="wrap-pic-w pos-relative">
											<img src="images/product-detail-01.jpg" alt="IMG-PRODUCT">

											<a class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href="images/product-detail-01.jpg">
												<i class="fa fa-expand"></i>
											</a>
										</div>
									</div>

									<div class="item-slick3" data-thumb="images/product-detail-02.jpg">
										<div class="wrap-pic-w pos-relative">
											<img src="images/product-detail-02.jpg" alt="IMG-PRODUCT">

											<a class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href="images/product-detail-02.jpg">
												<i class="fa fa-expand"></i>
											</a>
										</div>
									</div>

									<div class="item-slick3" data-thumb="images/product-detail-03.jpg">
										<div class="wrap-pic-w pos-relative">
											<img src="images/product-detail-03.jpg" alt="IMG-PRODUCT">

											<a class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href="images/product-detail-03.jpg">
												<i class="fa fa-expand"></i>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					<div class="col-md-6 col-lg-5 p-b-30">
						<div class="p-r-50 p-t-5 p-lr-0-lg">
							<h4 class="mtext-105 cl2 js-name-detail p-b-14">
								Lightweight Jacket
							</h4>

							<span class="mtext-106 cl2">
								$58.79
							</span>

							<p class="stext-102 cl3 p-t-23">
								Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.
							</p>
							
							<!--  -->
							<div class="p-t-33">
								<div class="flex-w flex-r-m p-b-10">
									<div class="size-203 flex-c-m respon6">
										Size
									</div>

									<div class="size-204 respon6-next">
										<div class="rs1-select2 bor8 bg0">
											<select class="js-select2" name="time">
												<option>Choose an option</option>
												<option>Size S</option>
												<option>Size M</option>
												<option>Size L</option>
												<option>Size XL</option>
											</select>
											<div class="dropDownSelect2"></div>
										</div>
									</div>
								</div>

								<div class="flex-w flex-r-m p-b-10">
									<div class="size-203 flex-c-m respon6">
										Color
									</div>

									<div class="size-204 respon6-next">
										<div class="rs1-select2 bor8 bg0">
											<select class="js-select2" name="time">
												<option>Choose an option</option>
												<option>Red</option>
												<option>Blue</option>
												<option>White</option>
												<option>Grey</option>
											</select>
											<div class="dropDownSelect2"></div>
										</div>
									</div>
								</div>

								<div class="flex-w flex-r-m p-b-10">
									<div class="size-204 flex-w flex-m respon6-next">
										<div class="wrap-num-product flex-w m-r-20 m-tb-10">
											<div class="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
												<i class="fs-16 zmdi zmdi-minus"></i>
											</div>

											<input class="mtext-104 cl3 txt-center num-product" type="number" name="num-product" value="1">

											<div class="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
												<i class="fs-16 zmdi zmdi-plus"></i>
											</div>
										</div>

										<button class="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
											Add to cart
										</button>
									</div>
								</div>	
							</div>

							<!--  -->
							<div class="flex-w flex-m p-l-100 p-t-40 respon7">
								<div class="flex-m bor9 p-r-10 m-r-11">
									<a href="#" class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100" data-tooltip="Add to Wishlist">
										<i class="zmdi zmdi-favorite"></i>
									</a>
								</div>

								<a href="#" class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Facebook">
									<i class="fa fa-facebook"></i>
								</a>

								<a href="#" class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Twitter">
									<i class="fa fa-twitter"></i>
								</a>

								<a href="#" class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Google Plus">
									<i class="fa fa-google-plus"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	

` })}`;
}, "E:/PROJET/perso/capria/Capria-SiteRencontre-Front-deploy/src/pages/accueil.astro", void 0);

const $$file$6 = "E:/PROJET/perso/capria/Capria-SiteRencontre-Front-deploy/src/pages/accueil.astro";
const $$url$6 = "/accueil";

const accueil = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Accueil,
	file: $$file$6,
	url: $$url$6
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$5 = createAstro();
const $$Landing = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Landing;
  return renderTemplate`${renderComponent($$result, "Page", $$Page, { "title": "Site rencontre" }, { "default": ($$result2) => renderTemplate`
	
	${maybeRenderHead()}<header>
		<!-- Header desktop -->
		<div class="container-menu-desktop">			

			<div class="wrap-menu-desktop">
				<nav class="limiter-menu-desktop container">
					
					<!-- Logo desktop -->		
					<a href="#" class="logo">
						<img src="images/icons/logo-01.png" alt="IMG-LOGO">
					</a>

					<!-- Icon header -->
					<div class="wrap-icon-header flex-w flex-r-m">
                        <!-- <form action="/login" > -->
                            <a href="/login"><button class="auth-btn flex-c-m stext-101 hov-btn1 size-116 p-lr-15 trans-04 pointer">
                                Se connecter
                            </button></a>
                        <!-- </form> -->
                        <!-- <form action="/registration" > -->
                            <!-- <button class="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer"> -->
                            <a href="/registration"><button class="flex-c-m stext-101 size-116 hov-btn1 p-lr-15 trans-04 pointer ml-3">
                                S'inscrire
                            </button></a>
                        <!-- </form>						 -->
					</div>
				</nav>
			</div>	
		</div>

		<!-- Header Mobile -->
		<div class="wrap-header-mobile">
			<!-- Logo moblie -->		
			<div class="logo-mobile">
				<a href="#"><img src="images/icons/logo-01.png" alt="IMG-LOGO"></a>
			</div>

			<!-- Icon header -->
			<div class="wrap-icon-header flex-w flex-r-m m-r-15">
				<a href="/login" class="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 ">
					<i class="zmdi zmdi-account-o"></i>
				</a>
				<a href="/registration" class="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 ">
					<i class="zmdi zmdi-account-add"></i>
				</a>
			</div>			
		</div>


		<!-- Menu Mobile -->
		<div class="menu-mobile">
			<ul class="topbar-mobile">
				<li>
					<div class="left-top-bar">
						Free shipping for standard order over $100
					</div>
				</li>

				<li>
					<div class="right-top-bar flex-w h-full">
						<a href="#" class="flex-c-m p-lr-10 trans-04">
							Help & FAQs
						</a>

						<a href="#" class="flex-c-m p-lr-10 trans-04">
							My Account
						</a>

						<a href="#" class="flex-c-m p-lr-10 trans-04">
							EN
						</a>

						<a href="#" class="flex-c-m p-lr-10 trans-04">
							USD
						</a>
					</div>
				</li>
			</ul>

			<ul class="main-menu-m">
				<li>
					<a href="index.html">Home</a>
					<ul class="sub-menu-m">
						<li><a href="index.html">Homepage 1</a></li>
						<li><a href="home-02.html">Homepage 2</a></li>
						<li><a href="home-03.html">Homepage 3</a></li>
					</ul>
					<span class="arrow-main-menu-m">
						<i class="fa fa-angle-right" aria-hidden="true"></i>
					</span>
				</li>

				<li>
					<a href="product.html">Shop</a>
				</li>

				<li>
					<a href="shoping-cart.html" class="label1 rs1" data-label1="hot">Features</a>
				</li>

				<li>
					<a href="blog.html">Blog</a>
				</li>

				<li>
					<a href="about.html">About</a>
				</li>

				<li>
					<a href="contact.html">Contact</a>
				</li>
			</ul>
		</div>

		<!-- Modal Search -->
		<div class="modal-search-header flex-c-m trans-04 js-hide-modal-search">
			<div class="container-search-header">
				<button class="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search">
					<img src="images/icons/icon-close2.png" alt="CLOSE">
				</button>

				<form class="wrap-search-header flex-w p-l-15">
					<button class="flex-c-m trans-04">
						<i class="zmdi zmdi-search"></i>
					</button>
					<input class="plh3" type="text" name="search" placeholder="Search...">
				</form>
			</div>
		</div>
	</header>

	
	<div class="wrap-header-cart js-panel-cart">
		<div class="s-full js-hide-cart"></div>

		<div class="header-cart flex-col-l p-l-65 p-r-25">
			<div class="header-cart-title flex-w flex-sb-m p-b-8">
				<span class="mtext-103 cl2">
					Your Cart
				</span>

				<div class="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart">
					<i class="zmdi zmdi-close"></i>
				</div>
			</div>
			
			<div class="header-cart-content flex-w js-pscroll">
				<ul class="header-cart-wrapitem w-full">
					<li class="header-cart-item flex-w flex-t m-b-12">
						<div class="header-cart-item-img">
							<img src="images/item-cart-01.jpg" alt="IMG">
						</div>

						<div class="header-cart-item-txt p-t-8">
							<a href="#" class="header-cart-item-name m-b-18 hov-cl1 trans-04">
								White Shirt Pleat
							</a>

							<span class="header-cart-item-info">
								1 x $19.00
							</span>
						</div>
					</li>

					<li class="header-cart-item flex-w flex-t m-b-12">
						<div class="header-cart-item-img">
							<img src="images/item-cart-02.jpg" alt="IMG">
						</div>

						<div class="header-cart-item-txt p-t-8">
							<a href="#" class="header-cart-item-name m-b-18 hov-cl1 trans-04">
								Converse All Star
							</a>

							<span class="header-cart-item-info">
								1 x $39.00
							</span>
						</div>
					</li>

					<li class="header-cart-item flex-w flex-t m-b-12">
						<div class="header-cart-item-img">
							<img src="images/item-cart-03.jpg" alt="IMG">
						</div>

						<div class="header-cart-item-txt p-t-8">
							<a href="#" class="header-cart-item-name m-b-18 hov-cl1 trans-04">
								Nixon Porter Leather
							</a>

							<span class="header-cart-item-info">
								1 x $17.00
							</span>
						</div>
					</li>
				</ul>
				
				<div class="w-full">
					<div class="header-cart-total w-full p-tb-40">
						Total: $75.00
					</div>

					<div class="header-cart-buttons flex-w w-full">
						<a href="shoping-cart.html" class="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10">
							View Cart
						</a>

						<a href="shoping-cart.html" class="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10">
							Check Out
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>

		
    
	<section class="section-slide">
		<div class="wrap-slick1">
			<div class="slick1">
				<div class="item-slick1" style="background-image: url(images/slide-01.jpg);">
					<div class="container h-full">
						<div class="flex-col-l-m h-full p-t-100 p-b-30 respon5">
							<div class="layer-slick1 animated visible-false" data-appear="fadeInDown" data-delay="0">
								<span class="ltext-101 cl2 respon2">
									Women Collection 2018
								</span>
							</div>
								
							<div class="layer-slick1 animated visible-false" data-appear="fadeInUp" data-delay="800">
								<h2 class="ltext-201 cl2 p-t-19 p-b-43 respon1">
									NEW SEASON
								</h2>
							</div>
								
							<!-- <div class="layer-slick1 animated visible-false" data-appear="zoomIn" data-delay="1600">
								<a href="/registration" class="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
									S'inscrire
								</a>
							</div> -->
						</div>
					</div>
				</div>
				
			</div>
		</div>
	</section>


	
	<div class="sec-banner bg0 p-t-80 p-b-50">
		<div class="container">
			<div class="row">
				<div class="col-md-6 col-xl-4 p-b-30 m-lr-auto">
					<!-- Block1 -->
					<div class="block1 wrap-pic-w">
						<img src="images/banner-01.jpg" alt="IMG-BANNER">

						<a href="product.html" class="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
							<div class="block1-txt-child1 flex-col-l">
								<span class="block1-name ltext-102 trans-04 p-b-8">
									Women
								</span>

								<span class="block1-info stext-102 trans-04">
									Spring 2018
								</span>
							</div>

							<div class="block1-txt-child2 p-b-4 trans-05">
								<div class="block1-link stext-101 cl0 trans-09">
									Shop Now
								</div>
							</div>
						</a>
					</div>
				</div>

				<div class="col-md-6 col-xl-4 p-b-30 m-lr-auto">
					<!-- Block1 -->
					<div class="block1 wrap-pic-w">
						<img src="images/banner-02.jpg" alt="IMG-BANNER">

						<a href="product.html" class="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
							<div class="block1-txt-child1 flex-col-l">
								<span class="block1-name ltext-102 trans-04 p-b-8">
									Men
								</span>

								<span class="block1-info stext-102 trans-04">
									Spring 2018
								</span>
							</div>

							<div class="block1-txt-child2 p-b-4 trans-05">
								<div class="block1-link stext-101 cl0 trans-09">
									Shop Now
								</div>
							</div>
						</a>
					</div>
				</div>

				<div class="col-md-6 col-xl-4 p-b-30 m-lr-auto">
					<!-- Block1 -->
					<div class="block1 wrap-pic-w">
						<img src="images/banner-03.jpg" alt="IMG-BANNER">

						<a href="product.html" class="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
							<div class="block1-txt-child1 flex-col-l">
								<span class="block1-name ltext-102 trans-04 p-b-8">
									Accessories
								</span>

								<span class="block1-info stext-102 trans-04">
									New Trend
								</span>
							</div>

							<div class="block1-txt-child2 p-b-4 trans-05">
								<div class="block1-link stext-101 cl0 trans-09">
									Shop Now
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>

` })}`;
}, "E:/PROJET/perso/capria/Capria-SiteRencontre-Front-deploy/src/pages/landing.astro", void 0);

const $$file$5 = "E:/PROJET/perso/capria/Capria-SiteRencontre-Front-deploy/src/pages/landing.astro";
const $$url$5 = "/landing";

const landing = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Landing,
	file: $$file$5,
	url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro();
const $$Profile = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Profile;
  const id = Astro2.url.searchParams.get("id");
  return renderTemplate`${renderComponent($$result, "Page", $$Page, { "title": "Site rencontre" }, { "default": ($$result2) => renderTemplate`
        ${renderComponent($$result2, "NavBar", NavBar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "E:/PROJET/perso/capria/Capria-SiteRencontre-Front-deploy/src/components/NavBar.jsx", "client:component-export": "default" })}
        ${renderComponent($$result2, "Profile_component1", null, { "visitedId": id, "client:only": "react", "client:component-hydration": "only", "client:component-path": "E:/PROJET/perso/capria/Capria-SiteRencontre-Front-deploy/src/components/Profile_component1", "client:component-export": "default" })}
    ` })}`;
}, "E:/PROJET/perso/capria/Capria-SiteRencontre-Front-deploy/src/pages/profile.astro", void 0);

const $$file$4 = "E:/PROJET/perso/capria/Capria-SiteRencontre-Front-deploy/src/pages/profile.astro";
const $$url$4 = "/profile";

const profile = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Profile,
	file: $$file$4,
	url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro();
const $$Profil = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Profil;
  const id = Astro2.url.searchParams.get("id");
  return renderTemplate`${renderComponent($$result, "Page", $$Page, { "title": "Site rencontre" }, { "default": ($$result2) => renderTemplate`
        ${renderComponent($$result2, "Profile_component1", null, { "visitedId": id, "client:only": "react", "client:component-hydration": "only", "client:component-path": "E:/PROJET/perso/capria/Capria-SiteRencontre-Front-deploy/src/components/Profile_component1", "client:component-export": "default" })}
    ` })}`;
}, "E:/PROJET/perso/capria/Capria-SiteRencontre-Front-deploy/src/pages/profil.astro", void 0);

const $$file$3 = "E:/PROJET/perso/capria/Capria-SiteRencontre-Front-deploy/src/pages/profil.astro";
const $$url$3 = "/profil";

const profil = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Profil,
	file: $$file$3,
	url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

function Login() {
  const [email, setEmail] = useState("");
  const [mdp, setMdp] = useState("");
  const [erreur, setErreur] = useState(false);
  const log = async () => {
    console.log(email);
    var res = String(email).toLowerCase().match(/^[a-zA-Z0-9.]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+$/);
    if (res != null) {
      const jsonObject = {
        "mail": email,
        "mdp": mdp
      };
      const jsonString = JSON.stringify(jsonObject);
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Accept", "application/json");
      const response = await fetch(api("login"), {
        headers: myHeaders,
        method: "POST",
        body: jsonString
      });
      const reponse = await response.json();
      if (reponse.erreur == void 0) {
        var rep = JSON.stringify(reponse);
        localStorage.setItem("user", rep);
        const userAbo = await fetch(api("subscription/" + reponse[0].id), {
          headers: myHeaders,
          method: "GET"
        });
        const abo = await userAbo.json();
        if (abo.length == 0) {
          localStorage.setItem("abonnement", "");
        } else {
          const ajd = /* @__PURE__ */ new Date();
          const dateFin = new Date(abo[0].date_fin);
          if (dateFin > ajd) {
            localStorage.setItem("abonnement", JSON.stringify(abo[0]));
          } else {
            localStorage.setItem("abonnement", "");
          }
        }
        window.location.href = "/accueil";
      } else {
        setErreur(reponse.erreur);
      }
    } else {
      setErreur("Mail invalide");
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsxs("div", {
      className: "form-group",
      children: [/* @__PURE__ */ jsx("input", {
        type: "email",
        id: "email",
        name: "mail",
        className: "form-control",
        placeholder: " ",
        style: {
          "borderRadius": "0 !important"
        },
        onChange: (e) => {
          setEmail(e.target.value);
        }
      }), /* @__PURE__ */ jsx("label", {
        className: "form-label",
        children: "Adresse email"
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "form-group mb-4",
      children: [/* @__PURE__ */ jsx("input", {
        type: "password",
        id: "password",
        name: "mdp",
        className: "form-control",
        placeholder: " ",
        style: {
          "borderRadius": "0 !important"
        },
        onChange: (e) => {
          setMdp(e.target.value);
        }
      }), /* @__PURE__ */ jsx("label", {
        className: "form-label",
        htmlFor: "password",
        children: "Mot de passe"
      })]
    }), erreur && /* @__PURE__ */ jsx("div", {
      className: "alert alert-danger",
      role: "alert",
      children: erreur
    }), /* @__PURE__ */ jsx("div", {
      className: "form-group mb-4",
      children: /* @__PURE__ */ jsx("a", {
        href: "/forgot-password",
        children: "Mot de passe oublié."
      })
    }), /* @__PURE__ */ jsx("button", {
      type: "submit",
      className: "flex-c-m stext-101 bg2 hov-btn1 size-116 p-lr-15 trans-04 mb-3",
      onClick: log,
      children: "Se Connecter"
    })]
  });
}
__astro_tag_component__(Login, "@astrojs/react");

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$2 = createAstro();
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Login;
  if (Astro2.url.searchParams.get("deconnexion")) {
    localStorage.removeItem("user");
    localStorage.removeItem("abonnement");
  }
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<html lang="en" class="astro-SGPQYURT">\n<head>\n	<title>Se Connecter</title>\n	<meta charset="UTF-8">\n	<meta name="viewport" content="width=device-width, initial-scale=1">\n<!--===============================================================================================-->	\n	<link rel="icon" type="image/png" href="images/icons/favicon.png">\n<!--===============================================================================================-->\n	<link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css">\n<!--===============================================================================================-->\n	<link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css">\n<!--===============================================================================================-->\n	<link rel="stylesheet" type="text/css" href="fonts/iconic/css/material-design-iconic-font.min.css">\n<!--===============================================================================================-->\n	<link rel="stylesheet" type="text/css" href="fonts/linearicons-v1.0.0/icon-font.min.css">\n<!--===============================================================================================-->\n	<link rel="stylesheet" type="text/css" href="css/util.css">\n	<link rel="stylesheet" type="text/css" href="css/main.css">\n<!--===============================================================================================-->\n  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.css">\n  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/brands.css">\n', `</head>
<body class="animsition astro-SGPQYURT">

    <!-- Section: Design Block -->

    <!-- <script>
      function functionFromParent() {
        alert('hello from child component');
      }
    <\/script> -->

<section class="text-center text-lg-start astro-SGPQYURT">
    

    <!-- Jumbotron -->
    <div class="container py-4 astro-SGPQYURT">
      <div class="row g-0 align-items-center astro-SGPQYURT" style="margin-top: 5%;">
        <div class="col-md-1 astro-SGPQYURT"></div>
        <div class="col-lg-5 col-sm-10 mb-5 mb-lg-0 astro-SGPQYURT" style="z-index: 10;">
          <div class="card cascading-right jumbotron astro-SGPQYURT" style="
              background: hsla(0, 0%, 100%, 0.55);
              backdrop-filter: blur(30px);
              box-shadow: 0px 0px 15px -5px;
              border: none;
              box-shadow-right: none;
              border-radius: 0 !important;
              ">
            <div class="card-body p-5 shadow-5 text-center astro-SGPQYURT">
              <h2 class="fw-bold mb-5 astro-SGPQYURT">Connexion</h2>
              `, '\n  \n                <!-- Register buttons -->\n                <!-- <div class="text-center">\n                  <p>ou continuer avec</p>\n                  <button type="button" class="btn btn-link btn-floating mx-1">\n                    <i class="fab fa-facebook-f"></i>\n                  </button>\n  \n                  <button type="button" class="btn btn-link btn-floating mx-1">\n                    <i class="fab fa-google"></i>\n                  </button>\n  \n                  <button type="button" class="btn btn-link btn-floating mx-1">\n                    <i class="fab fa-twitter"></i>\n                  </button>\n  \n                  <button type="button" class="btn btn-link btn-floating mx-1">\n                    <i class="fab fa-github"></i>\n                  </button>\n                </div> -->\n              \n              ', `
              <a href="/forgot-password" class="astro-SGPQYURT">Mot de passe oubli\xE9?</a>
              <p class="astro-SGPQYURT">Vous n'avez pas de compte? <a href="/registration" class="astro-SGPQYURT">Inscrivez-vous.</a></p>
            </div>
          </div>
        </div>
  
        <div class="col-lg-5 col-sm-2 mb-5 mb-lg-0 astro-SGPQYURT">
          <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" style="box-shadow: 0px 0px 20px -5px;" class="w-100 rounded-4 shadow-4 astro-SGPQYURT" alt="">
        </div>
        <div class="col-md-1 astro-SGPQYURT"></div>
      </div>
    </div>
    <!-- Jumbotron -->
  </section>
  <!-- Section: Design Block -->

  `, '\n\n  \n\n  <!--===============================================================================================-->\n	<script src="vendor/sweetalert/sweetalert.min.js"><\/script>\n  <!--===============================================================================================-->\n  <script src="vendor/jquery/jquery-3.2.1.min.js"><\/script>\n  <script src="js/main.js"><\/script>\n    \n</body>\n</html>'])), renderHead(), renderComponent($$result, "Login", Login, { "client:load": true, "client:component-hydration": "load", "client:component-path": "E:/PROJET/perso/capria/Capria-SiteRencontre-Front-deploy/src/components/LoginForm.jsx", "client:component-export": "default", "class": "astro-SGPQYURT" }), renderComponent($$result, "SocialLogin", null, { "facebookAppId": ({}).FB_APP_ID, "googleAppId": ({}).GOOGLE_APP_ID, "client:only": true, "client:component-hydration": "only", "class": "astro-SGPQYURT", "client:component-path": "E:/PROJET/perso/capria/Capria-SiteRencontre-Front-deploy/src/components/Login.jsx", "client:component-export": "default" }), renderComponent($$result, "Footer", $$Footer, { "class": "astro-SGPQYURT" }));
}, "E:/PROJET/perso/capria/Capria-SiteRencontre-Front-deploy/src/pages/login.astro", void 0);

const $$file$2 = "E:/PROJET/perso/capria/Capria-SiteRencontre-Front-deploy/src/pages/login.astro";
const $$url$2 = "/login";

const login = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Login,
	file: $$file$2,
	url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Chat = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Chat;
  var idChatActive = "null";
  const val = Astro2.url.searchParams.get("id");
  if (val) {
    idChatActive = val;
  }
  return renderTemplate`${renderComponent($$result, "Page", $$Page, { "title": "Site rencontre - Chat" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(['\n    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">\n    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">\n    \n    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.min.css">\n    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.min.js"><\/script>\n\n    <link rel="stylesheet" type="text/css" href="css/chat.css">\n    \n      ', "\n      ", "\n        \n        \n    \n"])), renderComponent($$result2, "NavBar", NavBar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "E:/PROJET/perso/capria/Capria-SiteRencontre-Front-deploy/src/components/NavBar.jsx", "client:component-export": "default" }), renderComponent($$result2, "Chat", null, { "idChatActive": idChatActive, "client:only": "react", "client:component-hydration": "only", "client:component-path": "E:/PROJET/perso/capria/Capria-SiteRencontre-Front-deploy/src/components/Chat_component", "client:component-export": "default" })) })}`;
}, "E:/PROJET/perso/capria/Capria-SiteRencontre-Front-deploy/src/pages/chat.astro", void 0);

const $$file$1 = "E:/PROJET/perso/capria/Capria-SiteRencontre-Front-deploy/src/pages/chat.astro";
const $$url$1 = "/chat";

const chat = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Chat,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Test = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Test;
  return renderTemplate`${maybeRenderHead()}<p>coucou&#128514;</p>
    ${renderComponent($$result, "Emoji", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "E:/PROJET/perso/capria/Capria-SiteRencontre-Front-deploy/src/components/Emoji", "client:component-export": "default" })}
../components/NavBar.jsx`;
}, "E:/PROJET/perso/capria/Capria-SiteRencontre-Front-deploy/src/pages/test.astro", void 0);

const $$file = "E:/PROJET/perso/capria/Capria-SiteRencontre-Front-deploy/src/pages/test.astro";
const $$url = "/test";

const test = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Test,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { accueil_backup as a, abonnement as b, assistance as c, chatEssai as d, accueil as e, forgotPassword as f, landing as g, profil as h, index as i, login as j, chat as k, landing2 as l, profile as p, registration as r, test as t };
