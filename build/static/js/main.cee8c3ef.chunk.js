(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    13: function(e, a, t) {},
    15: function(e, a, t) {
      "use strict";
      t.r(a);
      var n = t(0),
        l = t.n(n),
        r = t(7),
        s = t.n(r),
        i = (t(13), t(1)),
        c = t(2),
        o = t(4),
        m = t(3),
        u = t(5),
        p = (function(e) {
          function a() {
            return (
              Object(i.a)(this, a),
              Object(o.a)(this, Object(m.a)(a).apply(this, arguments))
            );
          }
          return (
            Object(u.a)(a, e),
            Object(c.a)(a, [
              {
                key: "render",
                value: function() {
                  var e = this.props.resumeData;
                  return l.a.createElement(
                    l.a.Fragment,
                    null,
                    l.a.createElement(
                      "header",
                      { id: "home" },
                      l.a.createElement(
                        "nav",
                        { id: "nav-wrap" },
                        l.a.createElement(
                          "a",
                          {
                            className: "mobile-btn",
                            href: "#nav-wrap",
                            title: "Show navigation",
                          },
                          "Show navigation"
                        ),
                        l.a.createElement(
                          "a",
                          {
                            className: "mobile-btn",
                            href: "#",
                            title: "Hide navigation",
                          },
                          "Hide navigation"
                        ),
                        l.a.createElement(
                          "ul",
                          { id: "nav", className: "nav" },
                          l.a.createElement(
                            "li",
                            { className: "current" },
                            l.a.createElement(
                              "a",
                              { className: "smoothscroll", href: "#home" },
                              "Home"
                            )
                          ),
                          l.a.createElement(
                            "li",
                            null,
                            l.a.createElement(
                              "a",
                              { className: "smoothscroll", href: "#about" },
                              "About"
                            )
                          ),
                          l.a.createElement(
                            "li",
                            null,
                            l.a.createElement(
                              "a",
                              { className: "smoothscroll", href: "#resume" },
                              "Resume"
                            )
                          ),
                          l.a.createElement(
                            "li",
                            null,
                            l.a.createElement(
                              "a",
                              { className: "smoothscroll", href: "#portfolio" },
                              "Works"
                            )
                          ),
                          l.a.createElement(
                            "li",
                            null,
                            l.a.createElement(
                              "a",
                              {
                                className: "smoothscroll",
                                href: "#testimonials",
                              },
                              "Testimonials"
                            )
                          ),
                          l.a.createElement(
                            "li",
                            null,
                            l.a.createElement(
                              "a",
                              { className: "smoothscroll", href: "#contact" },
                              "Contact"
                            )
                          )
                        )
                      ),
                      l.a.createElement(
                        "div",
                        { className: "row banner" },
                        l.a.createElement(
                          "div",
                          { className: "banner-text" },
                          l.a.createElement(
                            "h1",
                            { className: "responsive-headline" },
                            e.name,
                            "."
                          ),
                          l.a.createElement(
                            "h3",
                            {
                              style: {
                                color: "#fff",
                                fontFamily: "sans-serif ",
                              },
                            },
                            e.role,
                            e.roleDescription
                          ),
                          l.a.createElement("hr", null),
                          l.a.createElement(
                            "ul",
                            { className: "social" },
                            e.socialLinks &&
                              e.socialLinks.map(function(e) {
                                return l.a.createElement(
                                  "li",
                                  { key: e.name },
                                  l.a.createElement(
                                    "a",
                                    { href: e.url, target: "_blank" },
                                    l.a.createElement("i", {
                                      className: e.className,
                                    })
                                  )
                                );
                              })
                          )
                        )
                      ),
                      l.a.createElement(
                        "p",
                        { className: "scrolldown" },
                        l.a.createElement(
                          "a",
                          { className: "smoothscroll", href: "#about" },
                          l.a.createElement("i", {
                            className: "icon-down-circle",
                          })
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        h = (function(e) {
          function a() {
            return (
              Object(i.a)(this, a),
              Object(o.a)(this, Object(m.a)(a).apply(this, arguments))
            );
          }
          return (
            Object(u.a)(a, e),
            Object(c.a)(a, [
              {
                key: "render",
                value: function() {
                  var e = this.props.resumeData;
                  return l.a.createElement(
                    "section",
                    { id: "about" },
                    l.a.createElement(
                      "div",
                      { className: "row" },
                      l.a.createElement(
                        "div",
                        { className: "three columns" },
                        l.a.createElement("img", {
                          className: "profile-pic",
                          src: "images/profilepic.jpg",
                          alt:
                            "photo of ethan with his young son on his shoulders",
                        })
                      ),
                      l.a.createElement(
                        "div",
                        { className: "nine columns main-col" },
                        l.a.createElement("h2", null, "About Me"),
                        l.a.createElement("p", null, e.aboutme),
                        l.a.createElement(
                          "div",
                          { className: "row" },
                          l.a.createElement(
                            "div",
                            { className: "columns contact-details" },
                            l.a.createElement("h2", null, "Contact Details"),
                            l.a.createElement(
                              "p",
                              { className: "address" },
                              l.a.createElement("span", null, e.name),
                              l.a.createElement("br", null),
                              l.a.createElement("span", null, e.address),
                              l.a.createElement("br", null),
                              l.a.createElement("span", null, e.website)
                            )
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        E = (function(e) {
          function a() {
            return (
              Object(i.a)(this, a),
              Object(o.a)(this, Object(m.a)(a).apply(this, arguments))
            );
          }
          return (
            Object(u.a)(a, e),
            Object(c.a)(a, [
              {
                key: "render",
                value: function() {
                  var e = this.props.resumeData;
                  return l.a.createElement(
                    "section",
                    { id: "resume" },
                    l.a.createElement(
                      "div",
                      { className: "row education" },
                      l.a.createElement(
                        "div",
                        { className: "three columns header-col" },
                        l.a.createElement(
                          "h1",
                          null,
                          l.a.createElement("span", null, "Education")
                        )
                      ),
                      l.a.createElement(
                        "div",
                        { className: "nine columns main-col" },
                        e.education &&
                          e.education.map(function(e) {
                            return l.a.createElement(
                              "div",
                              { className: "row item" },
                              l.a.createElement(
                                "div",
                                { className: "twelve columns" },
                                l.a.createElement("h3", null, e.UniversityName),
                                l.a.createElement(
                                  "p",
                                  { className: "info" },
                                  e.specialization,
                                  l.a.createElement("span", null, "\u2022"),
                                  " ",
                                  l.a.createElement(
                                    "em",
                                    { className: "date" },
                                    e.MonthOfPassing,
                                    " ",
                                    e.YearOfPassing
                                  )
                                ),
                                l.a.createElement("p", null, e.Achievements)
                              )
                            );
                          })
                      )
                    ),
                    l.a.createElement(
                      "div",
                      { className: "row work" },
                      l.a.createElement(
                        "div",
                        { className: "three columns header-col" },
                        l.a.createElement(
                          "h1",
                          null,
                          l.a.createElement("span", null, "Work")
                        )
                      ),
                      l.a.createElement(
                        "div",
                        { className: "nine columns main-col" },
                        e.work &&
                          e.work.map(function(e) {
                            return l.a.createElement(
                              "div",
                              { className: "row item" },
                              l.a.createElement(
                                "div",
                                { className: "twelve columns" },
                                l.a.createElement("h3", null, e.CompanyName),
                                l.a.createElement(
                                  "p",
                                  { className: "info" },
                                  e.specialization,
                                  l.a.createElement("span", null, "\u2022"),
                                  " ",
                                  l.a.createElement(
                                    "em",
                                    { className: "date" },
                                    e.MonthOfLeaving,
                                    " ",
                                    e.YearOfLeaving
                                  )
                                ),
                                l.a.createElement("p", null, e.Achievements)
                              )
                            );
                          })
                      )
                    ),
                    l.a.createElement(
                      "div",
                      { className: "row skill" },
                      l.a.createElement(
                        "div",
                        { className: "three columns header-col" },
                        l.a.createElement(
                          "h1",
                          null,
                          l.a.createElement("span", null, "Skills")
                        )
                      ),
                      l.a.createElement(
                        "div",
                        { className: "nine columns main-col" },
                        l.a.createElement("p", null, e.skillsDescription),
                        l.a.createElement(
                          "div",
                          { className: "bars" },
                          l.a.createElement(
                            "ul",
                            { className: "skills" },
                            e.skills &&
                              e.skills.map(function(e) {
                                return l.a.createElement(
                                  "li",
                                  null,
                                  l.a.createElement("span", {
                                    className: "bar-expand ".concat(
                                      e.skillname.toLowerCase()
                                    ),
                                  }),
                                  l.a.createElement("em", null, e.skillname)
                                );
                              })
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        d = (function(e) {
          function a() {
            return (
              Object(i.a)(this, a),
              Object(o.a)(this, Object(m.a)(a).apply(this, arguments))
            );
          }
          return (
            Object(u.a)(a, e),
            Object(c.a)(a, [
              {
                key: "render",
                value: function() {
                  var e = this.props.resumeData;
                  return l.a.createElement(
                    "section",
                    { id: "portfolio" },
                    l.a.createElement(
                      "div",
                      { className: "row" },
                      l.a.createElement(
                        "div",
                        { className: "twelve columns collapsed" },
                        l.a.createElement("h1", null, "Some of my projects"),
                        l.a.createElement(
                          "div",
                          {
                            id: "portfolio-wrapper",
                            className: "bgrid-quarters s-bgrid-thirds cf",
                          },
                          e.portfolio &&
                            e.portfolio.map(function(e) {
                              return l.a.createElement(
                                "div",
                                { className: "columns portfolio-item" },
                                l.a.createElement(
                                  "div",
                                  { className: "item-wrap" },
                                  l.a.createElement(
                                    "a",
                                    { href: "#modal-01" },
                                    l.a.createElement("img", {
                                      src: "".concat(e.imgurl),
                                      className: "item-img",
                                    }),
                                    l.a.createElement(
                                      "div",
                                      { className: "overlay" },
                                      l.a.createElement(
                                        "div",
                                        { className: "portfolio-item-meta" },
                                        l.a.createElement("h5", null, e.name),
                                        l.a.createElement(
                                          "p",
                                          null,
                                          e.description
                                        )
                                      )
                                    )
                                  )
                                )
                              );
                            })
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        f = (function(e) {
          function a() {
            return (
              Object(i.a)(this, a),
              Object(o.a)(this, Object(m.a)(a).apply(this, arguments))
            );
          }
          return (
            Object(u.a)(a, e),
            Object(c.a)(a, [
              {
                key: "render",
                value: function() {
                  var e = this.props.resumeData;
                  return l.a.createElement(
                    "section",
                    { id: "contact" },
                    l.a.createElement(
                      "div",
                      { className: "row section-head" },
                      l.a.createElement(
                        "div",
                        { className: "ten columns" },
                        l.a.createElement(
                          "p",
                          { className: "lead" },
                          "Feel free to contact me for any work or suggestions below"
                        )
                      )
                    ),
                    l.a.createElement(
                      "div",
                      { className: "row" },
                      l.a.createElement(
                        "aside",
                        { className: "eigth columns footer-widgets" },
                        l.a.createElement(
                          "div",
                          { className: "widget" },
                          l.a.createElement(
                            "h4",
                            null,
                            "Linked in :",
                            e.linkedinId
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        v = (function(e) {
          function a() {
            return (
              Object(i.a)(this, a),
              Object(o.a)(this, Object(m.a)(a).apply(this, arguments))
            );
          }
          return (
            Object(u.a)(a, e),
            Object(c.a)(a, [
              {
                key: "render",
                value: function() {
                  var e = this.props.resumeData;
                  return l.a.createElement(
                    "footer",
                    null,
                    l.a.createElement(
                      "div",
                      { className: "row" },
                      l.a.createElement(
                        "div",
                        { className: "twelve columns" },
                        l.a.createElement(
                          "ul",
                          { className: "social-links" },
                          e.socialLinks &&
                            e.socialLinks.map(function(e) {
                              return l.a.createElement(
                                "li",
                                null,
                                l.a.createElement(
                                  "a",
                                  { href: e.url },
                                  l.a.createElement("i", {
                                    className: e.className,
                                  })
                                )
                              );
                            })
                        )
                      ),
                      l.a.createElement(
                        "div",
                        { id: "go-top" },
                        l.a.createElement(
                          "a",
                          {
                            className: "smoothscroll",
                            title: "Back to Top",
                            href: "#home",
                          },
                          l.a.createElement("i", { className: "icon-up-open" })
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        N = {
          imagebaseurl: "httpss://rbhatia46.github.io/",
          name: "Ethan Shook",
          role: "Full Stack Developer",
          linkedinId: "ethanshook",
          skypeid: "Your skypeid",
          roleDescription: " based in Minneapolis, Minnesota. ",
          socialLinks: [
            {
              name: "linkedin",
              url: "httpss://www.linkedin.com/in/ethanshook/",
              className: "fa fa-linkedin",
            },
            {
              name: "github",
              url: "https://github.com/shookster",
              className: "fa fa-github",
            },
            {
              name: "skype",
              url: "https://twitter.com/ethanshook",
              className: "fa fa-twitter",
            },
          ],
          aboutme:
            "I am a motivated Web Developer who uses customer service, training, and management skills to provide an excellent experience for customers and coworkers. Expert in diagnosing problems and finding innovative solutions. Recently earned a Certificate in Full Stack Web Development form the University of Minnesota.",
          address: "Minneapolis, MN",
          website: "httpss://www.shooktown.com",
          education: [
            {
              UniversityName: "University of Minnesota Bootcamp",
              specialization: "Full Stack Development",
              MonthOfPassing: "December",
              YearOfPassing: "2020",
              Achievements: "Certificate",
            },
            {
              UniversityName: "Trinity International University",
              specialization: "English/Communication",
              MonthOfPassing: "August",
              YearOfPassing: "2012",
              Achievements: "Bachelor of Arts",
            },
          ],
          work: [
            {
              CompanyName: "Caribou Coffee Company",
              specialization: "General Mangaer",
              MonthOfLeaving: "May",
              YearOfLeaving: "2016 - Present",
            },
            {
              CompanyName: "Trinity International University",
              specialization: "Visit Coordinator",
              MonthOfLeaving: "October, 2014 - April, 2015",
            },
          ],
          skillsDescription: "Your skills here",
          skills: [
            { skillname: "HTML5" },
            { skillname: "CSS" },
            { skillname: "Reactjs" },
          ],
          portfolio: [
            {
              name: "project1",
              description: "mobileapp",
              imgurl: "images/portfolio/phone.jpg",
            },
            {
              name: "project2",
              description: "mobileapp",
              imgurl: "images/portfolio/project.jpg",
            },
            {
              name: "project3",
              description: "mobileapp",
              imgurl: "images/portfolio/project2.png",
            },
            {
              name: "project4",
              description: "mobileapp",
              imgurl: "images/portfolio/phone.jpg",
            },
          ],
          testimonials: [
            {
              description: "This is a sample testimonial",
              name: "Some technical guy",
            },
            {
              description: "This is a sample testimonial",
              name: "Some technical guy",
            },
          ],
        },
        b = (function(e) {
          function a() {
            return (
              Object(i.a)(this, a),
              Object(o.a)(this, Object(m.a)(a).apply(this, arguments))
            );
          }
          return (
            Object(u.a)(a, e),
            Object(c.a)(a, [
              {
                key: "render",
                value: function() {
                  return l.a.createElement(
                    "div",
                    { className: "App" },
                    l.a.createElement(p, { resumeData: N }),
                    l.a.createElement(h, { resumeData: N }),
                    l.a.createElement(E, { resumeData: N }),
                    l.a.createElement(d, { resumeData: N }),
                    l.a.createElement(f, { resumeData: N }),
                    l.a.createElement(v, { resumeData: N })
                  );
                },
              },
            ]),
            a
          );
        })(n.Component);
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      s.a.render(l.a.createElement(b, null), document.getElementById("root")),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    },
    8: function(e, a, t) {
      e.exports = t(15);
    },
  },
  [[8, 2, 1]],
]);
//# sourceMappingURL=main.cee8c3ef.chunk.js.map
