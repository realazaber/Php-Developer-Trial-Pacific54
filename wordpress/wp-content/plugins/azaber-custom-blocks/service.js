wp.blocks.registerBlockType("azaber/service", {
  title: "Service",
  icon: "insert",
  category: "design",
  attributes: {
    title: { type: "string" },
    description: { type: "string" },
    link: { type: "string" },
  },
  edit: function (props) {
    function updateTitle(event) {
      props.setAttributes({ title: event.target.value });
    }
    function updateDescription(event) {
      props.setAttributes({ description: event.target.value });
    }
    function updateUrl(event) {
      props.setAttributes({ link: event.target.value });
    }

    return /*#__PURE__*/ React.createElement(
      "div",
      null,
      /*#__PURE__*/ React.createElement("label", null, "Title: "),
      /*#__PURE__*/ React.createElement("input", {
        type: "text",
        value: props.attributes.title,
        onChange: updateTitle,
      }),
      /*#__PURE__*/ React.createElement("br", null),
      /*#__PURE__*/ React.createElement("label", null, "Description: "),
      /*#__PURE__*/ React.createElement("textarea", {
        cols: "5",
        rows: "3",
        value: props.attributes.description,
        onChange: updateDescription,
      }),
      /*#__PURE__*/ React.createElement("br", null),
      /*#__PURE__*/ React.createElement("label", null, "URL: "),
      /*#__PURE__*/ React.createElement("input", {
        type: "text",
        value: props.attributes.link,
        onChange: updateUrl,
      })
    );
  },
  save: function (props) {
    return /*#__PURE__*/ React.createElement(
      "div",
      {
        class: "col-lg-4 col-md-6 wow zoomIn",
      },
      /*#__PURE__*/ React.createElement(
        "div",
        {
          class:
            "service-item d-flex flex-column justify-content-center text-center rounded",
        },
        /*#__PURE__*/ React.createElement(
          "div",
          {
            class: "service-icon flex-shrink-0",
          },
          /*#__PURE__*/ React.createElement("i", {
            class: "fa fa-home fa-2x",
          })
        ),
        /*#__PURE__*/ React.createElement(
          "h5",
          {
            class: "mb-3",
          },
          props.attributes.title
        ),
        /*#__PURE__*/ React.createElement(
          "p",
          null,
          props.attributes.description
        ),
        /*#__PURE__*/ React.createElement(
          "a",
          {
            class: "btn px-3 mt-auto mx-auto",
            href: props.attributes.link,
          },
          "Read More"
        )
      )
    );
  },
});
