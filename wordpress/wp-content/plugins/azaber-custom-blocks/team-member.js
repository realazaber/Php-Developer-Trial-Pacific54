wp.blocks.registerBlockType("azaber/team-member", {
  title: "Team Member",
  icon: "insert",
  category: "design",
  attributes: {
    name: { type: "string" },
    position: { type: "string" },
    imagePath: { type: "string" },
    facebook: { type: "string" },
    twitter: { type: "string" },
    instagram: { type: "string" },
    linkedin: { type: "string" },
  },
  edit: function (props) {
    function updateName(event) {
      props.setAttributes({ name: event.target.value });
    }
    function updatePosition(event) {
      props.setAttributes({ position: event.target.value });
    }
    function updateImagePath(event) {
      props.setAttributes({ imagePath: event.target.value });
    }
    function updateFacebook(event) {
      props.setAttributes({ facebook: event.target.value });
    }
    function updateTwitter(event) {
      props.setAttributes({ twitter: event.target.value });
    }
    function updateInstagram(event) {
      props.setAttributes({ instagram: event.target.value });
    }
    function updateLinkedin(event) {
      props.setAttributes({ linkedin: event.target.value });
    }

    return /*#__PURE__*/ React.createElement(
      "div",
      null,
      /*#__PURE__*/ React.createElement("label", null, "Name: "),
      /*#__PURE__*/ React.createElement("input", {
        type: "text",
        value: props.attributes.name,
        onChange: updateName,
      }),
      /*#__PURE__*/ React.createElement("br", null),
      /*#__PURE__*/ React.createElement("label", null, "Position: "),
      /*#__PURE__*/ React.createElement("input", {
        type: "text",
        value: props.attributes.position,
        onChange: updatePosition,
      }),
      /*#__PURE__*/ React.createElement("br", null),
      /*#__PURE__*/ React.createElement("label", null, "Image path: "),
      /*#__PURE__*/ React.createElement("input", {
        type: "text",
        value: props.attributes.imagePath,
        onChange: updateImagePath,
      }),
      /*#__PURE__*/ React.createElement("br", null),
      /*#__PURE__*/ React.createElement("label", null, "Facebook: "),
      /*#__PURE__*/ React.createElement("input", {
        type: "text",
        value: props.attributes.facebook,
        onChange: updateFacebook,
      }),
      /*#__PURE__*/ React.createElement("br", null),
      /*#__PURE__*/ React.createElement("label", null, "Twitter: "),
      /*#__PURE__*/ React.createElement("input", {
        type: "text",
        value: props.attributes.twitter,
        onChange: updateTwitter,
      }),
      /*#__PURE__*/ React.createElement("br", null),
      /*#__PURE__*/ React.createElement("label", null, "Instagram: "),
      /*#__PURE__*/ React.createElement("input", {
        type: "text",
        value: props.attributes.instagram,
        onChange: updateInstagram,
      }),
      /*#__PURE__*/ React.createElement("br", null),
      /*#__PURE__*/ React.createElement("label", null, "Linkedin: "),
      /*#__PURE__*/ React.createElement("input", {
        type: "text",
        value: props.attributes.linkedin,
        onChange: updateLinkedin,
      }),
      /*#__PURE__*/ React.createElement("br", null)
    );
  },
  save: function (props) {
    return /*#__PURE__*/ React.createElement(
      "div",
      {
        class: "col-lg-4 col-md-6 wow fadeInUp",
        "data-wow-delay": "0.1s",
      },
      /*#__PURE__*/ React.createElement(
        "div",
        {
          class: "team-item",
        },
        /*#__PURE__*/ React.createElement(
          "div",
          {
            class: "d-flex",
          },
          /*#__PURE__*/ React.createElement(
            "div",
            {
              class:
                "flex-shrink-0 d-flex flex-column align-items-center mt-4 pt-5",
              style: "width: 75px",
            },
            /*#__PURE__*/ React.createElement(
              "a",
              {
                class: "btn btn-square text-primary bg-white my-1",
                href: props.attributes.facebook,
              },
              /*#__PURE__*/ React.createElement("i", {
                class: "fab fa-facebook-f",
              })
            ),
            /*#__PURE__*/ React.createElement(
              "a",
              {
                class: "btn btn-square text-primary bg-white my-1",
                href: props.attributes.twitter,
              },
              /*#__PURE__*/ React.createElement("i", {
                class: "fab fa-twitter",
              })
            ),
            /*#__PURE__*/ React.createElement(
              "a",
              {
                class: "btn btn-square text-primary bg-white my-1",
                href: props.attributes.instagram,
              },
              /*#__PURE__*/ React.createElement("i", {
                class: "fab fa-instagram",
              })
            ),
            /*#__PURE__*/ React.createElement(
              "a",
              {
                class: "btn btn-square text-primary bg-white my-1",
                href: props.attributes.linkedin,
              },
              /*#__PURE__*/ React.createElement("i", {
                class: "fab fa-linkedin-in",
              })
            )
          ),
          /*#__PURE__*/ React.createElement("img", {
            class: "img-fluid rounded w-100",
            src: props.attributes.imagePath,
            alt: "",
          })
        ),
        /*#__PURE__*/ React.createElement(
          "div",
          {
            class: "px-4 py-3",
          },
          /*#__PURE__*/ React.createElement(
            "h5",
            {
              class: "fw-bold m-0",
            },
            props.attributes.name
          ),
          /*#__PURE__*/ React.createElement(
            "small",
            null,
            props.attributes.position
          )
        )
      )
    );
  },
});
