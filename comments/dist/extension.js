(function (Scratch) {
  "use strict";

  class Comments {
    getInfo() {
      return {
        id: "comments",
        name: "Comments",
        color1: "#83eb34",
        color2: "#a3d94e",
        color3: "#4a6635",
        blocks: [
          {
            opcode: "commentReporter",
            blockType: Scratch.BlockType.REPORTER,
            text: "comment [COMMENT] passthrough [PASS]",
            arguments: {
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "comment",
              },
              PASS: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "pass through",
              },
            },
          },
          {
            opcode: "commentInline",
            blockType: Scratch.BlockType.COMMAND,
            text: "comment [COMMENT]",
            arguments: {
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "comment",
              },
            },
          },
          {
            opcode: "commentCblock",
            blockType: Scratch.BlockType.CONDITIONAL,
            text: "comment [COMMENT] run? [RUN]",
            arguments: {
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "comment",
              },
              RUN: {
                type: Scratch.ArgumentType.BOOLEAN,
                defaultValue: false,
              },
            },
          },
        ],
      };
    }

    commentReporter(args, util) {
      return args.PASS;
    }

    commentInline(args, util) {
      /* empty */
    }

    commentCblock(args, util) {
      return args.RUN;
    }
  }

  Scratch.extensions.register(new Comments());
})(Scratch);
