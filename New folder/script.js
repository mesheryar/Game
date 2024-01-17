function init() {
    const tiles = [
      { id: "h_edge", criteria: ["xoxx"] },
      { id: "h", criteria: ["xoxo", "ooxo"] },
      { id: "t_joint_down", criteria: ["xooo", "oooo"], criteria2: ["xx"] },
      { id: "h_edge_h", criteria: ["xxxo"] },
      { id: "v_up_edge", criteria: ["xxox"] },
      { id: "l_corner", criteria: ["ooxx"] },
      { id: "l_corner_h", criteria: ["oxxo"] },
      { id: "r_corner", criteria: ["xoox"], criteria2: ["xx", "xo"] },
      { id: "r_corner_h", criteria: ["xxoo"], criteria2: ["xx", "ox"] },
      { id: "v", criteria: ["oxox"] },
      { id: "dot", criteria: ["xxxx"] },
      { id: "v_down_edge", criteria: ["oxxx"] },
      { id: "block_edge", criteria: ["ooox"], criteria2: ["oo", "ox"] },
      { id: "block_edge_h", criteria: ["oxoo"], criteria2: ["oo", "xo"] },
      { id: "block", criteria: ["oooo", "xooo"], criteria2: ["oo"] },
      { id: "block_corner", criteria: ["xoox"], criteria2: ["oo", "ox"] },
      { id: "block_corner_h", criteria: ["xxoo"], criteria2: ["xo", "oo"] },
      { id: "block_r_joint", criteria: ["oooo", "xooo"], criteria2: ["xo"] },
      { id: "block_r_joint_h", criteria: ["oooo", "xooo"], criteria2: ["ox"] },
      { id: "block_edge_r_joint", criteria: ["ooox"], criteria2: ["xo", "xx"] },
      { id: "block_edge_r_joint_h", criteria: ["oxoo"], criteria2: ["ox", "xx"] },
      { id: "top_left_corner" },
      { id: "top_right_corner" },
      { id: "bottom_left_corner" },
      { id: "bottom_right_corner" },
      { id: "top_dot" },
      { id: "top_dot_h" },
      { id: "bottom_dot" },
      { id: "bottom_dot_h" },
      { id: "floor" }
    ];
  
    const extraTileModules = [
      {
        score: 1000,
        modules: {
          random1:
            "$4,6,$2,5,$2,2,$2,3,$2,6,d1,5,$2,6,$5,4,$2,2,$1,9,m1,1,$1,3,m1,$1,5,$1,14,$1",
          random2:
            "1,$2,1,$1,4,$1,1,$2,12,$3,4,d1,2,$1,8,$2,1,$1,2,$1,5,$1,5,$3,2,$3,1,m1,1,$1,2,m1,2,$1,2,$1,1,$1,4,$1,10",
          random3:
            "1,$2,3,$1,1,$2,9,$1,2,$1,1,$2,4,$1,1,$2,1,$1,6,$1,4,d1,4,$1,1,m1,8,$1,3,$1,3,$1,1,$2,3,m1,2,$1,14,$1,3",
          random4:
            "$1,4,$1,4,$2,5,$1,6,$1,8,$1,4,$1,1,$2,4,d1,2,$1,11,m1,7,$1,3,$1,1,$3,1,$3,1,$4,m1,1,$1,5,$3,2",
          block2:
            "11,b8,2,b8,2,b2,m1,1,b4,2,b2,2,b4,2,b8,2,b5,2,b1,2,b5,1,d1,b1,2,b8,11"
        }
      },
      {
        score: 3000,
        modules: {
          random5:
            "8,$1,9,$1,2,$2,2,d1,7,$1,2,$3,4,$1,7,$1,3,$1,1,$1,5,m1,2,$2,8,$1,4,$2,2,$1,1,$1,12",
          random6:
            "5,$1,5,$1,6,m1,1,$2,1,d1,6,$2,4,$1,2,$1,3,$1,6,$1,2,$4,1,$2,2,m1,3,$2,5,$1,1,$1,3,$3,5,$6,7"
        }
      },
      {
        score: 6000,
        modules: {
          sun:
            "11,d1,2,b2,2,d1,3,b6,4,b1,m1,2,m1,b1,3,b2,4,b2,2,b2,4,b2,3,b1,m1,2,m1,b1,4,b6,3,d1,2,b2,2,d1,11",
          block3:
            "11,$2,1,b2,1,$2,2,$2,1,b2,1,$2,2,d1,1,m1,2,m1,1,d1,2,b2,1,$2,1,b2,2,b2,1,$2,1,b2,2,d1,1,m1,2,m1,1,d1,2,$2,1,b2,1,$2,2,$2,1,b2,1,$2,11"
        }
      },
      {
        score: 9000,
        modules: {
          diagonal:
            "22,$2,b4,4,$1,d1,2,m1,$3,2,b1,2,m1,1,b1,4,b1,1,m1,2,b1,2,$3,m1,2,d1,$1,4,b4,$2,22",
          random7:
            "14,b3,5,$3,b1,$2,d1,3,$1,m1,2,$1,2,$1,2,$4,2,$2,1,d1,1,$2,1,$1,1,b1,3,$1,2,m1,2,b1,3,b1,m1,3,m1,b1,3,$1,b3,$1,b2,11"
        }
      },
      {
        score: 12000,
        modules: {
          block4:
            "12,b6,3,b8,2,b2,m1,1,m1,1,b2,5,m1,1,m1,6,m1,1,m1,5,b2,1,m1,1,m1,b2,2,b8,3,b6,12"
        }
      }
    ];
  
    const tileModules = {
      exclamation_mark:
        "5,$5,12,$2,8,$1,d1,12,$1,3,$1,5,$1,2,$2,8,$2,5,$1,2,$2,7,m1,$1,5,$5",
      cyclone:
        "9,$1,3,d1,8,$1,2,$3,4,$1,9,$1,1,$2,8,$2,1,$1,8,m1,$1,2,$5,2,$1,11,$1,9,$1",
      eye: "$2,6,$3,8,$1,2,d1,4,m1,6,$2,7,$4,6,$4,7,$2,6,m1,4,d1,2,$1,8,$3,6,$2",
      broken_flag:
        "21,$4,7,$1,m1,1,$1,2,d1,22,$1,2,$1,2,$1,3,$1,3,$4,2,$1,1,m1,7,$1,8",
      dots:
        "1,$1,2,$1,2,$1,20,d1,1,$1,2,$1,2,$1,2,$1,21,$1,2,$1,2,$1,4,m1,17,$1,2,$1,2,$1,2,$1",
      vertical_river:
        "17,$1,6,d1,2,$1,4,$1,4,$1,3,$2,1,$1,2,$1,3,$1,2,$2,1,$1,6,$2,5,$1,2,$2,1,m1,6,$1,15",
      target:
        "15,d1,6,$3,1,$2,4,$1,5,$1,1,$1,7,$1,1,$1,3,m1,1,m1,5,$1,9,$2,4,$1,3,$3,1,$3,11",
      r: "18,d1,4,$2,1,$2,4,$6,4,$5,5,$3,7,$2,1,m1,6,$3,8,$2,7,$3,5",
      s: "23,$4,5,$8,2,$2,4,m1,4,$4,9,$2,2,$1,1,$5,7,d1,15",
      dash_dot_dot_dash: "20,$5,5,$5,2,$1,d1,1,$5,21,$4,1,$1,1,m1,2,$4,20",
      i: "12,d1,12,$2,7,$3,7,$2,m1,6,$4,6,$4,6,m1,$3,6,$4,6,$3,4",
      ya:
        "23,$1,1,d1,1,$1,4,$6,4,$6,5,$2,1,$2,5,$2,1,$2,2,$1,2,$2,5,$1,2,m1,6,$1,6,$3",
      random:
        "1,$2,3,$1,1,$2,9,$1,2,$1,1,$2,4,$1,1,$2,1,$1,6,$1,4,d1,4,$1,1,m1,8,$1,3,$1,3,$1,1,$2,3,m1,2,$1,14,$1,3",
      target2:
        "12,$3,1,$3,3,$1,11,$1,3,$1,2,d1,2,$3,5,$1,1,$1,m1,6,$1,5,$1,4,$2,1,$2,2,$1,9,$1,9",
      block: "18,d1,3,b6,4,b6,4,b2,1,m1,b2,4,b2,m1,1,b2,4,b6,4,b6,3,d1,18"
    };
  
    const elements = {
      wrapper: document.querySelector(".main"),
      mapImage: document.querySelector(".map-image"),
      mapTiles: document.querySelector(".map-tiles"),
      displayBtn: document.querySelector(".display"),
      startBtn: document.querySelector(".start"),
      message: document.querySelector(".message"),
      howToPlay: document.querySelector(".how-to-play")
    };
  
    const player = {
      pos: 314,
      el: document.querySelector(".player"),
      sprite: document.querySelector(".player").childNodes[1].childNodes[1],
      walkingDirection: "",
      facingDirection: "",
      walkingInterval: "",
      pause: false,
      id: "catblob",
      d: 44,
      life: {
        markers: document.querySelectorAll(".life-marker"),
        point: 4
      },
      invincible: false,
      invincibleCount: 0,
      mouseBlobCaught: {
        el: document.querySelector(".catch-no"),
        no: 0,
        total: 0
      },
      itemScore: 0
    };
  
    const npcObj = {
      x: 0,
      y: 0,
      goal: 0,
      carryOn: true,
      delay: 10,
      pause: false,
      facingDirection: ""
    };
  
    const dogBlobObj = {
      pos: 100,
      d: 44,
      chaseTarget: player,
      attackDir: null,
      isHunting: true,
      type: "dogBlob"
    };
  
    const mouseBlobObj = {
      pos: 200,
      d: 36,
      chaseTarget: null,
      runAwayTarget: player,
      isHunting: false,
      isFleeing: true,
      type: "mouseBlob"
    };
  
    const settings = {
      transitionTimer: null,
      spriteInterval: null,
      npcMotioninterval: null,
      isWindowActive: true,
      yOffset: 0,
      offsetPos: { x: 0, y: 0 },
      npcs: [],
      items: [],
      mapImage: {
        el: elements.mapImage.parentNode,
        canvas: elements.mapImage,
        ctx: elements.mapImage.getContext("2d"),
        x: 0,
        y: 0,
        w: 0,
        h: 0
      },
      map: {
        el: document.querySelector(".map-cover"),
        d: 32,
        column: 20,
        row: 20,
        data: [],
        blocks: []
      },
      cursor: {
        el: document.querySelector(".cursor"),
        x: 0,
        y: 0
      },
      drawPos: {
        x: 0,
        y: 0
      },
      time: {
        el: document.querySelector(".time-indicator"),
        no: 60,
        timer: null
      },
      demoMode: true,
      gameOver: false,
      tilesWithNoWalls: [],
      pauseBlockCreation: false,
      score: 0
    };
  
    const control = {
      wrapper: document.querySelector(".control-wrapper"),
      el: document.querySelector(".control"),
      active: false,
      direction: null,
      timer: null,
      pos: { x: 0, y: 0 },
      movePos: { x: 0, y: 0 }
    };
  
    const decompress = (arr) => {
      const output = [];
      const input = Array.isArray(arr) ? arr : arr.split(",");
      input.forEach((x) => {
        const letter = x
          .split("")
          .filter((y) => y * 0 !== 0)
          .join("");
        const repeat = x
          .split("")
          .filter((y) => y * 0 === 0)
          .join("");
        for (let i = 0; i < repeat; i++) {
          output.push(letter);
        }
      });
      return output;
    };
  
    const addEvents = (target, event, action, array) => {
      array.forEach((a) =>
        event === "remove"
          ? target.removeEventListener(a, action)
          : target.addEventListener(a, action)
      );
    };
  
    const mouse = {
      up: (t, e, a) => addEvents(t, e, a, ["mouseup", "touchend"]),
      move: (t, e, a) => addEvents(t, e, a, ["mousemove", "touchmove"]),
      down: (t, e, a) => addEvents(t, e, a, ["mousedown", "touchstart"]),
      enter: (t, e, a) => addEvents(t, e, a, ["mouseenter", "touchstart"]),
      leave: (t, e, a) => addEvents(t, e, a, ["mouseleave"])
    };
    const mapX = (i) => i % settings.map.column;
    const mapY = (i) => Math.floor(i / settings.map.column);
    const isNo = (x) => typeof x === "number";
    const px = (n) => `${n}px`;
    const setPos = ({ el, x, y }) =>
      Object.assign(el.style, { left: `${x}px`, top: `${y}px` });
    const setStyles = ({ el, x, y, w, h, d }) => {
      const m = d || 1;
      if (isNo(w)) el.style.width = px(w * m);
      if (isNo(h)) el.style.height = px(h * m);
      el.style.transform = `translate(${x ? px(x) : 0}, ${y ? px(y) : 0})`;
    };
    const nearestN = (n, denom) =>
      n === 0 ? 0 : n - 1 + Math.abs(((n - 1) % denom) - denom);
    const randomN = (max) => Math.ceil(Math.random() * max);
    const blockState = [
      "cracked",
      "cracked-more",
      "cracked-even-more",
      "shattered"
    ];
    const distanceBetween = (a, b) =>
      Math.round(Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2)));
    const ePos = (e, type) =>
      Math.round(
        e.type[0] === "m" ? e[`page${type}`] : e.touches[0][`page${type}`]
      );
    const randomItem = (arr) => arr[randomN(arr.length) - 1];
    const zero = (no) => (no < 10 ? "0" : "");
  
    const updateOffset = () => {
      const { offsetWidth: w, offsetHeight: h } = elements.wrapper;
      settings.offsetPos = {
        x: w / 2 - 16,
        y: h / 2 - 16
      };
    };
  
    const positionMapImage = () => {
      const {
        offsetPos: { x, y },
        map: { d }
      } = settings;
      settings.mapImage.x = x - mapX(player.pos) * d;
      settings.mapImage.y = y - mapY(player.pos) * d;
    };
  
    const adjustMapWidthAndHeight = () => {
      updateOffset();
      positionMapImage();
      setStyles(settings.mapImage);
      settings.mapImage.el.classList.add("transition");
      clearTimeout(settings.transitionTimer);
      settings.transitionTimer = setTimeout(() => {
        settings.mapImage.el.classList.remove("transition");
      }, 500);
    };
  
    const setUpCanvas = ({ canvas, w, h, ctx }) => {
      canvas.setAttribute("width", w);
      canvas.setAttribute("height", h || w);
      ctx.imageSmoothingEnabled = false;
    };
  
    const placeTile = ({ tileId, i, offset = 0 }) => {
      const { d } = settings.map;
      const index = tiles.indexOf(tiles.find((t) => t.id === tileId));
      const tileX = (index % 10) * 16;
      const tileY = Math.floor(index / 10) * 16;
      const x = mapX(i) * d;
      const y = mapY(i) * d;
      settings.mapImage.ctx.filter = offset
        ? "sepia(100%) contrast(250%) hue-rotate(270deg)"
        : "sepia(0%) contrast(100%) hue-rotate(0deg)";
      settings.mapImage.ctx.drawImage(
        elements.mapTiles,
        tileX,
        tileY,
        16,
        16,
        x,
        y + offset,
        d,
        d
      );
    };
  
    const placeSquareBlock = (x, y, i) => {
      const block = {
        el: Object.assign(document.createElement("div"), {
          className: "block square"
        }),
        x,
        y,
        state: 0
      };
      setPos(block);
      settings.mapImage.el.appendChild(block.el);
      settings.map.blocks[i] = block;
    };
  
    const placeItems = () => {
      const { d } = settings.map;
      settings.tilesWithNoWalls.forEach((t) => {
        if (randomN(70) === 70) {
          const x = mapX(t) * d;
          const y = mapY(t) * d;
          const type = randomN(20) === 20 ? "strawberry" : "blue";
          const item = {
            el: Object.assign(document.createElement("div"), {
              className: `${type}-donut item`
            }),
            x,
            y,
            type
          };
          setPos(item);
          settings.mapImage.el.appendChild(item.el);
          settings.items[t] = item;
          placeSquareBlock(x, y, t);
        }
      });
    };
  
    const drawWallsAndPositionPlayer = () => {
      const { d, column, row } = settings.map;
      const mapLength = column * row;
      settings.map.data.forEach((t, i) => {
        const checkDir = (dir) =>
          !settings.map.data?.[i + dir] || settings.map.data?.[i + dir] === "$"
            ? "o"
            : "x";
        const criteria = [-column, 1, column, -1].reduce(
          (acc, d) => acc + checkDir(d),
          ""
        );
        const criteria2 = [column + 1, column - 1].reduce(
          (acc, d) => acc + checkDir(d),
          ""
        );
  
        const matchingTile = tiles.find((tile) => {
          return tile.criteria2
            ? tile.criteria.includes(criteria) &&
                tile.criteria2.includes(criteria2)
            : tile.criteria.includes(criteria);
        });
  
        if (t === "c") player.pos = i;
        else if (
          t === "b" ||
          (t === "$" && matchingTile.id === "dot" && randomN(10) === 10)
        ) {
          const x = mapX(i) * d;
          const y = mapY(i) * d;
          placeSquareBlock(x, y, i);
          settings.map.data[i] = "x";
        } else if (t === "$") {
          placeTile({ tileId: matchingTile.id, i });
        }
  
        // round off edges where the walls connect
        if (t === "$") {
          if (
            criteria[0] === "o" &&
            criteria[3] === "x" &&
            checkDir(-(column + 1)) === "o"
          ) {
            placeTile({ tileId: "top_dot", i });
          }
          if (criteria.slice(0, 2) === "ox" && checkDir(-(column - 1)) === "o") {
            placeTile({ tileId: "top_dot_h", i });
          }
          if (criteria.slice(-2) === "ox" && criteria2[1] === "o")
            placeTile({ tileId: "bottom_dot", i });
          if (criteria.slice(1, 3) === "xo" && criteria2[0] === "o")
            placeTile({ tileId: "bottom_dot_h", i });
        }
  
        // update corner
        const d2 = d / 2;
        if (i === 0) {
          settings.mapImage.ctx.clearRect(0, 0, d2, d2);
          placeTile({ tileId: "top_left_corner", i });
        }
        if (i === column - 1) {
          settings.mapImage.ctx.clearRect(column * d - d2, 0, d2, d2);
          placeTile({ tileId: "top_right_corner", i });
        }
        if (i === mapLength - column) {
          settings.mapImage.ctx.clearRect(0, row * d - d2, d2, d2);
          placeTile({ tileId: "bottom_left_corner", i });
        }
        if (i === mapLength - 1) {
          settings.mapImage.ctx.clearRect(column * d - d2, row * d - d2, d2, d2);
          placeTile({ tileId: "bottom_right_corner", i });
        }
      });
    };
  
    const setupMap = () => {
      const { d, column, row } = settings.map;
      const mapSeed = new Array((column * row) / 100).fill("").map(() => {
        const randomKey = randomItem(Object.keys(tileModules));
        return tileModules[randomKey];
      });
      const modulesToDraw = mapSeed.map((seed) => decompress(seed));
  
      // remove dogblob and mouseblob, add place catblob in random position
      const startModuleIndex = randomN(modulesToDraw.length - 1);
      modulesToDraw[startModuleIndex] = modulesToDraw[startModuleIndex].map((t) =>
        ["$", "b"].includes(t) ? t : "x"
      );
      // starting position needs to avoid edge of map modules, and should not be wall position
      const startPos = randomItem(
        modulesToDraw[startModuleIndex]
          .map((t, i) => {
            return (
              t === "x" &&
              ![0, 9].includes(i % 10) &&
              ![0, 9].includes(Math.floor(i / 10)) &&
              i
            );
          })
          .filter((t) => t)
      );
      modulesToDraw[startModuleIndex][startPos] = "c";
  
      settings.map.data = modulesToDraw
        .map((m, mI) => {
          const offset1 = mI * 10;
          const offset2 = column - 10;
          const offset3 = (column * 10 - column) * Math.floor(mI / (column / 10));
          return m.map((t, tI) => {
            return {
              tile: t || "x",
              index: tI + offset1 + offset2 * Math.floor(tI / 10) + offset3
            };
          });
        })
        .flat(1)
        .sort((a, b) => a.index - b.index)
        .map((t) => t.tile);
  
      // resize map and fill ground colour
      settings.mapImage.w = column * d;
      settings.mapImage.h = row * d;
      setUpCanvas(settings.mapImage);
      settings.mapImage.ctx.fillStyle = "#ffe0e9";
      settings.mapImage.ctx.fillRect(
        0,
        0,
        settings.mapImage.w,
        settings.mapImage.h
      );
  
      // add wall around edge
      settings.map.data = settings.map.data.map((t, i) => {
        if ([0, column - 1].includes(mapX(i)) || [0, row - 1].includes(mapY(i)))
          return "$";
        return t;
      });
  
      drawWallsAndPositionPlayer();
  
      settings.tilesWithNoWalls = settings.map.data
        .map((t, i) => t === "x" && !settings.map.blocks[i] && i)
        .filter((t) => t);
      // place items and hide them under blocks
      placeItems();
  
      adjustMapWidthAndHeight();
    };
  
    const defaultPathMemory = (arr) =>
      arr.map(() => {
        return {
          searched: false,
          prev: null
        };
      });
  
    const distance = (a, b) =>
      Math.abs(mapX(a) - mapX(b)) + Math.abs(mapY(a) - mapY(b));
  
    const moveNpcToRandomPos = (npc) => {
      const { column: w } = settings.map;
      const altPos = randomItem(
        [npc.pos + w, npc.pos - w, npc.pos + 1, npc.pos - 1].filter((pos) =>
          noWall({ pos, actor: npc })
        )
      );
      if (altPos) moveNpc({ npc, newPos: altPos });
    };
  
    const chainMotion = ({ npc, route, index }) => {
      const newPos = route[index];
      const { column } = settings.map;
  
      // This bit ensures npc doesn't stay in one place when it get's trapped
      npc.track.push(newPos);
      npc.track = npc.track.slice(-9);
      if (npc.track.filter((cell) => cell === newPos).length > 4) {
        npc.isHunting = false;
        npc.track.length = 0;
  
        const wallCloseBy = [
          npc.pos + 1,
          npc.pos - 1,
          npc.pos + column,
          npc.pos - column
        ].find((p) => settings.map.blocks[p]);
        if (wallCloseBy) {
          clearTimeout(npc.motionTimer);
          npc.el.classList.add("attacking");
          npc.attackDir =
            Math.abs(npc.pos - wallCloseBy) === 1 ? "horizontal" : "vertical";
          npc.el.classList.add(npc.attackDir);
          turnSprite({ actor: npc, newPos: wallCloseBy });
  
          const block = settings.map.blocks[wallCloseBy];
          let attackBlock;
          attackBlock = setInterval(() => {
            block.el.classList.add(blockState[block.state]);
            block.state += 1;
            if (block.state === 5 || !settings.map.blocks[wallCloseBy]) {
              clearInterval(attackBlock);
              npc.el.classList.remove("attacking");
              npc.el.classList.remove(npc.attackDir);
              npc.isHunting = true;
              npc.pause = false;
              triggerNpcMotion(npc);
              if (settings.map.blocks[wallCloseBy]) {
                block.el?.remove();
                settings.map.blocks[wallCloseBy] = null;
              }
            }
          }, 350);
          npc.pause = true;
          return;
        }
      } else if (npc.track.length > 4) {
        npc.isHunting = true;
      }
      if (settings.map.blocks[newPos]) {
        triggerNpcMotion(npc);
        return;
      }
      // ensure npc only moves to valid position, and if they end up in the same pos as another npc,
      // enable them to move to random position
      if (newPos) {
        moveNpc({ npc, newPos });
      } else {
        moveNpcToRandomPos(npc);
        clearTimeout(npc.motionTimer);
        return;
      }
  
      if (isGamePaused() || npc.pos === npc.goal || index + 1 >= route.length) {
        clearTimeout(npc.motionTimer);
      } else if (
        settings.npcs.some(
          (n) => n.id !== npc.id && n.type === "dogBlob" && n.pos === npc.pos
        )
      ) {
        moveNpcToRandomPos(npc);
      } else {
        npc.motionTimer = setTimeout(() => {
          chainMotion({ npc, route, index: index + 1 });
        }, 300);
      }
    };
  
    const selectPath = ({ actor, current }) => {
      actor.route.push(current);
      if (actor.searchMemory[current].prev) {
        selectPath({
          actor,
          current: actor.searchMemory[current].prev
        });
      } else {
        chainMotion({
          npc: actor,
          route: actor.route.reverse(),
          index: 0
        });
      }
    };
  
    const avoidPlayer = (npc) => {
      const { pos: p } = npc;
      const { column: w } = settings.map;
      let motion = [1, -1, w, -w];
      const target = npc.runAwayTarget;
      if (!target) return;
      const checkAndRemoveDir = ({ arr, dir }) => {
        if (
          [...settings.npcs.map((n) => n.pos), target.pos].some((pos) =>
            arr.includes(pos)
          )
        ) {
          motion = motion.filter((option) => option !== dir);
        }
      };
      [
        {
          arr: [p + 1, p + 2, p + 3, p + 1 - w, p + 1 + w],
          dir: 1
        },
        {
          arr: [p - 1, p - 2, p - 3, p - 1 - w, p - 1 + w],
          dir: -1
        },
        {
          arr: [p - w, p - 2 * w, p - 3 * w, p - w - 1, p - w + 1],
          dir: -w
        },
        {
          arr: [p + w, p + 2 * w, p + 3 * w, p + w - 1, p + w + 1],
          dir: w
        }
      ].forEach((config) => checkAndRemoveDir(config));
  
      motion.push(npc.x > target.x ? 1 : -1);
      motion.push(npc.y > target.y ? w : -w);
      motion = motion.filter((pos) => noWall({ pos: npc.pos + pos, actor: npc }));
  
      if (motion.length) moveNpc({ npc, newPos: npc.pos + randomItem(motion) });
    };
  
    const decideNextMove = ({ actor, current, count }) => {
      if (!actor.carryOn || settings.demoMode) return;
      const { pos, goal, searchMemory } = actor;
      const { column: w } = settings.map;
      const possibleDestination = [1, -1, -w, w].map((d) => d + current);
      if (
        possibleDestination.length &&
        !possibleDestination.some((c) => c === goal)
      ) {
        const mapInfo = [];
        possibleDestination.forEach((cell) => {
          if (
            noWall({ pos: cell, ignoreBlock: true, actor }) &&
            !searchMemory[cell].searched &&
            cell !== pos
          ) {
            mapInfo.push({
              cell,
              prev: current,
              distanceToGoal: distance(goal, cell)
            });
          }
        });
        const minValue = Math.min(...mapInfo.map((c) => c.distanceToGoal));
        mapInfo
          .filter((c) => c.distanceToGoal === minValue)
          .forEach((c) => {
            actor.searchMemory[c.cell].searched = true;
            actor.searchMemory[c.cell].prev = current;
            decideNextMove({
              actor,
              current: c.cell,
              count: count + 1
            });
          });
      } else {
        actor.carryOn = false;
        actor.searchMemory[goal].prev = current;
        clearTimeout(actor.motionTimer);
        selectPath({ actor, current: goal });
      }
    };
  
    const triggerNpcMotion = (npc) => {
      if (!settings.isWindowActive || !npc) return;
      clearTimeout(npc.motionTimer);
      const target = npc.chaseTarget;
      if (npc.pause || npc.pos === target?.pos) return;
      npc.searchMemory = defaultPathMemory(settings.map.data);
      npc.carryOn = true;
      if (target) npc.goal = target.pos;
      decideNextMove({ actor: npc, current: npc.pos });
    };
  
    const noWall = ({ pos, ignoreBlock, actor }) => {
      const {
        map: { data, blocks, column: w, d },
        npcs
      } = settings;
      if (!data[pos] || (!ignoreBlock && blocks[pos]) || player.pos === pos)
        return false;
      if (
        actor !== player &&
        npcs.some(
          (npc) =>
            npc.type === "dogBlob" &&
            [
              npc.pos + w,
              npc.pos - w,
              npc.pos + d,
              npc.pos - d,
              npc.pos
            ].includes(pos)
        )
      )
        return false;
      return settings.map.data[pos] !== "$";
    };
  
    const handleWalk = (dir) => {
      settings.cursor.el.classList.add("d-none");
  
      if (player.walkingDirection !== dir) {
        clearInterval(player.walkingInterval);
        player.walkingDirection = dir;
        player.walkingInterval = setInterval(() => {
          player.walkingDirection
            ? walk({ actor: player, dir })
            : clearInterval(player.walkingInterval);
        }, 150);
      }
    };
  
    const getWalkConfig = (dir) => {
      const { column, d } = settings.map;
      return {
        right: { diff: 1, para: "x", dist: -d },
        left: { diff: -1, para: "x", dist: d },
        up: { diff: -column, para: "y", dist: d },
        down: { diff: column, para: "y", dist: -d }
      }[dir];
    };
  
    const hitCheck = () => {
      settings.npcs.forEach((npc) => {
        if (npc.isFleeing && npc.pos === player.pos) {
          catchMouse(npc);
        } else if (npc.isHunting && npc.pos === player.pos) {
          damagePlayer(npc);
        }
      });
    };
  
    const walk = ({ actor, dir }) => {
      if (!dir || isGamePaused()) return;
      const { diff, para, dist } = getWalkConfig(dir);
      turnSprite({ actor: player, diff });
      if (actor === player && noWall({ pos: actor.pos + diff, actor })) {
        settings.mapImage[para] += dist;
        setStyles(settings.mapImage);
        player.pos += diff;
        positionMapImage();
        if (!player.invincible) {
          settings.items.forEach((item, i) => {
            if (item && player.pos === i) {
              item.el.classList.add("sparkle");
              if (item.type === "strawberry" && player.life.point < 4) {
                player.life.point += 1;
                updateLife({ damage: false });
                player.itemScore += 200;
              }
              if (item.type === "blue") {
                updateTime({ difference: 5 });
                player.itemScore += 100;
              }
              setTimeout(() => {
                if (settings.items[i]) {
                  item.el?.remove();
                  settings.items[i] = null;
                }
              }, 1000);
            }
          });
          hitCheck();
        }
      }
      settings.npcs.forEach((npc) => {
        if (!npc.isHunting && !npc.isFleeing) triggerNpcMotion(npc);
      });
    };
  
    const handleKeyAction = (e) => {
      const key = e.key ? e.key.toLowerCase().replace("arrow", "") : e;
      if (e.key && e.key[0] === "A") handleWalk(key);
      if (["top", "right", "bottom", "left"].includes(e)) handleWalk(e);
    };
  
    const placeBlock = () => {
      if (settings.pauseBlockCreation) return;
      const { index } = settings.cursor;
      if (!isGamePaused() && noWall({ pos: index })) {
        const block = {
          el: Object.assign(document.createElement("div"), {
            className: "block"
          }),
          x: settings.drawPos.x,
          y: settings.drawPos.y,
          state: 0
        };
        setPos(block);
        settings.map.blocks[index] = block;
        settings.mapImage.el.appendChild(block.el);
      } else if (settings.map.blocks[index]) {
        const { el } = settings.map.blocks[index];
        el.classList.add("shattered");
        settings.pauseBlockCreation = true;
        setTimeout(() => {
          settings.pauseBlockCreation = false;
          if (el) {
            el?.remove();
            settings.map.blocks[index] = null;
          }
        }, 400);
      }
    };
  
    const moveCursor = (e) => {
      const { d, column } = settings.map;
      const { left, top } = settings.mapImage.canvas.getBoundingClientRect();
      settings.cursor.x =
        nearestN(e.pageX - left - window.scrollX, d) - d + left + window.scrollX;
      settings.cursor.y =
        nearestN(e.pageY - top - window.scrollY, d) - d + top + window.scrollY;
      settings.drawPos = {
        x: settings.cursor.x - left + window.scrollX,
        y: settings.cursor.y - top + window.scrollY
      };
      settings.cursor.index =
        (settings.drawPos.y / d) * column + settings.drawPos.x / d;
      setStyles(settings.cursor);
      settings.cursor.el.classList[
        noWall({ pos: settings.cursor.index }) ? "remove" : "add"
      ]("d-none");
    };
  
    const updateMouseBlobCounter = () => {
      const { no, total } = player.mouseBlobCaught;
      player.mouseBlobCaught.el.innerHTML = `<span>${zero(no)}${no}</span>/${zero(
        total
      )}${total}`;
      if (no === total) endGame({ win: true });
    };
  
    const updateTime = ({ difference }) => {
      if (!settings.time.no) return;
      settings.time.no += difference;
      if (settings.time.no > 99) settings.time.no = 99;
      const { no } = settings.time;
      settings.time.el.innerHTML =
        no < 11
          ? `<span class="${difference > 0 ? "plus" : ""}">${zero(
              no
            )}${no}</span>`
          : `<span class="${difference > 0 ? "plus" : "minus"}">${no}</span>`;
      if (!no) endGame({ win: false });
    };
  
    const turnSprite = ({ actor, diff, newPos = 0 }) => {
      const { column } = settings.map;
      const { pos, sprite: el, d } = actor;
      const pDiff = diff || newPos - pos;
  
      if (pDiff === -1) {
        setPos({ el, x: -d });
        actor.el.classList.remove("flip");
        actor.facingDirection = "left";
      }
      if (pDiff === 1) {
        setPos({ el, x: -d });
        actor.el.classList.add("flip");
        actor.facingDirection = "right";
      }
      if (pDiff === -column) {
        setPos({ el, x: -d * 2 });
        actor.facingDirection = "down";
      }
      if (pDiff === column) {
        setPos({ el, x: 0 });
        actor.facingDirection = "up";
      }
    };
  
    const moveNpc = ({ npc, newPos }) => {
      if (!settings.isWindowActive) return;
      turnSprite({ actor: npc, newPos });
      npc.pos = newPos;
      const { column, d } = settings.map;
      npc.x = Math.floor(newPos % column) * d;
      npc.y = Math.floor(newPos / column) * d;
      setPos(npc);
    };
  
    const createNpcs = () => {
      const dogBlobs = settings.map.data
        .map((t, i) => t === "d" && i)
        .filter((t) => t)
        .map((pos, i) => {
          return {
            ...npcObj,
            ...dogBlobObj,
            id: `dog_${i}`,
            el: Object.assign(document.createElement("div"), {
              id: `dog_${i}`,
              className: "npc sprite-container",
              innerHTML:
                '<div class="overflow-hidden"><div class="dogblob sprite"></div></div>'
            }),
            motionTimer: null,
            searchMemory: null,
            route: [],
            track: [],
            pos
          };
        });
  
      const mouseBlobs = settings.map.data
        .map((t, i) => t === "m" && i)
        .filter((t) => t)
        .map((pos, i) => {
          return {
            ...npcObj,
            ...mouseBlobObj,
            id: `mouse_${i}`,
            el: Object.assign(document.createElement("div"), {
              id: `mouse_${i}`,
              className: "npc sprite-container",
              innerHTML:
                '<div class="overflow-hidden small"><div class="mouseblob sprite"></div></div>'
            }),
            pos
          };
        });
      player.mouseBlobCaught.total = mouseBlobs.length;
      updateMouseBlobCounter();
      settings.npcs = [...dogBlobs, ...mouseBlobs];
    };
  
    const addNpcs = () => {
      settings.npcs.forEach((npc) => {
        const { pos } = npc;
        npc.sprite = npc.el.childNodes[0].childNodes[0];
        moveNpc({ npc, newPos: pos });
        settings.mapImage.el.appendChild(npc.el);
        triggerNpcMotion(npc);
      });
    };
  
    const updateLife = ({ damage }) => {
      if (damage) player.life.point -= 1;
      if (player.life.point >= 0) {
        player.life.markers.forEach((marker, i) => {
          marker.classList[i < player.life.point ? "remove" : "add"]("damage");
        });
      }
    };
  
    const damagePlayer = (npc) => {
      if (isGamePaused()) return;
      npc.el.classList.add("attacking");
      npc.attackDir =
        Math.abs(npc.pos - player.pos) === 1 ||
        ["left", "right"].includes(npc.facingDirection)
          ? "horizontal"
          : "vertical";
      npc.el.classList.add(npc.attackDir);
      turnSprite({ actor: npc, newPos: player.pos });
      setTimeout(() => {
        if (npc.el) {
          npc.el.classList.remove("attacking");
          npc.el.classList.remove(npc.attackDir);
        }
      }, 2000);
  
      updateLife({ damage: true });
      if (!player.life.point) {
        endGame({ win: false });
      } else {
        player.invincible = true;
        player.el.classList.add("blink");
      }
    };
  
    const catchMouse = (npc) => {
      if (npc.pause) return;
      npc.pause = true;
      npc.el.classList.add("sparkle");
      player.mouseBlobCaught.no += 1;
      updateMouseBlobCounter();
      setTimeout(() => {
        if (npc.el) {
          npc.el.remove();
          settings.npcs = settings.npcs.filter((n) => npc.id !== n.id);
        }
      }, 1000);
    };
  
    const drag = (el, pos, x, y) => {
      if (isGamePaused()) return;
      pos.a.x = pos.b.x - x;
      pos.a.y = pos.b.y - y;
      const newX = el.offsetLeft - pos.a.x;
      const newY = el.offsetTop - pos.a.y;
      const distance = distanceBetween({ x: 0, y: 0 }, { x: newX, y: newY });
      if (distance < 35) {
        setPos({ el, x: newX, y: newY });
        control.direction =
          Math.abs(newX) < Math.abs(newY)
            ? newY < 0
              ? "up"
              : "down"
            : newX < 0
            ? "left"
            : "right";
      }
    };
  
    const addTouchAction = (el) => {
      const pos = { a: { x: 0, y: 0 }, b: { x: 0, y: 0 } };
      const onGrab = (e) => {
        pos.b.x = ePos(e, "X");
        pos.b.x = ePos(e, "Y");
        mouse.up(document, "add", onLetGo);
        mouse.move(document, "add", onDrag);
        control.active = true;
        control.timer = setInterval(() => {
          if (control.active) walk({ actor: player, dir: control.direction });
        }, 200);
      };
      const onDrag = (e) => {
        const x = ePos(e, "X");
        const y = ePos(e, "Y");
        drag(el, pos, x, y);
        pos.b.x = x;
        pos.b.y = y;
      };
      const onLetGo = () => {
        mouse.up(document, "remove", onLetGo);
        mouse.move(document, "remove", onDrag);
        el.style.transition = "0.2s";
        setPos({ el, x: 0, y: 0 });
        setTimeout(() => {
          el.style.transition = "0s";
        }, 200);
        clearInterval(control.timer);
        control.active = false;
      };
      mouse.down(el, "add", onGrab);
    };
  
    const triggerIntervals = () => {
      settings.spriteInterval = setInterval(() => {
        if (!settings.isWindowActive) return;
        settings.yOffset = settings.yOffset + 1 === 4 ? 0 : settings.yOffset + 1;
        [player, ...settings.npcs].forEach((actor) => {
          const { sprite: el, d } = actor;
          setPos({ el, y: [0, -d, -(d * 2), -d][settings.yOffset] });
        });
        if (!player.invincible) {
          hitCheck();
        }
      }, 200);
  
      settings.npcMotioninterval = setInterval(() => {
        if (!settings.isWindowActive) return;
        settings.npcs.forEach((npc) => {
          if (npc.isFleeing && !npc.pause) {
            avoidPlayer(npc);
          } else if (npc.isHunting) {
            triggerNpcMotion(npc);
          }
        });
      }, 600);
  
      settings.time.timer = setInterval(() => {
        if (isGamePaused()) return;
        updateTime({ difference: -1 });
        if (player.invincible) {
          player.invincibleCount += 1;
          if (player.invincibleCount > 4) {
            player.invincibleCount = 0;
            player.invincible = false;
            player.el.classList.remove("blink");
          }
        }
      }, 1000);
    };
  
    const endGame = ({ win }) => {
      const {
        time: { no: t },
        score
      } = settings;
      const message = win ? "complete!!" : t ? "game over!" : "time up!";
      const mouseBlobScore = player.mouseBlobCaught.no * 100;
      const lifeScore = player.life.point * 200;
      const timeScore = t * 10;
      const newScore = mouseBlobScore + lifeScore + timeScore + player.itemScore;
      elements.message.innerHTML = `
        <h1 class="uppercase">${message}</h1>
        <h2> - score - </h2>
        <p>carry over: ${score}</p>
        <p>mouseblob: ${mouseBlobScore}</p>
        <p>life bonus: ${lifeScore}</p> 
        <p>time bonus: ${timeScore}</p>
        <p>item bonus: ${player.itemScore}</p>
        <h3 class="uppercase">total: ${newScore + score}</h3>
      `;
  
      settings.score = win ? newScore + score : 0;
      elements.startBtn.innerHTML = "play again";
      elements.startBtn.blur();
      elements.message.classList.remove("hide");
      clearInterval(settings.time.timer);
  
      // add new tileModules
      if (win && !tileModules.block4) {
        extraTileModules.forEach((tileSet) => {
          if (settings.score > tileSet.score) {
            Object.keys(tileSet.modules).forEach((t) => {
              if (!tileModules[t]) tileModules[t] = tileSet.modules[t];
            });
          }
        });
      }
      settings.gameOver = !win;
    };
    const isGamePaused = () => {
      return (
        settings.demoMode ||
        !player.life.point ||
        player.mouseBlobCaught.no === player.mouseBlobCaught.total ||
        !settings.isWindowActive
      );
    };
  
    const start = () => {
      setupMap();
      createNpcs();
      addNpcs();
      settings.time.no = Math.round(settings.map.data.length / 8);
      updateTime({ difference: 0 });
      triggerIntervals();
    };
  
    const updateMapSize = () => {
      if (settings.score > 4000) {
        settings.map.column = 40;
        settings.map.row = 40;
      } else if (settings.score > 3000) {
        settings.map.column = 30;
        settings.map.row = 30;
      } else if (settings.score > 2000) {
        settings.map.column = 40;
        settings.map.row = 10;
      } else if (settings.score > 1000) {
        settings.map.column = 30;
        settings.map.row = 20;
      } else if (settings.score > 500) {
        settings.map.column = 30;
        settings.map.row = 10;
      } else {
        settings.map.column = 20;
        settings.map.row = 20;
      }
  
      if (settings.score > 5000) {
        settings.map.column += [-10, 10, 10, 20][randomN(4) - 1];
        settings.map.row += [-10, 10, 10, 20][randomN(4) - 1];
      }
    };
  
    const restart = (e) => {
      // hide cursor on touch screen
      if (e.pointerType === "touch") {
        settings.cursor.el.classList.add("hide");
      }
      elements.startBtn.blur();
      elements.message.classList.add("hide");
      if (settings.gameOver) {
        player.life.point = 4;
        player.life.markers.forEach((marker) =>
          marker.classList.remove("damage")
        );
        settings.gameOver = false;
      }
      if (settings.demoMode) {
        settings.demoMode = false;
        elements.howToPlay.remove();
      } else {
        updateMapSize();
        clearInterval(settings.spriteInterval);
        clearInterval(settings.npcMotioninterval);
        settings.npcs.forEach((npc) => {
          clearTimeout(npc.motionTimer);
          npc?.el?.remove();
        });
        settings.map.blocks.forEach((block) => block?.el?.remove());
        settings.items.forEach((item) => item?.el?.remove());
        [settings.map.blocks, settings.items, settings.npcs].forEach(
          (data) => (data.length = 0)
        );
        player.mouseBlobCaught.no = 0;
        player.itemScore = 0;
        updateMouseBlobCounter();
        updateLife({ damage: false });
        player.el.classList.remove("blink");
        player.invincible = false;
        start();
      }
    };
  
    window.addEventListener("focus", () => (settings.isWindowActive = true));
    window.addEventListener("blur", () => (settings.isWindowActive = false));
  
    window.addEventListener("resize", adjustMapWidthAndHeight);
    window.addEventListener("mousemove", moveCursor);
    settings.map.el.addEventListener("click", placeBlock);
    window.addEventListener("keyup", () => {
      player.walkingDirection = null;
      clearInterval(player.walkingInterval);
    });
    window.addEventListener("keydown", handleKeyAction);
    elements.startBtn.addEventListener("click", restart);
  
    addTouchAction(control.el);
  
    start();
  }
  
  window.addEventListener("DOMContentLoaded", init);
  