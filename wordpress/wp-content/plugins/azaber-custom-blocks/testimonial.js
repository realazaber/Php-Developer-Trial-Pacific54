wp.blocks.registerBlockType("azaber/testimonial", {
  title: "Testimonial",
  icon: "insert",
  category: "design",
  attributes: {
    name: { type: "string" },
    profession: { type: "string" },
    comment: { type: "string" },
    imagePath: { type: "string" },
  },
  edit: function (props) {
    function updateName(event) {
      props.setAttributes({ name: event.target.value });
    }
    function updateProfession(event) {
      props.setAttributes({ profession: event.target.value });
    }
    function updateComment(event) {
      props.setAttributes({ comment: event.target.value });
    }
    function updateImage(event) {
      props.setAttributes({ imagePath: event.target.value });
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
      /*#__PURE__*/ React.createElement("label", null, "Profession: "),
      /*#__PURE__*/ React.createElement("input", {
        type: "text",
        value: props.attributes.profession,
        onChange: updateProfession,
      }),
      /*#__PURE__*/ React.createElement("br", null),
      /*#__PURE__*/ React.createElement("label", null, "Image Path: "),
      /*#__PURE__*/ React.createElement("input", {
        type: "text",
        value: props.attributes.imagePath,
        onChange: updateImage,
      }),
      /*#__PURE__*/ React.createElement("br", null),
      /*#__PURE__*/ React.createElement("label", null, "Comment: "),
      /*#__PURE__*/ React.createElement("textarea", {
        cols: "10",
        rows: "5",
        value: props.attributes.comment,
        onChange: updateComment,
      })
    );
  },
  save: function (props) {
    return /*#__PURE__*/ React.createElement(
      "div",
      {
        class: "testimonial-item bg-transparent border rounded text-white p-4",
      },
      /*#__PURE__*/ React.createElement("i", {
        class: "fa fa-quote-left fa-2x mb-3",
      }),
      /*#__PURE__*/ React.createElement("p", null, props.attributes.comment),
      /*#__PURE__*/ React.createElement(
        "div",
        {
          class: "d-flex align-items-center",
        },
        /*#__PURE__*/ React.createElement("img", {
          class: "img-fluid flex-shrink-0 rounded-circle",
          src: props.attributes.imagePath,
          style: {
            width: "50px",
            height: "50px",
          },
        }),
        /*#__PURE__*/ React.createElement(
          "div",
          {
            class: "ps-3",
          },
          /*#__PURE__*/ React.createElement(
            "h6",
            {
              class: "text-white mb-1",
            },
            props.attributes.name
          ),
          /*#__PURE__*/ React.createElement(
            "small",
            null,
            props.attributes.profession
          )
        )
      )
    );
  },
});
